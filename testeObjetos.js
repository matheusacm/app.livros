const livro = { 
    titulo : 'javascript : frontend',
    preco : 100,
    autor :'rodrigo',
    avaliacoes : [5, 4, 3, 1, 4],
    esgotado : false
}

console.log(livro)

console.log(livro.titulo)
console.log(livro.avaliacoes)
console.log(livro.avaliacoes[3])
livro.paginas = 300
console.log(livro)