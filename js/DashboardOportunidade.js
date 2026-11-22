// ==========================================================
// DASHBOARD OPORTUNIDADE - ELO D'ELAS
// Cursos, vagas, filtros, navegação e modais
// ==========================================================

(() => {
    "use strict";

    // ======================================================
    // CONFIGURAÇÕES E DADOS
    // ======================================================

    const temas = [
        "Tecnologia",
        "Administrativo",
        "Indústria",
        "Comunicação",
        "Educação"
    ];

    // ------------------------------------------------------
    // CURSOS
    // ------------------------------------------------------

    const cursos = [
        {
            id: "curso-1",
            titulo: "Atendimento ao Público",
            instituicao: "Fundação Bradesco",
            tema: "Administrativo",
            valor: "Gratuito",
            duracao: "10 horas",
            certificado: "Gratuito",
            modalidade: "Online",
            descricao: "Desenvolva habilidades de comunicação e atendimento, aprendendo práticas para lidar com diferentes públicos e situações profissionais.",
            imagem: "",
            link: "https://www.ev.org.br/"
        },
        {
            id: "curso-2",
            titulo: "Como Conseguir um Novo Emprego",
            instituicao: "Fundação Bradesco",
            tema: "Administrativo",
            valor: "Gratuito",
            duracao: "4 horas",
            certificado: "Gratuito",
            modalidade: "Online",
            descricao: "Aprenda a se preparar para processos seletivos, elaborar estratégias de busca e apresentar melhor suas competências profissionais.",
            imagem: "",
            link: "https://www.ev.org.br/"
        },
        {
            id: "curso-3",
            titulo: "Comunicação Empresarial",
            instituicao: "Fundação Bradesco",
            tema: "Comunicação",
            valor: "Gratuito",
            duracao: "12 horas",
            certificado: "Gratuito",
            modalidade: "Online",
            descricao: "Conheça conceitos e técnicas de comunicação aplicados ao ambiente empresarial, incluindo comunicação escrita e profissional.",
            imagem: "",
            link: "https://www.ev.org.br/"
        },
        {
            id: "curso-4",
            titulo: "Contabilidade Empresarial",
            instituicao: "Fundação Bradesco",
            tema: "Administrativo",
            valor: "Gratuito",
            duracao: "10 horas",
            certificado: "Gratuito",
            modalidade: "Online",
            descricao: "Aprenda conceitos básicos de contabilidade e compreenda melhor os registros e informações financeiras de uma empresa.",
            imagem: "",
            link: "https://www.ev.org.br/"
        },
        {
            id: "curso-5",
            titulo: "Excel Básico",
            instituicao: "SENAI",
            tema: "Administrativo",
            valor: "Gratuito",
            duracao: "20 horas",
            certificado: "Consultar condições",
            modalidade: "Online",
            descricao: "Aprenda a utilizar planilhas, inserir dados, organizar informações e trabalhar com recursos básicos do Excel.",
            imagem: "",
            link: "https://www.senai.br/"
        },
        {
            id: "curso-6",
            titulo: "Lógica de Programação",
            instituicao: "SENAI",
            tema: "Tecnologia",
            valor: "Gratuito",
            duracao: "14 horas",
            certificado: "Consultar condições",
            modalidade: "Online",
            descricao: "Conheça os fundamentos da lógica de programação, algoritmos e resolução de problemas por meio de sequências lógicas.",
            imagem: "",
            link: "https://www.senai.br/"
        },
        {
            id: "curso-7",
            titulo: "AWS Cloud Practitioner Essentials",
            instituicao: "Amazon Web Services",
            tema: "Tecnologia",
            valor: "Gratuito",
            duracao: "Variável",
            certificado: "Curso gratuito; certificação pode ser paga",
            modalidade: "Online",
            descricao: "Introdução aos conceitos de computação em nuvem, serviços da AWS, segurança, arquitetura e modelos de cobrança.",
            imagem: "",
            link: "https://skillbuilder.aws/"
        },
        {
            id: "curso-8",
            titulo: "Oracle Cloud Infrastructure Foundations",
            instituicao: "Oracle",
            tema: "Tecnologia",
            valor: "Gratuito",
            duracao: "Variável",
            certificado: "Verificar condições da certificação",
            modalidade: "Online",
            descricao: "Conheça os fundamentos da infraestrutura em nuvem da Oracle, seus principais serviços e conceitos de computação em nuvem.",
            imagem: "",
            link: "https://mylearn.oracle.com/"
        },
        {
            id: "curso-9",
            titulo: "Excel para Iniciantes",
            instituicao: "SENAC",
            tema: "Administrativo",
            valor: "Pago",
            duracao: "24 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Formação introdutória para aprender a criar planilhas, organizar dados e utilizar os principais recursos do Excel.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-10",
            titulo: "Excel Avançado I – Funções",
            instituicao: "SENAC",
            tema: "Administrativo",
            valor: "Pago",
            duracao: "24 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Aprofunde seus conhecimentos em Excel com funções, fórmulas e recursos para análise e organização de dados.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-11",
            titulo: "Excel com VBA",
            instituicao: "SENAC",
            tema: "Tecnologia",
            valor: "Pago",
            duracao: "30 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Aprenda conceitos de automação de tarefas em planilhas utilizando recursos do VBA no Excel.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-12",
            titulo: "MS Project – Gestão de Projetos",
            instituicao: "SENAC",
            tema: "Administrativo",
            valor: "Pago",
            duracao: "32 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Conheça ferramentas para planejar, acompanhar e organizar atividades, prazos e recursos de projetos.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-13",
            titulo: "Power BI",
            instituicao: "SENAC",
            tema: "Tecnologia",
            valor: "Pago",
            duracao: "40 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Aprenda a transformar dados em relatórios e painéis interativos para apoiar análises e decisões.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-14",
            titulo: "Assistente Administrativo",
            instituicao: "SENAC",
            tema: "Administrativo",
            valor: "Pago",
            duracao: "160 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Desenvolva conhecimentos para atuar em rotinas administrativas, organização de documentos, atendimento e apoio à gestão.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        },
        {
            id: "curso-15",
            titulo: "Excel – Planilhas Interativas e Dashboard",
            instituicao: "SENAC",
            tema: "Administrativo",
            valor: "Pago",
            duracao: "28 horas",
            certificado: "Consultar condições",
            modalidade: "Consultar turma",
            descricao: "Aprenda a criar planilhas interativas e dashboards para apresentar informações de maneira organizada e visual.",
            imagem: "",
            link: "https://www.sp.senac.br/"
        }
    ];

    // ------------------------------------------------------
    // VAGAS
    // ------------------------------------------------------

    const vagas = [
        {
            id: "vaga-1",
            titulo: "Assistente Administrativa",
            empresa: "CSU Digital",
            tema: "Administrativo",
            tipo: "CLT",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar os requisitos e qualificações diretamente no anúncio da empresa.",
            descricao: "Oportunidade na área administrativa, com atividades de suporte às rotinas internas e organização de processos.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=CSU%20Digital%20Assistente%20Administrativa"
        },
        {
            id: "vaga-2",
            titulo: "Gestora de Tráfego Pago Pleno",
            empresa: "Digital Dutra",
            tema: "Comunicação",
            tipo: "CLT",
            modalidade: "Não informado",
            local: "Brasil",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Experiência compatível com nível pleno em gestão de tráfego e campanhas digitais. Confirmar no anúncio.",
            descricao: "Atuação com planejamento, acompanhamento e otimização de campanhas de mídia paga.",
            beneficios: "Não informado.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=Digital%20Dutra%20Gestora%20de%20Trafego"
        },
        {
            id: "vaga-3",
            titulo: "Estágio em Finanças",
            empresa: "Haleon",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Não informado",
            local: "Rio de Janeiro, RJ",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar requisitos acadêmicos e conhecimentos solicitados no anúncio.",
            descricao: "Oportunidade de desenvolvimento profissional na área financeira, com contato com rotinas e processos da área.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=Haleon%20Estagio%20Financas"
        },
        {
            id: "vaga-4",
            titulo: "Estágio em Talent Acquisition",
            empresa: "Zappts",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Não informado",
            local: "Brasil",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar formação, conhecimentos e disponibilidade exigidos pela empresa.",
            descricao: "Atuação de apoio aos processos de recrutamento e seleção, com contato com candidatos e atividades de RH.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=Zappts%20Talent%20Acquisition%20Estagio"
        },
        {
            id: "vaga-5",
            titulo: "Estagiária de Franquia",
            empresa: "Óticas Gassi",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Presencial",
            local: "Butantã, São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar os requisitos diretamente no anúncio da oportunidade.",
            descricao: "Atuação de apoio às rotinas relacionadas à operação e gestão de franquias.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=Oticas%20Gassi%20Estagiaria%20Franquia"
        },
        {
            id: "vaga-6",
            titulo: "Estágio em Engenharia de Análise de Dados",
            empresa: "Artefact",
            tema: "Tecnologia",
            tipo: "Estágio",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar formação, conhecimentos técnicos e ferramentas exigidas no anúncio.",
            descricao: "Oportunidade para desenvolver conhecimentos em análise de dados e soluções orientadas por dados.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "Oportunidade divulgada anteriormente como voltada para mulheres.",
            link: "https://www.linkedin.com/jobs/search/?keywords=Artefact%20Estagio%20Data%20Engineering"
        },
        {
            id: "vaga-7",
            titulo: "Jovem Aprendiz",
            empresa: "JCDecaux Brasil",
            tema: "Comunicação",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar idade, escolaridade e demais critérios do programa.",
            descricao: "Programa de aprendizagem para desenvolvimento profissional e contato com atividades da empresa.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.jcdecaux.com.br/"
        },
        {
            id: "vaga-8",
            titulo: "Jovem Aprendiz em Tecnologia",
            empresa: "Elo",
            tema: "Tecnologia",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar os critérios de idade, escolaridade e conhecimentos no anúncio.",
            descricao: "Oportunidade de aprendizagem com contato com atividades e rotinas da área de tecnologia.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.linkedin.com/jobs/search/?keywords=Elo%20Jovem%20Aprendiz%20Tecnologia"
        },
        {
            id: "vaga-9",
            titulo: "Jovem Aprendiz",
            empresa: "OXXO Brasil",
            tema: "Administrativo",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar idade, escolaridade e disponibilidade exigidas.",
            descricao: "Programa de aprendizagem para iniciar a trajetória profissional e desenvolver habilidades no ambiente de trabalho.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.oxxo.com.br/"
        },
        {
            id: "vaga-10",
            titulo: "Jovem Aprendiz em Customer Service e Logística",
            empresa: "Hershey",
            tema: "Indústria",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar requisitos de idade, escolaridade e conhecimentos no anúncio.",
            descricao: "Oportunidade de aprendizagem com contato com atividades de atendimento e processos logísticos.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.thehersheycompany.com/"
        },
        {
            id: "vaga-11",
            titulo: "Jovem Aprendiz",
            empresa: "RD Saúde",
            tema: "Administrativo",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar idade, escolaridade e critérios do programa.",
            descricao: "Programa de aprendizagem para desenvolver competências profissionais e conhecer as rotinas da empresa.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://rdsaude.com.br/"
        },
        {
            id: "vaga-12",
            titulo: "Jovem Aprendiz",
            empresa: "Veolia",
            tema: "Indústria",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar idade, escolaridade e requisitos no anúncio.",
            descricao: "Oportunidade de aprendizagem em empresa que atua com serviços ambientais e gestão de recursos.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.veolia.com/"
        },
        {
            id: "vaga-13",
            titulo: "Assistente Administrativo",
            empresa: "Deloitte",
            tema: "Administrativo",
            tipo: "CLT",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar formação, conhecimentos e experiência solicitados no anúncio.",
            descricao: "Atuação de suporte administrativo e organização de processos e atividades internas.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.linkedin.com/jobs/search/?keywords=Deloitte%20Assistente%20Administrativo"
        },
        {
            id: "vaga-14",
            titulo: "Auxiliar Administrativo",
            empresa: "Grupo São Cristóvão Saúde",
            tema: "Administrativo",
            tipo: "CLT",
            modalidade: "Não informado",
            local: "São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar escolaridade, experiência e conhecimentos solicitados.",
            descricao: "Oportunidade de apoio às rotinas administrativas e organização de documentos e informações.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.saocristovao.com.br/"
        },
        {
            id: "vaga-15",
            titulo: "Jovem Aprendiz",
            empresa: "Atento",
            tema: "Comunicação",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado",
            local: "Zona Sul, São Paulo, SP",
            salario: "Não informado",
            cargaHoraria: "Não informado",
            prazo: "Não informado",
            requisitos: "Consultar critérios de idade, escolaridade e disponibilidade.",
            descricao: "Programa de aprendizagem em empresa de relacionamento com clientes e serviços de atendimento.",
            beneficios: "Consultar anúncio oficial.",
            afirmativa: "",
            link: "https://www.atento.com/"
        }
    ];

    // ======================================================
    // ELEMENTOS DA PÁGINA
    // ======================================================

    const paginaInicial = document.getElementById("paginaInicialOportunidade");
    const paginaListagem = document.getElementById("paginaListagemOportunidade");

    const resultados = document.getElementById("resultadosListagem");
    const filtros = document.getElementById("filtrosListagem");
    const mensagemVazia = document.getElementById("mensagemSemResultados");

    const campoPesquisaListagem = document.getElementById("campoPesquisaListagem");
    const campoPesquisaGlobal = document.getElementById("campoPesquisaGlobal");

    const modalOverlay = document.getElementById("modalOportunidades");
    const conteudoModal = document.getElementById("conteudoModalOportunidade");
    const botaoFecharModal = document.getElementById("fecharModalOportunidade");

    if (
        !paginaInicial ||
        !paginaListagem ||
        !resultados ||
        !filtros ||
        !mensagemVazia ||
        !campoPesquisaListagem ||
        !modalOverlay ||
        !conteudoModal ||
        !botaoFecharModal
    ) {
        console.error("Dashboard Oportunidade: não foi possível localizar todos os elementos necessários no HTML.");
        return;
    }

    // ======================================================
    // ESTADOS
    // ======================================================

    let tipoAtual = "cursos";
    let temaAtual = "";
    let valorAtual = "Todos";
    let tipoVagaAtual = "Todos";
    let pesquisaAtual = "";
    let elementoAnteriorModal = null;

    // ======================================================
    // FUNÇÕES AUXILIARES
    // ======================================================

    function normalizar(texto) {
        return String(texto || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function escapar(texto) {
        return String(texto ?? "").replace(/[&<>"']/g, caractere => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[caractere]);
    }

    function valorSeguro(valor) {
        if (!valor || !String(valor).trim()) {
            return "Não informado";
        }

        return valor;
    }

    function filtrarPorPesquisa(lista, termo) {
        if (!termo) return lista;

        const busca = normalizar(termo);

        return lista.filter(item => {
            const conteudo = Object.values(item)
                .filter(valor => typeof valor === "string")
                .join(" ");

            return normalizar(conteudo).includes(busca);
        });
    }

    // ======================================================
    // NAVEGAÇÃO ENTRE PÁGINAS
    // ======================================================

    function abrirListagem(tipo, tema = "", pesquisaInicial = "") {
        tipoAtual = tipo;
        temaAtual = tema;
        valorAtual = "Todos";
        tipoVagaAtual = "Todos";
        pesquisaAtual = pesquisaInicial;

        paginaInicial.hidden = true;
        paginaListagem.hidden = false;

        campoPesquisaListagem.value = pesquisaInicial;

        const porTema = tipo === "tema" && Boolean(tema);
        const buscaGlobal = tipo === "tema" && !tema;

        document.getElementById("categoriaListagem").textContent =
            porTema
                ? "ACESSO POR CATEGORIA"
                : buscaGlobal
                    ? "RESULTADOS DA BUSCA"
                    : "OPORTUNIDADES";

        document.getElementById("tituloListagem").textContent =
            porTema
                ? tema
                : buscaGlobal
                    ? "Resultados encontrados"
                    : tipo === "cursos"
                        ? "Todos os cursos"
                        : "Todas as vagas";

        document.getElementById("descricaoListagem").textContent =
            porTema
                ? `Cursos e vagas relacionados à área de ${tema.toLowerCase()}.`
                : buscaGlobal
                    ? "Confira os cursos e as vagas que correspondem à sua pesquisa."
                    : tipo === "cursos"
                        ? "Explore cursos gratuitos e pagos para desenvolver suas habilidades."
                        : "Encontre oportunidades profissionais e dê o próximo passo na sua carreira.";

        montarFiltros();
        renderizarResultados();

        paginaListagem.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function voltarInicio() {
        paginaListagem.hidden = true;
        paginaInicial.hidden = false;

        temaAtual = "";
        pesquisaAtual = "";

        campoPesquisaListagem.value = "";

        paginaInicial.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // ======================================================
    // FILTROS
    // ======================================================

    function montarFiltros() {
        if (tipoAtual === "tema") {
            filtros.innerHTML = "";
            filtros.hidden = true;
            return;
        }

        filtros.hidden = false;

        if (tipoAtual === "cursos") {
            filtros.innerHTML = `
                <div class="grupoFiltros">
                    <strong>Tema</strong>

                    <div class="listaTagsFiltro">
                        ${["Todos", ...temas].map(item => `
                            <button
                                type="button"
                                class="tagFiltro ${item === "Todos" ? "selecionada" : ""}"
                                data-filtro="tema"
                                data-valor="${escapar(item)}">
                                ${escapar(item)}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="grupoFiltros">
                    <strong>Valor</strong>

                    <div class="listaTagsFiltro">
                        ${["Todos", "Gratuito", "Pago"].map(item => `
                            <button
                                type="button"
                                class="tagFiltro ${item === "Todos" ? "selecionada" : ""}"
                                data-filtro="valor"
                                data-valor="${escapar(item)}">
                                ${escapar(item)}
                            </button>
                        `).join("")}
                    </div>
                </div>
            `;
        } else {
            filtros.innerHTML = `
                <div class="grupoFiltros">
                    <strong>Tema</strong>

                    <div class="listaTagsFiltro">
                        ${["Todos", ...temas].map(item => `
                            <button
                                type="button"
                                class="tagFiltro ${item === "Todos" ? "selecionada" : ""}"
                                data-filtro="tema"
                                data-valor="${escapar(item)}">
                                ${escapar(item)}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="grupoFiltros">
                    <strong>Tipo de vaga</strong>

                    <div class="listaTagsFiltro">
                        ${["Todos", "Estágio", "Jovem Aprendiz", "CLT"].map(item => `
                            <button
                                type="button"
                                class="tagFiltro ${item === "Todos" ? "selecionada" : ""}"
                                data-filtro="tipo"
                                data-valor="${escapar(item)}">
                                ${escapar(item)}
                            </button>
                        `).join("")}
                    </div>
                </div>
            `;
        }
    }

    function atualizarFiltroSelecionado(grupo, botaoSelecionado) {
        filtros.querySelectorAll(`[data-filtro="${grupo}"]`).forEach(botao => {
            botao.classList.toggle("selecionada", botao === botaoSelecionado);
        });
    }

    filtros.addEventListener("click", evento => {
        const botao = evento.target.closest("[data-filtro]");

        if (!botao) return;

        const grupo = botao.dataset.filtro;
        const valor = botao.dataset.valor;

        if (grupo === "tema") {
            temaAtual = valor === "Todos" ? "" : valor;
        }

        if (grupo === "valor") {
            valorAtual = valor;
        }

        if (grupo === "tipo") {
            tipoVagaAtual = valor;
        }

        atualizarFiltroSelecionado(grupo, botao);
        renderizarResultados();
    });

    // ======================================================
    // CARDS DE CURSOS
    // ======================================================

    function cardCurso(curso) {
        const imagem = curso.imagem
            ? `<img src="${escapar(curso.imagem)}" alt="Imagem do curso ${escapar(curso.titulo)}">`
            : `<i class="fa-solid fa-book-open"></i>`;

        return `
            <article class="cardOportunidade">
                <button
                    type="button"
                    class="areaCardOportunidade"
                    data-abrir-modal="curso"
                    data-id="${escapar(curso.id)}"
                    aria-label="Ver detalhes do curso ${escapar(curso.titulo)}">

                    <div class="imagemCardOportunidade">
                        ${imagem}
                    </div>

                    <div class="conteudoCardOportunidade">
                        <div class="tagsCard">
                            <span class="tagTema">${escapar(curso.tema)}</span>

                            <span class="${curso.valor === "Gratuito" ? "tagGratuito" : "tagPago"}">
                                ${escapar(curso.valor)}
                            </span>
                        </div>

                        <h3>${escapar(curso.titulo)}</h3>

                        <p class="instituicaoCard">
                            ${escapar(curso.instituicao)}
                        </p>

                        <p class="descricaoCard">
                            ${escapar(curso.descricao)}
                        </p>

                        <span class="detalhesCard">
                            Ver detalhes
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </button>
            </article>
        `;
    }

    // ======================================================
    // CARDS DE VAGAS
    // ======================================================

    function cardVaga(vaga) {
        return `
            <article class="cardOportunidade">
                <button
                    type="button"
                    class="areaCardOportunidade"
                    data-abrir-modal="vaga"
                    data-id="${escapar(vaga.id)}"
                    aria-label="Ver detalhes da vaga ${escapar(vaga.titulo)}">

                    <div class="imagemCardOportunidade imagemLogoEmpresa">
                        <span>${escapar(vaga.empresa.substring(0, 1))}</span>
                    </div>

                    <div class="conteudoCardOportunidade">
                        <div class="tagsCard">
                            <span class="tagTema">${escapar(vaga.tema)}</span>
                            <span class="tagTipoVaga">${escapar(vaga.tipo)}</span>
                        </div>

                        <h3>${escapar(vaga.titulo)}</h3>

                        <p class="instituicaoCard">
                            ${escapar(vaga.empresa)} · ${escapar(vaga.local)}
                        </p>

                        <p class="descricaoCard">
                            ${escapar(vaga.descricao)}
                        </p>

                        <span class="detalhesCard">
                            Ver detalhes
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </button>
            </article>
        `;
    }

    // ======================================================
    // RESULTADOS POR TEMA
    // ======================================================

    function montarSecaoTema(titulo, icone, lista, tipo) {
        const cards = lista.map(item =>
            tipo === "cursos" ? cardCurso(item) : cardVaga(item)
        ).join("");

        return `
            <section class="secaoResultadosTema">
                <div class="cabecalhoResultadosTema">
                    <h3>
                        <i class="${icone}"></i>
                        ${titulo}
                    </h3>

                    <span class="quantidadeResultados">
                        ${lista.length} ${lista.length === 1 ? "resultado" : "resultados"}
                    </span>
                </div>

                <div class="gradeResultadosTema">
                    ${cards || `
                        <p class="mensagemCategoriaVazia">
                            Nenhum ${tipo === "cursos" ? "curso" : "vaga"} encontrado nesta categoria.
                        </p>
                    `}
                </div>
            </section>
        `;
    }

    function renderizarResultadosPorTema() {
        let listaCursos = cursos;
        let listaVagas = vagas;

        if (temaAtual) {
            listaCursos = listaCursos.filter(item => item.tema === temaAtual);
            listaVagas = listaVagas.filter(item => item.tema === temaAtual);
        }

        listaCursos = filtrarPorPesquisa(listaCursos, pesquisaAtual);
        listaVagas = filtrarPorPesquisa(listaVagas, pesquisaAtual);

        const total = listaCursos.length + listaVagas.length;

        resultados.innerHTML = `
            ${montarSecaoTema(
                "Cursos",
                "fa-solid fa-book-open",
                listaCursos,
                "cursos"
            )}

            ${montarSecaoTema(
                "Vagas",
                "fa-solid fa-briefcase",
                listaVagas,
                "vagas"
            )}
        `;

        mensagemVazia.hidden = total > 0;
    }

    // ======================================================
    // RESULTADOS DAS LISTAGENS GERAIS
    // ======================================================

    function renderizarResultadosGerais() {
        let lista = tipoAtual === "cursos" ? cursos : vagas;

        if (temaAtual) {
            lista = lista.filter(item => item.tema === temaAtual);
        }

        if (tipoAtual === "cursos" && valorAtual !== "Todos") {
            lista = lista.filter(item => item.valor === valorAtual);
        }

        if (tipoAtual === "vagas" && tipoVagaAtual !== "Todos") {
            lista = lista.filter(item => item.tipo === tipoVagaAtual);
        }

        lista = filtrarPorPesquisa(lista, pesquisaAtual);

        resultados.innerHTML = lista.map(item =>
            tipoAtual === "cursos"
                ? cardCurso(item)
                : cardVaga(item)
        ).join("");

        mensagemVazia.hidden = lista.length > 0;
    }

    // ======================================================
    // RENDERIZAÇÃO PRINCIPAL
    // ======================================================

    function renderizarResultados() {
        if (tipoAtual === "tema") {
            renderizarResultadosPorTema();
        } else {
            renderizarResultadosGerais();
        }
    }

    // ======================================================
    // PESQUISA
    // ======================================================

    campoPesquisaListagem.addEventListener("input", evento => {
        pesquisaAtual = evento.target.value;
        renderizarResultados();
    });

    const formPesquisaListagem = document.getElementById("formPesquisaListagem");

    if (formPesquisaListagem) {
        formPesquisaListagem.addEventListener("submit", evento => {
            evento.preventDefault();
        });
    }

    if (campoPesquisaGlobal) {
        const formPesquisaGlobal = document.getElementById("pesquisaGlobal");

        if (formPesquisaGlobal) {
            formPesquisaGlobal.addEventListener("submit", evento => {
                evento.preventDefault();

                const termo = campoPesquisaGlobal.value.trim();
                abrirListagem("tema", "", termo);
            });
        }
    }

    // ======================================================
    // ACESSOS RÁPIDOS
    // ======================================================

    document.querySelectorAll(".cardAcesso").forEach(botao => {
        botao.addEventListener("click", () => {
            abrirListagem("tema", botao.dataset.tema);
        });
    });

    // ======================================================
    // BOTÕES VER TODOS
    // ======================================================

    document.querySelectorAll("[data-abrir-lista]").forEach(botao => {
        botao.addEventListener("click", () => {
            abrirListagem(botao.dataset.abrirLista);
        });
    });

    // ======================================================
    // BOTÃO VOLTAR
    // ======================================================

    const botaoVoltar = document.getElementById("voltarOportunidades");

    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", voltarInicio);
    }

    // ======================================================
    // DESTAQUES DA PÁGINA INICIAL
    // ======================================================

    function renderizarDestaques() {
        const elementoCursoDestaque = document.getElementById("cursoDestaque");
        const elementoListaVagas = document.getElementById("listaVagasDestaque");

        const destaque = cursos.find(item => item.titulo === "Power BI") || cursos[0];

        if (elementoCursoDestaque) {
            elementoCursoDestaque.innerHTML = `
                <button
                    type="button"
                    class="cursoDestaqueBotao"
                    data-abrir-modal="curso"
                    data-id="${escapar(destaque.id)}">

                    <div class="imagemDestaqueCurso">
                        ${destaque.imagem
                            ? `<img src="${escapar(destaque.imagem)}" alt="">`
                            : `<i class="fa-solid fa-chart-column"></i>`}
                    </div>

                    <div class="informacoesCurso">
                        <h3>${escapar(destaque.titulo)}</h3>

                        <p>${escapar(destaque.descricao)}</p>

                        <span class="botaoCurso">
                            Ver curso
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </button>
            `;
        }

        if (elementoListaVagas) {
            elementoListaVagas.innerHTML = vagas.slice(0, 2).map(vaga => `
                <button
                    type="button"
                    class="itemVaga"
                    data-abrir-modal="vaga"
                    data-id="${escapar(vaga.id)}">

                    <i class="fa-solid fa-file-lines iconeVaga"></i>

                    <span class="dadosVaga">
                        <strong>${escapar(vaga.titulo)}</strong>

                        <small>
                            ${escapar(vaga.empresa)} - ${escapar(vaga.local)}
                        </small>

                        <span class="etiquetas">
                            <small>${escapar(vaga.tipo)}</small>
                            <small>${escapar(vaga.modalidade)}</small>
                        </span>
                    </span>

                    <i class="fa-solid fa-chevron-right setaVaga"></i>
                </button>
            `).join("");
        }
    }

    // ======================================================
    // MODAIS - FUNÇÕES AUXILIARES
    // ======================================================

    function campoModal(titulo, valor) {
        return `
            <div class="campoModal">
                <span>${escapar(titulo)}</span>
                <p>${escapar(valorSeguro(valor))}</p>
            </div>
        `;
    }

    function linkValido(link) {
        try {
            const url = new URL(link);

            return url.protocol === "https:" || url.protocol === "http:";
        } catch {
            return false;
        }
    }

    function botaoExterno(link, texto) {
        if (!linkValido(link)) {
            return `
                <p class="avisoModalExterno">
                    <i class="fa-solid fa-circle-info"></i>
                    Link externo não disponível no momento.
                </p>
            `;
        }

        return `
            <a
                class="botaoAcessarModal"
                href="${escapar(link)}"
                target="_blank"
                rel="noopener noreferrer">

                ${escapar(texto)}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;
    }

    // ======================================================
    // MODAL DE CURSO
    // ======================================================

    function montarModalCurso(curso) {
        const gratuito = curso.valor === "Gratuito";

        const imagem = curso.imagem
            ? `<img src="${escapar(curso.imagem)}" alt="Imagem ilustrativa do curso">`
            : `<span><i class="fa-solid fa-book-open"></i></span>`;

        return `
            <header class="topoModalOportunidade">
                <span class="categoriaModal">
                    <i class="fa-solid fa-book-open"></i>
                    CURSO
                </span>

                <h2 id="modalTituloOportunidade">
                    ${escapar(curso.titulo)}
                </h2>

                <p class="subtituloModal">
                    ${escapar(curso.instituicao)}
                </p>

                <div class="tagsModal">
                    <span class="tagModal">
                        ${escapar(curso.tema)}
                    </span>

                    <span class="tagModal ${gratuito ? "tagModalGratuito" : "tagModalPago"}">
                        ${escapar(curso.valor)}
                    </span>
                </div>
            </header>

            <div class="corpoModalOportunidade">
                <div class="imagemModalOportunidade ${curso.imagem ? "" : "imagemModalSemFoto"}">
                    ${imagem}
                </div>

                <section class="secaoDescricaoModal">
                    <h3>Sobre o curso</h3>
                    <p>${escapar(curso.descricao)}</p>
                </section>

                <section class="secaoArtigoModal">
                    <h3>Informações do curso</h3>

                    <div class="informacoesModal">
                        ${campoModal("Instituição", curso.instituicao)}
                        ${campoModal("Tema", curso.tema)}
                        ${campoModal("Valor", curso.valor)}
                        ${campoModal("Duração média", curso.duracao)}
                        ${campoModal("Modalidade", curso.modalidade)}
                        ${campoModal("Certificado", curso.certificado)}
                    </div>
                </section>

                <div class="avisoModalExterno">
                    <i class="fa-solid fa-circle-info"></i>

                    <span>
                        Este curso é oferecido por uma instituição externa.
                        Consulte a página oficial para confirmar disponibilidade,
                        valores, duração e condições de certificação.
                    </span>
                </div>

                ${botaoExterno(curso.link, "Acessar curso")}
            </div>
        `;
    }

    // ======================================================
    // MODAL DE VAGA
    // ======================================================

    function montarModalVaga(vaga) {
        return `
            <header class="topoModalOportunidade">
                <span class="categoriaModal">
                    <i class="fa-solid fa-briefcase"></i>
                    VAGA DE EMPREGO
                </span>

                <h2 id="modalTituloOportunidade">
                    ${escapar(vaga.titulo)}
                </h2>

                <p class="subtituloModal">
                    ${escapar(vaga.empresa)}
                </p>

                <div class="tagsModal">
                    <span class="tagModal">
                        ${escapar(vaga.tema)}
                    </span>

                    <span class="tagModal tagModalPago">
                        ${escapar(vaga.tipo)}
                    </span>

                    <span class="tagModal">
                        ${escapar(vaga.modalidade)}
                    </span>
                </div>

                ${vaga.afirmativa ? `
                    <p class="avisoAfirmativo">
                        <i class="fa-solid fa-venus"></i>
                        ${escapar(vaga.afirmativa)}
                    </p>
                ` : ""}
            </header>

            <div class="corpoModalOportunidade">
                <div class="imagemModalOportunidade imagemModalSemFoto imagemLogoModal">
                    <span>${escapar(vaga.empresa.substring(0, 1))}</span>
                </div>

                <section class="secaoDescricaoModal">
                    <h3>Sobre a empresa</h3>
                    <p>
                        ${escapar(vaga.empresa)}.
                        Consulte o site oficial para conhecer mais sobre a empresa
                        e suas áreas de atuação.
                    </p>
                </section>

                <section class="secaoDescricaoModal">
                    <h3>Sobre a oportunidade</h3>
                    <p>${escapar(vaga.descricao)}</p>
                </section>

                <section class="secaoDescricaoModal">
                    <h3>Requisitos</h3>
                    <p>${escapar(vaga.requisitos)}</p>
                </section>

                <section class="secaoDescricaoModal">
                    <h3>Benefícios</h3>
                    <p>${escapar(vaga.beneficios)}</p>
                </section>

                <section class="secaoArtigoModal">
                    <h3>Informações da vaga</h3>

                    <div class="informacoesModal">
                        ${campoModal("Empresa", vaga.empresa)}
                        ${campoModal("Área", vaga.tema)}
                        ${campoModal("Tipo de contratação", vaga.tipo)}
                        ${campoModal("Modalidade", vaga.modalidade)}
                        ${campoModal("Localização", vaga.local)}
                        ${campoModal("Carga horária", vaga.cargaHoraria)}
                        ${campoModal("Salário", vaga.salario)}
                        ${campoModal("Fim das inscrições", vaga.prazo)}
                    </div>
                </section>

                <div class="avisoModalExterno">
                    <i class="fa-solid fa-circle-info"></i>

                    <span>
                        Esta oportunidade é divulgada por uma empresa externa.
                        O Elo D'Elas não participa do processo seletivo.
                        Consulte o anúncio original para confirmar se as inscrições
                        continuam abertas e verificar todas as condições.
                    </span>
                </div>

                ${botaoExterno(vaga.link, "Ver oportunidade")}
            </div>
        `;
    }

    // ======================================================
    // ABRIR MODAL
    // ======================================================

    function abrirModal(tipo, id) {
        const lista = tipo === "curso" ? cursos : vagas;
        const item = lista.find(registro => registro.id === id);

        if (!item) return;

        elementoAnteriorModal = document.activeElement;

        conteudoModal.innerHTML = tipo === "curso"
            ? montarModalCurso(item)
            : montarModalVaga(item);

        modalOverlay.classList.add("aberto");
        modalOverlay.setAttribute("aria-hidden", "false");

        document.body.classList.add("modalOportunidadeAberto");

        botaoFecharModal.focus();
    }

    // ======================================================
    // FECHAR MODAL
    // ======================================================

    function fecharModal() {
        if (!modalOverlay.classList.contains("aberto")) return;

        modalOverlay.classList.remove("aberto");
        modalOverlay.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modalOportunidadeAberto");

        if (elementoAnteriorModal && typeof elementoAnteriorModal.focus === "function") {
            elementoAnteriorModal.focus();
        }
    }

    // ======================================================
    // EVENTOS DOS MODAIS
    // ======================================================

    document.addEventListener("click", evento => {
        const acionador = evento.target.closest("[data-abrir-modal]");

        if (!acionador) return;

        abrirModal(
            acionador.dataset.abrirModal,
            acionador.dataset.id
        );
    });

    botaoFecharModal.addEventListener("click", fecharModal);

    modalOverlay.addEventListener("click", evento => {
        if (evento.target === modalOverlay) {
            fecharModal();
        }
    });

    document.addEventListener("keydown", evento => {
        if (
            evento.key === "Escape" &&
            modalOverlay.classList.contains("aberto")
        ) {
            fecharModal();
        }
    });

    // ======================================================
    // INICIALIZAÇÃO
    // ======================================================

    renderizarDestaques();

    console.log("Dashboard Oportunidade carregada com sucesso.");

})();