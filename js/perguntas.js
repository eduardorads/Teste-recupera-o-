export const perguntas = [
    {
        enunciado: "Você está perdido na selva.",
        alternativas: [
            {
                texto: "Você pode ir pelo lado direito ou esquerdo. Você irá por qual lado?",
                afirmacao: ["Lado direito", "Lado esquerdo"],
                proxima: 1,
            },
            {
                texto: "Você encontrou um acampamento.",
                afirmacao: ["Você decide explorar.", "Você desvia."],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Você encontrou um acampamento.",
        alternativas: [
            {
                texto: "Você encontra um grupo de pessoas.",
                afirmacao: ["Interagir com elas.", "Correr delas."],
                proxima: 3,
            },
            {
                texto: "Elas te pediram um pouco de alimento.",
                afirmacao: ["Dar um pouco do seu alimento.", "Não entregar pois os alimentos estão escassos."],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você encontrou um grupo de pessoas.",
        alternativas: [
            {
                texto: "Você encontra um animal.",
                afirmacao: ["Ficar com o animal.", "Ignorar o animal."],
                proxima: 5,
            },
            {
                texto: "Você está em uma bifurcação.",
                afirmacao: ["Ir pelo caminho norte.", "Ir pelo caminho sul."],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você está em uma bifurcação.",
        alternativas: [
            {
                texto: "Você encontra um rio.",
                afirmacao: ["Você pega um pouco de água e segue o rio.", "Você segue o caminho sem pegar a água."],
                proxima: 7,
            },
            {
                texto: "Você decide parar um pouco para descansar.",
                afirmacao: ["Parar embaixo de uma árvore.", "Parar em uma clareira."],
                proxima: 8,
            },
        ]
    },
    {
        enunciado: "Você encontrou a saída da selva.",
        alternativas: [
            {
                texto: "Você age alegremente e comemora.",
                afirmacao: ["Comemorar com entusiasmo.", "Agradecer silenciosamente."],
                proxima: null, // Fim do jogo
            },
            {
                texto: "Você vai o mais rápido possível para casa, reencontrar sua família.",
                afirmacao: ["Apressar o retorno.", "Lembrar-se dos momentos vividos na selva."],
                proxima: null, // Fim do jogo
            },
        ]
    }
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Exemplo de uso para escolher um nome aleatório (se tiver uma lista de nomes)
export const nomes = ["Nome1", "Nome2", "Nome3"]; // Defina sua lista de nomes
export const nome = aleatorio(nomes);
