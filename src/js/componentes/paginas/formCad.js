async function cadastroCliente(){
try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const result = await response.json();
  return result
} catch (error) {
  console.error(error);
};
}
async function capturacep(){
    const campocep  = document.getElementById("cep")
    campocep.addEventListener("blur",async (event)=>{
        console.log(event.target.value)
        const dados = await cadastroCliente(event.target.value)
        document.getElementById("logradouro").value = dados.logradouro
        document.getElementById("bairro").value = dados.bairro
        document.getElementById("localidade").value = dados.localidade
        document.getElementById("estado").value = dados.estado
        })
}
async function telaCadastro(){
    const formulario = 
    `
    <form id="cadastroCliente" >
    <label for="cep">CEP</label>
    <input type="text" id="cep">
    <label for="logradouro">logradouro</label>
    <input type="text" id="logradouro">
    <label for="bairro">bairro</label>
    <input type="text" id="bairro">
    <label for="localidade">localidade</label>
    <input type="text" id="localidade">
    <label for="estado">estado</label>
    <input type="text" id="estado">
    </form>
    `
    return formulario;
}


export { telaCadastro, capturacep}