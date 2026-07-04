import navbar from "./componentes/navbar/navbar.js";
import roteador from "./componentes/rotas/rotas.js";
navbar(roteador);
const app = document.getElementById('app');
console.log(roteador)
const mapaDeRotas = {}
console.log()
for(const rota of roteador){
    mapaDeRotas[rota.url] = rota
}
// console.log(mapaDeRota)
// console.log(mapaDeRota["#inicio"])
// console.log(mapaDeRota["#inicio"].pagina)
// console.log(mapaDeRotas["#inicio"].pagina())
let hash = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange", ()=>{
hash = window.location.hash;
render();
})
const rota404 = { pagina: () => `<div> Página não encontrada 404 </div>`}
function render(){
    const rotaAtual = mapaDeRotas[hash]  || rota404
    app.innerHTML =  rotaAtual.pagina();
    if(typeof rotaAtual.acao === 'function'){
        rotaAtual.acao();
    }
}