export const perguntas = [{
    enunciado: "Você está perdido na selva.",
    alternativas: [
        {
            texto: "Você pode ir pelo lado direito ou esquerdo. Você irá por qual lado?",
            afirmacao: [
                "Lado direito",
                "Lado esquerdo."
            ],
            proxima: 1,
        },
        {
            texto: "Você encontrou um acampamento.",
            afirmacao: [
                "Você decide explorar.",
                "Você desvia."
            ],
            proxima: 2,
        },
    ]
   
    },
    {
        enunciado: "Você está perdido na selva.",
        alternativas: [
            {
                texto: "Você encontra um grupo de pessoas",
                afirmacao: [
                    "Interagir com elas.",
                    "Correr delas.",
                ],
                proxima: 3,
            },
            {
                texto: "Elas te pediram um pouco de alimento",
                afirmacao: [
                    "Dar um pouco do seu alimento.",
                    "Não entregar pois os alimentos estão escassos.",
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você está perdido na selva.",
        alternativas: [
            {
                texto: "Você encontra um animal.",
                afirmacao: [
                    "Ficar com o animal.",
                    "ignorar o animal",
                ],
                proxima: 3,
            },
            {
                texto: "Você está em uma bifurcação",
                afirmacao: [
                    "Ir pelo caminho norte.",
                    "Ir pelo caminho sul.",
                proxima: 4,

            }

        ]
    },
    {
        enunciado: "Você está perdido na selva.",
        alternativas: [
            {
                texto: "Você encontra um rio.",
                afirmacao: [
                    "Você pega um pouco de água e segue o rio.",
                    "vocẽ segue o caminho sem pegar a água."
                ],
                proxima: 5,
            },
            
            {
                texto: "Você decide parar um pouco para descansar.",
                afirmacao: [
                    "Parar em baixo de uma árvore.",
                    "Parar em uma clareira."
                ],

                 {

                    enunciado: "Você está perdido na selva.",
                    alternativas: [
                        {
                            texto: "Você pode ir pelo lado direito ou esquerdo. Você irá por qual lado?",
                            afirmacao: [
                                "Lado direito",
                                "Lado esquerdo."
                            ],
            …        
                proxima: 6,

            }
        ]
    }

    {
        enunciado: "Você está perdido na selva.",
        alternativas: [
            {
                texto: "Você encontra um grupo de pessoas. ",
                afirmacao: [
                    "Se juntar a elas.",
                    "Se distanciar delas."
                ],
                proxima: 5,
            },
            {
                texto: "Você encontra a saida da selva.",
                afirmacao: [
                    "Você age alegremente e comemora.",
                    "Você vai o mais rapido possível para casa, reencontrar sua família."
                ],
                proxima: 6,
            },
        ]
    }