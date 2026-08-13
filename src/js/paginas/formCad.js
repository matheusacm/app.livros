async function telaCadastro(app) {
    const formulario = `
    <section class="bem-container">
        <h1>Cadastrar Nova Receita</h1>
        <p style="color: var(--bem-text-muted); margin-bottom: 1.5rem;">Adicione sua própria receita para vê-la na lista e na página inicial.</p>

        <div id="mensagemCadastro"></div>

        <form id="formCadastroReceita" class="bem-form" style="max-width: 600px;">
            <div class="bem-form__group">
                <label for="nome" class="bem-form__label bem-form__label--required">Nome da Receita</label>
                <input type="text" id="nome" class="bem-form__input" placeholder="Ex: Bolo de Cenoura" required>
            </div>

            <div class="bem-form__group">
                <label for="categoria" class="bem-form__label bem-form__label--required">Categoria</label>
                <select id="categoria" class="bem-form__select" required>
                    <option value="">Selecione uma categoria...</option>
                    <option value="Massas">Massas</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Sobremesas">Sobremesas</option>
                    <option value="Saudáveis">Saudáveis</option>
                </select>
            </div>

            <div class="bem-form__group">
                <label for="tempo" class="bem-form__label bem-form__label--required">Tempo de Preparo</label>
                <input type="text" id="tempo" class="bem-form__input" placeholder="Ex: 45 minutos" required>
            </div>

            <div class="bem-form__group">
                <label for="imagem" class="bem-form__label">URL da Imagem (opcional)</label>
                <input type="url" id="imagem" class="bem-form__input" placeholder="Ex: https://exemplo.com/imagem.jpg">
            </div>

            <div class="bem-form__group">
                <label for="ingredientes" class="bem-form__label bem-form__label--required">Ingredientes (um por linha)</label>
                <textarea id="ingredientes" class="bem-form__textarea" rows="5" placeholder="1 xícara de farinha&#10;2 ovos&#10;1 colher de fermento" required></textarea>
            </div>

            <div class="bem-form__group">
                <label for="modo-de-preparo" class="bem-form__label bem-form__label--required">Modo de Preparo</label>
                <textarea id="modo-de-preparo" class="bem-form__textarea" rows="5" placeholder="Descreva o passo a passo da receita..." required></textarea>
            </div>

            <button type="submit" class="bem-btn bem-btn--primary" style="margin-top: 1rem;">
                Cadastrar Receita
            </button>
        </form>
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
        const imagemInput = document.getElementById("imagem").value.trim();
        const ingredientesTexto = document.getElementById("ingredientes").value.trim();
        const preparo = document.getElementById("modo-de-preparo").value.trim();

        if (!nome || !categoria || !tempo || !ingredientesTexto || !preparo) {
            containerMensagem.innerHTML = `
                <div class="bem-alert bem-alert--danger" style="margin-bottom: 1rem;">
                    <div class="bem-alert__content">
                        <p class="bem-alert__message">Por favor, preencha todos os campos obrigatórios.</p>
                    </div>
                </div>
            `;
            return;
        }

        // Separa ingredientes por quebra de linha
        const ingredientes = ingredientesTexto
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        const novaReceita = {
            id: Date.now(),
            nome,
            categoria,
            tempo,
            imagem: imagemInput || "src/img.js/receitas.webp",
            ingredientes,
            preparo
        };

        // Salva no localStorage
        const receitasCadastradas = JSON.parse(localStorage.getItem("receitasCadastradas") || "[]");
        receitasCadastradas.push(novaReceita);
        localStorage.setItem("receitasCadastradas", JSON.stringify(receitasCadastradas));

        // Feedback positivo
        containerMensagem.innerHTML = `
            <div class="bem-alert bem-alert--success" style="margin-bottom: 1.5rem;">
                <div class="bem-alert__content">
                    <h4 class="bem-alert__title">Sucesso!</h4>
                    <p class="bem-alert__message">Receita "${nome}" cadastrada com sucesso!</p>
                </div>
            </div>
        `;

        form.reset();
    });
}

export default {
    url: '#cadastro',
    label: 'Cadastro',
    pagina: telaCadastro
};