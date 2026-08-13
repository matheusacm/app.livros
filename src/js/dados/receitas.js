const receitas = [
  {
    id: 1,
    nome: "Macarrão à Bolonhesa Clássico",
    categoria: "Massas",
    tempo: "40 minutos",
    porcoes: "4 porções",
    dificuldade: "Fácil",
    imagem: "src/img.js/macarrao_bolonhesa.webp",
    ingredientes: [
        "200g de macarrão (espaguete ou penne)",
        "200g de carne moída de boa qualidade",
        "1 cebola média picada",
        "2 dentes de alho picados",
        "1 lata de molho de tomate pelado",
        "2 colheres de sopa de azeite",
        "Folhas de manjericão fresco a gosto",
        "Queijo parmesão ralado para finalizar",
        "Sal e pimenta-do-reino a gosto"
    ],
    preparo: "1. Cozinhe a massa em uma panela com água fervente e sal até atingir o ponto al dente. Escorra e reserve.\n2. Em uma panela aquecida, adicione o azeite e refogue a cebola e o alho até ficarem levemente dourados.\n3. Acrescente a carne moída e mexa vigorosamente até que fique bem dourada e soltinha.\n4. Adicione o molho de tomate, tempere com sal e pimenta e deixe apurar em fogo baixo por 15 minutos.\n5. Misture a massa cozida diretamente ao molho quente, decore com folhas de manjericão e sirva com parmesão.",
    dica: "Guarde uma concha da água do cozimento do macarrão para incorporar ao molho no final, garantindo máxima cremosidade."
  },
  {
    id: 2,
    nome: "Lasanha Tradicional de Carne Moída",
    categoria: "Massas",
    tempo: "1 hora",
    porcoes: "6 porções",
    dificuldade: "Médio",
    imagem: "src/img.js/lasanha_de_carne_moida.jpg",
    ingredientes: [
        "500g de massa para lasanha pré-cozida",
        "500g de carne moída refogada com molho de tomate",
        "500g de queijo mussarela fatiado",
        "500g de presunto fatiado",
        "2 caixas de creme de leite",
        "2 copos de leite integral",
        "3 colheres de sopa de manteiga",
        "3 colheres de sopa de farinha de trigo",
        "1 pacote de queijo parmesão ralado",
        "Sal e noz-moscada a gosto"
    ],
    preparo: "1. Prepare o molho branco derretendo a manteiga, misturando a farinha de trigo e adicionando o leite gradualmente até engrossar. Tempere com sal e noz-moscada.\n2. Em um refratário grande, espalhe uma camada fina de molho vermelho no fundo.\n3. Faça camadas alternando: massa de lasanha, molho de carne, fatias de presunto, queijo mussarela e molho branco.\n4. Repita as camadas finalizando com molho branco e uma cobertura generosa de queijo parmesão ralado.\n5. Leve ao forno pré-aquecido a 180°C por cerca de 30 a 35 minutos até dourar e borbulhar.",
    dica: "Deixe a lasanha descansar por cerca de 10 minutos fora do forno antes de cortar; isso mantém as camadas perfeitamente estruturadas."
  },
  {
    id: 3,
    nome: "Massa de Pizza Artesanal Profissional",
    categoria: "Massas",
    tempo: "50 minutos (+ 1h descanso)",
    porcoes: "2 pizzas grandes",
    dificuldade: "Médio",
    imagem: "src/img.js/massa_de_pizza_profissional.jpg",
    ingredientes: [
        "250g de farinha de trigo (de preferência tipo 00)",
        "1 colher de chá de sal",
        "1 colher de chá de açúcar refinado",
        "125 ml de água morna",
        "2 colheres de sopa de azeite de oliva extravirgem",
        "1 colher de chá de fermento biológico seco",
        "Molho de tomate e cobertura de sua preferência"
    ],
    preparo: "1. Em uma tigela grande, misture a farinha, o sal e o açúcar.\n2. Dissolva o fermento na água morna com o azeite e incorpore à mistura de farinha.\n3. Sove a massa em uma bancada enfarinhada por 10 minutos até obter uma textura lisa e elástica.\n4. Deixe a massa descansar coberta em local morno por 1 hora até dobrar de volume.\n5. Abra com rolo ou com as mãos, coloque em forma untada, adicione seu recheio favorito e asse a 220°C por 15 a 20 minutos.",
    dica: "Asse a pizza no ponto mais quente do seu forno com a assadeira já pré-aquecida para garantir uma base crocante de pizzaria."
  },
  {
    id: 4,
    nome: "Picanha Nobre Assada com Alho e Ervas",
    categoria: "Carnes",
    tempo: "1 hora e 20 minutos",
    porcoes: "5 porções",
    dificuldade: "Fácil",
    imagem: "src/img.js/Carnes.jpg",
    ingredientes: [
        "1 peça de picanha bovina de aproximadamente 1.2kg",
        "2 colheres de sopa de sal grosso",
        "4 dentes de alho frescos triturados",
        "2 colheres de sopa de manteiga em ponto de pomada",
        "Ramos de alecrim fresco e tomilho a gosto",
        "Pimenta-do-reino moída na hora"
    ],
    preparo: "1. Faça cortes superficiais cruzados em formato de losango na capa de gordura da picanha sem atingir a carne.\n2. Misture a manteiga com o alho triturado e as ervas picadas, espalhando uniformemente pela carne.\n3. Tempere com o sal grosso e acomode a peça em uma assadeira com a gordura virada para cima.\n4. Leve ao forno pré-aquecido a 200°C por cerca de 45 a 50 minutos para um ponto suculento e rosado.\n5. Deixe a carne descansar por 5 a 7 minutos sobre a tábua antes de fatiar para preservar todos os sucos internos.",
    dica: "Nunca perfure a carne com garfos durante o assamento; use pegadores para manter toda a suculência natural."
  },
  {
    id: 5,
    nome: "Suco Refrescante Tropical de Frutas",
    categoria: "Bebidas",
    tempo: "10 minutos",
    porcoes: "3 copos grandes",
    dificuldade: "Muito Fácil",
    imagem: "src/img.js/bebidas.jpg",
    ingredientes: [
        "1 xícara de abacaxi fresco cortado em cubos",
        "Suco natural de 2 laranjas pera",
        "1 ramo generoso de folhas de hortelã fresca",
        "300ml de água de coco gelada",
        "Pedras de gelo a gosto",
        "1 colher de mel ou adoçante natural (opcional)"
    ],
    preparo: "1. No copo do liquidificador, junte os cubos de abacaxi, o suco de laranja espremido e as folhas de hortelã.\n2. Adicione a água de coco bem gelada e o mel se desejar mais doçura.\n3. Bata na velocidade máxima por aproximadamente 2 minutos até que fique completamente homogêneo.\n4. Sirva imediatamente em copos altos decorados com rodelas de laranja e folhas de hortelã.",
    dica: "Congele os cubos de abacaxi previamente para obter um smoothie ainda mais cremoso e refrescante sem precisar diluir com gelo."
  },
  {
    id: 6,
    nome: "Taça Cremosa de Mousse de Chocolate e Frutas",
    categoria: "Sobremesas",
    tempo: "30 minutos (+ 2h geladeira)",
    porcoes: "4 taças",
    dificuldade: "Fácil",
    imagem: "src/img.js/sobremesas.webp",
    ingredientes: [
        "200g de chocolate nobre meio amargo picado",
        "1 caixa de creme de leite (200g)",
        "3 claras de ovo em temperatura ambiente",
        "3 colheres de sopa de açúcar refinado",
        "Morangos frescos e framboesas para decoração",
        "Raspas de chocolate para finalizar"
    ],
    preparo: "1. Derreta o chocolate meio amargo em banho-maria ou no micro-ondas de 30 em 30 segundos.\n2. Adicione o creme de leite ao chocolate derretido e mexa vigorosamente até formar uma ganache lisa e brilhante.\n3. Na batedeira, bata as claras em neve firme com o açúcar até formar picos consistentes.\n4. Incorpore delicadamente as claras em neve à ganache com movimentos circulares de baixo para cima.\n5. Distribua em taças individuais e leve para gelar por no mínimo 2 horas. Decore com frutas vermelhas.",
    dica: "Use chocolate com teor de cacau entre 50% e 70% para um equilíbrio perfeito entre doçura e intensidade."
  },
  {
    id: 7,
    nome: "Bowl Nutritivo de Quinoa com Vegetais Coloridos",
    categoria: "Saudáveis",
    tempo: "25 minutos",
    porcoes: "2 bowls",
    dificuldade: "Fácil",
    imagem: "src/img.js/saudáveis.webp",
    ingredientes: [
        "1 xícara de quinoa em grãos cozida com sal",
        "1 abacate maduro cortado em fatias",
        "1 xícara de tomates-cereja cortados ao meio",
        "1 maço pequeno de espinafre ou rúcula fresca",
        "2 colheres de sopa de sementes de abóbora ou gergelim",
        "3 colheres de sopa de azeite de oliva extravirgem",
        "Suco de 1/2 limão siciliano, sal e pimenta a gosto"
    ],
    preparo: "1. Em uma tigela ou prato fundo, disponha a quinoa cozida como base de um dos lados do bowl.\n2. Ao lado, arrume harmonicamente as folhas verdes higienizadas, as fatias de abacate e os tomates-cereja.\n3. Em um potinho pequeno, emulsione o azeite, o suco de limão, o sal e a pimenta-do-reino.\n4. Regue todo o bowl com o molho emulsionado e salpique as sementes tostadas por cima antes de servir.",
    dica: "Toste levemente as sementes em uma frigideira seca por 2 minutos para liberar aromas e conferir uma crocância irresistível."
  }
];

export default receitas;