import receitasPadrao from "../dados/receitas.js";

function listaReceitas(app) {
    const categoriaSelecionada = sessionStorage.getItem("categoriaSelecionada");

    // Combina receitas padrão com receitas cadastradas pelo usuário
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    const todasReceitas = [...receitasPadrao, ...receitasCustomizadas];

    let resultado = todasReceitas;

    if (categoriaSelecionada) {
        resultado = todasReceitas.filter((receita) => {
            return receita.categoria && receita.categoria.toLowerCase() === categoriaSelecionada.toLowerCase();
        });
    }

    let cards = "";

    if (resultado.length === 0) {
        cards = `
            <div class="bem-alert bem-alert--info" style="grid-column: 1 / -1; padding: 2rem; text-align: center; display: block;">
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Nenhuma receita encontrada para "${categoriaSelecionada}"</h3>
                <p style="color: var(--bem-text-muted); margin-bottom: 1.5rem;">
                    Ainda não há receitas cadastradas nesta categoria. Você pode cadastrar a primeira agora mesmo!
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button id="btn-limpar-filtro-vazio" class="bem-btn bem-btn--outline">Ver Todas as Receitas</button>
                    <a href="#cadastro" class="bem-btn bem-btn--primary">+ Cadastrar Receita</a>
                </div>
            </div>
        `;
    } else {
        resultado.forEach((receita) => {
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
                            <button
                                class="bem-btn bem-btn--primary bem-btn--sm bem-btn--block"
                                data-detalhe-id="${receita.id}">
                                Ver Receita &rarr;
                            </button>
                        </div>
                    </div>
                </article>
            `;
        });
    }

    const filtroTexto = categoriaSelecionada
        ? `Receitas de <strong>${categoriaSelecionada}</strong>`
        : `Todas as Receitas`;

    const botaoLimparFiltro = categoriaSelecionada
        ? `<button id="btn-limpar-filtro" class="bem-btn bem-btn--outline bem-btn--sm">✕ Limpar Filtro (${resultado.length} de ${todasReceitas.length})</button>`
        : `<span style="font-size: 0.9rem; color: var(--bem-text-muted); font-weight: 600;">Total: ${todasReceitas.length} receitas</span>`;

    app.innerHTML = `
        <section class="bem-container">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 2rem; gap: 1rem; border-bottom: 1px solid var(--bem-border); padding-bottom: 1.25rem;">
                <div>
                    <h1 style="font-size: 2rem;">📖 ${filtroTexto}</h1>
                    <p style="color: var(--bem-text-muted); font-size: 0.95rem;">
                        ${categoriaSelecionada ? `Exibindo pratos filtrados pela categoria ${categoriaSelecionada}.` : 'Confira nosso acervo completo de receitas deliciosas.'}
                    </p>
                </div>
                ${botaoLimparFiltro}
            </div>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>
    `;

    // Eventos para limpar filtro
    const limparFiltroHandler = () => {
        sessionStorage.removeItem("categoriaSelecionada");
        listaReceitas(app);
    };

    document.getElementById("btn-limpar-filtro")?.addEventListener("click", limparFiltroHandler);
    document.getElementById("btn-limpar-filtro-vazio")?.addEventListener("click", limparFiltroHandler);

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
    url: "#lista",
    label: "Lista",
    pagina: listaReceitas
};