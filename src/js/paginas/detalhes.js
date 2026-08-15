import receitasPadrao from "../dados/receitas.js";

function detalhesReceita(app) {
    const idSalvo = sessionStorage.getItem("receitaSelecionadaId");
    
    // Procura na lista padrão ou no localStorage
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    const todasReceitas = [...receitasPadrao, ...receitasCustomizadas];

    const receita = todasReceitas.find((r) => String(r.id) === String(idSalvo));

    if (!receita) {
        app.innerHTML = `
            <section class="bem-container">
                <div class="bem-alert bem-alert--warning" style="padding: 2.5rem; text-align: center; display: block;">
                    <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">Nenhuma receita selecionada</h3>
                    <p style="color: var(--bem-text-muted); margin-bottom: 1.5rem;">
                        Escolha uma receita na Página Inicial ou na Lista para visualizar os ingredientes e o modo de preparo detalhado.
                    </p>
                    <a href="#home" class="bem-btn bem-btn--primary">Ir para a Página Inicial</a>
                </div>
            </section>
        `;
        return;
    }

    // Normaliza ingredientes em lista
    const ingredientesArray = Array.isArray(receita.ingredientes)
        ? receita.ingredientes
        : (receita.ingredientes || "").split("\n").map(i => i.trim()).filter(i => i.length > 0);

    // Normaliza passos de preparo
    let passosPreparo = [];
    if (Array.isArray(receita.preparo)) {
        passosPreparo = receita.preparo;
    } else if (typeof receita.preparo === 'string') {
        // Separa por quebra de linha ou pontos numerados
        passosPreparo = receita.preparo
            .split(/\n+/)
            .map(p => p.replace(/^\d+[\.\)]\s*/, '').trim())
            .filter(p => p.length > 0);
    }

    const catClass = (receita.categoria || "").toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const badgeClass = `recipe-badge--${catClass}`;

    app.innerHTML = `
        <section class="bem-container">
            <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <button id="btn-voltar-detalhe" class="bem-btn bem-btn--outline">
                    &larr; Voltar
                </button>
                <div style="font-size: 0.9rem; color: var(--bem-text-muted);">
                    Receita #${receita.id} | Categoria: <strong>${receita.categoria}</strong>
                </div>
            </div>

            <article class="recipe-details">
                <div class="recipe-details__hero">
                    <img
                        class="recipe-details__image"
                        src="${receita.imagem || 'src/img.js/receitas.webp'}"
                        alt="${receita.nome}"
                    >
                </div>

                <div class="recipe-details__header">
                    <div style="margin-bottom: 0.75rem;">
                        <span class="recipe-badge ${badgeClass}">${receita.categoria}</span>
                    </div>

                    <h1 class="recipe-details__title">${receita.nome}</h1>

                    <div class="recipe-details__meta-bar">
                        <div class="recipe-details__meta-item">
                            <span>⏱️ <strong>Tempo de preparo:</strong> ${receita.tempo}</span>
                        </div>
                        ${receita.porcoes ? `
                            <div class="recipe-details__meta-item">
                                <span>🍽️ <strong>Rendimento:</strong> ${receita.porcoes}</span>
                            </div>
                        ` : ''}
                        ${receita.dificuldade ? `
                            <div class="recipe-details__meta-item">
                                <span>⭐ <strong>Dificuldade:</strong> ${receita.dificuldade}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="recipe-details__body">
                    <!-- Coluna de Ingredientes -->
                    <aside class="recipe-ingredients">
                        <h2 style="font-size: 1.3rem; border-bottom: 2px solid #fecdd3; padding-bottom: 0.5rem;">
                            🛒 Ingredientes Necessários
                        </h2>
                        <ul class="recipe-ingredients__list">
                            ${ingredientesArray.map((ing) => `
                                <li class="recipe-ingredients__item">
                                    <span class="recipe-ingredients__bullet">✓</span>
                                    <span>${ing}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </aside>

                    <!-- Coluna de Modo de Preparo -->
                    <div class="recipe-steps-container">
                        <h2 style="font-size: 1.3rem; margin-bottom: 1.25rem; border-bottom: 2px solid #fecdd3; padding-bottom: 0.5rem;">
                            👩‍🍳 Modo de Preparo Passo a Passo
                        </h2>

                        <div class="recipe-steps">
                            ${passosPreparo.map((passo, index) => `
                                <div class="recipe-step-item">
                                    <span class="recipe-step-number">${index + 1}</span>
                                    <p style="font-size: 1rem; color: var(--bem-text);">${passo}</p>
                                </div>
                            `).join('')}
                        </div>

                        ${receita.dica ? `
                            <div class="chef-tip-box">
                                <span class="chef-tip-box__icon">💡</span>
                                <div class="chef-tip-box__text">
                                    <strong>Dica do Chef:</strong> ${receita.dica}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </article>

            <div style="margin-top: 2rem; text-align: center;">
                <button id="btn-voltar-detalhe-baixo" class="bem-btn bem-btn--outline">
                    &larr; Voltar para a Navegação
                </button>
            </div>
        </section>
    `;

    const voltar = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.hash = "#home";
        }
    };

    document.getElementById("btn-voltar-detalhe")?.addEventListener("click", voltar);
    document.getElementById("btn-voltar-detalhe-baixo")?.addEventListener("click", voltar);
}

export default {
    url: "#detalhes",
    label: "Detalhes",
    ocultarNoMenu: true,
    pagina: detalhesReceita
};
