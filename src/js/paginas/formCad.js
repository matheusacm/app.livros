import buscarServicos from "../services/apiCache.js"
async function capturacep(){
    const campocep = document.getElementById("cep")
    campocep.addEventListener("blur",async (event)=>{
        const dados = await buscarServicos("https://viacep.com.br/ws/", event.target.value,"/json/")
        document.getElementById("nome").value = dados.nome
        document.getElementById("categoria").value = dados.categoria
        document.getElementById("tempo").value = dados.tempo
        document.getElementById("ingredientes").value = dados.ingredientes
        document.getElementById("modo-de-preparo").value = dados.modo_de_preparo
    


    })
}
async function telaCadastro(app){
    const formulario = `
    <form id="cadastroCliente" class="bem-container" >
        <label for="cep" class="bem-form__label" >CEP</label>
        <input type="text" id="cep" class="bem-form__input" >
        <label for="nome" class="bem-form__label">nome</label>
        <input type="text" id="nome" class="bem-form__input">
        <label for="categoria" class="bem-form__label">categoria</label>
        <input type="text" id="categoria" class="bem-form__input">
        <label for="tempo" class="bem-form__label">tempo</label>
        <input type="text" id="tempo" class="bem-form__input">
        <label for="ingredientes" class="bem-form__label">ingredientes</label>
        <input type="text" id="ingredientes" class="bem-form__input">
                <label for="modo-de-preparo" class="bem-form__label">modo de preparo</label>
        <input type="text" id="modo-de-preparo" class="bem-form__input">
    </form>
    `
    app.innerHTML = formulario;
    await capturacep();
}


export default {
    url: '#cadastro',
    label: 'Cadastro',
    pagina: telaCadastro
};