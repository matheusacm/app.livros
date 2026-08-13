async function buscarServicos(url, dados = '', forma = '') {
    try {
        const formataURL = `${url}${dados}${forma}`;
        const response = await fetch(formataURL);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Erro ao buscar API:", error);
    }
}

export default buscarServicos;