

let cardServico = "";
const detalhes = 
[
 {   titulo: 'serviço 1',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: 'src/img.js/bellingham.jpg'
},
 {   titulo: 'serviço 2',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: 'src/img.js/yamal.jpg'
},

 {   titulo: 'klyntar mbappe',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: 'src/img.js/mbappe.jpg'
},

 {   titulo: 'serviço 4',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: 'src/img.js/rayan.jpg'
}
];

function servicos(){
cardServico = `<div class="bem-grid-auto">`;
for(let i=0; i < detalhes.length; i++){
cardServico += `
      <div class="bem-card">
           <img class="bem-card__image" src="${detalhes[i].Imagem}" alt="Image description">
           <div class="bem-card__body">
                <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
        <p>${detalhes[i].descricao}</p>
         </div>
    </div>
`;
}
cardServico += `</div>`;
return cardServico
}
export default servicos;