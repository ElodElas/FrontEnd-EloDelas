

(() => {
    "use strict";

    const STORAGE_KEY = "eloComunidade_estado_v1";
    const root = document.getElementById("modalRoot");

    if (!root) {
        console.error("Dashboard Comunidade: elemento #modalRoot não encontrado.");
        return;
    }

    const currentUser = {
        id: "ana-beatriz",
        name: "Ana Beatriz",
        profession: "Psicóloga",
        initial: "A"
    };

    const seed = {
        posts: [
            {
                id: "p1",
                author: "Mariana Costa",
                profession: "Professora",
                showProfession: true,
                anonymous: false,
                title: "Como lidar com a ansiedade?",
                text: "Tenho sentido muita ansiedade ultimamente, principalmente com tantas responsabilidades. O que costuma ajudar vocês nesses momentos?",
                image: "",
                likes: 87,
                liked: false,
                date: "há 2h",
                comments: [
                    {
                        author: "Juliana",
                        text: "Tente respeitar seu ritmo. Pequenas pausas fazem diferença!"
                    },
                    {
                        author: "Camila",
                        text: "Terapia e conversar com pessoas de confiança me ajudam bastante."
                    }
                ]
            },
            {
                id: "p2",
                author: "Juliana Mendes",
                profession: "Designer",
                showProfession: true,
                anonymous: false,
                title: "Dicas de estudo e foco ♡",
                text: "Compartilhando algumas dicas que me ajudam a manter a organização: dividir tarefas em etapas, fazer pausas e comemorar pequenas conquistas.",
                image: "",
                likes: 73,
                liked: false,
                date: "há 3h",
                comments: [
                    {
                        author: "Bia",
                        text: "Amei as dicas!"
                    }
                ]
            },
            {
                id: "p3",
                author: "Participante anônima",
                profession: "",
                showProfession: false,
                anonymous: true,
                title: "Um recomeço é possível",
                text: "Às vezes, dar o primeiro passo parece difícil. Hoje quero lembrar que não precisamos resolver tudo de uma vez.",
                image: "",
                likes: 42,
                liked: false,
                date: "ontem",
                comments: []
            }
        ],

        groups: [
            {
                id: "tecnologia",
                name: "Mulheres na Tecnologia",
                category: "Carreira e aprendizado",
                description: "Um espaço para compartilhar conhecimentos, tirar dúvidas, divulgar oportunidades e incentivar mais mulheres na tecnologia.",
                members: 2500,
                icon: "fa-laptop-code",
                joined: false,
                rules: [
                    "Respeite a trajetória de cada participante.",
                    "Compartilhe dúvidas e conhecimentos com acolhimento.",
                    "Não divulgue dados pessoais de outras integrantes."
                ],
                messages: [
                    {
                        author: "Camila Rodrigues",
                        initial: "C",
                        text: "Meninas, alguém aqui está estudando JavaScript? Estou começando e queria trocar algumas dicas!",
                        time: "09:15",
                        own: false
                    },
                    {
                        author: "Juliana Mendes",
                        initial: "J",
                        text: "Eu estou! Recomendo praticar bastante com pequenos projetos. Ajuda muito a fixar o conteúdo.",
                        time: "09:18",
                        own: false
                    },
                    {
                        author: "Fernanda Lima",
                        initial: "F",
                        text: "Também estou estudando! Comecei criando uma página simples e depois fui adicionando funcionalidades.",
                        time: "09:22",
                        own: false
                    },
                    {
                        author: "Camila Rodrigues",
                        initial: "C",
                        text: "Gostei da ideia! Vou tentar fazer isso no meu próximo projeto. Obrigada, meninas! ❤️",
                        time: "09:26",
                        own: false
                    },
                    {
                        author: "Mariana Alves",
                        initial: "M",
                        text: "Alguém conhece cursos gratuitos de programação para iniciantes?",
                        time: "09:34",
                        own: false
                    },
                    {
                        author: "Juliana Mendes",
                        initial: "J",
                        text: "Existem várias opções! Vale pesquisar também pelas formações oferecidas por instituições de tecnologia.",
                        time: "09:38",
                        own: false
                    }
                ]
            },
            {
                id: "bemestar",
                name: "Autocuidado e Bem-estar",
                category: "Saúde e qualidade de vida",
                description: "Conversas sobre autocuidado, saúde emocional, limites, autoestima e hábitos que tornam a rotina mais leve.",
                members: 1800,
                icon: "fa-heart",
                joined: true,
                rules: [
                    "Acolha diferentes experiências.",
                    "Evite julgamentos e diagnósticos.",
                    "Respeite a privacidade das participantes."
                ],
                messages: [
                    {
                        author: "Beatriz Santos",
                        initial: "B",
                        text: "Oi, meninas! Como vocês conseguem reservar um tempinho para cuidar de si mesmas durante a semana?",
                        time: "10:02",
                        own: false
                    },
                    {
                        author: "Larissa Oliveira",
                        initial: "L",
                        text: "Tenho tentado começar o dia com calma, mesmo que sejam só 10 minutinhos para tomar café e organizar meus pensamentos.",
                        time: "10:06",
                        own: false
                    },
                    {
                        author: "Ana Beatriz",
                        initial: "A",
                        text: "Acho muito importante isso! Às vezes, pequenos momentos já fazem diferença na rotina.",
                        time: "10:11",
                        own: true
                    },
                    {
                        author: "Beatriz Santos",
                        initial: "B",
                        text: "Verdade! Também estou aprendendo que descansar não significa estar sendo improdutiva.",
                        time: "10:15",
                        own: false
                    },
                    {
                        author: "Mariana Costa",
                        initial: "M",
                        text: "Precisava ler isso hoje. Às vezes me cobro demais e esqueço de respeitar meus próprios limites.",
                        time: "10:19",
                        own: false
                    },
                    {
                        author: "Larissa Oliveira",
                        initial: "L",
                        text: "Vamos lembrar umas às outras que também merecemos cuidado. 💗",
                        time: "10:23",
                        own: false
                    }
                ]
            },
            {
                id: "carreira",
                name: "Carreira e Oportunidades",
                category: "Desenvolvimento profissional",
                description: "Conecte-se com mulheres que compartilham vagas, cursos, experiências profissionais e dicas para crescer na carreira.",
                members: 1900,
                icon: "fa-briefcase",
                joined: false,
                rules: [
                    "Confira a veracidade das oportunidades.",
                    "Não solicite pagamentos para indicar vagas.",
                    "Mantenha o respeito nas conversas."
                ],
                messages: [
                    {
                        author: "Fernanda Lima",
                        initial: "F",
                        text: "Bom dia! Estou procurando minha primeira oportunidade na área administrativa. Alguém tem alguma dica?",
                        time: "08:40",
                        own: false
                    },
                    {
                        author: "Patrícia Souza",
                        initial: "P",
                        text: "Uma dica é manter o currículo atualizado e destacar cursos e experiências que tenham relação com a vaga.",
                        time: "08:45",
                        own: false
                    },
                    {
                        author: "Juliana Mendes",
                        initial: "J",
                        text: "Também vale pesquisar vagas de estágio e jovem aprendiz. São ótimas portas de entrada!",
                        time: "08:51",
                        own: false
                    },
                    {
                        author: "Fernanda Lima",
                        initial: "F",
                        text: "Obrigada pelas dicas! Vou revisar meu currículo hoje mesmo.",
                        time: "08:55",
                        own: false
                    },
                    {
                        author: "Mariana Alves",
                        initial: "M",
                        text: "Meninas, encontrei uma plataforma com cursos gratuitos de Excel e comunicação. Pode ajudar quem está começando!",
                        time: "09:03",
                        own: false
                    },
                    {
                        author: "Patrícia Souza",
                        initial: "P",
                        text: "Muito bom compartilhar esse tipo de oportunidade por aqui. Uma ajuda pode fazer diferença! 💗",
                        time: "09:08",
                        own: false
                    }
                ]
            }
        ],

        events: [
            {
                id: "roda",
                day: "28",
                month: "NOV",
                date: "28 de novembro de 2026",
                title: "Roda de Conversa: Saúde Mental",
                time: "19h às 21h",
                format: "Online",
                place: "Sala virtual Elo d'Elas",
                description: "Um encontro acolhedor para conversar sobre sentimentos, desafios, limites e autocuidado. Você poderá participar no seu ritmo, ouvir outras experiências e compartilhar se desejar.",
                vacancies: 40,
                registered: false
            },
            {
                id: "carreira",
                day: "04",
                month: "DEZ",
                date: "4 de dezembro de 2026",
                title: "Mulheres e caminhos profissionais",
                time: "18h30 às 20h",
                format: "Online",
                place: "Sala virtual Elo d'Elas",
                description: "Um bate-papo sobre planejamento de carreira, primeiras oportunidades, desenvolvimento de habilidades e networking.",
                vacancies: 60,
                registered: false
            },
            {
                id: "criatividade",
                day: "12",
                month: "DEZ",
                date: "12 de dezembro de 2026",
                title: "Oficina: criatividade e propósito",
                time: "10h às 12h",
                format: "Presencial",
                place: "Local a confirmar",
                description: "Uma oficina colaborativa para explorar ideias, reconhecer habilidades e transformar interesses em pequenos projetos.",
                vacancies: 25,
                registered: false
            }
        ]
    };

    let state = loadState();
    let activeOverlay = null;
    let previousFocus = null;
    let imageDraft = "";


    function loadState() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

            if (!saved) {
                return structuredClone(seed);
            }

            const savedGroups = Array.isArray(saved.groups)
                ? saved.groups
                : [];

            const groups = seed.groups.map(defaultGroup => {
                const savedGroup = savedGroups.find(
                    group => group.id === defaultGroup.id
                );

                if (!savedGroup) {
                    return structuredClone(defaultGroup);
                }

                return {
                    ...defaultGroup,
                    ...savedGroup,
                    rules: Array.isArray(savedGroup.rules)
                        ? savedGroup.rules
                        : [...defaultGroup.rules],

                    messages: Array.isArray(savedGroup.messages)
                        ? [...defaultGroup.messages, ...savedGroup.messages.filter(
                            message => !defaultGroup.messages.some(
                                original =>
                                    original.author === message.author &&
                                    original.text === message.text &&
                                    original.time === message.time
                            )
                        )]
                        : structuredClone(defaultGroup.messages)
                };
            });

            return {
                ...structuredClone(seed),
                ...saved,
                groups,
                posts: Array.isArray(saved.posts)
                    ? saved.posts
                    : structuredClone(seed.posts),
                events: Array.isArray(saved.events)
                    ? saved.events
                    : structuredClone(seed.events)
            };

        } catch (error) {
            console.warn("Não foi possível recuperar os dados da comunidade.", error);
            return structuredClone(seed);
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
            console.warn("Não foi possível salvar os dados da comunidade.", error);
        }
    }


    function escapeHTML(value = "") {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char]));
    }

    function icon(name) {
        return `<i class="fa-solid ${name}" aria-hidden="true"></i>`;
    }

    function createModal({ title, subtitle = "", size = "" }) {
        closeModal(false);

        previousFocus = document.activeElement;

        const overlay = document.createElement("div");
        overlay.className = "modalOverlay aberto";

        overlay.innerHTML = `
            <section class="modalJanela ${size}"
                role="dialog"
                aria-modal="true"
                aria-labelledby="communityModalTitle"
                tabindex="-1">

                <header class="modalTopo">
                    <div>
                        <span class="modalEyebrow">ELO D'ELAS · COMUNIDADE</span>
                        <h2 id="communityModalTitle">${escapeHTML(title)}</h2>
                        ${subtitle ? `<p>${escapeHTML(subtitle)}</p>` : ""}
                    </div>

                    <button type="button"
                        class="modalFechar"
                        data-close-modal
                        aria-label="Fechar janela">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </header>

                <div class="modalCorpo"></div>
            </section>
        `;

        root.appendChild(overlay);

        document.body.classList.add("modalAberto");

        activeOverlay = overlay;

        overlay.querySelector(".modalJanela").focus();

        return overlay.querySelector(".modalCorpo");
    }

    function closeModal(restore = true) {
        if (activeOverlay) {
            activeOverlay.remove();
        }

        activeOverlay = null;

        document.body.classList.remove("modalAberto");

        if (
            restore &&
            previousFocus &&
            typeof previousFocus.focus === "function"
        ) {
            previousFocus.focus();
        }
    }

    function emptyState(title, message) {
        return `
            <div class="comunidadeVazio">
                <i class="fa-regular fa-comments"></i>
                <h3>${escapeHTML(title)}</h3>
                <p>${escapeHTML(message)}</p>
            </div>
        `;
    }


    function renderPost(post, detailed = false) {
        const author = post.anonymous
            ? "Participante anônima"
            : post.author;
        const isOwnPost = post.ownerId === currentUser.id ||
            (!post.anonymous && post.author === currentUser.name);

        const profession =
            !post.anonymous &&
            post.showProfession &&
            post.profession
                ? `<span class="postProfissao">${escapeHTML(post.profession)}</span>`
                : "";

        return `
            <article class="postCard${isOwnPost ? " donoPost" : ""}" data-post-id="${escapeHTML(post.id)}">

                ${isOwnPost
                    ? `<button type="button"
                        class="postExcluir"
                        data-delete-post="${escapeHTML(post.id)}"
                        aria-label="Excluir minha publicação"
                        title="Excluir publicação">
                        ${icon("fa-trash")}<span>Excluir</span>
                    </button>`
                    : ""}

                <div class="postAutor">

                    <span class="postAvatar">
                        ${post.anonymous
                            ? icon("fa-user-secret")
                            : escapeHTML(author.charAt(0).toUpperCase())}
                    </span>

                    <div>
                        <strong>${escapeHTML(author)}</strong>
                        ${profession}
                        <small>${escapeHTML(post.date || "agora")}</small>
                    </div>

                    <span class="postPrivacidade">
                        ${post.anonymous
                            ? icon("fa-user-shield") + " Anônimo"
                            : ""}
                    </span>

                </div>

                ${post.title
                    ? `<h3>${escapeHTML(post.title)}</h3>`
                    : ""}

                <p class="postTexto">${escapeHTML(post.text)}</p>

                ${post.image
                    ? `<img class="postImagem"
                        src="${escapeHTML(post.image)}"
                        alt="Imagem compartilhada na publicação">`
                    : ""}

                <div class="postAcoes">

                    <button type="button"
                        class="postAcao ${post.liked ? "ativo" : ""}"
                        data-like-post="${escapeHTML(post.id)}"
                        aria-pressed="${!!post.liked}">
                        ${icon("fa-heart")}
                        <span>${post.likes}</span>
                        Curtir
                    </button>

                    <button type="button"
                        class="postAcao"
                        data-show-comments="${escapeHTML(post.id)}">
                        ${icon("fa-comment")}
                        <span>${post.comments.length}</span>
                        Comentários
                    </button>

                </div>

                ${detailed ? renderComments(post) : ""}

            </article>
        `;
    }

    function renderComments(post) {
        return `
            <div class="postComentarios">

                <h4>Comentários (${post.comments.length})</h4>

                ${post.comments.length
                    ? post.comments.map(c => `
                        <div class="comentarioItem">
                            <strong>${escapeHTML(c.author)}</strong>
                            <p>${escapeHTML(c.text)}</p>
                        </div>
                    `).join("")
                    : `
                        <p class="comentarioVazio">
                            Ainda não há comentários. Que tal iniciar a conversa?
                        </p>
                    `
                }

                <form class="formComentario"
                    data-comment-form="${escapeHTML(post.id)}">

                    <input name="comment"
                        type="text"
                        maxlength="500"
                        placeholder="Escreva um comentário..."
                        required>

                    <button type="submit" aria-label="Enviar comentário">
                        ${icon("fa-paper-plane")}
                    </button>

                </form>

            </div>
        `;
    }

    function openForum() {
        const body = createModal({
            title: "Fórum da Comunidade",
            subtitle: "Um espaço para conversar, compartilhar experiências e crescer juntas.",
            size: "modalJanelaAmpla"
        });

        body.innerHTML = `
            <div class="forumFerramentas">

                <label class="modalBusca">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search"
                        id="communityPostSearch"
                        placeholder="Buscar publicações...">
                </label>

                <button type="button"
                    class="modalBotao"
                    data-open-community="create">
                    ${icon("fa-pen-to-square")}
                    Criar publicação
                </button>

            </div>

            <div class="forumLista" id="forumLista">
                ${state.posts.length
                    ? state.posts.map(p => renderPost(p)).join("")
                    : emptyState(
                        "Ainda não há publicações",
                        "Seja a primeira a compartilhar uma experiência."
                    )
                }
            </div>
        `;

        body.querySelector("#communityPostSearch")
            .addEventListener("input", e => {

                const term = e.target.value.toLocaleLowerCase("pt-BR");

                body.querySelector("#forumLista").innerHTML =
                    state.posts
                        .filter(p =>
                            `${p.title} ${p.text} ${p.anonymous ? "anônima" : p.author}`
                                .toLocaleLowerCase("pt-BR")
                                .includes(term)
                        )
                        .map(p => renderPost(p))
                        .join("")
                    || emptyState(
                        "Nenhuma publicação encontrada",
                        "Tente buscar por outro assunto."
                    );
            });
    }

    function openCreatePost() {
        imageDraft = "";

        const body = createModal({
            title: "Criar publicação",
            subtitle: "Compartilhe uma ideia, experiência ou conquista com a comunidade."
        });

        body.innerHTML = `
            <form id="createCommunityPost" class="formPublicacao">

                <label>
                    Título da publicação
                    <input name="title"
                        type="text"
                        maxlength="100"
                        placeholder="Sobre o que você quer conversar?"
                        required>
                </label>

                <label>
                    Sua mensagem
                    <textarea name="text"
                        rows="5"
                        maxlength="3000"
                        placeholder="Escreva sua publicação..."
                        required></textarea>

                    <small class="campoAjuda">
                        Compartilhe apenas o que se sentir confortável em dividir.
                    </small>
                </label>

                <div class="uploadPublicacao">

                    <label for="postImageInput">
                        ${icon("fa-image")}
                        Adicionar uma foto
                    </label>

                    <input id="postImageInput"
                        type="file"
                        accept="image/*">

                    <div id="postImagePreview"
                        class="postPreviewImagem"></div>

                </div>

                <fieldset class="privacidadePublicacao">

                    <legend>Como deseja aparecer?</legend>

                    <label class="opcaoPrivacidade">
                        <input type="checkbox"
                            name="anonymous"
                            id="postAnonymous">

                        <span>
                            <strong>Publicar anonimamente</strong>
                            <small>Seu nome e sua profissão não serão exibidos.</small>
                        </span>
                    </label>

                    <label class="opcaoPrivacidade"
                        id="hideProfessionOption">

                        <input type="checkbox"
                            name="hideProfession"
                            id="postHideProfession">

                        <span>
                            <strong>Ocultar minha profissão</strong>
                            <small>Seu nome continuará visível, mas sem a profissão.</small>
                        </span>

                    </label>

                </fieldset>

                <div class="avisoPrivacidade">
                    ${icon("fa-shield-heart")}
                    Confira suas escolhas antes de publicar. Evite incluir dados pessoais no texto ou na imagem.
                </div>

                <div class="modalRodapeAcoes">

                    <button type="button"
                        class="modalBotao modalBotaoSecundario"
                        data-close-modal>
                        Cancelar
                    </button>

                    <button type="submit" class="modalBotao">
                        Publicar ${icon("fa-arrow-right")}
                    </button>

                </div>

            </form>
        `;

        const anonymous = body.querySelector("#postAnonymous");
        const hide = body.querySelector("#postHideProfession");
        const hideWrap = body.querySelector("#hideProfessionOption");

        anonymous.addEventListener("change", () => {
            hideWrap.classList.toggle("desabilitada", anonymous.checked);

            if (anonymous.checked) {
                hide.checked = true;
            }
        });

        body.querySelector("#postImageInput")
            .addEventListener("change", e => {

                const file = e.target.files && e.target.files[0];

                if (!file) return;

                if (!file.type.startsWith("image/")) {
                    alert("Selecione um arquivo de imagem.");
                    e.target.value = "";
                    return;
                }

                if (file.size > 5 * 1024 * 1024) {
                    alert("Escolha uma imagem de até 5 MB.");
                    e.target.value = "";
                    return;
                }

                const reader = new FileReader();

                reader.onload = () => {
                    imageDraft = reader.result;

                    body.querySelector("#postImagePreview").innerHTML = `
                        <img src="${imageDraft}"
                            alt="Pré-visualização da imagem">

                        <button type="button"
                            data-remove-image
                            aria-label="Remover imagem">
                            ${icon("fa-trash")}
                        </button>
                    `;
                };

                reader.readAsDataURL(file);
            });

        body.addEventListener("click", e => {
            if (e.target.closest("[data-remove-image]")) {
                imageDraft = "";

                body.querySelector("#postImageInput").value = "";
                body.querySelector("#postImagePreview").innerHTML = "";
            }
        });

        body.querySelector("#createCommunityPost")
            .addEventListener("submit", e => {

                e.preventDefault();

                const form = e.currentTarget;
                const data = new FormData(form);
                const anon = data.get("anonymous") === "on";

                state.posts.unshift({
                    id: `post-${Date.now()}`,
                    ownerId: currentUser.id,
                    author: anon ? "Participante anônima" : currentUser.name,
                    profession: anon ? "" : currentUser.profession,
                    showProfession: !anon && data.get("hideProfession") !== "on",
                    anonymous: anon,
                    title: String(data.get("title")).trim(),
                    text: String(data.get("text")).trim(),
                    image: imageDraft,
                    likes: 0,
                    liked: false,
                    date: "agora",
                    comments: []
                });

                saveState();
                openForum();
            });
    }

    function openComments(postId) {
        const post = state.posts.find(p => p.id === postId);

        if (!post) return;

        const body = createModal({
            title: "Publicação",
            subtitle: "Leia a conversa e participe com respeito.",
            size: "modalJanelaAmpla"
        });

        body.innerHTML = renderPost(post, true);
    }


    function openGroups() {
        const body = createModal({
            title: "Grupos da Comunidade",
            subtitle: "Encontre mulheres que compartilham interesses e objetivos com você.",
            size: "modalJanelaAmpla"
        });

        body.innerHTML = `
            <div class="grupoFiltros">
                <span>
                    ${icon("fa-users")}
                    ${state.groups.length} grupos em destaque
                </span>
                <span>Faça parte das conversas!</span>
            </div>

            <div class="modalGradeGrupos">

                ${state.groups.map(g => `
                    <article class="grupoModalCard">

                        <div class="grupoModalIcone">
                            ${icon(g.icon)}
                        </div>

                        <span class="grupoCategoria">
                            ${escapeHTML(g.category)}
                        </span>

                        <h3>${escapeHTML(g.name)}</h3>

                        <p>${escapeHTML(g.description)}</p>

                        <div class="grupoModalMembros">
                            ${icon("fa-user-group")}
                            ${(g.members + (g.joined ? 1 : 0)).toLocaleString("pt-BR")}
                            participantes
                        </div>

                        <button type="button"
                            class="modalBotao ${g.joined ? "modalBotaoSecundario" : ""}"
                            data-group-details="${g.id}">
                            ${g.joined ? "Ver grupo" : "Conhecer grupo"}
                            ${icon("fa-arrow-right")}
                        </button>

                    </article>
                `).join("")}

            </div>
        `;
    }

    function renderGroupMessages(group) {
        const messages = Array.isArray(group.messages)
            ? group.messages
            : [];

        return `
            <section class="grupoChat">

                <div class="grupoChatTopo">
                    <div class="grupoChatIcone">
                        ${icon(group.icon)}
                    </div>

                    <div class="grupoChatIdentificacao">
                        <strong>${escapeHTML(group.name)}</strong>
                        <span>
                            ${group.members.toLocaleString("pt-BR")} participantes
                        </span>
                    </div>

                    <span class="grupoChatStatus">
                        <span></span>
                        Grupo demonstrativo
                    </span>
                </div>

                <div class="grupoChatAviso">
                    ${icon("fa-shield-heart")}
                    Esta é uma demonstração do espaço de conversa do Elo d'Elas.
                    As mensagens exibidas são exemplos fictícios.
                </div>

                <div class="grupoChatMensagens" id="grupoChatMensagens">

                    <div class="grupoChatData">
                        <span>Hoje</span>
                    </div>

                    ${messages.map(message => `
                        <article class="grupoMensagem ${message.own ? "minhaMensagem" : ""}">

                            ${!message.own ? `
                                <span class="grupoMensagemAvatar">
                                    ${escapeHTML(message.initial || message.author.charAt(0).toUpperCase())}
                                </span>
                            ` : ""}

                            <div class="grupoMensagemConteudo">

                                ${!message.own ? `
                                    <strong class="grupoMensagemNome">
                                        ${escapeHTML(message.author)}
                                    </strong>
                                ` : ""}

                                <div class="grupoMensagemBalao">
                                    <p>${escapeHTML(message.text)}</p>

                                    <time>${escapeHTML(message.time || "agora")}</time>
                                </div>

                            </div>

                        </article>
                    `).join("")}

                </div>

                <form class="grupoChatFormulario"
                    data-group-chat-form="${group.id}">

                    <input
                        type="text"
                        name="message"
                        maxlength="500"
                        autocomplete="off"
                        placeholder="Escreva uma mensagem..."
                        aria-label="Escreva uma mensagem"
                        required>

                    <button type="submit" aria-label="Enviar mensagem">
                        ${icon("fa-paper-plane")}
                    </button>

                </form>

                <div class="grupoChatRodape">
                    ${icon("fa-lock")}
                    Demonstração local: as mensagens não são enviadas para outras pessoas.
                </div>

            </section>
        `;
    }

    function openGroupDetails(id) {
        const group = state.groups.find(g => g.id === id);

        if (!group) return;

        const body = createModal({
            title: group.name,
            subtitle: group.category,
            size: "modalJanelaAmpla"
        });

        body.innerHTML = `
            <div class="grupoDetalhe">

                <div class="grupoDetalheBanner">
                    ${icon(group.icon)}
                </div>

                <p>${escapeHTML(group.description)}</p>

                <div class="grupoDetalheInfo">
                    <span>
                        ${icon("fa-user-group")}
                        ${group.members.toLocaleString("pt-BR")} participantes
                    </span>

                    <span>
                        ${icon("fa-comments")}
                        Espaço de troca e apoio
                    </span>
                </div>

                <h3>Combinados do grupo</h3>

                <ul>
                    ${group.rules.map(r => `<li>${escapeHTML(r)}</li>`).join("")}
                </ul>

                <div class="avisoPrivacidade">
                    ${icon("fa-heart")}
                    Um ambiente acolhedor depende da participação respeitosa de todas.
                </div>

                <button type="button"
                    class="modalBotao ${group.joined ? "modalBotaoSecundario" : ""}"
                    data-toggle-group="${group.id}">
                    ${group.joined ? "Sair do grupo" : "Entrar no grupo"}
                    ${icon(group.joined
                        ? "fa-arrow-right-from-bracket"
                        : "fa-arrow-right")}
                </button>

                ${renderGroupMessages(group)}

            </div>
        `;

        const messagesArea = body.querySelector("#grupoChatMensagens");

        if (messagesArea) {
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }
    }

    function toggleGroup(id) {
        const group = state.groups.find(g => g.id === id);

        if (!group) return;

        group.joined = !group.joined;

        saveState();
        openGroupDetails(id);
    }

    function sendGroupMessage(form) {
        const groupId = form.dataset.groupChatForm;

        const group = state.groups.find(g => g.id === groupId);

        if (!group) return;

        const input = form.elements.message;
        const messageText = input.value.trim();

        if (!messageText) return;

        if (!Array.isArray(group.messages)) {
            group.messages = [];
        }

        const now = new Date();

        const time = now.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });

        group.messages.push({
            author: currentUser.name,
            initial: currentUser.initial,
            text: messageText,
            time,
            own: true
        });

        saveState();

        openGroupDetails(groupId);
    }


    function openEvents() {
        const body = createModal({
            title: "Eventos da Comunidade",
            subtitle: "Encontros para aprender, compartilhar e fortalecer conexões.",
            size: "modalJanelaAmpla"
        });

        body.innerHTML = `
            <div class="eventoResumo">
                ${icon("fa-calendar-days")}

                <div>
                    <strong>Viva novas experiências</strong>
                    <p>Confira os próximos encontros do Elo d'Elas.</p>
                </div>
            </div>

            <div class="listaEventosModal">

                ${state.events.map(ev => `
                    <article class="eventoModalCard">

                        <div class="eventoDataModal">
                            <strong>${ev.day}</strong>
                            <span>${ev.month}</span>
                        </div>

                        <div class="eventoInfoModal">

                            <span class="eventoFormato">
                                ${escapeHTML(ev.format)} · ${escapeHTML(ev.time)}
                            </span>

                            <h3>${escapeHTML(ev.title)}</h3>

                            <p>${escapeHTML(ev.description)}</p>

                            <div class="eventoLocal">
                                ${icon("fa-location-dot")}
                                ${escapeHTML(ev.place)}
                            </div>

                            <button type="button"
                                class="modalBotao ${ev.registered ? "modalBotaoSecundario" : ""}"
                                data-event-details="${ev.id}">
                                ${ev.registered
                                    ? "Inscrição confirmada"
                                    : "Ver detalhes e participar"}
                                ${icon("fa-arrow-right")}
                            </button>

                        </div>

                    </article>
                `).join("")}

            </div>
        `;
    }

    function openEventDetails(id) {
        const ev = state.events.find(e => e.id === id);

        if (!ev) return;

        const body = createModal({
            title: ev.title,
            subtitle: "Detalhes do encontro"
        });

        body.innerHTML = `
            <div class="eventoDetalhe">

                <div class="eventoDetalheData">
                    ${icon("fa-calendar-days")}
                    <strong>${escapeHTML(ev.date)}</strong>
                </div>

                <div class="eventoDetalheData">
                    ${icon("fa-clock")}
                    <strong>${escapeHTML(ev.time)}</strong>
                </div>

                <div class="eventoDetalheData">
                    ${icon(ev.format === "Online"
                        ? "fa-video"
                        : "fa-location-dot")}
                    <strong>
                        ${escapeHTML(ev.format)} · ${escapeHTML(ev.place)}
                    </strong>
                </div>

                <h3>Sobre o evento</h3>

                <p>${escapeHTML(ev.description)}</p>

                <div class="avisoPrivacidade">
                    ${icon("fa-circle-info")}
                    ${ev.vacancies} vagas previstas. A confirmação nesta demonstração é local e não envia seus dados para uma organização.
                </div>

                <button type="button"
                    class="modalBotao ${ev.registered ? "modalBotaoSecundario" : ""}"
                    data-toggle-event="${ev.id}">
                    ${ev.registered
                        ? "Cancelar participação"
                        : "Confirmar participação"}
                    ${icon("fa-arrow-right")}
                </button>

            </div>
        `;
    }

    function toggleEvent(id) {
        const ev = state.events.find(e => e.id === id);

        if (!ev) return;

        ev.registered = !ev.registered;

        saveState();
        openEventDetails(id);
    }


    document.addEventListener("click", e => {

        const target = e.target;

        if (!(target instanceof Element)) return;


        if (
            target === activeOverlay ||
            target.closest("[data-close-modal]")
        ) {
            closeModal();
            return;
        }


        const trigger = target.closest("[data-open-community]");

        if (trigger) {
            const action = trigger.dataset.openCommunity;

            const actions = {
                forum: openForum,
                create: openCreatePost,
                groups: openGroups,
                events: openEvents
            };

            if (actions[action]) {
                actions[action]();
            }

            return;
        }


        if (target.closest("[data-remove-image]")) {
            imageDraft = "";

            const input = activeOverlay?.querySelector("#postImageInput");
            const preview = activeOverlay?.querySelector("#postImagePreview");

            if (input) input.value = "";
            if (preview) preview.innerHTML = "";

            return;
        }


        const deletePostButton = target.closest("[data-delete-post]");

        if (deletePostButton) {
            const post = state.posts.find(
                item => item.id === deletePostButton.dataset.deletePost
            );
            const isOwnPost = post && (
                post.ownerId === currentUser.id ||
                (!post.anonymous && post.author === currentUser.name)
            );

            if (!isOwnPost) return;

            if (!window.confirm("Deseja excluir esta publicação? Essa ação não pode ser desfeita.")) {
                return;
            }

            state.posts = state.posts.filter(
                item => item.id !== post.id
            );
            saveState();
            openForum();
            return;
        }


        const like = target.closest("[data-like-post]");

        if (like) {
            const post = state.posts.find(
                p => p.id === like.dataset.likePost
            );

            if (post) {
                post.liked = !post.liked;
                post.likes += post.liked ? 1 : -1;

                saveState();

                if (activeOverlay?.querySelector("#forumLista")) {
                    openForum();
                } else {
                    openComments(post.id);
                }
            }

            return;
        }


        const comments = target.closest("[data-show-comments]");

        if (comments) {
            openComments(comments.dataset.showComments);
            return;
        }


        const groupDetails = target.closest("[data-group-details]");

        if (groupDetails) {
            openGroupDetails(groupDetails.dataset.groupDetails);
            return;
        }


        const toggleGroupButton = target.closest("[data-toggle-group]");

        if (toggleGroupButton) {
            toggleGroup(toggleGroupButton.dataset.toggleGroup);
            return;
        }


        const eventDetails = target.closest("[data-event-details]");

        if (eventDetails) {
            openEventDetails(eventDetails.dataset.eventDetails);
            return;
        }


        const toggleEventButton = target.closest("[data-toggle-event]");

        if (toggleEventButton) {
            toggleEvent(toggleEventButton.dataset.toggleEvent);
            return;
        }


        const join = target.closest("[data-join-group]");

        if (join) {
            const group = state.groups.find(
                g => g.id === join.dataset.joinGroup
            );

            if (group) {
                group.joined = !group.joined;
                saveState();
                openGroups();
            }

            return;
        }

    });


    document.addEventListener("submit", e => {

        const target = e.target;

        if (!(target instanceof Element)) return;


        const chatForm = target.closest("[data-group-chat-form]");

        if (chatForm) {
            e.preventDefault();
            sendGroupMessage(chatForm);
            return;
        }


        const form = target.closest("[data-comment-form]");

        if (!form) return;

        e.preventDefault();

        const input = form.elements.comment;
        const text = input.value.trim();

        if (!text) return;

        const post = state.posts.find(
            p => p.id === form.dataset.commentForm
        );

        if (!post) return;

        post.comments.push({
            author: currentUser.name,
            text
        });

        saveState();
        openComments(post.id);

    });


    document.addEventListener("keydown", e => {

        if (!activeOverlay) return;

        if (e.key === "Escape") {
            closeModal();
            return;
        }

        if (e.key === "Tab") {

            const focusable = [
                ...activeOverlay.querySelectorAll(
                    'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
                )
            ];

            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();

            } else if (
                !e.shiftKey &&
                document.activeElement === last
            ) {
                e.preventDefault();
                first.focus();
            }
        }
    });


    document.addEventListener("keydown", e => {

        const target = e.target;

        if (!(target instanceof Element)) return;

        const item = target.closest(
            '[data-open-community="forum"]'
        );

        if (
            item &&
            (e.key === "Enter" || e.key === " ")
        ) {
            e.preventDefault();
            openForum();
        }
    });

})();
