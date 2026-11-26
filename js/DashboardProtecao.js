(() => {
    "use strict";

    const mapFrame = document.getElementById("mapaCidades");
    const map = document.querySelector(".mapa");
    const searchForm = document.querySelector(".buscaMapa");
    const searchInput = document.getElementById("buscaLocal");
    const searchButton = document.querySelector(".botaoBuscar");
    const modalRoot = document.getElementById("modalRootProtecao");

    if (map && mapFrame && searchForm && searchInput && searchButton) {
        setupCitySearch();
    }

    if (modalRoot) {
        setupChannelsModal();
    }

    function setupCitySearch() {
        const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";
        const cache = new Map();
        let lastRequestAt = 0;
        let locations = [];

        const feedback = document.createElement("div");
        feedback.className = "buscaMapaRetorno";
        feedback.innerHTML = `
            <div class="buscaMapaResultados" role="listbox" aria-label="Cidades encontradas" hidden></div>
            <p class="buscaMapaStatus" role="status" aria-live="polite"></p>
        `;
        searchForm.appendChild(feedback);

        const results = feedback.querySelector(".buscaMapaResultados");
        const status = feedback.querySelector(".buscaMapaStatus");
        const locationMarker = document.createElement("span");
        locationMarker.className = "marcadorCidade";
        locationMarker.hidden = true;
        locationMarker.setAttribute("aria-hidden", "true");
        locationMarker.innerHTML = '<i class="fa-solid fa-location-dot"></i>';
        map.appendChild(locationMarker);
        const legend = map.querySelector(".legendaMapa");
        if (legend) {
            legend.innerHTML = '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> Marcadores ilustrativos';
        }

        const normalize = text => String(text || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR")
            .trim();

        const cityName = place => {
            const address = place.address || {};
            return address.city || address.town || address.village ||
                address.municipality || address.county || place.name ||
                place.display_name.split(",")[0];
        };

        const uniqueCities = places => {
            const unique = new Map();

            places.forEach(place => {
                const address = place.address || {};
                const city = cityName(place);
                const stateName = address.state || address.state_district || "";
                const key = normalize(`${city}|${stateName}`);

                if (!unique.has(key)) {
                    unique.set(key, {
                        ...place,
                        cityName: city,
                        stateName,
                        label: [city, stateName].filter(Boolean).join(" — ")
                    });
                }
            });

            return [...unique.values()];
        };

        const setStatus = (message, type = "") => {
            status.textContent = message;
            status.className = `buscaMapaStatus${type ? ` ${type}` : ""}`;
        };

        const updateMap = place => {
            const latitude = Number(place.lat);
            const longitude = Number(place.lon);

            if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
                setStatus("Não foi possível posicionar esta cidade no mapa.", "erro");
                return;
            }

            const latitudeSpan = 0.24;
            const longitudeSpan = 0.28 / Math.max(0.25, Math.cos(latitude * Math.PI / 180));
            const bbox = [
                longitude - longitudeSpan / 2,
                latitude - latitudeSpan / 2,
                longitude + longitudeSpan / 2,
                latitude + latitudeSpan / 2
            ].map(value => value.toFixed(6)).join(",");

            mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${latitude}%2C${longitude}`;
            mapFrame.title = `Mapa de ${place.label || place.display_name}`;
            map.classList.add("temPesquisa");
            locationMarker.hidden = false;
            setStatus(`Mapa centralizado em ${place.label || place.display_name}.`, "sucesso");
        };

        const showChoices = places => {
            locations = places;
            results.replaceChildren();
            places.forEach((place, index) => {
                const option = document.createElement("button");
                option.type = "button";
                option.className = "buscaMapaOpcao";
                option.setAttribute("role", "option");
                option.dataset.locationIndex = String(index);
                option.textContent = place.label || place.display_name;
                results.appendChild(option);
            });
            results.hidden = false;
            setStatus("Encontramos cidades com nomes parecidos. Selecione a correta.");
        };

        const geocode = async query => {
            const cacheKey = normalize(query);
            if (cache.has(cacheKey)) return cache.get(cacheKey);

            const wait = Math.max(0, 1100 - (Date.now() - lastRequestAt));
            if (wait) await new Promise(resolve => window.setTimeout(resolve, wait));

            const params = new URLSearchParams({
                q: `${query}, Brasil`,
                format: "jsonv2",
                addressdetails: "1",
                countrycodes: "br",
                featureType: "city",
                limit: "8",
                "accept-language": "pt-BR"
            });

            lastRequestAt = Date.now();
            const response = await fetch(`${NOMINATIM_SEARCH_URL}?${params}`, {
                headers: { Accept: "application/json" },
                referrerPolicy: "strict-origin-when-cross-origin"
            });

            if (!response.ok) {
                throw new Error(`Geocodificação indisponível (${response.status}).`);
            }

            const places = uniqueCities(await response.json());
            cache.set(cacheKey, places);
            return places;
        };

        searchForm.addEventListener("submit", async event => {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (!query) {
                setStatus("Digite o nome de uma cidade para pesquisar.", "erro");
                searchInput.focus();
                return;
            }

            results.hidden = true;
            results.replaceChildren();
            setStatus("Pesquisando cidade...");
            searchButton.disabled = true;
            searchButton.setAttribute("aria-busy", "true");

            try {
                const places = await geocode(query);
                if (!places.length) {
                    setStatus("Não encontramos essa cidade no Brasil. Confira a grafia ou inclua o estado.", "erro");
                } else if (places.length === 1) {
                    updateMap(places[0]);
                } else {
                    showChoices(places);
                }
            } catch (error) {
                console.error("Falha ao pesquisar cidade no mapa:", error);
                setStatus("Não foi possível pesquisar agora. Verifique sua conexão e tente novamente.", "erro");
            } finally {
                searchButton.disabled = false;
                searchButton.removeAttribute("aria-busy");
            }
        });

        results.addEventListener("click", event => {
            const option = event.target.closest("[data-location-index]");
            if (!option) return;

            const place = locations[Number(option.dataset.locationIndex)];
            if (!place) return;

            results.hidden = true;
            updateMap(place);
        });

        searchInput.addEventListener("input", () => {
            if (results.hidden) return;
            results.hidden = true;
            locations = [];
        });

        const attribution = document.createElement("span");
        attribution.className = "atribuicaoMapa";
        attribution.innerHTML = 'Geocodificação: <a href="https://nominatim.org/" target="_blank" rel="noopener noreferrer">Nominatim</a> · Dados © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>';
        document.querySelector(".notaMapa")?.append(" ", attribution);
    }

    function setupChannelsModal() {
        let activeOverlay = null;
        let previousFocus = null;

        const closeModal = () => {
            if (!activeOverlay) return;
            const overlay = activeOverlay;
            activeOverlay = null;
            overlay.classList.remove("aberto");
            document.body.classList.remove("modalProtecaoAberto");
            window.setTimeout(() => overlay.remove(), 250);
            if (previousFocus?.isConnected) previousFocus.focus();
        };

        const openModal = trigger => {
            closeModal();
            previousFocus = trigger;

            const overlay = document.createElement("div");
            overlay.className = "modalProtecaoOverlay";
            overlay.innerHTML = `
                <section class="modalCanais" role="dialog" aria-modal="true" aria-labelledby="tituloCanaisProtecao">
                    <header class="modalCanaisTopo">
                        <div>
                            <span class="modalCanaisEyebrow">ELO D'ELAS · PROTEÇÃO</span>
                            <h2 id="tituloCanaisProtecao">Canais oficiais de apoio e proteção</h2>
                            <p>Informações para buscar atendimento, orientação e serviços públicos. A disponibilidade de serviços presenciais varia conforme o município.</p>
                        </div>
                        <button type="button" class="fecharModalCanais" data-fechar-canais aria-label="Fechar janela"><i class="fa-solid fa-xmark"></i></button>
                    </header>
                    <div class="modalCanaisCorpo">
                        <section class="grupoCanais" aria-labelledby="tituloEmergenciaCanais">
                            <div class="tituloGrupoCanais"><span class="iconeGrupoCanais"><i class="fa-solid fa-shield-halved"></i></span><div><h3 id="tituloEmergenciaCanais">Emergência e segurança</h3><p>Acione os serviços adequados à situação.</p></div></div>
                            <div class="gradeCanais">
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-triangle-exclamation"></i></div><div class="canalInfo"><h4>Polícia Militar</h4><strong class="numeroCanal">190</strong><p>Violência em andamento, crime ou risco imediato à segurança.</p><a class="acaoCanal" href="tel:190"><i class="fa-solid fa-phone"></i> Ligar</a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-building-shield"></i></div><div class="canalInfo"><h4>Polícia Civil</h4><strong class="numeroCanal">197</strong><p>Canal da Polícia Civil. Disponibilidade e finalidade podem variar conforme o estado.</p><a class="acaoCanal" href="tel:197"><i class="fa-solid fa-phone"></i> Ligar</a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-fire-extinguisher"></i></div><div class="canalInfo"><h4>Corpo de Bombeiros</h4><strong class="numeroCanal">193</strong><p>Incêndios, salvamentos, resgates e outras ocorrências atendidas pelos bombeiros.</p><a class="acaoCanal" href="tel:193"><i class="fa-solid fa-phone"></i> Ligar</a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-truck-medical"></i></div><div class="canalInfo"><h4>SAMU</h4><strong class="numeroCanal">192</strong><p>Urgências e emergências médicas com necessidade de atendimento pré-hospitalar.</p><a class="acaoCanal" href="tel:192"><i class="fa-solid fa-phone"></i> Ligar</a></div></article>
                            </div>
                        </section>

                        <section class="canalMulher" aria-labelledby="tituloLigue180">
                            <div class="canalMulherSelo"><i class="fa-solid fa-heart"></i> ATENDIMENTO À MULHER</div>
                            <div class="canalMulherConteudo">
                                <div><h3 id="tituloLigue180">Central de Atendimento à Mulher</h3><strong class="numeroMulher">180</strong><p>Gratuito e disponível 24 horas, todos os dias. Oferece orientação sobre direitos, registra e encaminha denúncias e informa serviços da rede de atendimento.</p></div>
                                <div class="contatos180">
                                    <a href="tel:180"><i class="fa-solid fa-phone"></i><span><small>Telefone</small><strong>180</strong></span></a>
                                    <a href="https://wa.me/556196100180" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i><span><small>WhatsApp</small><strong>(61) 9610-0180</strong></span></a>
                                    <a href="mailto:central180@mulheres.gov.br"><i class="fa-regular fa-envelope"></i><span><small>E-mail</small><strong>central180@mulheres.gov.br</strong></span></a>
                                    <a class="acaoCanal acaoCanalClara" href="https://www.gov.br/mulheres/pt-br/ligue180" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Página oficial do Ligue 180</a>
                                </div>
                            </div>
                            <p class="aviso180"><i class="fa-solid fa-circle-info"></i> Em risco imediato ou violência acontecendo agora, ligue 190.</p>
                        </section>

                        <section class="grupoCanais" aria-labelledby="tituloAssistenciaCanais">
                            <div class="tituloGrupoCanais"><span class="iconeGrupoCanais"><i class="fa-solid fa-hands-holding-circle"></i></span><div><h3 id="tituloAssistenciaCanais">Assistência social e acolhimento</h3><p>Orientação e acesso à rede pública do seu município.</p></div></div>
                            <div class="gradeCanais gradeCanaisSocial">
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-house-user"></i></div><div class="canalInfo"><h4>CRAS</h4><p>Porta de entrada da Assistência Social. Oferece orientação e acesso a serviços, benefícios e programas sociais.</p><a class="acaoCanal" href="https://www.gov.br/mds/pt-br/privados/cadunico/consulta-cidadao/atendimento-mops" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> Localizar no MOPS</a><a class="linkCanalTexto" href="https://www.gov.br/mds/pt-br/acoes-e-programas/SUAS/unidades-de-atendimento/centro-de-referencia-de-assistencia-social-cras" target="_blank" rel="noopener noreferrer">Sobre o CRAS <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-people-roof"></i></div><div class="canalInfo"><h4>CREAS</h4><p>Atendimento especializado a pessoas e famílias que vivenciam violência ou violações de direitos.</p><a class="acaoCanal" href="https://www.gov.br/pt-br/servicos/acessar-creas-centro-de-referencia-especializado-em-assistencia-social" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Saiba mais</a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-people-group"></i></div><div class="canalInfo"><h4>Casa da Mulher Brasileira e CRAM</h4><p>Espaços de acolhimento e atendimento especializado. Serviços e unidades disponíveis variam por localidade.</p><a class="acaoCanal" href="https://www.gov.br/mulheres/pt-br/ligue180" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Consultar rede de atendimento</a></div></article>
                            </div>
                        </section>

                        <section class="grupoCanais" aria-labelledby="tituloOutrosCanais">
                            <div class="tituloGrupoCanais"><span class="iconeGrupoCanais"><i class="fa-solid fa-scale-balanced"></i></span><div><h3 id="tituloOutrosCanais">Outros canais públicos</h3><p>Orientação sobre direitos e acesso a informações oficiais.</p></div></div>
                            <div class="gradeCanais gradeCanaisSocial">
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-phone-volume"></i></div><div class="canalInfo"><h4>Disque Direitos Humanos</h4><strong class="numeroCanal">100</strong><p>Recebe denúncias de violações de direitos humanos e encaminha aos órgãos competentes. Atendimento gratuito, 24 horas.</p><a class="acaoCanal" href="tel:100"><i class="fa-solid fa-phone"></i> Ligar</a><a class="linkCanalTexto" href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" target="_blank" rel="noopener noreferrer">Acessar serviço oficial <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-book-open"></i></div><div class="canalInfo"><h4>Lei Maria da Penha</h4><p>Consulte o texto da lei e informações sobre os direitos e mecanismos de proteção.</p><a class="acaoCanal" href="https://www.gov.br/mdh/pt-br/navegue-por-temas/politicas-para-mulheres/arquivo/sobre/a-secretaria/legislacao-1/lei-maria-da-penha/lei-maria-da-penha" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Acessar lei</a></div></article>
                                <article class="cardCanal"><div class="iconeCanal"><i class="fa-solid fa-landmark"></i></div><div class="canalInfo"><h4>Ministério das Mulheres</h4><p>Portal oficial com políticas públicas, notícias e orientações para mulheres.</p><a class="acaoCanal" href="https://www.gov.br/mulheres/pt-br" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Acessar portal</a></div></article>
                            </div>
                        </section>
                    </div>
                </section>
            `;

            modalRoot.appendChild(overlay);
            activeOverlay = overlay;
            document.body.classList.add("modalProtecaoAberto");

            overlay.addEventListener("click", event => {
                if (event.target === overlay || event.target.closest("[data-fechar-canais]")) {
                    closeModal();
                }
            });

            window.requestAnimationFrame(() => {
                overlay.classList.add("aberto");
                overlay.querySelector("[data-fechar-canais]").focus();
            });
        };

        document.addEventListener("click", event => {
            const trigger = event.target.closest("[data-open-canais]");
            if (trigger) {
                event.preventDefault();
                openModal(trigger);
            }
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && activeOverlay) closeModal();
        });
    }
})();
