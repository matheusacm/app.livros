const receitas = [
  // ──────────── MASSAS ────────────
  {
    id: 1,
    nome: "Macarrão à Bolonhesa Clássico",
    categoria: "Massas",
    tempo: "40 minutos",
    porcoes: "4 porções",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
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
    preparo: "1. Cozinhe a massa em água fervente e sal até o ponto al dente. Escorra e reserve.\n2. Refogue a cebola e o alho no azeite até dourar levemente.\n3. Adicione a carne moída e mexa até dourar e ficar solta.\n4. Acrescente o molho de tomate, tempere e deixe apurar por 15 minutos em fogo baixo.\n5. Misture a massa ao molho quente, decore com manjericão e sirva com parmesão.",
    dica: "Guarde uma concha da água do cozimento para incorporar ao molho — garante máxima cremosidade."
  },
  {
    id: 2,
    nome: "Lasanha Tradicional de Carne Moída",
    categoria: "Massas",
    tempo: "1 hora",
    porcoes: "6 porções",
    dificuldade: "Médio",
    imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80",
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
    preparo: "1. Prepare o molho branco derretendo a manteiga, misturando a farinha e adicionando o leite até engrossar. Tempere com sal e noz-moscada.\n2. Espalhe uma camada fina de molho vermelho no fundo do refratário.\n3. Faça camadas alternando: massa, carne, presunto, mussarela e molho branco.\n4. Finalize com molho branco e parmesão ralado generoso.\n5. Asse a 180°C por 30 a 35 minutos até dourar.",
    dica: "Deixe descansar 10 minutos fora do forno antes de cortar — as camadas ficam perfeitamente estruturadas."
  },
  {
    id: 3,
    nome: "Massa de Pizza Artesanal",
    categoria: "Massas",
    tempo: "50 min (+ 1h descanso)",
    porcoes: "2 pizzas grandes",
    dificuldade: "Médio",
    imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    ingredientes: [
      "250g de farinha de trigo tipo 00",
      "1 colher de chá de sal",
      "1 colher de chá de açúcar",
      "125 ml de água morna",
      "2 colheres de sopa de azeite extravirgem",
      "1 colher de chá de fermento biológico seco",
      "Molho de tomate e cobertura de sua preferência"
    ],
    preparo: "1. Misture farinha, sal e açúcar em uma tigela.\n2. Dissolva o fermento na água morna com azeite e incorpore à farinha.\n3. Sove a massa por 10 minutos até ficar lisa e elástica.\n4. Deixe descansar coberta por 1 hora até dobrar de volume.\n5. Abra, cubra a gosto e asse a 220°C por 15 a 20 minutos.",
    dica: "Pré-aqueça a assadeira junto com o forno para uma base crocante de pizzaria."
  },
  {
    id: 4,
    nome: "Nhoque de Batata ao Molho de Gorgonzola",
    categoria: "Massas",
    tempo: "50 minutos",
    porcoes: "4 porções",
    dificuldade: "Médio",
    imagem: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?w=600&q=80",
    ingredientes: [
      "1kg de batatas cozidas e amassadas",
      "2 xícaras de farinha de trigo",
      "1 ovo inteiro",
      "1 colher de chá de sal",
      "200g de queijo gorgonzola",
      "1 caixinha de creme de leite",
      "2 colheres de sopa de manteiga",
      "Noz-moscada e pimenta a gosto",
      "Salsa picada para finalizar"
    ],
    preparo: "1. Misture as batatas amassadas com farinha, ovo e sal até formar uma massa homogênea.\n2. Modele os nhoquinhos enrolando a massa em tiras e cortando em pedaços de 2 cm.\n3. Cozinhe os nhoques em água fervente com sal até subirem à superfície.\n4. Para o molho, derreta a manteiga, adicione o gorgonzola e o creme de leite, mexendo até cremoso.\n5. Sirva os nhoques escorridos com o molho quente e salsa picada.",
    dica: "Amasse as batatas ainda quentes e use o mínimo de farinha possível para nhoques macios e leves."
  },

  // ──────────── CARNES ────────────
  {
    id: 5,
    nome: "Picanha Nobre Assada com Alho e Ervas",
    categoria: "Carnes",
    tempo: "1 hora e 20 min",
    porcoes: "5 porções",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    ingredientes: [
      "1 peça de picanha bovina de 1,2kg",
      "2 colheres de sopa de sal grosso",
      "4 dentes de alho triturados",
      "2 colheres de sopa de manteiga em pomada",
      "Ramos de alecrim e tomilho a gosto",
      "Pimenta-do-reino moída na hora"
    ],
    preparo: "1. Faça cortes em losango na capa de gordura sem atingir a carne.\n2. Misture a manteiga com alho e ervas e espalhe pela carne.\n3. Tempere com sal grosso e acomode na assadeira com gordura para cima.\n4. Asse a 200°C por 45 a 50 minutos para um ponto rosado e suculento.\n5. Deixe descansar 7 minutos antes de fatiar.",
    dica: "Nunca perfure a carne com garfos durante o assamento — use pegadores para manter a suculência."
  },
  {
    id: 6,
    nome: "Frango Grelhado ao Limão e Alecrim",
    categoria: "Carnes",
    tempo: "35 minutos",
    porcoes: "4 porções",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
    ingredientes: [
      "4 filés de peito de frango",
      "Suco e raspas de 2 limões sicilianos",
      "3 dentes de alho picados",
      "2 ramos de alecrim fresco",
      "3 colheres de sopa de azeite de oliva",
      "Sal e pimenta-do-reino a gosto"
    ],
    preparo: "1. Misture o suco de limão, raspas, alho, alecrim e azeite formando a marinada.\n2. Tempere os filés com sal, pimenta e cubra com a marinada por 20 minutos.\n3. Aqueça bem a grelha ou frigideira antiaderente.\n4. Grelhe os filés por 5 a 6 minutos de cada lado até dourar e cozinhar completamente.\n5. Sirva com arroz, salada ou legumes assados.",
    dica: "Não mova o frango antes de 5 minutos — ele soltará naturalmente quando estiver no ponto certo para virar."
  },
  {
    id: 7,
    nome: "Almôndegas ao Molho de Tomate Caseiro",
    categoria: "Carnes",
    tempo: "45 minutos",
    porcoes: "4 porções",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    ingredientes: [
      "500g de carne moída (patinho ou acém)",
      "1 ovo",
      "3 colheres de sopa de farinha de rosca",
      "1 cebola pequena ralada",
      "2 dentes de alho picados",
      "Salsa e cebolinha a gosto",
      "1 lata de tomate pelado",
      "Sal, pimenta e noz-moscada a gosto",
      "Azeite para fritar"
    ],
    preparo: "1. Misture a carne com ovo, farinha de rosca, cebola ralada, alho, temperos e ervas.\n2. Modele bolinhas do tamanho de uma noz e frite levemente no azeite até dourar.\n3. Bata os tomates pelados com um liquidificador e refogue em outra panela com alho e azeite.\n4. Adicione as almôndegas ao molho e deixe cozinhar em fogo baixo por 20 minutos.\n5. Sirva com macarrão, arroz ou pão italiano.",
    dica: "Use carne fria da geladeira para modelar almôndegas mais firmes que não desmancham ao fritar."
  },

  // ──────────── BEBIDAS ────────────
  {
    id: 8,
    nome: "Suco Refrescante Tropical de Frutas",
    categoria: "Bebidas",
    tempo: "10 minutos",
    porcoes: "3 copos grandes",
    dificuldade: "Muito Fácil",
    imagem: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&q=80",
    ingredientes: [
      "1 xícara de abacaxi fresco em cubos",
      "Suco natural de 2 laranjas",
      "1 ramo de hortelã fresca",
      "300ml de água de coco gelada",
      "Gelo a gosto",
      "1 colher de mel (opcional)"
    ],
    preparo: "1. No liquidificador, junte o abacaxi, o suco de laranja e a hortelã.\n2. Adicione a água de coco gelada e o mel se desejar mais doçura.\n3. Bata na velocidade máxima por 2 minutos até ficar homogêneo.\n4. Sirva em copos altos decorados com rodelas de laranja e hortelã.",
    dica: "Congele os cubos de abacaxi previamente para um smoothie mais cremoso sem diluir com gelo."
  },
  {
    id: 9,
    nome: "Limonada Suíça Cremosa",
    categoria: "Bebidas",
    tempo: "10 minutos",
    porcoes: "4 copos",
    dificuldade: "Muito Fácil",
    imagem: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    ingredientes: [
      "4 limões taiti inteiros lavados",
      "1 lata de leite condensado",
      "200ml de creme de leite",
      "1 copo de água gelada",
      "Gelo a gosto",
      "Açúcar a gosto (opcional)"
    ],
    preparo: "1. Corte os limões em quartos sem retirar a casca — ela é o segredo do sabor.\n2. Bata no liquidificador com o leite condensado, creme de leite e água.\n3. Bata por no máximo 10 segundos para não amargar — o tempo certo é o segredo!\n4. Coe e sirva sobre gelo em copos gelados.",
    dica: "Nunca bata por mais de 10 segundos — a casca do limão começa a amargar e arruína a bebida."
  },
  {
    id: 10,
    nome: "Vitamina Energética de Banana com Aveia",
    categoria: "Bebidas",
    tempo: "5 minutos",
    porcoes: "2 copos",
    dificuldade: "Muito Fácil",
    imagem: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80",
    ingredientes: [
      "2 bananas maduras congeladas",
      "250ml de leite integral ou vegetal",
      "3 colheres de sopa de aveia em flocos",
      "1 colher de sopa de pasta de amendoim",
      "1 colher de mel",
      "Canela em pó a gosto"
    ],
    preparo: "1. Coloque todos os ingredientes no liquidificador.\n2. Bata por 2 minutos até obter uma textura cremosa e homogênea.\n3. Prove e ajuste o mel se necessário.\n4. Sirva imediatamente polvilhado com canela.",
    dica: "Congele as bananas maduras em pedaços antes — a vitamina fica muito mais cremosa e gelada."
  },

  // ──────────── SOBREMESAS ────────────
  {
    id: 11,
    nome: "Mousse Cremosa de Chocolate com Frutas",
    categoria: "Sobremesas",
    tempo: "30 min (+ 2h geladeira)",
    porcoes: "4 taças",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?w=600&q=80",
    ingredientes: [
      "200g de chocolate meio amargo picado",
      "1 caixa de creme de leite (200g)",
      "3 claras de ovo em temperatura ambiente",
      "3 colheres de sopa de açúcar refinado",
      "Morangos e framboesas para decoração",
      "Raspas de chocolate para finalizar"
    ],
    preparo: "1. Derreta o chocolate em banho-maria ou micro-ondas (30 em 30 segundos).\n2. Adicione o creme de leite ao chocolate e mexa até ganache liso e brilhante.\n3. Bata as claras em neve firme com o açúcar até picos consistentes.\n4. Incorpore delicadamente as claras à ganache com movimentos circulares.\n5. Distribua em taças e geladeira por no mínimo 2 horas. Decore com frutas vermelhas.",
    dica: "Use chocolate com 50% a 70% de cacau para equilíbrio perfeito entre doçura e intensidade."
  },
  {
    id: 12,
    nome: "Bolo de Cenoura com Cobertura de Chocolate",
    categoria: "Sobremesas",
    tempo: "1 hora",
    porcoes: "10 fatias",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    ingredientes: [
      "3 cenouras médias descascadas e picadas",
      "3 ovos inteiros",
      "1 xícara de óleo de soja",
      "2 xícaras de açúcar",
      "2 xícaras de farinha de trigo",
      "1 colher de sopa de fermento em pó",
      "1 pitada de sal",
      "4 colheres de sopa de chocolate em pó 50%",
      "1 caixinha de creme de leite",
      "2 colheres de sopa de açúcar para a cobertura"
    ],
    preparo: "1. Bata no liquidificador as cenouras, ovos e óleo até ficar homogêneo.\n2. Despeje em uma tigela e misture o açúcar, farinha, fermento e sal.\n3. Unte e enfarinhe uma forma e asse a 180°C por 35 a 40 minutos.\n4. Para a cobertura, aqueça o chocolate em pó com creme de leite e açúcar mexendo até engrossar.\n5. Desenforme o bolo morno e cubra com a calda ainda quente.",
    dica: "Espere o bolo esfriar completamente antes de fatiar — a textura fica muito mais fofa e úmida."
  },
  {
    id: 13,
    nome: "Pudim de Leite Condensado Tradicional",
    categoria: "Sobremesas",
    tempo: "1 hora e 30 min",
    porcoes: "8 porções",
    dificuldade: "Médio",
    imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    ingredientes: [
      "1 lata de leite condensado",
      "2 medidas da mesma lata de leite integral",
      "3 ovos inteiros",
      "1 xícara de açúcar para a calda",
      "1/4 de xícara de água para a calda"
    ],
    preparo: "1. Prepare a calda: derreta o açúcar com água em fogo médio sem mexer até caramelizar.\n2. Despeje a calda em uma forma de buraco no centro e espalhe nas laterais.\n3. Bata no liquidificador o leite condensado, leite e ovos por 2 minutos.\n4. Despeje a mistura na forma caramelizada e leve ao forno em banho-maria a 180°C por 1 hora.\n5. Desenforme frio após 4 horas de geladeira.",
    dica: "O pudim está pronto quando ao balançar levemente a forma, o centro treme como gelatina — não líquido."
  },

  // ──────────── SAUDÁVEIS ────────────
  {
    id: 14,
    nome: "Bowl Nutritivo de Quinoa com Vegetais",
    categoria: "Saudáveis",
    tempo: "25 minutos",
    porcoes: "2 bowls",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    ingredientes: [
      "1 xícara de quinoa cozida com sal",
      "1 abacate maduro fatiado",
      "1 xícara de tomates-cereja ao meio",
      "1 maço de espinafre ou rúcula fresca",
      "2 colheres de sopa de sementes de abóbora",
      "3 colheres de sopa de azeite extravirgem",
      "Suco de 1/2 limão siciliano, sal e pimenta"
    ],
    preparo: "1. Disponha a quinoa cozida como base de um dos lados do bowl.\n2. Arranje as folhas verdes, abacate e tomates-cereja ao redor.\n3. Emulsione o azeite com suco de limão, sal e pimenta.\n4. Regue o bowl com o molho e salpique as sementes por cima.",
    dica: "Toste as sementes em frigideira seca por 2 minutos — libera aromas e cria crocância incrível."
  },
  {
    id: 15,
    nome: "Omelete de Legumes com Queijo Cottage",
    categoria: "Saudáveis",
    tempo: "15 minutos",
    porcoes: "1 porção",
    dificuldade: "Muito Fácil",
    imagem: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80",
    ingredientes: [
      "3 ovos inteiros",
      "2 colheres de sopa de cottage",
      "1/2 tomate picado sem sementes",
      "1/4 de cebola picada",
      "Folhas de espinafre fresco",
      "1 fio de azeite",
      "Sal, orégano e pimenta a gosto"
    ],
    preparo: "1. Bata os ovos com sal e pimenta até ficarem homogêneos.\n2. Refogue a cebola no azeite por 2 minutos e adicione o tomate e espinafre rapidamente.\n3. Despeje os ovos sobre os legumes e deixe cozinhar em fogo baixo com a tampa.\n4. Quando a superfície começar a firmar, adicione o cottage e dobre a omelete ao meio.\n5. Sirva imediatamente com pão integral ou salada.",
    dica: "Fogo baixo com tampa é o segredo — a omelete cozinha por dentro sem ressecar por fora."
  },
  {
    id: 16,
    nome: "Salada Caesar com Frango Grelhado",
    categoria: "Saudáveis",
    tempo: "20 minutos",
    porcoes: "2 porções",
    dificuldade: "Fácil",
    imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80",
    ingredientes: [
      "2 filés de frango grelhados e fatiados",
      "1 pé de alface romana lavada e rasgada",
      "50g de queijo parmesão em lascas",
      "Croutons de pão integral a gosto",
      "3 colheres de sopa de maionese light",
      "1 colher de sopa de suco de limão",
      "1 dente de alho amassado",
      "1 colher de chá de mostarda Dijon",
      "Sal e pimenta-do-reino a gosto"
    ],
    preparo: "1. Prepare o molho misturando maionese, limão, alho, mostarda, sal e pimenta até ficar cremoso.\n2. Grelhe os filés de frango temperados com sal e pimenta por 5 minutos de cada lado.\n3. Em uma tigela grande, misture a alface com o molho caesar.\n4. Distribua nos pratos e cubra com o frango fatiado, croutons e lascas de parmesão.",
    dica: "Deixe a alface bem seca antes de misturar o molho — folhas úmidas diluem o tempero e deixam a salada aguada."
  }
];

export default receitas;