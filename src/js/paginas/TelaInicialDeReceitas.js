import receitasPadrao from "../dados/receitas.js";

function home(app) {
    // Combina receitas padrão com receitas cadastradas pelo usuário
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    const todasReceitas = [...receitasPadrao, ...receitasCustomizadas];

    let cards = "";
    todasReceitas.forEach((receita) => {
        cards += `
        <div class="bem-card">
            <img class="bem-card__image" src="${receita.imagem || 'src/img.js/receitas.webp'}" alt="${receita.nome}">
            <div class="bem-card__body">
                <h3 class="bem-card__title">${receita.nome}</h3>
                <p><strong>Categoria:</strong> ${receita.categoria}</p>
                <p><strong>Tempo:</strong> ${receita.tempo}</p>
                <div style="margin-top: 1rem;">
                    <button class="bem-btn bem-btn--primary bem-btn--sm" data-detalhe-id="${receita.id}">
                        Ver Receita
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    app.innerHTML = `
    <section class="bem-container">
        <h1>Receitas em Destaque</h1>
        <p style="color: var(--bem-text-muted); margin-bottom: 1.5rem;">Explore nossas deliciosas receitas fáceis e práticas para o seu dia a dia.</p>
        <div class="bem-grid-auto">
            ${cards}
        </div>
    </section>
    `;

    // Eventos de clique para abrir detalhes da receita
    document.querySelectorAll("[data-detalhe-id]").forEach((botao) => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.detalheId;
            sessionStorage.setItem("receitaSelecionadaId", id);
            window.location.hash = "#detalhes";
        });
    });
}

export default {
    url: '#home',
    label: 'Home',
    pagina: home
};