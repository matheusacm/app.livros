function navbar(){
const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand">Brand</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item">
                    <a href="#inicio" class="bem-navbar__link bem-navbar__link--active">inicial</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#sobre" class="bem-navbar__link--active">Sobre</a>
                </li>
                 <li class="bem-navbar__item">
                    <a href="#servicos" class="bem-navbar__link--active">servicos</a>
                </li>
            </ul>
        </nav>`
}

            export default navbar;