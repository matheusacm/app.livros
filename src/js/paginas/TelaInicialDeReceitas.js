import receitas from "../dados.js/receitas.js";
function home (app){
    let cards = "";
    receitas.forEach((receita)=>{
        cards += `
        <div class="bem-card">
            <img class="bem-card">
            <Img class="bem-card__image" src="${receita.imagem}" alt="${receita.nome}">
            <div class="bem-card__body">
                <h3 class="bem-card__title">${receita.nome}</h3>
                <p>categoria: ${receita.categoria}
                </p>
                <p>tempo de preparo: ${receita.tempo}</p>
            </div>
        </div>
        `
    })
    app.innerHTML = `
    <section class="bem-grid-auto">
        ${cards}
    </section>
`}
export default {
    url: '#home',
    label: 'Receitas',
    pagina: home
};