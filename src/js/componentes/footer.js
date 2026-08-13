function footer() {
    const footerElement = document.getElementById('footer');
    if (!footerElement) return;

    footerElement.innerHTML = `
        <footer class="bem-footer">
            <div class="bem-container">
                <div class="bem-footer__grid">
                    <div>
                        <div class="bem-footer__brand">
                            🍳 Sabores & <span>Receitas</span>
                        </div>
                        <p class="bem-footer__text">
                            O seu aplicativo de receitas favorito. Descubra pratos incríveis, organize seus ingredientes e compartilhe suas criações gastronômicas.
                        </p>
                    </div>

                    <div>
                        <h4 class="bem-footer__title">Navegação Rápida</h4>
                        <ul class="bem-footer__links">
                            <li><a href="#home" class="bem-footer__link">Início</a></li>
                            <li><a href="#categorias" class="bem-footer__link">Categorias</a></li>
                            <li><a href="#lista" class="bem-footer__link">Todas as Receitas</a></li>
                            <li><a href="#busca" class="bem-footer__link">Buscar na API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="bem-footer__title">Sobre o Projeto</h4>
                        <ul class="bem-footer__links">
                            <li><a href="#cadastro" class="bem-footer__link">Cadastrar Receita</a></li>
                            <li><a href="#sobre" class="bem-footer__link">Sobre a SPA</a></li>
                            <li><a href="#contato" class="bem-footer__link">Fale Conosco</a></li>
                        </ul>
                    </div>
                </div>

                <div class="bem-footer__bottom">
                    <p>&copy; ${new Date().getFullYear()} Sabores & Receitas — Projeto SPA Vanilla JS para Curso Técnico em Desenvolvimento Web.</p>
                </div>
            </div>
        </footer>
    `;
}

export default footer;
