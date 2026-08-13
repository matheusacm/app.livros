import buscarServicos from "../services/api.js";
import { normalizarTermoParaAPI } from "../services/tradutorBusca.js";

async function busca(app) {
    app.innerHTML = `
        <section class="bem-container">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍 Buscar Receitas na API Externa</h1>
                <p style="color: var(--bem-text-muted); max-width: 600px; margin: 0 auto;">
                    Consulte milhares de pratos internacionais em tempo real através da API TheMealDB. Você pode pesquisar em português ou em inglês!
                </p>
            </div>

            <div class="search-box">
                <label for="pesquisa" class="bem-form__label" style="font-size: 1rem;">
                    Digite o ingrediente ou prato desejado:
                </label>

                <div class="search-input-wrapper">
                    <input
                        class="bem-form__input"
                        type="text"
                        id="pesquisa"
                        placeholder="Ex: frango, bolo, salada, peixe, pasta, beef..."
                        autocomplete="off"
                    >
                    <button class="bem-btn bem-btn--primary" id="btn-buscar" style="white-space: nowrap;">
                        🔍 Buscar
                    </button>
                </div>

                <div class="search-chips">
                    <span style="font-size: 0.85rem; font-weight: 700; color: var(--bem-text-muted);">Sugestões rápidas:</span>
                    <button class="search-chip-btn" data-termo="Frango">🍗 Frango</button>
                    <button class="search-chip-btn" data-termo="Carne">🥩 Carne</button>
                    <button class="search-chip-btn" data-termo="Massa">🍝 Massa</button>
                    <button class="search-chip-btn" data-termo="Peixe">🐟 Peixe</button>
                    <button class="search-chip-btn" data-termo="Bolo">🍰 Bolo</button>
                    <button class="search-chip-btn" data-termo="Salada">🥗 Salada</button>
                    <button class="search-chip-btn" data-termo="Sopa">🍲 Sopa</button>
                </div>
            </div>

            <div id="resultadoBusca" class="bem-grid-auto"></div>
            <div id="modalContainer"></div>
        </section>
    `;

    const input = document.getElementById("pesquisa");
    const botao = document.getElementById("btn-buscar");
    const resultado = document.getElementById("resultadoBusca");

    const executarBusca = async (termoManual = null) => {
        const termoDigitado = termoManual !== null ? termoManual : input.value.trim();

        if (!termoDigitado) {
            resultado.innerHTML = `
                <div class="bem-alert bem-alert--warning" style="grid-column: 1 / -1;">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Campo de busca vazio</h4>
                        <p class="bem-alert__message">Por favor, digite o nome de um prato ou ingrediente para pesquisar.</p>
                    </div>
                </div>
            `;
            return;
        }

        // Tradução/normalização para consulta na TheMealDB (mantém o texto visível no input intacto)
        const termoTraduzido = normalizarTermoParaAPI(termoDigitado);

        resultado.innerHTML = `
            <div class="bem-alert bem-alert--info" style="grid-column: 1 / -1; display: flex; align-items: center; gap: 1rem;">
                <div class="bem-alert__content">
                    <h4 class="bem-alert__title">Consultando API TheMealDB...</h4>
                    <p class="bem-alert__message">Pesquisando por "<strong>${termoDigitado}</strong>"${termoTraduzido !== termoDigitado.toLowerCase() ? ` (termo em inglês: <em>${termoTraduzido}</em>)` : ''}...</p>
                </div>
            </div>
        `;

        try {
            const dados = await buscarServicos(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=",
                encodeURIComponent(termoTraduzido)
            );

            resultado.innerHTML = "";

            if (!dados || !dados.meals || dados.meals.length === 0) {
                resultado.innerHTML = `
                    <div class="bem-alert bem-alert--warning" style="grid-column: 1 / -1;">
                        <div class="bem-alert__content">
                            <h4 class="bem-alert__title">Nenhuma receita encontrada</h4>
                            <p class="bem-alert__message">
                                Não encontramos receitas para "<strong>${termoDigitado}</strong>". 
                                Tente usar termos mais genéricos como <em>frango, carne, massa, bolo, salada</em> ou termos em inglês como <em>chicken, pasta, beef</em>.
                            </p>
                        </div>
                    </div>
                `;
                return;
            }

            dados.meals.forEach((receita) => {
                const card = document.createElement("div");
                card.className = "bem-card";
                card.innerHTML = `
                    <div class="bem-card__image-container">
                        <img
                            class="bem-card__image"
                            src="${receita.strMealThumb}"
                            alt="${receita.strMeal}"
                            loading="lazy"
                        >
                    </div>

                    <div class="bem-card__body">
                        <div style="margin-bottom: 0.5rem;">
                            <span class="recipe-badge recipe-badge--geral">${receita.strCategory || 'Geral'}</span>
                            <span class="recipe-badge" style="background-color: #e0e7ff; color: #3730a3; margin-left: 0.25rem;">🌍 ${receita.strArea || 'Internacional'}</span>
                        </div>

                        <h3 class="bem-card__title">${receita.strMeal}</h3>

                        <div class="bem-card__footer">
                            <button
                                class="bem-btn bem-btn--primary bem-btn--sm bem-btn--block"
                                data-api-id="${receita.idMeal}">
                                Ver Instruções da API
                            </button>
                        </div>
                    </div>
                `;

                resultado.appendChild(card);
            });

            // Adiciona evento para visualizar instruções da receita da API
            document.querySelectorAll("[data-api-id]").forEach((btn) => {
                btn.addEventListener("click", () => {
                    const mealId = btn.dataset.apiId;
                    const meal = dados.meals.find(m => m.idMeal === mealId);
                    if (meal) exibirModalReceitaAPI(meal);
                });
            });

        } catch (error) {
            console.error("Erro ao carregar dados da TheMealDB:", error);
            resultado.innerHTML = `
                <div class="bem-alert bem-alert--danger" style="grid-column: 1 / -1;">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Erro na conexão com a API</h4>
                        <p class="bem-alert__message">Não foi possível consultar o servidor da TheMealDB. Verifique sua conexão com a internet e tente novamente.</p>
                    </div>
                </div>
            `;
        }
    };

    botao.addEventListener("click", () => executarBusca());
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") executarBusca();
    });

    // Chips de busca rápida
    document.querySelectorAll(".search-chip-btn").forEach((chip) => {
        chip.addEventListener("click", () => {
            const termo = chip.dataset.termo;
            input.value = termo;
            executarBusca(termo);
        });
    });
}

function exibirModalReceitaAPI(meal) {
    const modalContainer = document.getElementById("modalContainer");
    if (!modalContainer) return;

    // Coleta ingredientes da API TheMealDB
    const ingredientes = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ing && ing.trim()) {
            ingredientes.push(`${measure ? measure.trim() + ' ' : ''}${ing.trim()}`);
        }
    }

    modalContainer.innerHTML = `
        <div style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(4px);">
            <div style="background: #ffffff; border-radius: var(--bem-radius-lg); max-width: 700px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: var(--bem-shadow-lg); padding: var(--bem-spacing-xl); position: relative;">
                <button id="btnFecharModal" style="position: absolute; top: 1rem; right: 1rem; background: #f1f5f9; border: none; font-size: 1.5rem; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; line-height: 1;">&times;</button>
                
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--bem-radius-md); margin-bottom: 1.5rem;">

                <div style="margin-bottom: 0.75rem;">
                    <span class="recipe-badge recipe-badge--geral">${meal.strCategory}</span>
                    <span class="recipe-badge" style="background-color: #e0e7ff; color: #3730a3;">🌍 ${meal.strArea}</span>
                </div>

                <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${meal.strMeal}</h2>

                <h3 style="font-size: 1.2rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Ingredientes</h3>
                <ul style="padding-left: 1.5rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    ${ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                </ul>

                <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem;">Instruções de Preparo (Inglês)</h3>
                <p style="line-height: 1.7; white-space: pre-line; color: var(--bem-text);">${meal.strInstructions}</p>

                <div style="margin-top: 2rem; text-align: right;">
                    <button class="bem-btn bem-btn--primary" id="btnFecharModalBaixo">Fechar</button>
                </div>
            </div>
        </div>
    `;

    const fechar = () => { modalContainer.innerHTML = ""; };
    document.getElementById("btnFecharModal")?.addEventListener("click", fechar);
    document.getElementById("btnFecharModalBaixo")?.addEventListener("click", fechar);
}

export default {
    url: "#busca",
    label: "Buscar",
    pagina: busca
};