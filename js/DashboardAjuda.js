
// ==========================================
// DASHBOARD AJUDA - ELO D'ELAS
// Biblioteca de tutoriais, favoritos e finalizados
// ==========================================

(() => {
    "use strict";

    const STORAGE_FAVORITES = "eloAjuda_favoritos";
    const STORAGE_COMPLETED = "eloAjuda_finalizados";
    const STORAGE_RATINGS = "eloAjuda_avaliacoes";

    // ==========================================
    // BANCO DE TUTORIAIS
    // ==========================================

    const tutorials = [

        {
            id: "frutas",
            title: "Como escolher frutas e verduras?",
            category: "Casa e alimentação",
            description: "Observe aparência, textura, aroma e conservação para escolher alimentos frescos e reduzir desperdícios.",
            icon: "fa-apple-whole",
            image: "img/tutoriais/FrutasModal.jpg",
            intro: "Escolher frutas e verduras de qualidade não exige experiência: alguns sinais visuais, o toque adequado e o cuidado com a conservação já ajudam bastante. O ponto ideal de maturação também depende de quando você pretende consumir o alimento.",
            sections: [
                {
                    title: "1. Observe antes de tocar",
                    paragraphs: [
                        "Prefira alimentos sem partes mofadas, vazamentos, cortes profundos ou áreas muito amassadas. Pequenas marcas superficiais nem sempre indicam que o alimento está impróprio, mas machucados profundos aceleram a deterioração.",
                        "Nas folhas, procure cores vivas e textura firme. Evite folhas viscosas, com cheiro desagradável ou muito murchas."
                    ]
                },
                {
                    title: "2. Confira a maturação",
                    bullets: [
                        "Abacate: cede levemente à pressão suave, sem ficar mole demais.",
                        "Melão e melancia: escolha unidades firmes, sem rachaduras ou áreas afundadas.",
                        "Banana: a casca pode ter pintas conforme o grau de maturação desejado.",
                        "Tomate: deve estar firme e com aroma característico, sem partes vazando.",
                        "Folhas: devem estar frescas, sem excesso de umidade ou sinais de apodrecimento."
                    ]
                },
                {
                    title: "3. Transporte e armazene corretamente",
                    paragraphs: [
                        "Separe frutas muito maduras das mais firmes e evite esmagar folhas e alimentos delicados no fundo das sacolas. Em casa, retire partes danificadas, higienize os alimentos conforme a orientação sanitária e seque bem as folhas antes de armazená-las."
                    ]
                }
            ],
            tip: "Compre primeiro a quantidade que sua casa costuma consumir. Planejar as refeições da semana ajuda a economizar e evita que alimentos estraguem."
        },

        {
            id: "bolo",
            title: "Receita: bolo de cenoura fofinho",
            category: "Casa e alimentação",
            description: "Prepare uma massa simples, com medidas equilibradas e cobertura de chocolate.",
            icon: "fa-cake-candles",
            image: "img/tutoriais/BoloModal.webp",
            intro: "Esta receita rende um bolo médio. Para uma massa leve, bata bem os ingredientes líquidos e misture a farinha delicadamente no final.",
            sections: [
                {
                    title: "Ingredientes da massa",
                    bullets: [
                        "3 cenouras médias descascadas e picadas (aproximadamente 250 g)",
                        "3 ovos",
                        "1/2 xícara de óleo",
                        "1 e 1/2 xícara de açúcar",
                        "2 xícaras de farinha de trigo",
                        "1 colher (sopa) de fermento químico em pó"
                    ]
                },
                {
                    title: "Modo de preparo",
                    bullets: [
                        "Preaqueça o forno a 180 °C e unte uma forma média.",
                        "Bata no liquidificador a cenoura, os ovos, o óleo e o açúcar até obter uma mistura homogênea.",
                        "Transfira para uma tigela e incorpore a farinha aos poucos.",
                        "Adicione o fermento por último, misturando suavemente.",
                        "Despeje na forma e asse por cerca de 35 a 45 minutos. Faça o teste do palito: ele deve sair sem massa crua.",
                        "Espere amornar antes de desenformar."
                    ]
                },
                {
                    title: "Cobertura simples",
                    paragraphs: [
                        "Leve ao fogo baixo 4 colheres de sopa de leite, 3 colheres de sopa de chocolate em pó, 2 colheres de sopa de açúcar e 1 colher de sopa de manteiga. Mexa até engrossar levemente e espalhe sobre o bolo."
                    ]
                }
            ],
            tip: "Se a cenoura for muito grande ou estiver em excesso, a massa pode ficar pesada. Pese ou aproxime a quantidade indicada e não bata a farinha no liquidificador."
        },

        {
            id: "sobrecarga",
            title: "Como lidar com a sobrecarga de tarefas?",
            category: "Organização e bem-estar",
            description: "Organize prioridades, divida tarefas e estabeleça limites para construir uma rotina mais possível.",
            icon: "fa-list-check",
            image: "img/tutoriais/SobrecargaModal.jpg",
            intro: "Quando tudo parece urgente, fica difícil saber por onde começar. Organizar as demandas não elimina todos os problemas, mas ajuda a enxergar o que realmente precisa de atenção e o que pode esperar.",
            sections: [
                {
                    title: "1. Tire as tarefas da cabeça",
                    paragraphs: [
                        "Anote compromissos, tarefas domésticas, estudos e demandas de trabalho em um único lugar. Registrar tudo reduz a necessidade de tentar lembrar de cada detalhe o tempo todo."
                    ]
                },
                {
                    title: "2. Separe por prioridade",
                    bullets: [
                        "Precisa ser feito hoje: tarefas com prazo real ou consequência imediata.",
                        "Importante, mas pode ser agendado: atividades relevantes sem urgência imediata.",
                        "Pode esperar ou ser compartilhado: tarefas que podem ser renegociadas, delegadas ou simplificadas."
                    ]
                },
                {
                    title: "3. Trabalhe em etapas",
                    paragraphs: [
                        "Transforme tarefas grandes em ações pequenas e concretas. Em vez de escrever 'organizar a casa', por exemplo, defina 'guardar a roupa' e 'limpar a bancada'. Faça uma etapa por vez e inclua pausas realistas."
                    ]
                },
                {
                    title: "4. Reveja seus limites",
                    paragraphs: [
                        "Quando possível, converse sobre prazos, peça ajuda e diga com clareza quando não consegue assumir mais uma demanda. Descanso, alimentação e sono não são recompensas: fazem parte de uma rotina sustentável."
                    ]
                }
            ],
            tip: "Se a sobrecarga estiver persistente, afetando seu sono, sua saúde ou sua capacidade de realizar atividades, considere buscar apoio de um profissional de saúde."
        },

        {
            id: "seguranca",
            title: "Como se proteger no ambiente digital?",
            category: "Tecnologia",
            description: "Aprenda medidas práticas para proteger contas, dados pessoais e dispositivos contra golpes.",
            icon: "fa-shield-halved",
            image: "img/tutoriais/SegurancaModal.jpg",
            intro: "A segurança digital é construída por hábitos simples. Nenhuma medida garante risco zero, mas combinar senhas fortes, autenticação em duas etapas e atenção a mensagens suspeitas reduz bastante a exposição.",
            sections: [
                {
                    title: "1. Proteja suas senhas",
                    bullets: [
                        "Use uma senha diferente para cada conta importante.",
                        "Prefira senhas longas, difíceis de adivinhar e sem informações pessoais óbvias.",
                        "Considere usar um gerenciador de senhas confiável.",
                        "Ative a autenticação em duas etapas, especialmente no e-mail e nas redes sociais."
                    ]
                },
                {
                    title: "2. Desconfie de mensagens urgentes",
                    paragraphs: [
                        "Golpistas podem fingir ser bancos, lojas, entregadores ou pessoas conhecidas. Desconfie de pedidos inesperados de dinheiro, códigos de verificação, senhas ou dados pessoais. Não clique em links recebidos sem verificar o remetente."
                    ]
                },
                {
                    title: "3. Confira antes de pagar",
                    bullets: [
                        "Verifique o nome do beneficiário antes de confirmar um Pix.",
                        "Entre no aplicativo ou site oficial digitando o endereço, em vez de usar links suspeitos.",
                        "Se alguém conhecido pedir dinheiro por mensagem, confirme por outro canal."
                    ]
                },
                {
                    title: "4. Mantenha seus dispositivos atualizados",
                    paragraphs: [
                        "Instale atualizações do sistema e dos aplicativos, use bloqueio de tela e evite realizar operações sensíveis em redes Wi-Fi públicas."
                    ]
                }
            ],
            tip: "Se você informar uma senha ou código em um site suspeito, altere a senha pelo canal oficial, encerre sessões desconhecidas e contate a instituição envolvida."
        },

        {
            id: "pneu",
            title: "Como trocar um pneu com segurança",
            category: "Logística e autonomia",
            description: "Entenda os cuidados, equipamentos e etapas básicas para substituir um pneu furado.",
            icon: "fa-car",
            image: "img/tutoriais/PneuModal.jpg",
            intro: "Trocar um pneu exige atenção e só deve ser feito quando o veículo estiver em um local realmente seguro. Se você estiver em uma rodovia, acostamento estreito, curva, local escuro ou com tráfego próximo, não tente realizar o procedimento: afaste-se para um lugar protegido e peça assistência.",
            sections: [
                {
                    title: "Antes de começar",
                    bullets: [
                        "Estacione em piso firme, plano e afastado do fluxo de veículos. Ligue o pisca-alerta e acione o freio de estacionamento.",
                        "Peça que todas as pessoas saiam pelo lado seguro e fiquem longe da pista.",
                        "Consulte o manual do veículo para localizar os pontos corretos de apoio do macaco.",
                        "Separe estepe em condições de uso, macaco, chave de roda e triângulo de sinalização. Posicione o triângulo conforme as regras locais e sem se expor ao tráfego."
                    ]
                },
                {
                    title: "Etapas básicas",
                    bullets: [
                        "Com o carro ainda apoiado no chão, afrouxe levemente os parafusos, sem removê-los.",
                        "Posicione o macaco somente no ponto indicado pelo fabricante e eleve o veículo até a roda ficar livre.",
                        "Retire os parafusos e a roda, mantendo mãos e pés fora debaixo do veículo.",
                        "Encaixe o estepe, coloque os parafusos e aperte inicialmente à mão.",
                        "Baixe o veículo até o pneu tocar o chão e faça o aperto em sequência cruzada, conforme o manual.",
                        "Guarde as ferramentas e o pneu removido. Confira a pressão do estepe assim que possível."
                    ]
                },
                {
                    title: "Depois da troca",
                    paragraphs: [
                        "Estepe temporário pode ter limite de velocidade e distância. Respeite a indicação escrita no próprio pneu e no manual. Procure uma borracharia ou oficina para reparar ou substituir o pneu e verificar o aperto com o torque recomendado."
                    ]
                }
            ],
            tip: "Nunca coloque qualquer parte do corpo sob um veículo sustentado apenas pelo macaco. Se não houver condições seguras ou você não souber localizar o ponto de apoio, chame assistência."
        },

        {
            id: "orcamento",
            title: "Como organizar seu orçamento mensal",
            category: "Finanças",
            description: "Registre entradas, despesas fixas e variáveis para entender para onde seu dinheiro está indo.",
            icon: "fa-wallet",
            image: "img/tutoriais/OrcamentoModal.jpg",
            intro: "Um orçamento não precisa começar com planilhas complexas. O primeiro passo é enxergar quanto entra, quais compromissos já estão assumidos e quais gastos podem ser ajustados.",
            sections: [
                {
                    title: "1. Registre sua renda líquida",
                    paragraphs: [
                        "Anote o valor que realmente fica disponível depois dos descontos. Se sua renda varia, use uma estimativa conservadora e evite comprometer antecipadamente todo o valor de um mês excepcional."
                    ]
                },
                {
                    title: "2. Liste as despesas",
                    bullets: [
                        "Fixas: aluguel, mensalidades, internet e parcelas.",
                        "Variáveis essenciais: mercado, transporte, água e energia.",
                        "Não essenciais: lazer, compras eventuais e assinaturas que podem ser revistas.",
                        "Dívidas: saldo, parcelas, juros e vencimentos."
                    ]
                },
                {
                    title: "3. Defina limites realistas",
                    paragraphs: [
                        "Compare renda e despesas. Escolha um limite possível para cada categoria e acompanhe os gastos durante o mês. Se as despesas essenciais já superam a renda, priorize necessidades básicas e procure renegociar compromissos antes de assumir novas parcelas."
                    ]
                },
                {
                    title: "4. Revise todo mês",
                    paragraphs: [
                        "Ao final do mês, veja o que saiu do planejado e ajuste os valores. Se houver espaço, reserve uma quantia para imprevistos, mesmo que inicialmente pequena."
                    ]
                }
            ],
            tip: "Não existe uma porcentagem perfeita que sirva para todas as rendas. O orçamento precisa refletir sua realidade, seus custos essenciais e suas prioridades."
        },

        {
            id: "precificacao",
            title: "Como calcular o preço de um produto",
            category: "Empreendedorismo",
            description: "Considere custos, despesas, taxas e margem para não vender no prejuízo.",
            icon: "fa-calculator",
            image: "img/tutoriais/PrecificacaoModal.jpg",
            intro: "Definir preço olhando apenas o valor cobrado por concorrentes pode levar a prejuízos. É importante conhecer o custo de cada unidade e as despesas necessárias para manter o negócio.",
            sections: [
                {
                    title: "1. Some os custos por unidade",
                    paragraphs: [
                        "Inclua matéria-prima, embalagem, mão de obra diretamente envolvida e perdas normais de produção. Se comprar materiais em quantidade, divida o custo pelo número de unidades que realmente consegue produzir."
                    ]
                },
                {
                    title: "2. Considere despesas e taxas",
                    paragraphs: [
                        "Inclua custos de operação, como aluguel, internet, transporte, taxas de cartão, comissões e impostos aplicáveis. Algumas despesas são mensais e precisam ser distribuídas entre as vendas previstas."
                    ]
                },
                {
                    title: "3. Calcule um preço inicial",
                    paragraphs: [
                        "Uma forma simplificada é estimar o custo total por unidade e acrescentar a margem desejada. Quando taxas e impostos são percentuais sobre a venda, use uma formação de preço que considere esses percentuais no cálculo, em vez de simplesmente ignorá-los."
                    ]
                },
                {
                    title: "4. Compare e teste",
                    paragraphs: [
                        "Pesquise produtos semelhantes, avalie o valor percebido pelo cliente e teste o preço. Se o mercado não aceita o valor necessário para cobrir os custos, reveja o processo, o público ou o produto — não venda continuamente abaixo do custo."
                    ]
                }
            ],
            tip: "A tributação varia conforme atividade, enquadramento e faturamento. Para definir preços e obrigações fiscais, procure orientação contábil adequada ao seu negócio."
        },

        {
            id: "negocio",
            title: "Primeiros passos para abrir um pequeno negócio",
            category: "Empreendedorismo",
            description: "Valide sua ideia, conheça clientes e planeje custos antes de investir.",
            icon: "fa-store",
            image: "img/tutoriais/NegocioModal.jpg",
            intro: "Começar pequeno e testar a ideia antes de assumir despesas altas pode tornar o início mais seguro. Um plano simples ajuda a transformar uma ideia em decisões práticas.",
            sections: [
                {
                    title: "1. Defina o que você vai oferecer",
                    paragraphs: [
                        "Descreva o produto ou serviço, qual problema resolve e para quem será vendido. Evite tentar atender todo mundo no início."
                    ]
                },
                {
                    title: "2. Converse com possíveis clientes",
                    paragraphs: [
                        "Pergunte o que as pessoas já compram, quais dificuldades encontram e quanto costumam pagar. Faça testes pequenos, como uma encomenda-piloto ou uma demonstração, antes de comprar grandes quantidades."
                    ]
                },
                {
                    title: "3. Faça as contas",
                    bullets: [
                        "Liste investimento inicial e custos mensais.",
                        "Calcule o custo de cada produto ou atendimento.",
                        "Estime quantas vendas seriam necessárias para cobrir as despesas.",
                        "Separe, sempre que possível, o dinheiro pessoal do dinheiro do negócio."
                    ]
                },
                {
                    title: "4. Verifique a formalização",
                    paragraphs: [
                        "Consulte os canais oficiais do governo e do Sebrae para verificar atividades permitidas, licenças e o enquadramento adequado. As regras dependem da atividade e do município."
                    ]
                }
            ],
            tip: "Não assuma empréstimos ou contratos longos antes de testar a demanda e entender os custos. Um começo enxuto permite aprender e corrigir a rota."
        },

        {
            id: "relacionamento",
            title: "Como reconhecer um relacionamento saudável",
            category: "Saúde e bem-estar",
            description: "Identifique sinais de respeito, confiança, diálogo e autonomia em relações afetivas.",
            icon: "fa-heart",
            image: "img/tutoriais/RelacionamentoModal.jpg",
            intro: "Um relacionamento saudável não é perfeito e também pode ter conflitos. A diferença está na forma como as pessoas lidam com eles: com respeito, responsabilidade e liberdade, sem medo ou coerção.",
            sections: [
                {
                    title: "Sinais de uma relação respeitosa",
                    bullets: [
                        "Você pode expressar opiniões e discordar sem ser humilhada ou ameaçada.",
                        "Há respeito à sua privacidade, amizades, trabalho, estudos e escolhas.",
                        "Os limites de cada pessoa são levados a sério.",
                        "As decisões são conversadas e não impostas pelo medo.",
                        "Ambas as pessoas podem reconhecer erros e buscar mudanças."
                    ]
                },
                {
                    title: "Comportamentos que merecem atenção",
                    paragraphs: [
                        "Controle de roupas, localização, dinheiro ou contatos; isolamento de familiares e amizades; humilhações; ameaças; pressão sexual; perseguição e agressões não são demonstrações de amor. Ciúme não justifica controle."
                    ]
                },
                {
                    title: "Como buscar apoio",
                    paragraphs: [
                        "Converse com alguém de confiança e procure serviços especializados se estiver vivendo controle, ameaça ou violência. No Brasil, o Ligue 180 orienta mulheres sobre direitos e serviços da rede de atendimento. Em emergência, ligue 190."
                    ]
                }
            ],
            tip: "Se você estiver em risco, priorize sua segurança. Não é necessário confrontar a pessoa ou terminar a relação sem apoio e planejamento."
        },

        {
            id: "limites",
            title: "Como estabelecer limites sem culpa",
            category: "Saúde e bem-estar",
            description: "Comunique suas necessidades com clareza e reconheça o que está ou não sob seu controle.",
            icon: "fa-hand",
            image: "img/tutoriais/LimitesModal.jpg",
            intro: "Estabelecer limites é explicar como você precisa ser tratada e o que consegue oferecer. Isso não significa controlar a outra pessoa, mas cuidar das próprias necessidades e decisões.",
            sections: [
                {
                    title: "1. Identifique o que incomoda",
                    paragraphs: [
                        "Observe situações que geram cansaço, desconforto ou ressentimento. Pergunte a si mesma o que precisa mudar: tempo, privacidade, divisão de tarefas ou forma de comunicação."
                    ]
                },
                {
                    title: "2. Fale de forma direta",
                    paragraphs: [
                        "Use frases objetivas, como: 'Não consigo assumir essa tarefa hoje' ou 'Prefiro que você me avise antes de vir'. Evite justificar excessivamente uma necessidade legítima."
                    ]
                },
                {
                    title: "3. Combine uma ação possível",
                    paragraphs: [
                        "Um limite precisa estar ligado a uma atitude que você pode tomar. Por exemplo: encerrar uma conversa quando houver ofensas ou reservar um horário sem interrupções para estudar."
                    ]
                },
                {
                    title: "4. Reavalie com segurança",
                    paragraphs: [
                        "Algumas pessoas podem não gostar de limites novos. Se houver intimidação, ameaça ou violência, não tente resolver a situação sozinha: busque apoio e priorize sua segurança."
                    ]
                }
            ],
            tip: "Dizer 'não' pode causar desconforto no começo. Isso não significa que você esteja sendo egoísta."
        },

        {
            id: "estresse",
            title: "Estratégias simples para lidar com o estresse",
            category: "Saúde e bem-estar",
            description: "Experimente pausas, respiração confortável e pequenas mudanças na rotina.",
            icon: "fa-spa",
            image: "img/tutoriais/EstresseModal.jpg",
            intro: "O estresse pode aparecer em períodos de pressão. Estratégias simples podem ajudar a atravessar momentos difíceis, embora não substituam acompanhamento profissional quando necessário.",
            sections: [
                {
                    title: "1. Faça uma pausa breve",
                    paragraphs: [
                        "Afaste-se por alguns minutos da atividade, se for possível. Solte os ombros, descruze as mãos e perceba o apoio dos pés no chão."
                    ]
                },
                {
                    title: "2. Experimente respirar com calma",
                    paragraphs: [
                        "Inspire suavemente pelo nariz e solte o ar sem forçar, por alguns ciclos. Se sentir tontura ou desconforto, volte à respiração natural. Não é necessário prender o ar."
                    ]
                },
                {
                    title: "3. Escolha uma próxima ação pequena",
                    paragraphs: [
                        "Em vez de tentar resolver tudo, escolha uma ação que possa ser feita agora: beber água, responder uma mensagem importante ou organizar o primeiro passo de uma tarefa."
                    ]
                },
                {
                    title: "4. Cuide da rotina possível",
                    paragraphs: [
                        "Sono, alimentação, movimento e contato com pessoas de confiança podem contribuir para o bem-estar. Comece por uma mudança pequena e sustentável."
                    ]
                }
            ],
            tip: "Se o estresse for intenso, frequente ou estiver prejudicando sua vida, procure uma unidade de saúde ou profissional qualificado."
        },

        {
            id: "ia",
            title: "Como usar ferramentas de inteligência artificial",
            category: "Inteligência Artificial",
            description: "Escreva pedidos claros, confira respostas e evite compartilhar dados pessoais ou confidenciais.",
            icon: "fa-robot",
            image: "img/tutoriais/IaModal.jpg",
            intro: "Ferramentas de inteligência artificial podem ajudar a organizar ideias, resumir conteúdos e criar rascunhos. Elas também podem errar, inventar informações ou apresentar dados desatualizados.",
            sections: [
                {
                    title: "1. Explique o que precisa",
                    paragraphs: [
                        "Informe o objetivo, o contexto necessário e o formato esperado. Exemplo: 'Crie uma lista de etapas para organizar uma feira de artesanato, considerando uma equipe de três pessoas'."
                    ]
                },
                {
                    title: "2. Peça ajustes",
                    paragraphs: [
                        "Se a resposta ficar genérica, acrescente detalhes, peça exemplos ou solicite uma versão mais curta. Dividir uma tarefa grande em pedidos menores costuma ajudar."
                    ]
                },
                {
                    title: "3. Verifique informações importantes",
                    paragraphs: [
                        "Confira dados, cálculos, leis, orientações de saúde e informações recentes em fontes confiáveis. Não use uma resposta gerada como única base para decisões de alto impacto."
                    ]
                },
                {
                    title: "4. Proteja sua privacidade",
                    paragraphs: [
                        "Evite inserir senhas, documentos, dados bancários, informações de clientes ou dados pessoais de terceiros. Observe as configurações de privacidade da ferramenta utilizada."
                    ]
                }
            ],
            tip: "Use a IA como apoio, não como substituta da sua avaliação. Você continua responsável por revisar o material antes de utilizá-lo."
        },

        {
            id: "curriculo",
            title: "Como montar um currículo claro e objetivo",
            category: "Trabalho e carreira",
            description: "Organize experiências, formação e habilidades para facilitar a leitura de quem seleciona.",
            icon: "fa-file-lines",
            image: "img/tutoriais/CurriculoModal.jpg",
            intro: "Um bom currículo apresenta informações verdadeiras de forma organizada e direcionada à oportunidade. Não é necessário preencher páginas com dados que não ajudam a demonstrar sua experiência.",
            sections: [
                {
                    title: "Estrutura recomendada",
                    bullets: [
                        "Nome e meios de contato profissionais.",
                        "Objetivo ou área de interesse, adaptado à vaga.",
                        "Experiências profissionais, com atividades e resultados reais.",
                        "Formação acadêmica e cursos relevantes.",
                        "Habilidades técnicas e idiomas, indicando o nível com honestidade."
                    ]
                },
                {
                    title: "Descreva atividades com clareza",
                    paragraphs: [
                        "Prefira frases que expliquem o que você fazia e quais ferramentas utilizava. Quando houver resultados mensuráveis e verificáveis, inclua-os. Não invente números, cargos ou conhecimentos."
                    ]
                },
                {
                    title: "Revise antes de enviar",
                    bullets: [
                        "Confira ortografia, telefone e e-mail.",
                        "Use formatação simples e consistente.",
                        "Salve em PDF, a menos que a vaga solicite outro formato.",
                        "Adapte palavras e experiências ao que a vaga realmente pede, sem copiar requisitos que você não possui."
                    ]
                }
            ],
            tip: "Não é necessário incluir documentos pessoais, endereço completo, foto ou informações sensíveis, a menos que exista uma razão legítima e a vaga solicite."
        },

        {
            id: "entrevista",
            title: "Como se preparar para uma entrevista de emprego",
            category: "Trabalho e carreira",
            description: "Pesquise a empresa, organize exemplos da sua trajetória e prepare perguntas.",
            icon: "fa-user-tie",
            image: "img/tutoriais/EntrevistaModal.jpg",
            intro: "A preparação ajuda a responder com mais tranquilidade e também permite avaliar se a oportunidade combina com seus objetivos.",
            sections: [
                {
                    title: "1. Pesquise a oportunidade",
                    paragraphs: [
                        "Leia a descrição da vaga e conheça o trabalho da empresa por canais oficiais. Identifique as atividades principais e pense em experiências que demonstrem habilidades relacionadas."
                    ]
                },
                {
                    title: "2. Prepare exemplos reais",
                    paragraphs: [
                        "Pense em situações em que você resolveu um problema, aprendeu algo, trabalhou em equipe ou organizou uma atividade. Explique o contexto, o que você fez e o resultado, sem exagerar sua participação."
                    ]
                },
                {
                    title: "3. Cuide da logística",
                    bullets: [
                        "Confirme data, horário, endereço ou link da entrevista.",
                        "Teste internet, câmera e áudio se for online.",
                        "Separe currículo e anotações.",
                        "Planeje o deslocamento e procure chegar com antecedência."
                    ]
                },
                {
                    title: "4. Faça perguntas",
                    paragraphs: [
                        "Você pode perguntar sobre a rotina da função, a equipe, as prioridades dos primeiros meses e as próximas etapas do processo seletivo."
                    ]
                }
            ],
            tip: "Se não souber responder algo, seja honesta. Explique o que conhece e como buscaria aprender o que ainda não domina."
        },

        {
            id: "limpeza",
            title: "Como organizar uma rotina de limpeza da casa",
            category: "Casa e organização",
            description: "Divida a limpeza em tarefas pequenas e distribua atividades ao longo da semana.",
            icon: "fa-broom",
            image: "img/tutoriais/LimpezaModal.jpg",
            intro: "Uma rotina simples evita concentrar todo o trabalho em um único dia. Ajuste a frequência ao tamanho da casa, ao número de moradores e às necessidades de cada ambiente.",
            sections: [
                {
                    title: "1. Comece pelo essencial",
                    bullets: [
                        "Lave a louça e limpe superfícies usadas no preparo de alimentos.",
                        "Retire o lixo antes que transborde e observe a separação de recicláveis.",
                        "Mantenha banheiro e áreas de circulação em condições de higiene.",
                        "Guarde objetos para reduzir a desorganização."
                    ]
                },
                {
                    title: "2. Distribua tarefas",
                    paragraphs: [
                        "Escolha uma tarefa maior por dia, como aspirar, trocar roupas de cama ou limpar o banheiro. Divida o trabalho entre moradores sempre que possível."
                    ]
                },
                {
                    title: "3. Use produtos com segurança",
                    paragraphs: [
                        "Leia os rótulos, mantenha produtos nas embalagens originais e fora do alcance de crianças e animais. Nunca misture água sanitária com ácidos, vinagre, amônia ou outros produtos de limpeza."
                    ]
                }
            ],
            tip: "Misturar produtos de limpeza pode liberar gases tóxicos. Use um produto por vez, conforme o rótulo, e mantenha o ambiente ventilado."
        },

        {
            id: "golpes",
            title: "Como identificar golpes em compras online",
            category: "Tecnologia e segurança",
            description: "Confira loja, endereço do site, preço e forma de pagamento antes de concluir uma compra.",
            icon: "fa-cart-shopping",
            image: "img/tutoriais/GolpeModal.jpg",
            intro: "Ofertas muito abaixo do preço habitual, pressão para pagar rapidamente e perfis recém-criados podem ser sinais de alerta. Uma verificação antes do pagamento pode evitar prejuízos.",
            sections: [
                {
                    title: "Confira a loja",
                    bullets: [
                        "Pesquise o nome da empresa e avaliações em fontes independentes.",
                        "Verifique se há CNPJ, canais de atendimento e política de troca.",
                        "Confira o endereço do site com atenção a letras trocadas e domínios estranhos.",
                        "Desconfie de perfis que só aceitam contato por mensagens e não apresentam informações verificáveis."
                    ]
                },
                {
                    title: "Analise a oferta e o pagamento",
                    paragraphs: [
                        "Compare o preço com outras lojas. Antes de fazer Pix ou transferência, confira se o nome do beneficiário corresponde à empresa ou pessoa esperada. Evite pagar por links enviados em conversas inesperadas."
                    ]
                },
                {
                    title: "Se desconfiar de fraude",
                    paragraphs: [
                        "Não envie documentos nem códigos de autenticação. Se já pagou, contate imediatamente seu banco pelos canais oficiais, guarde comprovantes e registre a ocorrência conforme orientação das autoridades."
                    ]
                }
            ],
            tip: "O cadeado e o HTTPS indicam uma conexão criptografada, mas não garantem que a loja seja legítima."
        }

    ];

    // ==========================================
    // CONFIGURAÇÃO DOS MODAIS
    // ==========================================

    const root = document.getElementById("modalRoot");

    if (!root) return;

    const readStorage = (key) => {
        try {
            const value = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(value) ? value : [];
        } catch {
            return [];
        }
    };

    const readRatings = () => {
        try {
            const value = JSON.parse(localStorage.getItem(STORAGE_RATINGS) || "{}");

            if (!value || typeof value !== "object" || Array.isArray(value)) {
                return {};
            }

            return Object.fromEntries(
                Object.entries(value).filter(([, rating]) =>
                    Number.isInteger(rating) && rating >= 1 && rating <= 5
                )
            );
        } catch {
            return {};
        }
    };

    let favorites = readStorage(STORAGE_FAVORITES);
    let completed = readStorage(STORAGE_COMPLETED);
    let ratings = readRatings();

    let currentOverlay = null;
    let lastFocusedElement = null;

    // ==========================================
    // NORMALIZAR TEXTO PARA PESQUISA
    // ==========================================

    const normalizeText = value => String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt-BR")
        .trim();

    // ==========================================
    // SALVAR INFORMAÇÕES
    // ==========================================

    const saveState = () => {
        localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favorites));
        localStorage.setItem(STORAGE_COMPLETED, JSON.stringify(completed));
        localStorage.setItem(STORAGE_RATINGS, JSON.stringify(ratings));

        updateDashboard();
    };

    // ==========================================
    // ATUALIZAR CONTADORES E CORAÇÕES
    // ==========================================

    const updateDashboard = () => {

        const favCount = document.getElementById("favoriteCount");
        const doneCount = document.getElementById("completedCount");

        if (favCount) {
            favCount.textContent = favorites.length;
        }

        if (doneCount) {
            doneCount.textContent = completed.length;
        }

        document.querySelectorAll("[data-favorite]").forEach(button => {

            const active = favorites.includes(button.dataset.favorite);

            button.classList.toggle("favoritoAtivo", active);

            const icon = button.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-solid", active);
                icon.classList.toggle("fa-regular", !active);
            }

            button.setAttribute("aria-pressed", String(active));
        });
    };

    const getTutorial = id => tutorials.find(item => item.id === id);

    // ==========================================
    // FECHAR MODAL
    // ==========================================

    const closeModal = () => {

        if (!currentOverlay) return;

        currentOverlay.classList.remove("aberto");

        document.body.classList.remove("modalAberto");

        const overlay = currentOverlay;

        currentOverlay = null;

        window.setTimeout(() => overlay.remove(), 260);

        if (
            lastFocusedElement &&
            typeof lastFocusedElement.focus === "function"
        ) {
            lastFocusedElement.focus();
        }
    };

    // ==========================================
    // CRIAR E ABRIR MODAL
    // ==========================================

    const createModal = ({ title, subtitle = "" }) => {

        closeModal();

        lastFocusedElement = document.activeElement;

        const overlay = document.createElement("div");

        overlay.className = "modalOverlay";

        overlay.innerHTML = `
            <section class="modalJanela"
                role="dialog"
                aria-modal="true"
                aria-label="${escapeHTML(title)}">

                <header class="modalTopo">

                    <h2>${escapeHTML(title)}</h2>

                    <p>${escapeHTML(subtitle)}</p>

                    <button
                        type="button"
                        class="modalFechar"
                        aria-label="Fechar janela">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                </header>

                <div class="modalCorpo"></div>

            </section>
        `;

        root.appendChild(overlay);

        currentOverlay = overlay;

        document.body.classList.add("modalAberto");

        overlay.querySelector(".modalFechar").addEventListener(
            "click",
            closeModal
        );

        overlay.addEventListener("click", event => {

            if (event.target === overlay) {
                closeModal();
            }

        });

        document.addEventListener(
            "keydown",
            handleEscape,
            { once: true }
        );

        requestAnimationFrame(() => {

            overlay.classList.add("aberto");

            overlay.querySelector(".modalFechar").focus();

        });

        return overlay.querySelector(".modalCorpo");
    };

    // ==========================================
    // FECHAR COM ESC
    // ==========================================

    const handleEscape = event => {

        if (event.key === "Escape" && currentOverlay) {

            closeModal();

        } else if (currentOverlay) {

            document.addEventListener(
                "keydown",
                handleEscape,
                { once: true }
            );

        }

    };

    // ==========================================
    // PROTEGER TEXTO INSERIDO NO HTML
    // ==========================================

    const escapeHTML = value => String(value).replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char])
    );

    // ==========================================
    // EXIBIR IMAGEM DO TUTORIAL
    // ==========================================

    const renderTutorialImage = (item, className = "") => {

        if (item.image) {

            return `
                <div class="${className}">
                    <img
                        src="${escapeHTML(item.image)}"
                        alt="${escapeHTML(item.title)}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

                    <div class="imagemFallback" style="display:none;">
                        <i class="fa-regular ${escapeHTML(item.icon)}"></i>
                    </div>
                </div>
            `;

        }

        return `
            <div class="${className}">
                <i class="fa-regular ${escapeHTML(item.icon)}"></i>
            </div>
        `;
    };

    // ==========================================
    // CATEGORIAS DISPONÍVEIS
    // ==========================================

    const getCategories = () => {

        return [...new Set(
            tutorials.map(item => item.category)
        )].sort((a, b) => a.localeCompare(b, "pt-BR"));

    };

    // ==========================================
    // FAVORITAR TUTORIAL
    // ==========================================

    const toggleFavorite = id => {

        favorites = favorites.includes(id)
            ? favorites.filter(item => item !== id)
            : [...favorites, id];

        saveState();

        if (currentOverlay?.dataset.view === "list") {

            const body = currentOverlay.querySelector(".modalCorpo");

            updateListResults(
                currentOverlay.dataset.mode,
                body
            );

        }
    };

    // ==========================================
    // FILTRAR E ATUALIZAR RESULTADOS
    // ==========================================

    const updateListResults = (mode, body) => {

        if (!body) return;

        const searchInput = body.querySelector(".modalBusca");
        const search = searchInput?.value || "";
        const selectedCategory = body.dataset.categoryFilter || "";

        let items = [...tutorials];

        // Filtro de favoritos

        if (mode === "favorites") {

            items = items.filter(item =>
                favorites.includes(item.id)
            );

        }

        // Filtro de finalizados

        if (mode === "completed") {

            items = items.filter(item =>
                completed.includes(item.id)
            );

        }

        // Filtro de conteúdos de bem-estar
        // Mantido para compatibilidade com possíveis cards existentes.

        if (mode === "wellness") {

            items = items.filter(item =>
                /bem-estar|saúde/i.test(item.category)
            );

        }

        // Filtro de categoria

        const categoryMatchers = {
            casa: /casa|alimentacao|organizacao/i,
            tecnologia: /tecnologia/i,
            logistica: /logistica/i,
            "inteligencia-artificial": /inteligencia artificial/i,
            saude: /saude|bem-estar/i,
            negocios: /empreendedorismo|financas|negocios/i,
            carreira: /trabalho|carreira/i
        };

        if (categoryMatchers[selectedCategory]) {
            items = items.filter(item =>
                categoryMatchers[selectedCategory].test(normalizeText(item.category))
            );
        }

        // Pesquisa por texto

        const normalizedSearch = normalizeText(search);

        if (normalizedSearch) {

            items = items.filter(item => {

                const sectionsText = item.sections
                    .map(section => {

                        const paragraphs = section.paragraphs || [];
                        const bullets = section.bullets || [];

                        return [
                            section.title,
                            ...paragraphs,
                            ...bullets
                        ].join(" ");

                    })
                    .join(" ");

                const searchableText = normalizeText([
                    item.title,
                    item.description,
                    item.category,
                    item.intro,
                    sectionsText,
                    item.tip
                ].join(" "));

                return searchableText.includes(normalizedSearch);

            });

        }

        // Atualizar contador

        const countElement = body.querySelector(".modalContagem");

        if (countElement) {

            countElement.textContent = `${items.length} ${
                items.length === 1
                    ? "tutorial encontrado"
                    : "tutoriais encontrados"
            }`;

        }

        // Atualizar somente a grade.
        // Os campos de pesquisa e categoria permanecem no DOM,
        // evitando que o campo perca o foco durante a digitação.

        const grid = body.querySelector(".modalGradeTutoriais");

        if (!grid) return;

        grid.innerHTML = items.length ? items.map(item => `

            <article class="tutorialCard">

                ${renderTutorialImage(item, "tutorialImagem")}

                <span class="tutorialCategoria">
                    ${escapeHTML(item.category)}
                </span>

                <h3>${escapeHTML(item.title)}</h3>

                <p>${escapeHTML(item.description)}</p>

                <div class="tutorialCardRodape">

                    <button
                        type="button"
                        class="modalBotao"
                        data-read="${item.id}">

                        Ver tutorial
                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                    <button
                        type="button"
                        class="modalFavorito ${favorites.includes(item.id) ? "ativo" : ""}"
                        data-list-favorite="${item.id}"
                        aria-label="${favorites.includes(item.id) ? "Remover dos" : "Adicionar aos"} favoritos"
                        aria-pressed="${favorites.includes(item.id)}">

                        <i class="fa-${favorites.includes(item.id) ? "solid" : "regular"} fa-heart"></i>

                    </button>

                </div>

            </article>

        `).join("") : `

            <div class="modalVazio">

                <i class="fa-regular fa-folder-open"></i>

                <h3>Nenhum tutorial encontrado</h3>

                <p>
                    ${
                        mode === "favorites" && !favorites.length
                            ? "Adicione tutoriais aos favoritos tocando no coração."
                            : mode === "completed" && !completed.length
                            ? "Quando concluir um tutorial, ele aparecerá nesta lista."
                            : "Tente alterar a pesquisa ou selecionar outra categoria."
                    }
                </p>

            </div>

        `;

        // Os botões são recriados junto com a grade; associe a ação em cada
        // novo elemento para que ela continue funcionando após busca e filtros.
        grid.querySelectorAll("[data-read]").forEach(button => {
            button.addEventListener("click", () => {
                openArticle(button.dataset.read);
            });
        });

        grid.querySelectorAll("[data-list-favorite]").forEach(button => {
            button.addEventListener("click", () => {
                toggleFavorite(button.dataset.listFavorite);
            });
        });

    };

    // ==========================================
    // MONTAR LISTA DE TUTORIAIS
    // ==========================================

    const renderList = (mode, body) => {

        body.dataset.categoryFilter = "";
        body.innerHTML = `

            <div class="modalFerramentas">

                <input
                    class="modalBusca"
                    type="search"
                    placeholder="Buscar tutorial por tema..."
                    aria-label="Buscar tutorial">

                <div class="modalFiltrosTags" role="group" aria-label="Filtrar tutoriais por tema">
                    <button type="button" class="modalTagFiltro ativo" data-category-filter="">Todos</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="casa">Casa</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="tecnologia">Tecnologia</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="logistica">Logística</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="inteligencia-artificial">Inteligência Artificial</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="saude">Saúde e Bem Estar</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="negocios">Negócios</button>
                    <button type="button" class="modalTagFiltro" data-category-filter="carreira">Trabalho e Carreira</button>
                </div>

                <span class="modalContagem">
                    0 tutoriais encontrados
                </span>

            </div>

            <div class="modalGradeTutoriais"></div>

        `;

        const searchInput = body.querySelector(".modalBusca");
        // Pesquisa em tempo real sem recriar o input

        searchInput.addEventListener("input", () => {

            updateListResults(mode, body);

        });

        // Filtro de categoria

        // Abrir tutorial e favoritar usando delegação de eventos

        updateListResults(mode, body);

    };

    // Os cards são recriados a cada busca/filtro e os modais são substituídos
    // na navegação. O root permanece montado durante todo esse fluxo.
    root.addEventListener("click", event => {

        const body = event.target.closest(".modalCorpo");

        if (!body || body !== currentOverlay?.querySelector(".modalCorpo")) {
            return;
        }

        const categoryButton = event.target.closest("[data-category-filter]");

        if (categoryButton) {
            body.dataset.categoryFilter = categoryButton.dataset.categoryFilter;
            body.querySelectorAll("[data-category-filter]").forEach(button => {
                button.classList.toggle("ativo", button === categoryButton);
            });
            updateListResults(currentOverlay.dataset.mode, body);
            return;
        }

    });

    // ==========================================
    // ABRIR MODAIS DE LISTAGEM
    // ==========================================

    const openList = mode => {

        const config = {

            all: [
                "Todos os tutoriais",
                "Explore conteúdos práticos para o dia a dia, trabalho, autonomia e bem-estar."
            ],

            favorites: [
                "Meus favoritos",
                "Os tutoriais que você guardou para consultar novamente."
            ],

            completed: [
                "Tutoriais finalizados",
                "Acompanhe os conteúdos que você já concluiu."
            ],

            wellness: [
                "Saúde e bem-estar",
                "Conteúdos sobre autocuidado, relações saudáveis e organização emocional."
            ]

        }[mode];

        if (!config) return;

        const body = createModal({
            title: config[0],
            subtitle: config[1]
        });

        currentOverlay.dataset.view = "list";
        currentOverlay.dataset.mode = mode;

        renderList(mode, body);

    };

    // ==========================================
    // ABRIR TUTORIAL INDIVIDUAL
    // ==========================================

    const openArticle = id => {

        const item = getTutorial(id);

        if (!item) return;

        const body = createModal({

            title: "Biblioteca Elo d'Elas",

            subtitle: "Um conteúdo para aprender no seu ritmo."

        });

        currentOverlay.dataset.view = "article";

        body.innerHTML = `

            <article class="artigoModal">

                <span class="artigoCategoria">
                    ${escapeHTML(item.category)}
                </span>

                <h2>${escapeHTML(item.title)}</h2>

                <p class="artigoIntroducao">
                    ${escapeHTML(item.intro)}
                </p>

                ${renderTutorialImage(item, "artigoImagem")}

                ${item.sections.map(section => `

                    <section class="artigoSecao">

                        <h3>${escapeHTML(section.title)}</h3>

                        ${
                            section.paragraphs
                                ? section.paragraphs.map(p =>
                                    `<p>${escapeHTML(p)}</p>`
                                ).join("")
                                : ""
                        }

                        ${
                            section.bullets
                                ? `<ul>${section.bullets.map(p =>
                                    `<li>${escapeHTML(p)}</li>`
                                ).join("")}</ul>`
                                : ""
                        }

                    </section>

                `).join("")}

                <div class="artigoDica">

                    <strong>
                        <i class="fa-solid fa-lightbulb"></i>
                        Dica importante:
                    </strong>

                    ${escapeHTML(item.tip)}

                </div>

                <div class="artigoAcoes">

                    <div class="artigoAcoesGrupo">

                        <button
                            type="button"
                            class="modalBotao modalBotaoSecundario"
                            data-article-favorite="${item.id}">

                            <i class="fa-${favorites.includes(item.id) ? "solid" : "regular"} fa-heart"></i>

                            ${favorites.includes(item.id)
                                ? "Favoritado"
                                : "Adicionar aos favoritos"}

                        </button>

                    </div>

                    <div class="artigoAcoesGrupo">

                        <button
                            type="button"
                            class="modalBotao"
                            data-complete="${item.id}">

                            <i class="fa-solid fa-check"></i>

                            ${completed.includes(item.id)
                                ? "Marcar como não concluído"
                                : "Marcar como finalizado"}

                        </button>

                    </div>

                </div>

                <section class="artigoAvaliacao ${completed.includes(item.id) ? "" : "bloqueada"}" aria-labelledby="artigoAvaliacaoTitulo">
                        <h3 id="artigoAvaliacaoTitulo">Avalie este tutorial</h3>
                        <p>Como foi sua experiência com este conteúdo?</p>

                        <div class="avaliacaoEstrelas" role="group" aria-label="Avaliação de 1 a 5 estrelas">
                            ${[1, 2, 3, 4, 5].map(rating => `
                                <button
                                    type="button"
                                    class="botaoEstrelaAvaliacao ${ratings[item.id] >= rating ? "selecionada" : ""}"
                                    data-rate-tutorial="${item.id}"
                                    data-rating="${rating}"
                                    aria-label="${rating} ${rating === 1 ? "estrela" : "estrelas"}"
                                    aria-pressed="${ratings[item.id] === rating}"
                                    ${completed.includes(item.id) ? "" : "disabled"}>
                                    <i class="fa-${ratings[item.id] >= rating ? "solid" : "regular"} fa-star" aria-hidden="true"></i>
                                </button>
                            `).join("")}
                        </div>

                        <p class="statusAvaliacao" data-rating-status aria-live="polite">
                            ${ratings[item.id]
                                ? `Sua avaliação: ${ratings[item.id]} de 5 estrelas.`
                                : completed.includes(item.id)
                                    ? "Escolha de 1 a 5 estrelas."
                                    : "Finalize o tutorial para avaliar."}
                        </p>
                    </section>
                <p class="artigoAviso">

                    Este conteúdo é informativo e pode não substituir orientação profissional.
                    Em situações de risco ou que exijam avaliação especializada,
                    procure o serviço adequado.

                </p>

            </article>

        `;

        // Botão de favoritos no artigo

        body.querySelector("[data-article-favorite]").addEventListener(
            "click",
            () => {

                toggleFavorite(item.id);

                openArticle(item.id);

            }
        );

        // Botão de conclusão

        body.querySelector("[data-complete]").addEventListener(
            "click",
            () => {

                const isCompleted = completed.includes(item.id);
                completed = isCompleted
                    ? completed.filter(value => value !== item.id)
                    : [...completed, item.id];

                saveState();

                const completeButton = body.querySelector("[data-complete]");
                completeButton.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    ${isCompleted ? "Marcar como finalizado" : "Marcar como não concluído"}
                `;

                const ratingSection = body.querySelector(".artigoAvaliacao");
                const ratingGroup = body.querySelector(".avaliacaoEstrelas");
                const ratingStatus = body.querySelector("[data-rating-status]");
                const ratingButtons = body.querySelectorAll("[data-rate-tutorial]");

                ratingSection.classList.toggle("bloqueada", isCompleted);
                ratingGroup.setAttribute("aria-disabled", String(isCompleted));
                ratingButtons.forEach(ratingButton => {
                    ratingButton.disabled = isCompleted;
                });

                if (ratingStatus && !ratings[item.id]) {
                    ratingStatus.textContent = isCompleted
                        ? "Finalize o tutorial para avaliar."
                        : "Escolha de 1 a 5 estrelas.";
                }

            }
        );

        body.querySelectorAll("[data-rate-tutorial]").forEach(button => {
            button.addEventListener("click", () => {
                const selectedRating = Number(button.dataset.rating);

                ratings[item.id] = selectedRating;
                saveState();

                body.querySelectorAll("[data-rate-tutorial]").forEach(starButton => {
                    const starRating = Number(starButton.dataset.rating);
                    const starIsFilled = starRating <= selectedRating;
                    const icon = starButton.querySelector("i");

                    starButton.classList.toggle("selecionada", starIsFilled);
                    starButton.setAttribute(
                        "aria-pressed",
                        String(starRating === selectedRating)
                    );

                    if (icon) {
                        icon.classList.toggle("fa-solid", starIsFilled);
                        icon.classList.toggle("fa-regular", !starIsFilled);
                    }
                });

                const status = body.querySelector("[data-rating-status]");

                if (status) {
                    status.textContent = `Sua avaliação: ${selectedRating} de 5 estrelas.`;
                }
            });
        });

    };

    // ==========================================
    // EVENTOS DOS CARDS DA DASHBOARD
    // ==========================================

    document.addEventListener("click", event => {

        // Abrir listagens

        const listTrigger = event.target.closest("[data-open-list]");

        if (listTrigger) {

            event.preventDefault();

            openList(listTrigger.dataset.openList);

            return;

        }

        // Abrir tutorial diretamente

        const articleTrigger = event.target.closest("[data-open-tutorial]");

        if (articleTrigger) {

            event.preventDefault();

            openArticle(articleTrigger.dataset.openTutorial);

            return;

        }

        // Favoritar pelos cards principais

        const favoriteTrigger = event.target.closest("[data-favorite]");

        if (favoriteTrigger) {

            event.preventDefault();

            toggleFavorite(favoriteTrigger.dataset.favorite);

        }

    });

    // ==========================================
    // ACESSIBILIDADE DOS CARDS DE RESUMO
    // ==========================================

    document.querySelectorAll(
        ".cardTutoriaisFavoritos, .cardTutoriaisFinalizados"
    ).forEach(card => {

        card.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openList(card.dataset.openList);

            }

        });

    });

    // ==========================================
    // FILTROS SUPERIORES
    // Removidos: as categorias agora são filtradas
    // diretamente dentro dos modais de listagem.
    // ==========================================

    // ==========================================
    // INICIALIZAÇÃO
    // ==========================================

    updateDashboard();

})();
