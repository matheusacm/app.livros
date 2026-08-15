# 🍳 Sabores & Receitas — SPA em JavaScript Vanilla

Aplicativo Web em formato SPA (Single Page Application) desenvolvido com **JavaScript puro (Vanilla JS)**, CSS estruturado na metodologia **BEM** e consumo da API pública **TheMealDB**, como projeto prático do Curso Técnico em Desenvolvimento Web.

---

## 📁 Estrutura do Projeto

```text
app.livros-1/
├── index.html                     # Ponto de entrada HTML único da SPA
├── readme.md                      # Documentação do projeto
└── src/
    ├── css/
    │   └── style.css              # Design System e estilos próprios (metodologia BEM)
    ├── img.js/                    # Acervo de imagens gastronômicas das categorias e receitas
    └── js/
        ├── main.js                # Roteador por Hash, inicialização e gerenciamento do DOM
        ├── componentes/
        │   ├── navbar/
        │   │   └── navbar.js      # Menu de navegação responsivo com destaque de rota ativa
        │   └── footer.js          # Rodapé com informações institucionais e links rápidos
        ├── dados/
        │   └── receitas.js        # Catálogo padrão de receitas gastronômicas categorizadas
        ├── paginas/
        │   ├── TelaInicialDeReceitas.js # Home: Hero Banner, destaques e benefícios
        │   ├── categorias.js      # Grade das 5 categorias com contagem dinâmica
        │   ├── listaReceitas.js   # Lista filtrável com limpeza de filtros
        │   ├── detalhes.js        # Detalhes da receita: ingredientes e modo de preparo
        │   ├── busca.js           # Busca na API TheMealDB com normalização PT-BR -> EN
        │   ├── formCad.js         # Cadastro de novas receitas persistidas no localStorage
        │   ├── sobre.js           # Apresentação do projeto e fundamentação técnica
        │   └── contato.js         # Formulário de contato e sugestões com feedback
        ├── rotas/
        │   └── rotas.js           # Mapeamento de rotas e componentes
        └── services/
            ├── api.js             # Serviço genérico assíncrono com fetch() e tratamento HTTP
            ├── tradutorBusca.js   # Normalização e tradução inteligente de termos culinários
            ├── storageStrategy.js # Estratégias de cache e persistência (Session/LocalStorage)
            ├── apiCache.js        # Camada de cache com medição de desempenho
            └── aiService.js       # Estrutura modular preparada para futura integração com IA
```

---

## 🚀 Como Executar o Projeto

1. Abra a pasta raiz do projeto no **VS Code**.
2. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (ou utilize `npx serve .` / `python -m http.server 8000`).
3. O aplicativo abrirá no navegador no endereço `http://localhost:5500` (ou porta correspondente).

---

## ✨ Funcionalidades Principais

- **Navegação SPA Instantânea**: Roteamento por hash (`#home`, `#categorias`, `#lista`, `#detalhes`, `#busca`, `#cadastro`, `#sobre`, `#contato`) sem recarregar a página.
- **Categorias & Filtros**: Massas, Carnes, Bebidas, Sobremesas e Saudáveis com persistência em `sessionStorage`.
- **Busca em Português na API TheMealDB**: Tradução automática de termos (*frango, carne, massa, bolo, salada, peixe, etc.*) antes de enviar a requisição para a API externa.
- **Cadastro Completo com LocalStorage**: Novas receitas cadastradas aparecem imediatamente na Home, na Lista e nos Detalhes.
- **Formulários Acessíveis**: Contraste garantido, sem bugs de foco/opacidade e feedback visual imediato.