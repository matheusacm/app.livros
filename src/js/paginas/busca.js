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

    const executarBusca = async () => {
        const pesquisa = input.value.trim();

        if (!pesquisa) {
            resultado.innerHTML = `
                <div class="bem-alert bem-alert--warning" style="grid-column: 1 / -1;">
                    <div class="bem-alert__content">
                        <p class="bem-alert__message">Por favor, digite o nome de uma receita para pesquisar.</p>
                    </div>
                </div>
            `;
            return;
        }

        resultado.innerHTML = `
            <div class="bem-alert bem-alert--info" style="grid-column: 1 / -1;">
                <div class="bem-alert__content">
                    <p class="bem-alert__message">Buscando receitas na API TheMealDB...</p>
                </div>
            </div>
        `;

        const dados = await buscarServicos(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=",
            encodeURIComponent(pesquisa)
        );

        resultado.innerHTML = "";

        if (!dados || !dados.meals) {
            resultado.innerHTML = `
                <div class="bem-alert bem-alert--warning" style="grid-column: 1 / -1;">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Nenhuma receita encontrada</h4>
                        <p class="bem-alert__message">Não encontramos receitas com o termo "${pesquisa}". Tente buscar em inglês (ex: chicken, beef, pasta, cake).</p>
                    </div>
                </div>
            `;
            return;
        }

        dados.meals.forEach((receita) => {
            resultado.innerHTML += `
                <div class="bem-card">
                    <img
                        class="bem-card__image"
                        src="${receita.strMealThumb}"
                        alt="${receita.strMeal}"
                        style="height: 200px; object-fit: cover;"
                    >
                    <div class="bem-card__body">
                        <h3 class="bem-card__title">${receita.strMeal}</h3>
                        <p><strong>Categoria:</strong> ${receita.strCategory || 'Geral'}</p>
                        <p><strong>Origem:</strong> ${receita.strArea || 'Internacional'}</p>
                    </div>
                </div>
            `;
        });
    };

    botao.addEventListener("click", executarBusca);
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            executarBusca();
        }
    });
}

export default {
    url: "#busca",
    label: "Buscar",
    pagina: busca
};