import home from "../paginas/TelaInicialDeReceitas.js";
import categorias from "../paginas/categorias.js";
import listaReceitas from "../paginas/listaReceitas.js";
import sobre from "../paginas/sobre.js";
import contato from "../paginas/contato.js";
import telaCadastro from "../paginas/formCad.js";
import busca from "../paginas/busca.js";
import detalhes from "../paginas/detalhes.js";

const roteador = [
    home,
    categorias,
    listaReceitas,
    busca,
    telaCadastro,
    sobre,
    contato,
    detalhes
];

export default roteador;