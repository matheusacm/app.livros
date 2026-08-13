// duas formas de exportar mais de uma função de um mesmo arquivo
//
async function contato(app) {
const paginadecontato = `<section class="bem-container">
<h1> Esta é página Contato </h1>
    <form class="bem-container" id="formulario-de-contato">
        <div class="bem-form__group">
            <label for="assunto" class="bem-form__label">Assunto</label>
            <input type="text" name="assunto" id="assunto" class="bem-form__input">
        </div>
        <div class="bem-form__group">
            <label for="email" class="bem-form__label">email</label>
            <input type="email" name="email" id="email" class="bem-form__input">
        </div>
        <div class="bem-form__group">
            <label for="mensagem" class="bem-form__label">Mensagem</label>
            <textarea class="bem-form__textarea" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="bem-btn bem-btn--primary" style="margin-top: 1rem;">Enviar</button>
    </form>
    
    <div style="margin-top: 2rem;">
        <h3>Mensagens enviadas</h3>
        <div id="lista_de_contatos" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
        </div>
    </div>
    </section>
    `;

    app.innerHTML = paginadecontato;
    await capturarFormulario();
} 

async function capturarFormulario() {
    const formulario = document.getElementById('formulario-de-contato');
    if (!formulario) return;

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const lista = document.getElementById('lista_de_contatos');
        
        const assunto = document.getElementById('assunto').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!assunto || !email || !mensagem) return;

        const cardMensagem = document.createElement('div');
        cardMensagem.className = 'bem-alert bem-alert--info';
        cardMensagem.innerHTML = `
            <div class="bem-alert__content">
                <h4 class="bem-alert__title">${assunto} (${email})</h4>
                <p class="bem-alert__message">${mensagem}</p>
            </div>
        `;
        lista.appendChild(cardMensagem);

        formulario.reset();
    });
}

export default {
    url:'#contato',
    label:'Contato',
    pagina: contato
};