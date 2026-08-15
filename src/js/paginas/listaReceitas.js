import receitas from "../dados/receitas.js";

function listaReceitas(app) {


    const categoria = sessionStorage.getItem("categoriaSelecionada");

    let resultado = receitas;

    if (categoria) {
        resultado = receitas.filter((receita) => {
            return receita.categoria === categoria;
        });
    }

    let cards = "";

    resultado.forEach((receita) => {
        cards += `
            <div class="bem-card">

                <img
                    class="bem-card__image"
                    src="${receita.imagem}"
                    alt="${receita.nome}"
                    >

                <div class="bem-card__body">
                    <h3 class="bem-card__title">${receita.nome}</h3>

                    <p>Categoria: ${receita.categoria}</p>
                    <p>Tempo: ${receita.tempo}</p>
                </div>

                    <p>${receita.categoria}</p>
                    <p>${receita.tempo}</p>
                </div>
        `;
    });

    app.innerHTML = `
        <section class="bem-container">
            <h1>Receitas</h1>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>
    `;
}

export default {
    url: "#lista",
    label: "Lista de Receitas",
    label: "Lista",

    pagina: listaReceitas
};