export function contato() {
const paginadecontato = `<h1> Esta é página Contato </h1>
<form class="bem-form" id="formulario-de-contato">
<div class="bem-form_group">
   <label for="assunto" class="bem-form_label">Assunto</label>
    <input type="text" name="assunto" id="assunto" class="bem-bem-form_input">
</div>
<div class="bem-form_group">
   <label for="email"  class="bem-form_label>email</label>
   <input type="email" name="email" id="email" class="bem-bem-form_input">
</div>
<div class="bem-form_group"> 
    <label for="mensagem"  class="bem-form_label>Mensagem</label>
<textarea class="bem-form_textarea" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
</div>
    <button type="submit" class="bem-btn--primary">Enviar</button>
</form>
<ul id="Lista_de_contatos">
</ul>
`

return paginadecontato;
}

export function capturarFormulario() {
    const formulario = document.getElementById('formulario-de-contato');
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const lista = document.getElementById('Lista_de_contatos');
        const li = document.createElement('li');

        const assunto = event.target[0].value;
        const email = event.target[1].value;
        const mensagem = event.targwt[2].value;

        li.textContent = `O Assunto é ${assunto} e o email é ${email} e a mensagem é ${mensagem}`;
        li.appendChild(li);
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = '';
    })
}


