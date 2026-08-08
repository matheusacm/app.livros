const categorias = [
    "Massas",
    "Carnes",
    "Sobremesas",
    "Bebidas",
    "Saudáveis"
];

function categoriasPagina(app) {
    let cards = "";

    categorias.forEach((categoria) => {
        cards += `
            <div class="bem-card">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${categoria}</h3>

                    <button
                        class="bem-btn bem-btn--primary"
                        data-categoria="${categoria}">
                        Ver receitas
                    </button>
                </div>
            </div>
        `;
    });

    app.innerHTML = `
        <section class="bem-container">
            <h1>Categorias</h1>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>
    `;

    document.querySelectorAll("[data-categoria]").forEach((botao) => {
        botao.addEventListener("click", () => {
            sessionStorage.setItem(
                "categoriaSelecionada",
                botao.dataset.categoria
            );

            window.location.hash = "#lista";
        });
    });
}

export default {
    url: "#categorias",
    label: "Categorias",
    pagina: categoriasPagina
};