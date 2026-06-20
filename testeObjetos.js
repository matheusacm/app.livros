const livro = { 
    titulo : 'javascript : frontend',
    preco : 100,
    autor : 'rodrigo',
    avaliacoes : [5, 4, 3, 1, 4],
    esgotado : false
}

console.log(livro)
console.log(livro.titulo)
console.log(livro.avaliacoes)
console.log(livro.avaliacoes[3])
//adicionar nova chave + valor
livro.paginas = 300
//alterar chama a chave e reatribui um valor
livro.titulo = "PHP - backend"
console.log(livro)