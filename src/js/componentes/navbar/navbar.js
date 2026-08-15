function navbar(item_menu) {
    const navbarElement = document.getElementById('navbar');
    if (!navbarElement) return;

    const itensFiltrados = item_menu.filter(item => !item.ocultarNoMenu);
    const hashAtual = window.location.hash || '#home';

    navbarElement.innerHTML = `
        <nav class="bem-navbar">
            <div class="bem-navbar__container">
                <a href="#home" class="bem-navbar__brand">
                    🍳 Sabores & <span>Receitas</span>
                </a>

                <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox" style="display:none;">
                <label for="nav-toggle" class="bem-navbar__toggle" aria-label="Abrir Menu">☰</label>

                <ul class="bem-navbar__menu">
                    ${itensFiltrados.map((item) => {
                        const ativo = (item.url === hashAtual || (item.url === '#home' && (!hashAtual || hashAtual === '#'))) 
                            ? 'bem-navbar__link--active' 
                            : '';
                        return `
                            <li class="bem-navbar__item">
                                <a href="${item.url}" class="bem-navbar__link ${ativo}">
                                    ${item.label}
                                </a>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        </nav>
    `;

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.bem-navbar__link').forEach(link => {
        link.addEventListener('click', () => {
            const toggle = document.getElementById('nav-toggle');
            if (toggle) toggle.checked = false;
        });
    });
}

export default navbar;