const categorias = [
    { nome: "Massas", imagem: "src/img.js/tipos-de-massas.jpg" },
    { nome: "Carnes", imagem: "src/img.js/Carnes.jpg" },
    { nome: "Sobremesas", imagem: "src/img.js/sobremesas.webp" },
    { nome: "Bebidas", imagem: "src/img.js/bebidas.jpg" },
    { nome: "Saudáveis", imagem: "src/img.js/saudáveis.webp" }
];

function categoriasPagina(app) {
    let cards = "";

    categorias.forEach((cat) => {
        cards += `
            <div class="bem-card">
                <img class="bem-card__image" src="${cat.imagem}" alt="${cat.nome}" style="height: 180px; object-fit: cover;">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${cat.nome}</h3>
                    <div style="margin-top: 1rem;">
                        <button
                            class="bem-btn bem-btn--primary bem-btn--sm"
                            data-categoria="${cat.nome}">
                            Ver receitas
                        </button>
                    </div>
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