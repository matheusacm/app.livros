import buscarNoMundo from "./api.js";
import { memoriaTemporaria, memoriaPermanente } from "./storageStrategy.js";

const storage  = memoriaPermanente;

async function buscarNoCache(url, dados= '', forma=''){
    const formataURL = `${url}${dados}${forma}`
    if(storage.existe(formataURL)){}{
        console.time(`[CACHE] TEMPO PARA: ${dados || 'página incial' }`)
        const resultadoEmCache = storage.buscarDadosLocal(formataURL)
        console.timeEnd(`[CACHE] TEMPO PARA: ${dados || 'página incial' }`)
        return resultadoEmCache
    }
    console.time(`[Mundo exterior] tempo para ${dados || 'página incial'}`)
    try{
        const resultadoDoServidor = await buscarNoMundo(url, dados, forma)
        storage.salvarDadosLocal(formataURL, resultadoDoServidor)
        console.timeEnd(`[Mundo exterior] tempo para ${dados || 'página incial'}`)
        return resultadoDoServidor;
    }catch(error){
       console.timeEnd(`[CACHE] TEMPO PARA: ${dados || 'página incial' }`)
       console.error("erro na busca:", error)
       throw error;
    }
};

export default buscarNoMundo;