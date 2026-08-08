import buscarServicos from "../services/api.js";

async function busca(app) {

    app.innerHTML = `
        <section class="bem-container">

            <h1>Buscar receitas</h1>

            <div class="bem-form__group">

                <label
                    class="bem-form__label"
                    for="pesquisa">
                    Receita
                </label>

                <input
                    class="bem-form__input"
                    type="text"
                    id="pesquisa"
                    placeholder="Ex: chicken"
                >

                <button
                    class="bem-btn bem-btn--primary"
                    id="btn-buscar">
                    Buscar
                </button>

            </div>

            <div
                id="resultadoBusca"
                class="bem-grid-auto">
            </div>

        </section>
    `;

    const input = document.getElementById("pesquisa");
    const botao = document.getElementById("btn-buscar");
    const resultado = document.getElementById("resultadoBusca");

    botao.addEventListener("click", async () => {

        const pesquisa = input.value.trim();

        if (!pesquisa) {
            resultado.innerHTML =
                "<p>Digite uma receita.</p>";
            return;
        }

        resultado.innerHTML =
            "<p>Buscando...</p>";

        const dados = await buscarServicos(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=",
            pesquisa
        );

        resultado.innerHTML = "";

        if (!dados || !dados.meals) {
            resultado.innerHTML =
                "<p>Nenhuma receita encontrada.</p>";
            return;
        }

        dados.meals.forEach((receita) => {

            resultado.innerHTML += `
                <div class="bem-card">

                    <img
                        class="bem-card__image"
                        src="${receita.strMealThumb}"
                        alt="${receita.strMeal}"
                    >

                    <div class="bem-card__body">

                        <h3 class="bem-card__title">
                            ${receita.strMeal}
                        </h3>

                        <p>
                            Categoria:
                            ${receita.strCategory}
                        </p>

                        <p>
                            Origem:
                            ${receita.strArea}
                        </p>

                    </div>

                </div>
            `;
        });
    });
}

export default {
    url: "#busca",
    label: "Buscar",
    pagina: busca
};