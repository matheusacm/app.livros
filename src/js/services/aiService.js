/**
 * aiService.js
 * Módulo de integração com Inteligência Artificial para o App de Receitas.
 * 
 * Preparado para futura implementação conforme orientação do professor.
 * Suporta integração com APIs de LLM (como Gemini, OpenAI ou endpoint próprio).
 */

class AIService {
    constructor(apiKey = '', baseUrl = '') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    /**
     * Sugere receitas com base em uma lista de ingredientes disponíveis.
     * @param {string[]} ingredientes - Lista de ingredientes fornecidos pelo usuário.
     * @returns {Promise<Object>} Resposta com a receita sugerida e modo de preparo.
     */
    async sugerirReceitaPorIngredientes(ingredientes) {
        console.log("[AIService] Sugerindo receita para os ingredientes:", ingredientes);
        
        // Simulação / Estrutura base pronta para receber fetch da API real de IA
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    sucesso: true,
                    nome: "Receita Sugerida por IA",
                    descricao: `Sugestão personalizada utilizando: ${ingredientes.join(", ")}`,
                    preparo: "Misture os ingredientes em fogo médio até dourar e sirva a gosto."
                });
            }, 800);
        });
    }

    /**
     * Responde dúvidas culinárias do usuário (ex: substituição de ingredientes, tempo de forno).
     * @param {string} pergunta - Pergunta do usuário.
     * @returns {Promise<string>} Resposta gerada pela IA.
     */
    async tirarDuvidaCulinaria(pergunta) {
        console.log("[AIService] Pergunta recebida:", pergunta);
        return `Resposta da IA para: "${pergunta}"`;
    }
}

const aiService = new AIService();
export default aiService;
