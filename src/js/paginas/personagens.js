import buscarServicos from "../services/api.js";

async function criarPagina(app) {

    app.innerHTML = `
        <section class="bem-container">

            <h1>Buscar receitas pela API</h1>

            <div class="bem-form__group">

                <label
                    for="pesquisa"
                    class="bem-form__label">
                    Nome da receita
                </label>

                <input
                    type="text"
                    id="pesquisa"
                    class="bem-form__input"
                    placeholder="Ex: chicken"
                >

                <button
                    id="btn-buscar"
                    class="bem-btn bem-btn--primary">
                    Buscar
                </button>

            </div>

            <div
                id="resultado"
                class="bem-grid-auto">
            </div>

        </section>
    `;

    const input = document.getElementById("pesquisa");
    const botao = document.getElementById("btn-buscar");
    const resultado = document.getElementById("resultado");

    botao.addEventListener("click", async () => {

        const pesquisa = input.value.trim();

        if (!pesquisa) {
            resultado.innerHTML = "<p>Digite o nome de uma receita.</p>";
            return;
        }

        resultado.innerHTML = "<p>Buscando...</p>";

        const dados = await buscarServicos(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=",
            pesquisa
        );

        if (!dados || !dados.meals) {
            resultado.innerHTML =
                "<p>Nenhuma receita encontrada.</p>";
            return;
        }

        resultado.innerHTML = "";

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
                            Categoria: ${receita.strCategory}
                        </p>

                        <p>
                            Origem: ${receita.strArea}
                        </p>

                    </div>

                </div>
            `;
        });
    });
}

export default {
    url: "#busca",
    label: "Buscar API",
    pagina: criarPagina
};