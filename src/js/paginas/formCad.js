async function telaCadastro(app) {
    const formulario = `
    <section class="bem-container bem-container--narrow">
        <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">🍳 Cadastrar Nova Receita</h1>
            <p style="color: var(--bem-text-muted); line-height: 1.6;">
                Adicione suas criações culinárias personalizadas. As receitas cadastradas são salvas automaticamente no armazenamento local (<code>localStorage</code>) e passam a integrar a Página Inicial, a Lista por Categoria e os Detalhes!
            </p>
        </div>

        <div id="mensagemCadastro"></div>

        <div class="bem-card" style="padding: var(--bem-spacing-xl);">
            <form id="formCadastroReceita" class="bem-form" autocomplete="off">
                <div class="bem-form__group">
                    <label for="nome" class="bem-form__label bem-form__label--required">Nome da Receita</label>
                    <input
                        type="text"
                        id="nome"
                        class="bem-form__input"
                        placeholder="Ex: Torta Cremosa de Frango com Requeijão"
                        required
                    >
                </div>

                <div class="bem-grid-2">
                    <div class="bem-form__group">
                        <label for="categoria" class="bem-form__label bem-form__label--required">Categoria</label>
                        <select id="categoria" class="bem-form__select" required>
                            <option value="">Selecione uma categoria...</option>
                            <option value="Massas">🍝 Massas</option>
                            <option value="Carnes">🥩 Carnes</option>
                            <option value="Bebidas">🍹 Bebidas</option>
                            <option value="Sobremesas">🍰 Sobremesas</option>
                            <option value="Saudáveis">🥗 Saudáveis</option>
                        </select>
                    </div>

                    <div class="bem-form__group">
                        <label for="tempo" class="bem-form__label bem-form__label--required">Tempo de Preparo</label>
                        <input
                            type="text"
                            id="tempo"
                            class="bem-form__input"
                            placeholder="Ex: 45 minutos"
                            required
                        >
                    </div>
                </div>

                <div class="bem-grid-2">
                    <div class="bem-form__group">
                        <label for="porcoes" class="bem-form__label">Rendimento / Porções</label>
                        <input
                            type="text"
                            id="porcoes"
                            class="bem-form__input"
                            placeholder="Ex: 6 porções"
                        >
                    </div>

                    <div class="bem-form__group">
                        <label for="dificuldade" class="bem-form__label">Nível de Dificuldade</label>
                        <select id="dificuldade" class="bem-form__select">
                            <option value="Fácil">Fácil</option>
                            <option value="Médio" selected>Médio</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                </div>

                <div class="bem-form__group">
                    <label for="imagem" class="bem-form__label">URL da Imagem (opcional)</label>
                    <input
                        type="url"
                        id="imagem"
                        class="bem-form__input"
                        placeholder="Ex: https://images.unsplash.com/... (Deixe vazio para imagem padrão)"
                    >
                    <small style="color: var(--bem-text-muted); font-size: 0.8rem;">
                        Caso não informe uma imagem, utilizaremos automaticamente a imagem gourmet padrão do aplicativo.
                    </small>
                </div>

                <div class="bem-form__group">
                    <label for="ingredientes" class="bem-form__label bem-form__label--required">
                        Ingredientes (digite um por linha)
                    </label>
                    <textarea
                        id="ingredientes"
                        class="bem-form__textarea"
                        rows="5"
                        placeholder="500g de peito de frango desfiado&#10;1 pote de requeijão cremoso&#10;2 xícaras de farinha de trigo&#10;1 lata de milho verde&#10;Sal e pimenta a gosto"
                        required
                    ></textarea>
                </div>

                <div class="bem-form__group">
                    <label for="modo-de-preparo" class="bem-form__label bem-form__label--required">
                        Modo de Preparo (passo a passo)
                    </label>
                    <textarea
                        id="modo-de-preparo"
                        class="bem-form__textarea"
                        rows="6"
                        placeholder="1. Em uma panela, refogue o frango com temperos a gosto e adicione o milho.&#10;2. Misture o requeijão até ficar homogêneo e reserve.&#10;3. Prepare a massa e forre uma forma.&#10;4. Adicione o recheio e asse a 180°C por 40 minutos até dourar."
                        required
                    ></textarea>
                </div>

                <div class="bem-form__group">
                    <label for="dica" class="bem-form__label">Dica do Chef (opcional)</label>
                    <input
                        type="text"
                        id="dica"
                        class="bem-form__input"
                        placeholder="Ex: Pincele uma gema com azeite sobre a massa para um brilho dourado especial."
                    >
                </div>

                <div style="margin-top: 1rem;">
                    <button type="submit" class="bem-btn bem-btn--primary bem-btn--lg bem-btn--block">
                        ✓ Cadastrar Receita
                    </button>
                </div>
            </form>
        </div>
    </section>
    `;

    app.innerHTML = formulario;
    configurarFormulario();
}

function configurarFormulario() {
    const form = document.getElementById("formCadastroReceita");
    const containerMensagem = document.getElementById("mensagemCadastro");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const categoria = document.getElementById("categoria").value;
        const tempo = document.getElementById("tempo").value.trim();
        const porcoes = document.getElementById("porcoes").value.trim() || "4 porções";
        const dificuldade = document.getElementById("dificuldade").value;
        const imagemInput = document.getElementById("imagem").value.trim();
        const ingredientesTexto = document.getElementById("ingredientes").value.trim();
        const preparo = document.getElementById("modo-de-preparo").value.trim();
        const dica = document.getElementById("dica").value.trim();

        if (!nome || !categoria || !tempo || !ingredientesTexto || !preparo) {
            containerMensagem.innerHTML = `
                <div class="bem-alert bem-alert--danger" style="margin-bottom: 1.5rem;">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Atenção</h4>
                        <p class="bem-alert__message">Por favor, preencha todos os campos obrigatórios marcados com asterisco (*).</p>
                    </div>
                </div>
            `;
            return;
        }

        // Separa ingredientes por linha
        const ingredientes = ingredientesTexto
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        const novaReceitaId = Date.now();

        const novaReceita = {
            id: novaReceitaId,
            nome,
            categoria,
            tempo,
            porcoes,
            dificuldade,
            imagem: imagemInput || "src/img.js/receitas.webp",
            ingredientes,
            preparo,
            dica: dica || "Sirva quente e aproveite cada garfada desta deliciosa receita caseira."
        };

        // Salva no localStorage
        const receitasCadastradas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
        receitasCadastradas.push(novaReceita);
        localStorage.setItem("receitasCadastradas", JSON.stringify(receitasCadastradas));

        // Feedback com botão direto para a receita
        containerMensagem.innerHTML = `
            <div class="bem-alert bem-alert--success" style="margin-bottom: 1.5rem; display: block;">
                <h4 class="bem-alert__title">🎉 Receita Cadastrada com Sucesso!</h4>
                <p class="bem-alert__message" style="margin-bottom: 1rem;">
                    A receita "<strong>${nome}</strong>" foi adicionada ao acervo e já está disponível para consulta.
                </p>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button id="btnVerReceitaCriada" class="bem-btn bem-btn--primary bem-btn--sm">
                        Ver Receita Cadastrada &rarr;
                    </button>
                    <a href="#home" class="bem-btn bem-btn--outline bem-btn--sm">
                        Ir para a Home
                    </a>
                </div>
            </div>
        `;

        document.getElementById("btnVerReceitaCriada")?.addEventListener("click", () => {
            sessionStorage.setItem("receitaSelecionadaId", String(novaReceitaId));
            window.location.hash = "#detalhes";
        });

        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

export default {
    url: '#cadastro',
    label: 'Cadastro',
    pagina: telaCadastro
};