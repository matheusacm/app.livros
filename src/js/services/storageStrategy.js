import buscarServicos from "./api";

const memoriaTemporaria = {
    _cache: new Map(),
    // é para verificar se existe a informação armazenada
    existe(chave){
        return this._cache.has(key);
    },
    //buscar dados salvos na memoria
    buscarDadosLocal(chave){
        return this._cache.get(key);
    },
    //salvar dados na memoria
    salvarDadosLocal(chave, valor){
        this._cache.set(key, valor);
    }
};

const memoriaPermanente = {
    existe(chave){
        return localStorage.getItem(chave) !== null;
    },
    buscarDadosLocal(chave){
        const dados = localStorage.getItem(chave);
        // condição ternario
        //   existe retorne o conteúdo após ? senao o conteudo apos :
        //  JSON.parse = transforma texto em objeto
        return dados ? JSON.parse(dados) : null;
    },
    salvarDadosLocal(chave, valor){
        // salvar dados na memoria
        localStorage.setItem(chave, JSON.stringify(valor));
    }
};
export { memoriaTemporaria, memoriaPermanente };