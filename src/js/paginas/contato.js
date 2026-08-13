async function contato(app) {
    const paginadecontato = `
    <section class="bem-container bem-container--narrow">
        <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">📬 Fale Conosco & Sugestões</h1>
            <p style="color: var(--bem-text-muted); line-height: 1.6;">
                Tem alguma dúvida sobre o modo de preparo, sugestão de receita para adicionarmos ao app ou feedback? Deixe sua mensagem abaixo!
            </p>
        </div>

        <div id="mensagemFeedback"></div>

        <div class="bem-card" style="padding: var(--bem-spacing-xl); margin-bottom: 2.5rem;">
            <form id="formulario-de-contato" class="bem-form" autocomplete="off">
                <div class="bem-grid-2">
                    <div class="bem-form__group">
                        <label for="nomeContato" class="bem-form__label bem-form__label--required">Seu Nome</label>
                        <input
                            type="text"
                            id="nomeContato"
                            class="bem-form__input"
                            placeholder="Ex: Matheus Silva"
                            required
                        >
                    </div>

                    <div class="bem-form__group">
                        <label for="email" class="bem-form__label bem-form__label--required">Seu E-mail</label>
                        <input
                            type="email"
                            id="email"
                            class="bem-form__input"
                            placeholder="Ex: seuemail@exemplo.com"
                            required
                        >
                    </div>
                </div>

                <div class="bem-grid-2">
                    <div class="bem-form__group">
                        <label for="tipoMensagem" class="bem-form__label">Tipo de Contato</label>
                        <select id="tipoMensagem" class="bem-form__select">
                            <option value="Sugestão de Receita">💡 Sugestão de Nova Receita</option>
                            <option value="Dúvida Culinária">❓ Dúvida sobre Ingrediente/Modo de Preparo</option>
                            <option value="Elogio">⭐ Elogio ao Aplicativo</option>
                            <option value="Feedback Técnico">🛠️ Feedback do Projeto</option>
                        </select>
                    </div>

                    <div class="bem-form__group">
                        <label for="assunto" class="bem-form__label bem-form__label--required">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            class="bem-form__input"
                            placeholder="Ex: Sugestão: Bolo de Cenoura com Ganache"
                            required
                        >
                    </div>
                </div>

                <div class="bem-form__group">
                    <label for="mensagem" class="bem-form__label bem-form__label--required">Mensagem</label>
                    <textarea
                        id="mensagem"
                        class="bem-form__textarea"
                        rows="5"
                        placeholder="Escreva sua dúvida, sugestão de receita ou comentário detalhado..."
                        required
                    ></textarea>
                </div>

                <div style="margin-top: 0.5rem;">
                    <button type="submit" class="bem-btn bem-btn--primary bem-btn--lg bem-btn--block">
                        ✉️ Enviar Mensagem
                    </button>
                </div>
            </form>
        </div>

        <div>
            <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">📋 Mensagens e Sugestões Enviadas nesta Sessão:</h3>
            <div id="lista_de_contatos" style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="bem-alert bem-alert--info" id="semMensagensAinda">
                    <div class="bem-alert__content">
                        <p class="bem-alert__message">Nenhuma mensagem enviada nesta sessão. Preencha o formulário acima para testar!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    app.innerHTML = paginadecontato;
    configurarFormularioContato();
} 

function configurarFormularioContato() {
    const formulario = document.getElementById('formulario-de-contato');
    const containerFeedback = document.getElementById('mensagemFeedback');
    const lista = document.getElementById('lista_de_contatos');

    if (!formulario) return;

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById('nomeContato').value.trim();
        const email = document.getElementById('email').value.trim();
        const tipo = document.getElementById('tipoMensagem').value;
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !assunto || !mensagem) return;

        // Remove placeholder de lista vazia
        const placeholder = document.getElementById('semMensagensAinda');
        if (placeholder) placeholder.remove();

        const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const cardMensagem = document.createElement('div');
        cardMensagem.className = 'bem-card';
        cardMensagem.style.padding = 'var(--bem-spacing-md) var(--bem-spacing-lg)';
        cardMensagem.style.borderLeft = '4px solid var(--bem-primary)';
        cardMensagem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                    <span class="recipe-badge recipe-badge--massas" style="margin-bottom: 0.25rem;">${tipo}</span>
                    <h4 style="font-size: 1.1rem; color: var(--bem-text);">${assunto}</h4>
                    <p style="font-size: 0.85rem; color: var(--bem-text-muted);">Enviado por <strong>${nome}</strong> (${email}) às ${hora}</p>
                </div>
            </div>
            <p style="font-size: 0.95rem; color: var(--bem-text); line-height: 1.5; background-color: var(--bem-surface-muted); padding: 0.75rem; border-radius: var(--bem-radius-sm); margin-top: 0.5rem;">
                ${mensagem}
            </p>
        `;

        lista.prepend(cardMensagem);

        containerFeedback.innerHTML = `
            <div class="bem-alert bem-alert--success" style="margin-bottom: 1.5rem;">
                <div class="bem-alert__content">
                    <h4 class="bem-alert__title">Mensagem Enviada!</h4>
                    <p class="bem-alert__message">Obrigado pelo seu contato, ${nome}. Sua mensagem foi registrada com sucesso.</p>
                </div>
            </div>
        `;

        formulario.reset();
    });
}

export default {
    url: '#contato',
    label: 'Contato',
    pagina: contato
};