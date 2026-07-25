import receitas from "../dados.js/receitas";
function home (app){
    let cards = "";
    receitas.forEach((receita)=>{
        cards += `
        <div class="bem-card">
            <img class="bem-card">
            <Img class="bem-card__image" src="${receita.imagem}>
            <div class="bem-card__body">
                <h3 class="bem-card__title">${receita.titulo}</h3>
                <p>categoria: ${receita.categoria}
                </p>
                <p>tempo de preparo: ${receita.tempoPreparo}</p>
            </div>
        </div>
        `
    })
    app.innerHTML = 
    <section class="bem-grid-auto">
        ${cards}
    </section>
}
export default {
    url: '#home',
    label: 'Home',
    pagina: home
};