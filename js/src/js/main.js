const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand">Brand</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item">
                    <a href="inicio" class="bem-navbar__link bem-navbar__link--active">inicial</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="sobre" class="bem-navbar__link">Sobre</a>
                </li>
                 <li class="bem-navbar__item">
                    <a href="serviços" class="bem-navbar__link">Serviço</a>
                </li>
            </ul>
            </nav>`


const app = document.getElementById('app');
// app.textContent = '<h1>Olá Mundo!</h1>';
const home = `<h1> Esta é a página inicial </h1>'
<p>Bem Vindo ao meu site</p>

`
const sobre = `<h1> Esta é página sobre </h1>
<P>Este site é um exemplo de SPA usando JavaScript puro</p>
`
const contato = `<h1> Esta é página Contato </h1>
<p>Nossos serviços incluem: </p>`

window.addEventListener("hashchange", ()=>{
const rota = window.location.hash;
switch(rota){
   case '#inicio':
    app.iinerHTML = home;
    break;
    case '#sobre':
        app.innerHTML = sobre;
        break;
        case '#contato':
            app.HTML = contato;
            break;
            default:
app.innerHTML = `<h1>Olá Mundo!</h1>`;
}

})
