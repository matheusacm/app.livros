import { home, servicos, sobre, contato, capturarFormulario, telaCadastro, capturacep} from '../paginas/paginas.js'
const roteador = [
    {
        url:'#inicio',
        label:'Inicial',
        pagina: home

    },
    {
        url:'#cep',
        label:'Cadastro',
        pagina: telaCadastro,
        acao: capturacep
    }
    // {
    //     url:'#sobre',
    //     label:'Sobre',
    //     pagina: sobre

    // },
    // {
    //     url:'#servicos',
    //     label:'Serviços',
    //     pagina: servicos

    // },
    // {
    //     url:'#contatos',
    //     label:'Contatos',
    //     pagina: contato,
    //     acao: capturarFormulario

    // }
]

export default roteador;