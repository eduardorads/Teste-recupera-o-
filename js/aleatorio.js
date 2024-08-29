export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Exemplo de uso para escolher um nome aleatório (se tiver uma lista de nomes)
export const nomes = ["Nome1", "Nome2", "Nome3"]; // Defina sua lista de nomes
export const nome = aleatorio(nomes);
