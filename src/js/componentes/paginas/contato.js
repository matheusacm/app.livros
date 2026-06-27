

function capturarFormulario(){
    console.log("capturarFormulario foi chamada")
    const formulario = document.getElementById('formulario-de-contato');
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const lista = document.getElementById('lista_de_contatos');
        const li = document.createElement('li');
        // outra forma de acessar os dados do formulário, usando o ID dos inputs
        // const assunto = documento.getElementById('assunto').value;
        const assunto = event.target[0].value;
        const email = event.target[1].value;
        const mensagem = event.target[2].value;
        //template string
        li.textContent = `O Assunto é ${assunto}
         e o email é ${email} 
         e a mensagem é ${mensagem}`;
        lista.appendChild(li);
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = '';
    })
}


