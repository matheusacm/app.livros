function sobre(app) {
    const sobre = `
    <section class="bem-container bem-container--narrow">
        <div style="text-align: center; margin-bottom: 2.5rem;">
            <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">📖 Sobre o Sabores & Receitas</h1>
            <p style="color: var(--bem-text-muted); font-size: 1.05rem; line-height: 1.6;">
                Conheça a proposta e a arquitetura técnica por trás do nosso aplicativo de receitas.
            </p>
        </div>

        <article class="bem-card" style="padding: var(--bem-spacing-xl); margin-bottom: 2rem;">
            <h2 style="font-size: 1.4rem; color: var(--bem-primary); margin-bottom: 1rem;">
                🍳 Proposta do Aplicativo
            </h2>
            <p style="margin-bottom: 1rem; line-height: 1.7; color: var(--bem-text);">
                O <strong>Sabores & Receitas</strong> foi concebido para transformar o ato de cozinhar em uma experiência simples, agradável e acessível. Reunimos receitas tradicionais, opções práticas para o dia a dia e um catálogo internacional conectado a APIs abertas, permitindo ao usuário descobrir pratos, explorar por categorias temáticas, cadastrar suas próprias criações gastronômicas e visualizar cada detalhe com um passo a passo acolhedor.
            </p>

            <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--bem-border);">

            <h2 style="font-size: 1.4rem; color: var(--bem-primary); margin-bottom: 1rem;">
                💻 Arquitetura e Tecnologias Utilizadas
            </h2>
            <p style="margin-bottom: 1rem; line-height: 1.7; color: var(--bem-text);">
                Este projeto foi desenvolvido como trabalho prático para o <strong>Curso Técnico em Desenvolvimento Web</strong>, aplicando conceitos fundamentais da web moderna:
            </p>

            <ul style="padding-left: 1.5rem; line-height: 1.8; color: var(--bem-text); display: flex; flex-direction: column; gap: 0.75rem;">
                <li>
                    <strong>SPA (Single Page Application) em Vanilla JS:</strong> Roteamento dinâmico baseado no evento <code>hashchange</code> do navegador (<code>#home</code>, <code>#categorias</code>, <code>#lista</code>, <code>#detalhes</code>, <code>#busca</code>, <code>#cadastro</code>, <code>#sobre</code>, <code>#contato</code>), proporcionando transições instantâneas sem recarregar a página.
                </li>
                <li>
                    <strong>Modularidade com ES Modules:</strong> Separação limpa de responsabilidades entre componentes de layout (<code>navbar</code>, <code>footer</code>), páginas de visualização, base de dados e serviços de rede.
                </li>
                <li>
                    <strong>CSS Próprio & Metodologia BEM:</strong> Design system customizado sem dependência de microframeworks externos, com tipografia Google Fonts, cores semânticas e acessibilidade em formulários e botões.
                </li>
                <li>
                    <strong>Consumo de API Externa (TheMealDB):</strong> Requisições assíncronas via <code>fetch()</code> na camada de serviços com normalização e tradução inteligente de termos culinários de Português para Inglês.
                </li>
                <li>
                    <strong>Persistência de Dados no Navegador:</strong> Uso de <code>sessionStorage</code> para retenção temporária do estado de filtros e <code>localStorage</code> para gravação contínua de novas receitas cadastradas pelo usuário.
                </li>
                <li>
                    <strong>Estrutura Pronta para IA:</strong> Arquivo <code>aiService.js</code> estruturado para futuras integrações conforme orientação pedagógica do professor.
                </li>
            </ul>
        </article>

        <div style="text-align: center;">
            <a href="#home" class="bem-btn bem-btn--primary bem-btn--lg">
                &larr; Voltar para a Página Inicial
            </a>
        </div>
    </section>
    `;
    app.innerHTML = sobre;
}

export default {
    url: '#sobre',
    label: 'Sobre',
    pagina: sobre
};
