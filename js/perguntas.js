export const perguntas = [
    {
        enunciado: "Qual é a função principal dos insetos polinizadores no ecossistema?",
        alternativas: [
            {
                texto: "Dispersar sementes",
                afirmacao: [
                    "Você acha que os insetos polinizadores ajudam na dispersão de sementes.",
                    "Na verdade, esse papel é mais comum em outros animais, como aves e mamíferos."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
            {
                texto: "Polinizar plantas",
                afirmacao: [
                    "Correto! Os insetos polinizadores, como as abelhas, ajudam na reprodução das plantas ao transferir pólen.",
                    "A polinização é essencial para a produção de frutos e sementes, mantendo a biodiversidade."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
        ]
    },
    {
        enunciado: "Qual dos seguintes insetos é conhecido por formar colônias altamente organizadas?",
        alternativas: [
            {
                texto: "Formiga",
                afirmacao: [
                    "Correto! As formigas vivem em colônias organizadas com papéis definidos, como operárias, soldados e rainhas.",
                    "Essas colônias funcionam como uma sociedade bem estruturada."
                ],
                proxima: 2,  // Direciona para a pergunta 3
            },
            {
                texto: "Grilo",
                afirmacao: [
                    "Incorreto. Os grilos são insetos solitários, não vivendo em colônias organizadas como as formigas ou abelhas."
                ],
                proxima: 2,  // Direciona para a pergunta 3
            },
        ]
    },
    {
        enunciado: "Qual inseto passa por metamorfose completa durante seu ciclo de vida?",
        alternativas: [
            {
                texto: "Borboleta",
                afirmacao: [
                    "Correto! As borboletas passam por uma metamorfose completa, incluindo estágios de ovo, lagarta, pupa (crisálida) e adulto.",
                    "Esse processo é conhecido como holometabolia."
                ],
                proxima: 3,  // Direciona para a pergunta 4
            },
            {
                texto: "Barata",
                afirmacao: [
                    "Incorreto. As baratas passam por metamorfose incompleta, sem o estágio de pupa.",
                    "Esse tipo de desenvolvimento é chamado de hemimetabolia."
                ],
                proxima: 3,  // Direciona para a pergunta 4
            },
        ]
    },
    {
        enunciado: "Qual inseto é considerado o mais rápido em termos de velocidade de voo?",
        alternativas: [
            {
                texto: "Libélula",
                afirmacao: [
                    "Correto! As libélulas são extremamente rápidas, alcançando até 56 km/h em voo.",
                    "Elas são predadoras ágeis e usam sua velocidade para capturar outros insetos."
                ],
                proxima: 4,  // Direciona para a pergunta 5
            },
            {
                texto: "Abelha",
                afirmacao: [
                    "Incorreto. As abelhas são rápidas, mas não tanto quanto as libélulas.",
                    "Elas voam a cerca de 24 km/h quando estão em busca de néctar."
                ],
                proxima: 4,  // Direciona para a pergunta 5
            },
        ]
    },
    {
        enunciado: "Qual é o maior inseto em termos de envergadura?",
        alternativas: [
            {
                texto: "Borboleta imperador",
                afirmacao: [
                    "Correto! A borboleta imperador pode ter uma envergadura de até 30 cm, sendo uma das maiores borboletas do mundo.",
                    "Ela é encontrada principalmente na América do Sul."
                ]
            },
            {
                texto: "Besouro-golias",
                afirmacao: [
                    "Incorreto. O besouro-golias é um dos maiores insetos em termos de peso, mas não em envergadura."
                ]
            },
        ]
    }
];
