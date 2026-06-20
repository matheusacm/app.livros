import navbar from "./componentes/navbar/navbar.js";
import home from "./componentes/paginas/home.js";
import sobre from "./componentes/paginas/sobre.js";
import {contato, capturarFormulario} from "./componentes/paginas/contato.js";
import servicos from "./componentes/paginas/servicos.js";
import itens_menu from "./componentes/menu/itens.js";
navbar(itens_menu);
const app = document.getElementById('app');
// app.textContent = '<h1>Olá Mundo!</h1>';

// #inicio #sobre #contato #servicos
let rota = window.location.hash || 'inicio';
render();
window.addEventListener("hashchange", ()=>{
rota = window.location.hash;
render();


})

function render(){
    switch(rota){
   case '#inicio':
    app.innerHTML = home;
   
    case '#sobre':
        app.innerHTML = sobre;
        break;
        case `#contato`:
            app.innerHTML = contato;
             capturarFormulario();
    break;
            break;
        case '#servicos':
        app.innerHTML = servicos;
        break;
            default:
app.innerHTML = `<h1>Página não encontrada</h1>`;
}

}


// console.log("contagem regressiva")
// for(let i=100; i<=100; i++)
// console.log("contagem regressiva")
// for(let i=0; i<=100; i+=5){
//     console.log(i);
// }

// let temperatura = 20;
// let ligado = true;
// while(ligado){
//     console.log("A temperatura atual é: " + temperatura);
//     temperatura += 0.05;
//     if(temperatura >= 30 && temperatura < 33){
// console.log("Enviar email de alerta: Temperatura alta!");
//     }else if(temperatura > 33){
//         ligado = false;
//         console.log("Desligando o sistema para evitar danos.");
//         break;

//     }

