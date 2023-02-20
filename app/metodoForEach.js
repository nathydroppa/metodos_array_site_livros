const elementoParaInserirLivros = document.getElementById('livros') //pega o id da seção de livros do html//
const elementoComValorTotalDeLivrosDisponiveis =  document.getElementById('valor_total_livros_disponiveis') 

//Utilizamos o forEach pois ele pega cada livro resultante da lista de livros e insere p/ cada um as
//informações conforme passamos para o innerHTML
function exibirLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      //let disponibilidade = verificaDisponibilidadeDoLivro(livro) //verifica na API a quantidade de livro disponivel//
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'  
      elementoParaInserirLivros.innerHTML += `
        <div class="livro">
    <img class= ${disponibilidade} src="${livro.imagem}" 
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

//function verificaDisponibilidadeDoLivro(livro) {
   // if(livro.quantidade > 0) {
      //return 'livro__imagens' 
    //}else{
      //return 'livro__imagens indisponivel'
   // }