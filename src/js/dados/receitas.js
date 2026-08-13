

const receitas = [
  {
    id: 1,
    nome: "Macarrão à Bolonhesa",
    categoria: "Massas",
    tempo: "40 minutos",
    imagem: "src/img.js/macarrao_bolonhesa.webp",
    ingredientes: [
        "200g de macarrão",
        "200g de carne moída",
        "1 cebola picada",
        "2 dentes de alho picados",
        "1 lata de molho de tomate",
        "Sal e pimenta a gosto",
    ],
    preparo: "Para fazer o macarrão à bolonhesa, comece cozinhando a massa em uma panela com água fervente e sal até ficar al dente, escorrendo-a e reservando-a em seguida. Em outra panela, aqueça um pouco de óleo ou azeite e refogue a cebola picada e os dois dentes de alho picados até dourarem levemente. Adicione a carne moída a esse refogado e mexa bem, deixando cozinhar até que toda a água seque e a carne fique bem dourada. Despeje a lata de molho de tomate na panela, tempere com sal e pimenta a gosto, abaixe o fogo e deixe apurar por cerca de 10 a 15 minutos para encorpar. Por fim, misture o macarrão cozido diretamente no molho quente até que toda a massa fique bem envolvida e sirva imediatamente."
  },
  {
    id: 2,
    nome: "Lasanha de carne moída",
    categoria: "Massas",
    tempo: "1 hora",
    imagem: "src/img.js/lasanha_de_carne_moida.jpg",
    ingredientes: [
        "500g de massa para lasanha",
        "500g de carne moída",
        "2 caixas de creme de leite",
        "3 colheres de manteiga",
        "3 colheres de farinha de trigo",
        "500 gramas de presunto",
        "500 gramas de queijo mussarela",
        "sal a gosto",
        "2 copos de leite",
        "1 cebola ralada",
        "3 colheres de óleo",
        "1 caixa de molho de tomate",
        "3 dentes de alho amassados",
        "1 pacote de queijo ralado",
    ],
    preparo:  "Para preparar a lasanha de carne moída, comece cozinhando a massa para lasanha conforme as instruções da embalagem e reserve. Em uma panela, aqueça o óleo e refogue a cebola ralada e os dentes de alho amassados até dourarem. Adicione a carne moída à panela e cozinhe até que esteja completamente dourada. Acrescente o molho de tomate, tempere com sal a gosto e deixe cozinhar por alguns minutos. Em outra panela, derreta a manteiga, adicione a farinha de trigo e mexa bem para formar um roux. Gradualmente, adicione o leite, mexendo constantemente até obter um molho branco cremoso. Em um refratário, monte a lasanha alternando camadas de massa, molho de carne, presunto, queijo mussarela e molho branco. Repita as camadas até que todos os ingredientes sejam utilizados, finalizando com uma camada de molho branco e polvilhando queijo ralado por cima. Leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até que o queijo esteja dourado e borbulhante. Sirva quente."
  },
  {
    id: 3,
    nome: "Massa de pizza profissional",
    categoria: "Massas",
    tempo: "50 minutos",
    imagem: "src/img.js/massa_de_pizza_profissional.jpg",
    ingredientes: [
        "259g de farinha de trigo",
        "1 colher de chá de sal",
        "2 colheres de chá de açúcar",
        "125 ml de água morna",
        "2 colheres de sopa de azeite ou óleo",
        "1 colher de chá de fermento biológico seco",
    ],
    preparo: "Para preparar a massa de pizza profissional, comece misturando a farinha de trigo, o sal e o açúcar em uma tigela grande. Em seguida, adicione a água morna, o azeite e o fermento biológico seco à mistura de farinha. Misture bem até formar uma massa homogênea. Transfira a massa para uma superfície enfarinhada e sove por cerca de 10 minutos, até que fique lisa e elástica. Coloque a massa em uma tigela untada com azeite, cubra com um pano úmido e deixe descansar em um local quente por aproximadamente 1 hora, ou até que dobre de tamanho. Após o descanso, abra a massa com um rolo até atingir a espessura desejada e coloque-a em uma forma de pizza previamente untada. Adicione os ingredientes de sua preferência e leve ao forno pré-aquecido a 220°C por cerca de 15 a 20 minutos, ou até que a massa esteja dourada e crocante. Sirva imediatamente."
  },
  {
    id: 4,
    nome: "Picanha Assada com Alho",
    categoria: "Carnes",
    tempo: "1 hora e 20 minutos",
    imagem: "src/img.js/Carnes.jpg",
    ingredientes: [
        "1 peça de picanha (cerca de 1.2kg)",
        "Sal grosso a gosto",
        "4 dentes de alho triturados",
        "2 colheres de sopa de manteiga",
        "Ramos de alecrim fresco"
    ],
    preparo: "Faça cortes superficiais em formato de losango na gordura da picanha. Misture a manteiga com o alho triturado e espalhe sobre a carne. Tempere com sal grosso e adicione os ramos de alecrim. Leve ao forno pré-aquecido a 200°C por cerca de 45 minutos para ponto médio. Deixe descansar por 5 minutos antes de fatiar e servir."
  },
  {
    id: 5,
    nome: "Suco Refrescante de Frutas Tropicais",
    categoria: "Bebidas",
    tempo: "10 minutos",
    imagem: "src/img.js/bebidas.jpg",
    ingredientes: [
        "1 xícara de abacaxi picado",
        "Suco de 2 laranjas",
        "Folhas de hortelã fresca",
        "300ml de água de coco ou água com gás",
        "Gelo a gosto",
        "Mel para adoçar (opcional)"
    ],
    preparo: "Bata no liquidificador o abacaxi, o suco de laranja, as folhas de hortelã e a água de coco por 2 minutos. Coe se preferir uma textura mais lisa ou sirva direto com pedras de gelo e rodelas de laranja decorando o copo."
  },
  {
    id: 6,
    nome: "Taça de Mousse de Chocolate e Frutas",
    categoria: "Sobremesas",
    tempo: "30 minutos (+ 2h de geladeira)",
    imagem: "src/img.js/sobremesas.webp",
    ingredientes: [
        "200g de chocolate meio amargo",
        "1 caixa de creme de leite",
        "3 claras em neve",
        "2 colheres de sopa de açúcar",
        "Frutas vermelhas para decorar"
    ],
    preparo: "Derreta o chocolate em banho-maria ou no micro-ondas e misture o creme de leite até formar uma ganache lisa. Em outra tigela, bata as claras em neve com o açúcar até formar picos firmes. Incorpore delicadamente as claras à ganache. Distribua em taças e leve à geladeira por 2 horas. Decore com frutas vermelhas antes de servir."
  },
  {
    id: 7,
    nome: "Bowl Saudável de Quinoa com Vegetais",
    categoria: "Saudáveis",
    tempo: "25 minutos",
    imagem: "src/img.js/saudáveis.webp",
    ingredientes: [
        "1 xícara de quinoa cozida",
        "1 abacate fatiado",
        "Tomates-cereja cortados ao meio",
        "Folhas de espinafre ou rúcula",
        "1 colher de sopa de sementes de abóbora ou chia",
        "Azeite, limão e sal a gosto"
    ],
    preparo: "Em uma tigela ou bowl, faça uma base com a quinoa cozida e as folhas verdes. Disponha as fatias de abacate e os tomates-cereja harmonicamente. Regue com molho de azeite, suco de limão e sal. Finalize salpicando as sementes tostadas por cima e sirva imediatamente."
  }
];

export default receitas;