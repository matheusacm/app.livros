import receitasPadrao from "../dados/receitas.js";

const categoriasInfo = [
    { 
        nome: "Massas", 
        imagem: "src/img.js/tipos-de-massas.jpg",
        descricao: "Macarrão, lasanhas, pizzas artesanais e molhos clássicos da culinária italiana."
    },
    { 
        nome: "Carnes", 
        imagem: "src/img.js/Carnes.jpg",
        descricao: "Cortes nobres, assados suculentos, refogados e opções saborosas para o almoço."
    },
    { 
        nome: "Bebidas", 
        imagem: "src/img.js/bebidas.jpg",
        descricao: "Sucos naturais refrescantes, coquetéis, smoothies e bebidas especiais para todas as ocasiões."
    },
    { 
        nome: "Sobremesas", 
        imagem: "src/img.js/sobremesas.webp",
        descricao: "Mousses cremosas, bolos fofinhos, tortas doces e doces irresistíveis."
    },
    { 
        nome: "Saudáveis", 
        imagem: "src/img.js/saudáveis.webp",
        descricao: "Pratos leves, saladas balanceadas, bowls nutritivos e opções com ingredientes funcionais."
    }
];

function categoriasPagina(app) {
    // Carrega total de receitas para contar por categoria
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    const todasReceitas = [...receitasPadrao, ...receitasCustomizadas];

    let cards = "";

    categoriasInfo.forEach((cat) => {
        const qtdReceitas = todasReceitas.filter(r => 
            (r.categoria || "").toLowerCase() === cat.nome.toLowerCase()
        ).length;

        cards += `
            <div class="bem-card">
                <div class="bem-card__image-container">
                    <img 
                        class="bem-card__image" 
                        src="${cat.imagem}" 
                        alt="${cat.nome}"
                        loading="lazy"
                    >
                </div>
                <div class="bem-card__body">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                        <h3 class="bem-card__title" style="margin-bottom: 0;">${cat.nome}</h3>
                        <span class="recipe-badge recipe-badge--geral">${qtdReceitas} ${qtdReceitas === 1 ? 'receita' : 'receitas'}</span>
                    </div>

                    <p style="color: var(--bem-text-muted); font-size: 0.9rem; margin-bottom: 1.25rem; line-height: 1.5;">
                        ${cat.descricao}
                    </p>

                    <div class="bem-card__footer">
                        <button
                            class="bem-btn bem-btn--primary bem-btn--sm bem-btn--block"
                            data-categoria="${cat.nome}">
                            Explorar ${cat.nome} &rarr;
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    app.innerHTML = `
        <section class="bem-container">
            <div style="text-align: center; margin-bottom: 2.5rem;">
                <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">🗂️ Categorias de Receitas</h1>
                <p style="color: var(--bem-text-muted); max-width: 600px; margin: 0 auto;">
                    Navegue por nossas categorias temáticas e encontre exatamente o que você deseja cozinhar hoje.
                </p>
            </div>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>
    `;

    document.querySelectorAll("[data-categoria]").forEach((botao) => {
        botao.addEventListener("click", () => {
            sessionStorage.setItem("categoriaSelecionada", botao.dataset.categoria);
            window.location.hash = "#lista";
        });
    });
}

export default {
    url: "#categorias",
    label: "Categorias",
    pagina: categoriasPagina
};