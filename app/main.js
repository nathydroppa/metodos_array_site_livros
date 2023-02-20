//Requisição para acessar lista de livros da API//
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto) 
    //pega a lista de livros dado pela requisição acima (nesse caso já com desconto se tiver) e exibe na 
    //tela através da function exibirLivrosNaTela//
}

