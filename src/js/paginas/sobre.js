function sobre(app) {
    const sobre = `
    <section class="bem-container">
        <h1>Sobre o App de Receitas</h1>
        <p style="margin: 1rem 0; line-height: 1.6;">
            Este aplicativo foi desenvolvido como projeto prático do curso técnico em Desenvolvimento Web. Trata-se de uma <strong>SPA (Single Page Application)</strong> construída com <strong>JavaScript puro (Vanilla JS)</strong>, manipulação do DOM e roteamento dinâmico baseado em <em>Hash</em>.
        </p>

        <h2 style="font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Tecnologias e Conceitos Aplicados:</h2>
        <ul style="padding-left: 1.5rem; line-height: 1.8;">
            <li>Arquitetura modular com ES Modules (import/export).</li>
            <li>Roteamento dinâmico baseado em Hash (#home, #categorias, #lista, #busca, #cadastro, #sobre, #contato).</li>
            <li>Consumo assíncrono de API externa (TheMealDB) via <code>fetch()</code>.</li>
            <li>Persistência temporária com <code>sessionStorage</code> e armazenamento local com <code>localStorage</code>.</li>
            <li>Design responsivo com metodologia BEM e Microframework CSS.</li>
        </ul>
    </section>
    `;
    app.innerHTML = sobre;
}

export default {
    url: '#sobre',
    label: 'Sobre',
    pagina: sobre
};
