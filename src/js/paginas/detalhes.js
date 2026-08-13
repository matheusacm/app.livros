import receitas from "../dados/receitas.js";

function detalhesReceita(app) {
    // Busca ID da receita selecionada no sessionStorage ou na URL
    const idSalvo = sessionStorage.getItem("receitaSelecionadaId");
    
    // Procura na lista local de receitas (ou no localStorage caso tenha sido cadastrada)
    let receitasCompletas = [...receitas];
    const receitasCustomizadas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
    receitasCompletas = [...receitasCompletas, ...receitasCustomizadas];

    const receita = receitasCompletas.find((r) => String(r.id) === String(idSalvo));

    if (!receita) {
        app.innerHTML = `
            <section class="bem-container">
                <div class="bem-alert bem-alert--warning">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Receita não encontrada</h4>
                        <p class="bem-alert__message">Selecione uma receita na página inicial ou na lista de categorias para ver os detalhes.</p>
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <a href="#home" class="bem-btn bem-btn--primary">Voltar para Home</a>
                </div>
            </section>
        `;
        return;
    }

    const listaIngredientes = Array.isArray(receita.ingredientes)
        ? receita.ingredientes.map((ing) => `<li>${ing}</li>`).join("")
        : `<li>${receita.ingredientes}</li>`;

    app.innerHTML = `
        <section class="bem-container">
            <div style="margin-bottom: 1rem;">
                <button id="btn-voltar" class="bem-btn bem-btn--outline">
                    &larr; Voltar
                </button>
            </div>

            <article class="bem-card">
                <img
                    class="bem-card__image"
                    src="${receita.imagem || 'src/img.js/receitas.webp'}"
                    alt="${receita.nome}"
                    style="max-height: 400px; object-fit: cover;"
                >

                <div class="bem-card__body">
                    <h1 class="bem-card__title" style="font-size: 2rem; margin-bottom: 0.5rem;">
                        ${receita.nome}
                    </h1>

                    <p style="margin-bottom: 0.5rem;">
                        <strong>Categoria:</strong> ${receita.categoria} | 
                        <strong>Tempo de preparo:</strong> ${receita.tempo}
                    </p>

                    <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--bem-border);">

                    <h2 style="font-size: 1.3rem; margin-bottom: 0.75rem;">Ingredientes</h2>
                    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        ${listaIngredientes}
                    </ul>

                    <h2 style="font-size: 1.3rem; margin-bottom: 0.75rem;">Modo de Preparo</h2>
                    <p style="line-height: 1.7; white-space: pre-line;">
                        ${receita.preparo}
                    </p>
                </div>
            </article>
        </section>
    `;

    const btnVoltar = document.getElementById("btn-voltar");
    if (btnVoltar) {
        btnVoltar.addEventListener("click", () => {
            // Volta para a página anterior ou para #home
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.hash = "#home";
            }
        });
    }
}

export default {
    url: "#detalhes",
    label: "Detalhes",
    ocultarNoMenu: true,
    pagina: detalhesReceita
};
