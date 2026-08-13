
import item_menu from "../../rotas/rotas.js";


function navbar(item_menu) {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const itensFiltrados = item_menu.filter(item => !item.ocultarNoMenu);

    navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#home" class="bem-navbar__brand">Receitas</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox" style="display:none;">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                ${itensFiltrados.map((item) => {
                    return `<li class="bem-navbar__item">
                        <a href="${item.url}" class="bem-navbar__link">${item.label}</a>
                    </li>`;
                }).join('')}
            </ul>
        </nav>`;
} 

export default navbar;