

(() => {
    "use strict";


    const temas = [
        "Tecnologia",
        "Administrativo",
        "Indústria",
        "Comunicação",
        "Educação"
    ];


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


    const vagas = [
        {
            id: "vaga-husqvarna-aprendiz-contabilidade",
            titulo: "Aprendiz Administrativo (Contabilidade)",
            empresa: "Husqvarna",
            tema: "Administrativo",
            tipo: "Jovem Aprendiz",
            modalidade: "Não informado no anúncio",
            local: "São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Grupo internacional de produtos e soluções para áreas externas, equipamentos e ferramentas.",
            descricao: "Programa de aprendizagem para iniciar a trajetória profissional em função administrativa ligada à Contabilidade. O anúncio não detalha as tarefas contábeis do dia a dia.",
            atividades: [],
            requisitos: ["Ensino médio completo ou cursando", "Idade entre 14 e 22 anos", "Pacote Office a partir do nível intermediário"],
            diferenciais: [],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O anúncio não informa bolsa, benefícios, jornada nem atividades específicas. Confirme essas condições no processo seletivo."],
            link: "https://www.linkedin.com/jobs/view/aprendiz-administrativo-contabilidade-at-husqvarna-group-4491173305/"
        },
        {
            id: "vaga-amazon-sde-internship-mulheres",
            titulo: "Software Development Engineer Internship (vaga para mulheres)",
            empresa: "Amazon",
            tema: "Tecnologia",
            tipo: "Estágio",
            modalidade: "Presencial (trabalho no escritório, conforme anúncio)",
            local: "São Paulo e Região",
            salario: "Não informado no anúncio",
            cargaHoraria: "Tempo integral; até 40 horas semanais, de segunda a sexta, conforme o time",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa global de tecnologia e comércio eletrônico, com serviços digitais e infraestrutura em nuvem.",
            descricao: "Estágio de engenharia de software divulgado como vaga para mulheres. A pessoa estagiária participa do ciclo de desenvolvimento de soluções em escala, com acompanhamento e mentoria.",
            atividades: ["Projetar e desenvolver serviços escaláveis com arquiteturas em nuvem e microsserviços", "Colaborar com equipes multidisciplinares na criação e operação de produtos", "Escrever código, participar de revisões e documentar soluções", "Apoiar testes, implantação, monitoramento e melhoria de sistemas distribuídos", "Usar práticas ágeis e CI/CD e colaborar com ferramentas de IA generativa"],
            requisitos: ["Graduação cursando ou concluída em Ciência da Computação, Engenharia da Computação ou área relacionada", "Inglês fluente", "Ter 18 anos ou mais", "Manter ao menos um período acadêmico restante após o fim do estágio"],
            diferenciais: ["Conhecimento de C/C++, Python, Java ou Perl", "Fundamentos de orientação a objetos, sistemas operacionais, algoritmos, estruturas de dados e complexidade", "Experiência com sistemas distribuídos, sistemas multicamadas ou bancos de dados relacionais"],
            beneficios: [],
            afirmativa: "O anúncio identifica a oportunidade como vaga para mulheres.",
            observacoes: ["O anúncio informa trabalho presencial e tempo integral; a equipe comunica os horários específicos."],
            link: "https://www.linkedin.com/jobs/view/software-development-engineer-internship-vaga-para-mulheres-ies-latech-at-amazon-4455914360/"
        },
        {
            id: "vaga-webmotors-estagio-dados",
            titulo: "Estágio em Dados (Data Analytics)",
            empresa: "Webmotors",
            tema: "Tecnologia",
            tipo: "Estágio",
            modalidade: "Híbrido, com três dias presenciais",
            local: "Vila Olímpia, São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Plataforma digital do setor automotivo que conecta pessoas à compra, venda e uso de veículos.",
            descricao: "Estágio em Data Analytics para apoiar áreas parceiras com análises e produtos de dados. A função combina consultas, investigação de indicadores, documentação e comunicação de resultados.",
            atividades: ["Escrever consultas SQL no Databricks para responder a perguntas de negócio", "Construir análises descritivas e diagnósticas", "Explorar dados e apoiar estudos, produtos de dados e monitoramento de indicadores", "Documentar consultas e regras de negócio no Confluence e acompanhar tarefas no Jira", "Compartilhar resultados com o time e stakeholders", "Usar ferramentas de IA como apoio ao fluxo de análise"],
            requisitos: ["Graduação em andamento em Estatística, Matemática, Computação, Sistemas de Informação, Ciência de Dados, Engenharia ou área afim, com conclusão até 2029", "Conhecimentos introdutórios de SQL, incluindo joins, subqueries, agregações e agrupamentos", "Conhecimento introdutório de análise descritiva e diagnóstica", "Atenção a detalhes e postura orientada por dados"],
            diferenciais: ["Databricks, Delta Table e conceitos de Data Lake e Data Warehouse", "Python básico com Pandas", "Estatística descritiva e inferencial", "Portfólio de projetos no GitHub"],
            beneficios: ["Assistência médica", "Vale-refeição", "Vale-transporte", "TotalPass", "Day off de aniversário", "Seguro de vida", "Programa de apoio pessoal com suporte psicológico, nutricional, de enfermagem, social, jurídico e financeiro"],
            afirmativa: "",
            observacoes: ["O modelo informado prevê três dias presenciais ao lado da Estação Vila Olímpia."],
            link: "https://www.linkedin.com/jobs/view/est%C3%A1gio-em-dados-data-analytics-at-webmotors-4469021717/"
        },
        {
            id: "vaga-klabin-estagio-ti-digital-lab",
            titulo: "Estágio em TI Digital Lab",
            empresa: "Klabin",
            tema: "Tecnologia",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Produtora de celulose, papéis para embalagens e soluções de base florestal, com foco em sustentabilidade.",
            descricao: "O estágio integra o TI Digital Lab e o Programa de Estágio Klabin. A proposta aproxima estudantes de projetos e tecnologias e oferece uma trilha de desenvolvimento em negócios, autoconhecimento e ferramentas.",
            atividades: ["Participar de projetos e ter contato com tecnologias da Klabin no contexto do TI Digital Lab; o anúncio consultado não detalha tarefas técnicas específicas"],
            requisitos: [],
            diferenciais: [],
            beneficios: ["Vale-refeição em São Paulo ou refeitório em outras unidades", "Kit natalino", "Assistência médica e odontológica", "Wellhub", "Seguro de vida", "Campanha de vacinação contra gripe", "Apoio psicológico, nutricional, social, jurídico e financeiro"],
            afirmativa: "",
            observacoes: ["O trecho consultado não apresentou requisitos, modalidade, bolsa ou jornada detalhados. Confirme esses dados no anúncio."],
            link: "https://www.linkedin.com/jobs/view/est%C3%A1gio-em-ti-digital-lab-s%C3%A3o-paulo-sp-at-klabin-4487779313/"
        },
        {
            id: "vaga-ecolab-estagio-rh",
            titulo: "Estágio em Recursos Humanos",
            empresa: "Ecolab",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "Barra Funda, São Paulo, SP",
            salario: "Bolsa de estágio; valor varia conforme região e ano de matrícula",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa global de soluções e serviços de água, higiene e prevenção de infecções, presente em diversos setores.",
            descricao: "Estágio em operações de Recursos Humanos com contato direto com a experiência dos colaboradores. A pessoa estagiária apoia folha, benefícios, férias, ponto e atendimento, além de desenvolver habilidades de controle e análise.",
            atividades: ["Atender solicitações sobre folha, benefícios, férias, ponto, declarações, atestados e cadastros", "Atualizar relatórios diários e bases de benefícios", "Apoiar conferências e alterações de férias", "Ajudar no tratamento de ponto e orientar colaboradores e gestores", "Dar suporte a atividades de folha e à análise inicial de divergências"],
            requisitos: ["Graduação ou tecnólogo em andamento em Administração, Recursos Humanos ou área correlata", "Curso no período noturno; não pode ser em período integral", "Disponibilidade para estagiar por pelo menos 1 ano e meio a 2 anos", "Residir em São Paulo ou ter fácil acesso à Barra Funda", "Pacote Office intermediário, com foco em Excel", "Interesse em RH e facilidade com controles, relatórios e análise de informações"],
            diferenciais: ["Conhecimento em ADP", "Noções prévias de Recursos Humanos", "Inglês intermediário", "Boa comunicação e atenção a detalhes"],
            beneficios: ["Auxílio-refeição", "Auxílio-transporte", "Seguro de vida", "Plano de saúde individual", "Wellhub", "Universidade corporativa"],
            afirmativa: "",
            observacoes: ["O valor da bolsa varia conforme região e ano de matrícula; o anúncio não publica o valor exato."],
            link: "https://www.linkedin.com/jobs/view/est%C3%A1gio-em-recursos-humanos-barra-funda-sp-at-ecolab-4468831115/"
        },
        {
            id: "vaga-dexco-estagio-rh",
            titulo: "Estagiária(o) Superior em Recursos Humanos",
            empresa: "Dexco",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Híbrido",
            local: "Água Branca, São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "9h às 16h",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa brasileira de materiais para construção, acabamentos e soluções para casa, com inovação e ESG entre seus pilares.",
            descricao: "Estágio no Programa Geração D para apoiar processos de Recursos Humanos na unidade de Metais em São Paulo, com participação em rotinas de gestão de pessoas e iniciativas de desenvolvimento e clima.",
            atividades: ["Apoiar recrutamento e seleção e alinhamentos com gestores", "Auxiliar em admissões, movimentações e desligamentos", "Dar suporte a ações de desenvolvimento, engajamento, clima e avaliação de desempenho", "Acompanhar indicadores, relatórios e bases de dados de RH", "Atender colaboradores e gestores e preparar apresentações e comunicados", "Apoiar projetos e controles administrativos da área"],
            requisitos: ["Graduação em andamento em Administração, Psicologia, Recursos Humanos ou área correlata", "Pacote Office intermediário, especialmente Excel e PowerPoint", "Boa comunicação, organização e proatividade", "Interesse em desenvolver conhecimentos de Recursos Humanos"],
            diferenciais: ["Experiência anterior em Recursos Humanos"],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O anúncio informa modelo híbrido, local de trabalho na Água Branca e horário das 9h às 16h. Não informa salário nem benefícios."],
            link: "https://www.linkedin.com/jobs/view/estagi%C3%A1ria-o-superior-recursos-humanos-at-dexco-4490814631/"
        },
        {
            id: "vaga-agility-estagio-marketing",
            titulo: "Estagiário(a) de Marketing",
            empresa: "Agility",
            tema: "Comunicação",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa de tecnologia e serviços de TI que atua com soluções de fabricantes e suporte a clientes empresariais.",
            descricao: "Estágio para apoiar a organização de dados e operações de Marketing, mantendo informações de contatos, leads e eventos atualizadas para as equipes de Vendas e Alianças.",
            atividades: ["Higienizar e atualizar listas e mailings por segmento, solução, fabricante e conta-alvo", "Registrar leads no Salesforce com origem, campanha e status", "Manter bases de BDRs, channel managers e contatos dos fabricantes", "Preparar listas de convidados e follow-up de eventos e campanhas", "Apoiar relatórios de qualidade da base e o calendário de conteúdo e redes sociais"],
            requisitos: ["Cursar Marketing, Publicidade e Propaganda, Comunicação Social ou Administração com ênfase em Marketing", "Estar a partir do segundo ano e ter pelo menos 12 meses até a formatura", "Excel ou Google Sheets intermediário", "Conhecimento de redes profissionais, especialmente LinkedIn"],
            diferenciais: [],
            beneficios: ["Vale-transporte", "Auxílio-alimentação", "Assistência médica e odontológica opcionais", "Seguro de vida", "Cesta de Natal", "Convênio Sesc", "Vale-presente no mês de aniversário", "Day off"],
            afirmativa: "",
            observacoes: ["O anúncio não informa valor de bolsa, jornada nem modelo de trabalho."],
            link: "https://www.linkedin.com/jobs/view/estagi%C3%A1rio-a-marketing-at-agility-4492509877/"
        },
        {
            id: "vaga-reckitt-estagio-hrbp-industrial",
            titulo: "Estágio em HRBP Industrial",
            empresa: "Reckitt",
            tema: "Indústria",
            tipo: "Estágio",
            modalidade: "Presencial",
            local: "Fábrica na Rodovia Raposo Tavares, km 18, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Segunda a sexta, das 9h às 16h",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa global de bens de consumo e saúde, dona de marcas como Vanish, Veja, Finish, Harpic, Luftal, Olla e Veet.",
            descricao: "Estágio de Recursos Humanos junto à operação industrial. A função apoia rotinas de HRBP, processos de gestão de pessoas, comunicação e atendimento a lideranças e equipes.",
            atividades: ["Acompanhar movimentações internas e validações com gestores", "Apoiar desligamentos e admissões, incluindo agenda de onboarding", "Organizar eventos, comunicação interna e iniciativas de reconhecimento", "Preparar indicadores de banco de horas e horas extras e atualizar bases de terceiros", "Apoiar auditorias, controles de folha, fornecedores e requisições de compra"],
            requisitos: ["Ensino superior em andamento em Administração, Engenharia, Economia ou área relacionada, com formação prevista até julho de 2029", "Disponibilidade para atuar presencialmente de segunda a sexta, das 9h às 16h", "Excel avançado e Pacote Office intermediário", "Organização, trabalho em equipe, discrição, ética, adaptabilidade e proatividade", "Ter 18 anos ou mais"],
            diferenciais: [],
            beneficios: [],
            afirmativa: "",
            observacoes: ["A página traz benefícios gerais apresentados como possíveis, sem confirmar quais se aplicam a esta vaga; confirme com a empresa."],
            link: "https://www.linkedin.com/jobs/view/est%C3%A1gio-em-hrbp-reckitt-industrial-at-reckitt-4492210890/"
        },
        {
            id: "vaga-panasonic-aprendiz-administrativo",
            titulo: "Jovem Aprendiz Administrativo",
            empresa: "Panasonic do Brasil",
            tema: "Administrativo",
            tipo: "A confirmar",
            modalidade: "Híbrido (conforme anúncio)",
            local: "Chácara Santo Antônio, São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Parcial pela manhã; horário exato não informado",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa japonesa de tecnologia e eletrônicos, com atuação internacional em produtos e soluções para consumidores e negócios.",
            descricao: "Oportunidade administrativa para apoiar rotinas internas da Panasonic, com contato com documentos fiscais, sistemas, planilhas e registros patrimoniais.",
            atividades: ["Apoiar rotinas administrativas da área", "Apoiar lançamentos e controle de notas fiscais", "Atualizar informações em sistemas e planilhas", "Dar suporte a inventário e registros patrimoniais", "Atender demandas internas"],
            requisitos: ["Ensino médio cursando ou completo", "Conhecimento básico de Word e Excel", "Interesse em desenvolver conhecimentos administrativos"],
            diferenciais: [],
            beneficios: ["Assistência médica", "Vale-refeição", "Vale-transporte", "Seguro de vida", "TotalPass", "Desconto em produtos"],
            afirmativa: "",
            observacoes: ["Há divergência no próprio anúncio: o título diz Jovem Aprendiz, enquanto o campo de regime informa Estágio. Confirme o tipo de contrato com o recrutador.", "A publicação informa início previsto em 13/01/2027 e modalidade híbrida."],
            link: "https://www.linkedin.com/jobs/view/jovem-aprendiz-administrativo-at-panasonic-do-brasil-4491872240/"
        },
        {
            id: "vaga-elo-jovem-aprendiz-tecnologia",
            titulo: "Programa Jovem Aprendiz em Tecnologia",
            empresa: "Elo",
            tema: "Tecnologia",
            tipo: "Jovem Aprendiz",
            modalidade: "Híbrido",
            local: "São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "4 horas por dia, de segunda a sexta",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Empresa brasileira de tecnologia de pagamentos e soluções financeiras, com serviços ligados a pagamentos digitais.",
            descricao: "Programa de aprendizagem voltado a jovens interessados em tecnologia e inovação. A jornada combina experiência em áreas de tecnologia da Elo com desenvolvimento de habilidades comportamentais, dados e inteligência artificial.",
            atividades: ["Apoiar testes de sistemas, documentação e fluxos de processos", "Usar ferramentas como Excel e PowerPoint e, conforme a área, linguagens de programação", "Participar de reuniões de times ágeis e colaborar com equipes de tecnologia", "Desenvolver projetos envolvendo IA e tecnologia de dados"],
            requisitos: ["Ter entre 16 e 20 anos", "Estar cursando ou ter concluído o Ensino Médio", "Ter disponibilidade para jornada de quatro horas por dia, de segunda a sexta", "Poder estudar no período noturno", "Ter disponibilidade para o modelo híbrido e interesse em tecnologia"],
            diferenciais: [],
            beneficios: ["Assistência médica", "Seguro de vida", "Vale-refeição/alimentação de R$ 1.000", "Saldo livre de R$ 150", "Cartão de Natal de R$ 850", "Auxílio home office de R$ 220", "Auxílio mobilidade de R$ 440", "Estacionamento", "Auxílio cultura", "Day off de aniversário", "Wellhub e TotalPass", "Plataforma de bem-estar"],
            afirmativa: "",
            observacoes: ["O anúncio descreve rotina híbrida com idas ao escritório e ao agente integrador; confirme a escala exata na candidatura."],
            link: "https://www.linkedin.com/jobs/view/programa-de-jovem-aprendiz-%C3%A1reas-de-tecnologia-at-elo-4490915977/"
        },
        {
            id: "vaga-artefact-intern-data-engineer",
            titulo: "Estágio em Data Engineering",
            empresa: "Artefact",
            tema: "Tecnologia",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "São Paulo e Região",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Consultoria internacional especializada em dados, inteligência artificial e marketing digital orientado por dados.",
            descricao: "Estágio de engenharia de dados em equipe multidisciplinar. A pessoa estagiária participa da concepção e implementação de soluções para clientes, com atenção a desempenho e escalabilidade.",
            atividades: ["Colaborar com equipes de consultoria, dados, criação e engenharia para entender necessidades dos clientes", "Desenvolver e implementar soluções de dados ao longo do ciclo do projeto", "Atuar com infraestrutura e plataformas, coleta de dados, APIs, testes e implantação contínua", "Participar de atividades de aprendizado e compartilhamento de conhecimento"],
            requisitos: ["Bom conhecimento de Python", "Inglês em bom nível", "Capacidade de trabalhar com equipes de diferentes perfis, priorizar tarefas e cumprir prazos"],
            diferenciais: ["Java ou Scala", "CLI em ambiente Unix", "Cloud como GCP ou AWS", "Spark, Flink ou Beam", "Docker; Kubernetes é um diferencial adicional"],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O anúncio consultado não especifica salário, benefícios, modalidade ou jornada."],
            link: "https://www.linkedin.com/jobs/view/intern-data-engineer-brazil-at-artefact-4432029045/"
        },
        {
            id: "vaga-oticas-gassi-estagio-franquias",
            titulo: "Estágio na área de Franquias",
            empresa: "Óticas Gassi",
            tema: "Comunicação",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "Francisco Morato, SP",
            salario: "Bolsa de R$ 1.000,00",
            cargaHoraria: "Manhã e tarde; horário exato não informado",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Rede brasileira do segmento óptico, com operação de lojas e franquias.",
            descricao: "Estágio de apoio à área de franquias, com foco no primeiro contato e acompanhamento de pessoas interessadas em se tornar franqueadas.",
            atividades: ["Fazer contato inicial com interessados por WhatsApp e telefone", "Qualificar contatos e identificar aderência ao perfil divulgado", "Agendar reuniões entre gerência e contatos qualificados", "Registrar informações no CRM e acompanhar leads nas etapas iniciais", "Apoiar prospecção e relacionamento com potenciais investidores"],
            requisitos: ["Ensino Médio", "Boa comunicação escrita e verbal", "Conhecimento de redes sociais, Canva e Pacote Office", "Organização, proatividade e criatividade", "Interesse por comunicação corporativa e marketing institucional"],
            diferenciais: ["Noções de fotografia e edição de imagens", "Experiência com conteúdo para redes sociais", "Noções de marketing digital e endomarketing"],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O anúncio informa bolsa de R$ 1.000 e horários entre manhã e tarde, sem indicar carga horária exata. Não identifica a oportunidade como exclusiva para mulheres."],
            link: "https://www.linkedin.com/jobs/view/estagi%C3%A1rio-at-%C3%B3ticas-gassi-4489021790/"
        },
        {
            id: "vaga-haleon-estagio-financas",
            titulo: "Estágio em Finanças (vaga afirmativa para mulheres)",
            empresa: "Haleon",
            tema: "Administrativo",
            tipo: "Estágio",
            modalidade: "Não informado no anúncio",
            local: "São Paulo, SP; a página também indica Rio de Janeiro e Região",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "27/11/2026",
            sobreEmpresa: "Empresa global de saúde do consumidor, com marcas como Sensodyne, Panadol, Advil, Voltaren, Theraflu e Centrum.",
            descricao: "Estágio em Finanças afirmativo para mulheres, com atividades de controle e análise financeira ligadas às áreas industriais e suporte a decisões baseadas em dados.",
            atividades: ["Acompanhar despesas das áreas da fábrica", "Preparar relatórios, análises e controles em Excel", "Monitorar indicadores e identificar desvios em relação ao planejamento", "Acompanhar ordens de produção e variações entre planejado e realizado", "Apoiar fechamento mensal, business cases, apresentações e melhorias de processos"],
            requisitos: ["Graduação a partir do 4º período em Finanças, Engenharia, Administração, Economia, Ciências Contábeis ou área relacionada", "Disponibilidade para cumprir dois anos de estágio", "Excel avançado", "Inglês avançado", "Perfil analítico e interesse por indicadores financeiros"],
            diferenciais: ["Power BI", "Experiência em atividades financeiras", "Vivência em ambiente industrial"],
            beneficios: [],
            afirmativa: "Vaga afirmativa para mulheres, conforme o título do anúncio.",
            observacoes: ["O anúncio indica prazo de inscrição até 27/11/2026.", "A localização diverge entre o cabeçalho da vaga e a identificação regional da página; confirme a unidade com a empresa."],
            link: "https://www.linkedin.com/jobs/view/est%C3%A1gio-em-finan%C3%A7as-jpa-vaga-afirmativa-para-mulheres-at-haleon-4491877557/"
        },
        {
            id: "vaga-csu-assistente-administrativa",
            titulo: "Assistente Administrativa",
            empresa: "CSU Digital",
            tema: "Administrativo",
            tipo: "A confirmar",
            modalidade: "A confirmar",
            local: "A confirmar",
            salario: "A confirmar",
            cargaHoraria: "A confirmar",
            prazo: "A confirmar",
            sobreEmpresa: "Empresa brasileira de serviços tecnológicos, relacionamento com clientes e soluções digitais.",
            descricao: "Oportunidade mantida na lista conforme solicitado. O link de busca fornecido não permitiu confirmar uma publicação para o cargo Assistente Administrativa; os detalhes da função não são presumidos.",
            atividades: [],
            requisitos: [],
            diferenciais: [],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O link fornecido leva a uma busca do LinkedIn e o resultado associado ao identificador atual apresenta outro cargo, Assistente de Suporte Operacional. É necessário localizar o anúncio correto de Assistente Administrativa antes de confirmar atribuições, contrato, local, salário, benefícios ou prazo."],
            link: "https://www.linkedin.com/jobs/search-results/?currentJobId=4483252055&keywords=CSU%20Digital%20Assistente%20Administrativa"
        },
        {
            id: "vaga-deloitte-assistente-administrativo",
            titulo: "Assistente Administrativo",
            empresa: "Deloitte",
            tema: "Administrativo",
            tipo: "A confirmar",
            modalidade: "Híbrido; frequência presencial varia conforme a área",
            local: "São Paulo, SP",
            salario: "Não informado no anúncio",
            cargaHoraria: "Não informado no anúncio",
            prazo: "Consultar anúncio",
            sobreEmpresa: "Organização global de serviços profissionais e consultoria, com atuação em diferentes áreas de negócio.",
            descricao: "Função de apoio administrativo e comercial, com acompanhamento de cadastros, pedidos e informações e interface com equipes internas e clientes.",
            atividades: ["Apoiar rotinas administrativas da área de vendas", "Cadastrar e atualizar clientes em sistema", "Acompanhar pedidos de venda e o processo de aprovação", "Fazer interface com equipes internas e clientes para acompanhar demandas", "Elaborar e atualizar controles, relatórios e planilhas"],
            requisitos: ["Experiência prévia em rotinas administrativas, de preferência com suporte comercial ou de vendas", "Inglês fluente", "Conhecimento básico ou intermediário de Excel", "Disponibilidade para atuar presencialmente no cliente"],
            diferenciais: ["Conhecimento básico de SAP", "Experiência com Microsoft Teams e Zoom", "Vivência em ambiente corporativo de grande porte"],
            beneficios: [],
            afirmativa: "",
            observacoes: ["O anúncio descreve o modelo Digital Workplace como híbrido; a frequência presencial varia conforme a área e a necessidade do cliente. Não confirma regime contratual, salário nem benefícios."],
            link: "https://www.linkedin.com/jobs/view/assistente-administrativo-s%C3%A3o-paulo-at-deloitte-4482495878/"
        }
    ];

    const logosEmpresas = {
        "Husqvarna": "img/DashOportunidade/Husqvarna.png",
        "Amazon": "img/DashOportunidade/Amazon.png",
        "Webmotors": "img/DashOportunidade/webmotors.png",
        "Klabin": "img/DashOportunidade/Klabin.webp",
        "Ecolab": "img/DashOportunidade/Ecolab.png",
        "Dexco": "img/DashOportunidade/dexco.png",
        "Agility": "img/DashOportunidade/agility.png",
        "Reckitt": "img/DashOportunidade/reckitt.png",
        "Panasonic do Brasil": "img/DashOportunidade/Panasonic.webp",
        "Elo": "img/DashOportunidade/EloLogo.png",
        "Artefact": "img/DashOportunidade/Artefact.png",
        "Óticas Gassi": "img/DashOportunidade/oticasGassi.png",
        "Haleon": "img/DashOportunidade/Haleon.png",
        "CSU Digital": "img/DashOportunidade/CSUDigital.png",
        "Deloitte": "img/DashOportunidade/deloitte.webp"
    };

    const imagensCursoPorTema = {
        "Tecnologia": "img/DashOportunidade/tecnologia.jpg",
        "Administrativo": "img/DashOportunidade/administrativo.jpg",
        "Comunicação": "img/DashOportunidade/comunicacao.jpg"
    };

    function imagemDoCurso(curso) {
        return curso.imagem || imagensCursoPorTema[curso.tema] || "";
    }

    function logoDaVaga(vaga) {
        const caminhoLogo = logosEmpresas[vaga.empresa];

        if (!caminhoLogo) {
            return `<span>${escapar(vaga.empresa.substring(0, 1))}</span>`;
        }

        return `
            <img
                src="${escapar(caminhoLogo)}"
                alt="Logo de ${escapar(vaga.empresa)}">
        `;
    }


    const paginaInicial = document.getElementById("paginaInicialOportunidade");
    const paginaListagem = document.getElementById("paginaListagemOportunidade");

    const resultados = document.getElementById("resultadosListagem");
    const filtros = document.getElementById("filtrosListagem");
    const mensagemVazia = document.getElementById("mensagemSemResultados");

    const campoPesquisaListagem = document.getElementById("campoPesquisaListagem");
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


    let tipoAtual = "cursos";
    let temaAtual = "";
    let valorAtual = "Todos";
    let tipoVagaAtual = "Todos";
    let pesquisaAtual = "";
    let elementoAnteriorModal = null;


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
                .flatMap(valor => Array.isArray(valor)
                    ? valor
                    : typeof valor === "string"
                        ? [valor]
                        : [])
                .join(" ");

            return normalizar(conteudo).includes(busca);
        });
    }


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
                    : "";

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
                        ${["Todos", ...new Set(vagas.map(vaga => vaga.tipo))].map(item => `
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


    function cardCurso(curso) {
        const caminhoImagem = imagemDoCurso(curso);
        const imagem = caminhoImagem
            ? `<img src="${escapar(caminhoImagem)}" alt="Imagem do curso ${escapar(curso.titulo)}">`
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
                        ${logoDaVaga(vaga)}
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


    function renderizarResultados() {
        if (tipoAtual === "tema") {
            renderizarResultadosPorTema();
        } else {
            renderizarResultadosGerais();
        }
    }


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


    document.querySelectorAll(".cardAcesso").forEach(botao => {
        botao.addEventListener("click", () => {
            abrirListagem("tema", botao.dataset.tema);
        });
    });


    document.querySelectorAll("[data-abrir-lista]").forEach(botao => {
        botao.addEventListener("click", () => {
            abrirListagem(botao.dataset.abrirLista);
        });
    });


    const botaoVoltar = document.getElementById("voltarOportunidades");

    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", voltarInicio);
    }


    function renderizarDestaques() {
        const elementoCursoDestaque = document.getElementById("cursoDestaque");
        const elementoListaVagas = document.getElementById("listaVagasDestaque");

        const destaque = cursos.find(item => item.titulo === "Power BI") || cursos[0];
        const imagemDestaque = imagemDoCurso(destaque);

        if (elementoCursoDestaque) {
            elementoCursoDestaque.innerHTML = `
                <button
                    type="button"
                    class="cursoDestaqueBotao"
                    data-abrir-modal="curso"
                    data-id="${escapar(destaque.id)}">

                    <div class="imagemDestaqueCurso">
                        ${imagemDestaque
                            ? `<img src="${escapar(imagemDestaque)}" alt="Imagem do curso ${escapar(destaque.titulo)}">`
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


    function montarModalCurso(curso) {
        const gratuito = curso.valor === "Gratuito";
        const caminhoImagem = imagemDoCurso(curso);

        const imagem = caminhoImagem
            ? `<img src="${escapar(caminhoImagem)}" alt="Imagem ilustrativa do curso ${escapar(curso.titulo)}">`
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
                <div class="imagemModalOportunidade ${caminhoImagem ? "" : "imagemModalSemFoto"}">
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

    function secaoListaModal(titulo, itens) {
        const lista = (Array.isArray(itens) ? itens : [itens])
            .filter(item => typeof item === "string" && item.trim());

        if (!lista.length) return "";

        return `
            <section class="secaoDescricaoModal">
                <h3>${escapar(titulo)}</h3>
                <ul class="listaDetalhesModal">
                    ${lista.map(item => `<li>${escapar(item)}</li>`).join("")}
                </ul>
            </section>
        `;
    }


    function montarModalVaga(vaga) {
        const empresa = valorSeguro(vaga.empresa);
        const afirmativa = vaga.afirmativa
            ? '<p class="avisoAfirmativo"><i class="fa-solid fa-venus"></i>' +
                escapar(vaga.afirmativa) +
                '</p>'
            : "";

        return [
            '<header class="topoModalOportunidade">',
                '<span class="categoriaModal"><i class="fa-solid fa-briefcase"></i> VAGA DE EMPREGO</span>',
                '<h2 id="modalTituloOportunidade">' + escapar(vaga.titulo) + '</h2>',
                '<p class="subtituloModal">' + escapar(empresa) + '</p>',
                '<div class="tagsModal">',
                    '<span class="tagModal">' + escapar(vaga.tema) + '</span>',
                    '<span class="tagModal tagModalPago">' + escapar(vaga.tipo) + '</span>',
                    '<span class="tagModal">' + escapar(vaga.modalidade) + '</span>',
                '</div>',
                afirmativa,
            '</header>',
            '<div class="corpoModalOportunidade">',
                '<div class="imagemModalOportunidade imagemModalSemFoto imagemLogoModal">' +
                    logoDaVaga(vaga) +
                '</div>',
                '<section class="secaoDescricaoModal">',
                    '<h3>Sobre a empresa</h3>',
                    '<p>' + escapar(valorSeguro(vaga.sobreEmpresa)) + '</p>',
                '</section>',
                '<section class="secaoDescricaoModal">',
                    '<h3>Conheça a oportunidade</h3>',
                    '<p>' + escapar(valorSeguro(vaga.descricao)) + '</p>',
                '</section>',
                secaoListaModal("Principais atividades", vaga.atividades),
                secaoListaModal("Requisitos e qualificações", vaga.requisitos),
                secaoListaModal("Diferenciais", vaga.diferenciais),
                secaoListaModal("Benefícios", vaga.beneficios),
                '<section class="secaoArtigoModal">',
                    '<h3>Informações da contratação</h3>',
                    '<div class="informacoesModal">',
                        campoModal("Empresa", vaga.empresa),
                        campoModal("Área", vaga.tema),
                        campoModal("Tipo de contratação", vaga.tipo),
                        campoModal("Modalidade", vaga.modalidade),
                        campoModal("Localização", vaga.local),
                        campoModal("Salário ou bolsa", vaga.salario),
                        campoModal("Carga horária", vaga.cargaHoraria),
                        campoModal("Prazo de inscrição", vaga.prazo),
                    '</div>',
                '</section>',
                secaoListaModal("Observações importantes", vaga.observacoes),
                '<div class="avisoModalExterno"><i class="fa-solid fa-circle-info"></i>' +
                    '<span>Consulte o anúncio original para confirmar disponibilidade e condições antes de se candidatar.</span>' +
                '</div>',
                botaoExterno(vaga.link, "Ver oportunidade"),
            '</div>'
        ].join("");
    }


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


    function fecharModal() {
        if (!modalOverlay.classList.contains("aberto")) return;

        modalOverlay.classList.remove("aberto");
        modalOverlay.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modalOportunidadeAberto");

        if (elementoAnteriorModal && typeof elementoAnteriorModal.focus === "function") {
            elementoAnteriorModal.focus();
        }
    }


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


    renderizarDestaques();

    console.log("Dashboard Oportunidade carregada com sucesso.");

})();
