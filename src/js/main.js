import navbar from "./componentes/navbar/navbar.js";
import roteador from "./componentes/rotas/rotas.js";
navbar(roteador);
const app = document.getElementById('app');
<<<<<<< HEAD
// console.log(roteador)
const mapaDeRotas= {}
// console.log(mapaDeRotas)
=======
console.log(roteador)
const mapaDeRotas = {}
console.log()
>>>>>>> 7624035f599d83e90fa6ef52cfb94791510267d0
for(const rota of roteador){
    mapaDeRotas[rota.url] = rota
}
// console.log(mapaDeRotas)
// console.log(mapaDeRotas["#inicio"])
// console.log(mapaDeRotas["#inicio"].pagina)
// console.log(mapaDeRotas["#inicio"].pagina())
let hash = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange", ()=>{
hash = window.location.hash;
render();
})
const rota404 = { pagina: () => `<div> Página não encontrada 404 </div>`}
<<<<<<< HEAD
async function render(){
    const rotaAtual = mapaDeRotas[hash] || rota404
    app.innerHTML = await rotaAtual.pagina()
    if(typeof mapaDeRotas[hash].acao === 'function'){
    await mapaDeRotas[hash].acao()
    }
}
=======
function render(){
    const rotaAtual = mapaDeRotas[hash]  || rota404
    app.innerHTML =  rotaAtual.pagina();
    if(typeof rotaAtual.acao === 'function'){
        rotaAtual.acao();
    }
}
>>>>>>> 7624035f599d83e90fa6ef52cfb94791510267d0
