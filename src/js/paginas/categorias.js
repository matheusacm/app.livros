let cardServico = "";
const detalhes = [
    {
        titulo: 'tipos de massas',
        descricao: 'receitas de macarrão, lasanha, pizza e outros pratos',
        imagem: 'src/img/tipos-de-massas.jpg'
    },
    {
        titulo: 'carnes',
        descricao: 'receitas de carne, frango, etc',
        imagem: 'src/img/Carnes.jpg'
    },
    {
        titulo: 'sobremesas',
        descricao: 'receitas de doces, bolos, tortas e outros pratos',
        imagem: 'src/img/sobremesas.webp'
    },
       {
        titulo: 'bebidas',
        descricao: 'receitas de bebidas, sucos, refrigerantes e outros',
        imagem: 'src/img/bebidas.jpg'
    },
      {
        titulo: 'saudáveis',
        descricao: 'receitas saudáveis e nutritivas',
        imagem: 'src/img/saudáveis.jpg'
    }
]

//
async function categorias(app){
    cardServico += `<div class="bem-grid-auto">`
    for(let i=0; i < detalhes.length; i++){
        cardServico += `
                    <div class="bem-card">
                        <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
                        <div class="bem-card__body">
                            <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                            <p>${detalhes[i].descricao}</p>
                        </div>
                    </div>
                
            `
        }
    cardServico += `</div>`
    app.innerHTML = cardServico
}
export default {
    url: '#Categorias',
    label: 'Categorias',
    pagina: categorias
};