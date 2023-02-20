// método map executa uma função para cada elemento do array e devolve um novo array como resultado//

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //... faz uma cópia de tudo que tem disponível no array livro e altera somente o preço//
    })
    return livrosComDesconto
}