/**
 * aiService.js
 * Módulo preparado para futura integração com API de Inteligência Artificial.
 * 
 * Aguardando orientação do professor sobre endpoint e chave de API específicos.
 */

class AIService {
    constructor(apiKey = '', endpoint = '') {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    /**
     * Preparado para integração com serviço de LLM/IA.
     * @param {Object} dados - Parâmetros da consulta.
     */
    async consultarIA(dados) {
        if (!this.endpoint || !this.apiKey) {
            console.info("[AIService] Módulo de IA preparado. Aguardando configuração de credenciais e orientações do professor.");
            return null;
        }

        // Exemplo de estrutura para fetch real:
        // const response = await fetch(this.endpoint, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
        //     body: JSON.stringify(dados)
        // });
        // return await response.json();
    }
}

const aiService = new AIService();
export default aiService;
