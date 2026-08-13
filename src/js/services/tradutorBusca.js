/**
 * tradutorBusca.js
 * Mapeamento e normalização inteligente de termos de busca culinários
 * Português -> Inglês (para integração com a API TheMealDB).
 */

const dicionarioCulinario = {
    // Aves
    "frango": "chicken",
    "frangos": "chicken",
    "galinha": "chicken",
    "peru": "turkey",
    "pato": "duck",

    // Carnes bovinas e suínas
    "carne": "beef",
    "carnes": "beef",
    "boi": "beef",
    "bife": "beef",
    "bifes": "beef",
    "picanha": "beef",
    "costela": "ribs",
    "porco": "pork",
    "suino": "pork",
    "bacon": "bacon",
    "linguica": "sausage",
    "salsicha": "sausage",

    // Pescados e frutos do mar
    "peixe": "fish",
    "peixes": "fish",
    "salmao": "salmon",
    "atum": "tuna",
    "bacalhau": "cod",
    "camarao": "shrimp",
    "camaroes": "shrimp",
    "lula": "squid",
    "polvo": "octopus",

    // Massas e panificação
    "massa": "pasta",
    "massas": "pasta",
    "macarrao": "pasta",
    "espaguete": "spaghetti",
    "lasanha": "lasagna",
    "pizza": "pizza",
    "pao": "bread",
    "paes": "bread",
    "panqueca": "pancake",
    "panquecas": "pancake",

    // Doces e Sobremesas
    "bolo": "cake",
    "bolos": "cake",
    "torta": "pie",
    "tortas": "pie",
    "sobremesa": "dessert",
    "chocolate": "chocolate",
    "pudim": "pudding",
    "sorvete": "ice cream",
    "doce": "sweet",
    "biscoito": "biscuit",
    "cookie": "cookie",

    // Vegetais e Legumes
    "salada": "salad",
    "saladas": "salad",
    "sopa": "soup",
    "sopas": "soup",
    "caldo": "soup",
    "legume": "vegetable",
    "legumes": "vegetable",
    "vegetal": "vegetable",
    "vegetais": "vegetable",
    "arroz": "rice",
    "feijao": "bean",
    "feijoes": "bean",
    "batata": "potato",
    "batatas": "potato",
    "tomate": "tomato",
    "tomates": "tomato",
    "cebola": "onion",
    "cebolas": "onion",
    "alho": "garlic",
    "cenoura": "carrot",
    "cenouras": "carrot",
    "cogumelo": "mushroom",
    "cogumelos": "mushroom",
    "abacate": "avocado",

    // Laticínios e Ovos
    "queijo": "cheese",
    "queijos": "cheese",
    "ovo": "egg",
    "ovos": "egg",
    "leite": "milk",
    "manteiga": "butter",

    // Frutas
    "fruta": "fruit",
    "frutas": "fruit",
    "maca": "apple",
    "macas": "apple",
    "banana": "banana",
    "bananas": "banana",
    "limao": "lemon",
    "limoes": "lemon",
    "laranja": "orange",
    "laranjas": "orange",
    "morango": "strawberry",
    "morangos": "strawberry"
};

/**
 * Remove acentos de uma string.
 */
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Normaliza e traduz um termo de busca para consulta na API TheMealDB.
 * @param {string} termoUsuario - Termo digitado pelo usuário.
 * @returns {string} Termo em inglês para a API (ou o original tratado).
 */
export function normalizarTermoParaAPI(termoUsuario) {
    if (!termoUsuario) return "";

    const termoLimpo = removerAcentos(termoUsuario.trim().toLowerCase());

    // Verifica correspondência direta no dicionário
    if (dicionarioCulinario[termoLimpo]) {
        return dicionarioCulinario[termoLimpo];
    }

    // Verifica se alguma palavra dentro da frase existe no dicionário
    const palavras = termoLimpo.split(/\s+/);
    for (const palavra of palavras) {
        if (dicionarioCulinario[palavra]) {
            return dicionarioCulinario[palavra];
        }
    }

    // Caso não esteja no mapeamento, envia o termo original limpo
    return termoLimpo;
}

export default normalizarTermoParaAPI;
