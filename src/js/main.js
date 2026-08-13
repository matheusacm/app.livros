import navbar from "./componentes/navbar/navbar.js";
import footer from "./componentes/footer.js";
import roteador from "./rotas/rotas.js";

const app = document.getElementById('app');
const mapaDeRotas = {};

for (const rota of roteador) {
    mapaDeRotas[rota.url] = rota;
}

let hash = window.location.hash || '#home';

// Inicializa layout fixo
navbar(roteador);
footer();
render();

window.addEventListener("hashchange", () => {
    hash = window.location.hash || '#home';
    navbar(roteador); // Atualiza o estado ativo no menu
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const rota404 = {
    pagina: (app) => {
        app.innerHTML = `
            <section class="bem-container">
                <div class="bem-alert bem-alert--danger">
                    <div class="bem-alert__content">
                        <h4 class="bem-alert__title">Página Não Encontrada (404)</h4>
                        <p class="bem-alert__message">A página ou receita que você procurou não existe ou foi movida.</p>
                    </div>
                </div>
                <div style="margin-top: 1.5rem;">
                    <a href="#home" class="bem-btn bem-btn--primary">Voltar para a Página Inicial</a>
                </div>
            </section>
        `;
    }
};

async function render() {
    const rotaBase = hash.split('?')[0];
    const rotaAtual = mapaDeRotas[rotaBase] || rota404;
    await rotaAtual.pagina(app);
}
