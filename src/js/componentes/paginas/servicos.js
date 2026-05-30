let servicos = "";
const detalhes = 
[
 {   titulo: 'serviço 1',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: '../bellingham.jpg'
}
]
[
 {   titulo: 'serviço 2',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: '../yamal.jpg'
}
]
[
 {   titulo: 'serviço 3',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: 'src/mbappe.jpg'
}
]
[
 {   titulo: 'serviço 4',
    descricao: 'xxxxxxxxx xxxxxxxxx xxxxx',
    Imagem: '../rayan.jpg'
}
]
servicos += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
servicos += `
  
      <div class="bem-card">
           <img class="bem-card__image" src="${detalhes[i].Imagem}" alt="Image description">
           <div class="bem-card__body">
                <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
        <p>${detalhes[i].descricao}</p>
         </div>
    </div>

</div>
`
}
export default servicos;
