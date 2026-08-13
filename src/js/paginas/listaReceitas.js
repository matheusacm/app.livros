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
            <div class="bem-alert bem-alert--info" style="grid-column: 1 / -1;">
                <div class="bem-alert__content">
                    <h4 class="bem-alert__title">Nenhuma receita encontrada</h4>
                    <p class="bem-alert__message">Não encontramos receitas cadastradas para a categoria "${categoriaSelecionada}".</p>
                </div>
            </div>
        `;
    } else {
        resultado.forEach((receita) => {
            cards += `
                <div class="bem-card">
                    <img
                        class="bem-card__image"
                        src="${receita.imagem || 'src/img.js/receitas.webp'}"
                        alt="${receita.nome}"
                    >
                    <div class="bem-card__body">
                        <h3 class="bem-card__title">${receita.nome}</h3>
                        <p><strong>Categoria:</strong> ${receita.categoria}</p>
                        <p><strong>Tempo:</strong> ${receita.tempo}</p>
                        <div style="margin-top: 1rem;">
                            <button
                                class="bem-btn bem-btn--primary bem-btn--sm"
                                data-detalhe-id="${receita.id}">
                                Ver Receita
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    const filtroTexto = categoriaSelecionada
        ? `Receitas - Categoria: <strong>${categoriaSelecionada}</strong>`
        : `Todas as Receitas`;

    const botaoLimparFiltro = categoriaSelecionada
        ? `<button id="btn-limpar-filtro" class="bem-btn bem-btn--outline bem-btn--sm" style="margin-left: 1rem;">Ver todas as categorias</button>`
        : ``;

    app.innerHTML = `
        <section class="bem-container">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 1.5rem; gap: 0.5rem;">
                <h1>${filtroTexto}</h1>
                ${botaoLimparFiltro}
            </div>

            <div class="bem-grid-auto">
                ${cards}
            </div>
        </section>
    `;

    // Evento para limpar filtro
    const btnLimpar = document.getElementById("btn-limpar-filtro");
    if (btnLimpar) {
        btnLimpar.addEventListener("click", () => {
            sessionStorage.removeItem("categoriaSelecionada");
            listaReceitas(app);
        });
    }

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