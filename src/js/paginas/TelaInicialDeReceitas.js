import receitasPadrao from "../dados/receitas.js";

function home(app) {
    // Combina receitas padrão com receitas cadastradas pelo usuário
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    const todasReceitas = [...receitasPadrao, ...receitasCustomizadas];

    let cards = "";
    todasReceitas.forEach((receita) => {
        const catClass = (receita.categoria || "").toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const badgeClass = `recipe-badge--${catClass}`;

        cards += `
        <article class="bem-card">
            <div class="bem-card__image-container">
                <img
                    class="bem-card__image"
                    src="${receita.imagem || 'src/img.js/receitas.webp'}"
                    alt="${receita.nome}"
                    loading="lazy"
                >
            </div>

            <div class="bem-card__body">
                <div style="margin-bottom: 0.5rem;">
                    <span class="recipe-badge ${badgeClass}">${receita.categoria}</span>
                </div>

                <h3 class="bem-card__title">${receita.nome}</h3>

                <div class="bem-card__meta">
                    <span>⏱️ ${receita.tempo}</span>
                    ${receita.porcoes ? `<span>🍽️ ${receita.porcoes}</span>` : ''}
                </div>

                <div class="bem-card__footer">
                    <button class="bem-btn bem-btn--primary bem-btn--sm bem-btn--block" data-detalhe-id="${receita.id}">
                        Ver Receita &rarr;
                    </button>
                </div>
            </div>
        </article>
        `;
    });

    app.innerHTML = `
    <div class="bem-container">
        <!-- Hero Section Culinário -->
        <section class="hero-banner">
            <span class="hero-banner__tag">✨ Bem-vindo ao Sabores & Receitas</span>
            <h1 class="hero-banner__title">Descubra o Prazer de Cozinhar em Casa</h1>
            <p class="hero-banner__subtitle">
                Explore pratos incríveis, organize seus ingredientes e prepare refeições inesquecíveis com nosso passo a passo simples e prático.
            </p>

            <div class="hero-banner__actions">
                <a href="#categorias" class="bem-btn bem-btn--primary bem-btn--lg">
                    🗂️ Explorar Categorias
                </a>
                <a href="#busca" class="bem-btn bem-btn--outline bem-btn--lg">
                    🔍 Buscar Receitas na API
                </a>
            </div>

            <div class="hero-banner__chips">
                <span class="hero-banner__chip-label">Acesso rápido:</span>
                <a href="#lista" class="hero-banner__chip" data-filtro-rapido="Massas">🍝 Massas</a>
                <a href="#lista" class="hero-banner__chip" data-filtro-rapido="Carnes">🥩 Carnes</a>
                <a href="#lista" class="hero-banner__chip" data-filtro-rapido="Bebidas">🍹 Bebidas</a>
                <a href="#lista" class="hero-banner__chip" data-filtro-rapido="Sobremesas">🍰 Sobremesas</a>
                <a href="#lista" class="hero-banner__chip" data-filtro-rapido="Saudáveis">🥗 Saudáveis</a>
            </div>
        </section>

        <!-- Grade de Receitas em Destaque -->
        <section>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h2 style="font-size: 1.8rem;">🍳 Receitas em Destaque</h2>
                    <p style="color: var(--bem-text-muted);">Pratos selecionados para você experimentar hoje mesmo.</p>
                </div>
                <a href="#lista" class="bem-btn bem-btn--outline bem-btn--sm">
                    Ver todas (${todasReceitas.length}) &rarr;
                </a>
            </div>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>

        <!-- Seção de Benefícios -->
        <section class="perks-section">
            <div class="perk-card">
                <span class="perk-card__icon">📖</span>
                <h3 class="perk-card__title">Passo a Passo Simples</h3>
                <p class="perk-card__desc">Instruções claras e diretas para você cozinhar sem complicação, mesmo sendo iniciante.</p>
            </div>

            <div class="perk-card">
                <span class="perk-card__icon">🥦</span>
                <h3 class="perk-card__title">Ingredientes Acessíveis</h3>
                <p class="perk-card__desc">Receitas elaboradas com itens fáceis de encontrar no mercado do seu bairro.</p>
            </div>

            <div class="perk-card">
                <span class="perk-card__icon">👨‍🍳</span>
                <h3 class="perk-card__title">Dicas de Chefs</h3>
                <p class="perk-card__desc">Segredos culinários práticos para elevar o sabor e a textura de cada prato.</p>
            </div>
        </section>
    </div>
    `;

    // Eventos de clique para abrir detalhes da receita
    document.querySelectorAll("[data-detalhe-id]").forEach((botao) => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.detalheId;
            sessionStorage.setItem("receitaSelecionadaId", id);
            window.location.hash = "#detalhes";
        });
    });

    // Eventos para atalhos de categoria no Hero
    document.querySelectorAll("[data-filtro-rapido]").forEach((chip) => {
        chip.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = chip.dataset.filtroRapido;
            sessionStorage.setItem("categoriaSelecionada", cat);
            window.location.hash = "#lista";
        });
    });
}

export default {
    url: '#home',
    label: 'Home',
    pagina: home
};