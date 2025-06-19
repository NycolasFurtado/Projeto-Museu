const params = new URLSearchParams(window.location.search);
const obraImagem = document.querySelector("#obra__imagem")
const campoObraNome = document.querySelector(".obra__nome")
const campoObraDescricao = document.querySelector(".obra__descricao")
const campoAutorDescricao = document.querySelector(".autor__descricao")
const campoAutorNome = document.querySelector(".autor__nome")
const autorImagem = document.querySelector(".autor__imagem")
const campoTecnicaDescricao = document.querySelector("#tecnicas-descricao")

let obras = [
    {
        href: "ultimaceia",
        nome: "Última Ceia",
        src: "../assets/img/leonardo/ultima-ceia.jpg",
        descricao: "A pintura retrata o momento em que Jesus Cristo revela aos seus discípulos que um deles o trairá, um momento chave da narrativa bíblica, que ocorre durante a Última Ceia, antes da crucificação de Jesus. A cena é dramatizada por Leonardo de maneira inovadora, em que ele organiza os apóstolos em grupos de três e coloca Cristo no centro, criando uma composição simétrica e equilibrada.",
        tecnicaDescricao: "foi criada utilizando a técnica de fresco, mas com uma abordagem inovadora. Ao invés de pintar diretamente sobre a parede com pigmentos dissolvidos em água (como é comum no fresco), Da Vinci experimentou uma técnica mista, aplicando tempera (pigmentos misturados com gema de ovo) sobre uma base de gesso seco. Essa técnica, no entanto, não se mostrou tão durável quanto o fresco tradicional, o que resultou em danos significativos à pintura ao longo dos séculos.",
    },
    {
        href: "monalisa",
        nome: "Mona Lisa",
        src: "../assets/img/leonardo/mona-lisa.jpg",
        descricao: "A Mona Lisa (também conhecida como La Gioconda) é uma das obras mais famosas e enigmáticas da história da arte ocidental, criada por Leonardo da Vinci entre 1503 e 1506, com algumas especulações de que ele tenha continuado a trabalhar nela até 1517. A pintura, que atualmente está exposta no Museu do Louvre em Paris, é um retrato de uma mulher com um sorriso misterioso que intrigou e fascinou estudiosos, historiadores e amantes da arte por séculos.",
        tecnicaDescricao: "Foi de pintura a óleo sobre madeira. A obra é famosa pelo uso refinado da técnica de sfumato, que é uma transição suave entre cores e tons, criando um efeito de contornos difusos e uma sensação de profundidade e realismo. Essa técnica foi fundamental para a representação suave do rosto e a expressão misteriosa da figura. A ddMona Lisa",
    },
    {
        href: "acriacaodeadao",
        nome: "A criação de Adão",
        src: "../assets/img/michelangelo/The_Creation_of_Adam.jpg",
        descricao: "A Criação de Adão é uma das pinturas mais famosas de Michelangelo, e está localizada no teto da Capela Sistina, no Vaticano. Ela foi criada entre 1511 e 1512, como parte de um projeto monumental encomendado pelo Papa Júlio II para decorar o teto da Capela Sistina com cenas do Antigo Testamento. Essa obra-prima é uma das mais reconhecidas do Renascimento italiano e ilustra um dos momentos mais significativos da narrativa bíblica: o momento em que Deus dá a vida a Adão, o primeiro homem, segundo o Livro de Gênesis.",
        tecnicaDescricao: "Esta obra foi pintada no teto da Capela Sistina, no Vaticano. Ele usou a técnica do afresco (pintura aplicada sobre gesso úmido) para criar uma das cenas mais emblemáticas da arte ocidental. A pintura se destaca pelo uso dramático de luz, cores e figuras humanas. Michelangelo usou o sfumato para criar um efeito de transição suave entre sombras e luzes, dando um senso de volume e profundidade aos corpos.",
    },
    {
        href: "david",
        nome: "David",
        src: "../assets/img/michelangelo/david.jpg",
        descricao: "David é uma das esculturas mais emblemáticas de Michelangelo, considerada um dos maiores exemplos de escultura do Renascimento. Criada entre 1501 e 1504, a estátua representa David, o herói bíblico que derrotou o gigante Golias com uma única pedra lançada de sua funda. A escultura foi encomendada pela cidade de Florença, inicialmente para ser colocada na Catedral de Florença (Duomo), mas, devido ao seu tamanho e imponência, acabou sendo instalada na Piazza della Signoria, no centro de Florença, onde permanece até hoje (uma réplica da estátua ocupa o local, e o original está no Museu da Academia de Florença).",
        tecnicaDescricao: "A famosa escultura foi esculpida a partir de um bloco de mármore que já estava sendo trabalhado por outros escultores antes dele. Michelangelo usou a técnica do alto-relevo para esculpir o corpo humano de forma incrivelmente detalhada e realista, destacando a musculatura e a expressão emocional de Davi.",
    },
    {
        href: "girassois",
        nome: "Girassois",
        src: "../assets/img/van-gogh/Girassois.jpg",
        descricao: "Girassóis é um conjunto de pinturas que Van Gogh criou em 1888 enquanto vivia em Arles, no sul da França. Ele pintou vários quadros com girassóis em diferentes estágios de vida das flores, desde os botões fechados até os flores desabrochadas e os girassóis murchos. As versões mais famosas são aquelas que ele criou para decorar o quarto de seu amigo Paul Gauguin, com quem ele esperava estabelecer uma comunidade de artistas em Arles.",
        tecnicaDescricao: "Van Gogh também utilizou pintura a óleo para criar sua famosa série de Girassóis. O que destaca essa obra é a maneira como ele usou impasto para criar uma textura espessa e vívida nas pétalas e folhas, dando volume e profundidade às flores. Ele aplicou camadas generosas de tinta, o que não apenas enriqueceu a cor, mas também trouxe uma dimensão táctil e energética à obra.",
    },
    {
        href: "noiteestrelada",
        nome: "Noite Estrelada",
        src: "../assets/img/van-gogh/NoiteEstrelada.jpg",
        descricao: "A Noite Estrelada é uma das obras mais célebres de Van Gogh, pintada em junho de 1889, enquanto ele estava internado no Asilo Saint-Paul-de-Mausole, em Saint-Rémy-de-Provence, no sul da França. A obra foi criada em um momento de grande angústia pessoal e emocional para Van Gogh, e ela reflete não só sua luta interna, mas também sua impressionante habilidade de captar a energia e o movimento no mundo ao seu redor.",
        tecnicaDescricao: "Van Gogh usou a técnica clássica de pintura a óleo para criar esta obra. A característica mais marcante de Noite Estrelada é o uso de pinceladas curtas e espessas, aplicadas de forma expressiva e vibrante. As espessas camadas de tinta, chamadas de impasto, dão à pintura uma textura tátil e dinâmica",
    },
    {
        href: "dioniso",
        nome: "Dioniso",
        src: "../assets/img/fidias/Dioniso.jpg",
        descricao: "A escultura de Dionísio atribuída a Fídias não é uma das obras mais conhecidas ou preservadas, e sua existência está envolta em certo mistério. No entanto, Fídias, como um dos maiores escultores da Grécia Antiga, era responsável por diversas obras notáveis que representavam deuses e figuras mitológicas. A ligação de Fídias com Dionísio, o deus do vinho, da alegria, do teatro e da fertilidade, é importante no contexto do mundo helênico, pois Dionísio era uma figura central na religião e na cultura grega. Embora a escultura de Dionísio por Fídias não seja amplamente documentada ou bem-preservada, podemos explorar o contexto e o estilo de Fídias para entender melhor como ele poderia ter abordado uma figura como Dionísio.",
        tecnicaDescricao: "Ele aplicava técnicas de contraste entre a rigidez da pose e a suavidade da musculatura, criando uma sensação de equilíbrio e movimento.",
    },
    {
        href: "aestatuadezeus",
        nome: "A Estátua de Zeus",
        src: "../assets/img/fidias/AEstatuaDeZeus.jpg",
        descricao: "O Zeus de Olímpia foi uma das mais impressionantes e veneradas esculturas da Grécia Antiga, criada pelo escultor Fídias entre 435 a.C. e originalmente localizada no Templo de Zeus em Olímpia, na Grécia. A escultura de Zeus foi uma das sete maravilhas do mundo antigo, não apenas pela sua grandiosidade, mas também pela sua excepcional habilidade técnica e pelo simbolismo religioso que carregava. Embora a obra original tenha sido destruída em algum momento da Antiguidade, ela ainda exerce grande influência sobre a história da arte clássica, sendo descrita por antigos escritores e artistas.",
        tecnicaDescricao: "Fídias aplicou sua famosa técnica de idealização, criando uma figura humana com proporções perfeitas, que transmitiam poder e serenidade.",
    },
    {
        href: "escoladeatenas",
        nome: "A Escola de Atenas",
        src: "../assets/img/raphael/escola-de-atenas.jpg",
        descricao: "A Escola de Atenas é uma das obras mais famosas do pintor renascentista Raffaello Sanzio (conhecido como Rafael), pintada entre 1509 e 1511. Ela faz parte da série de afrescos que adornam as salas de Rafael no Palácio Apostólico, no Vaticano, e é considerada uma das maiores realizações da arte renascentista. A obra é uma representação vibrante e detalhada do conhecimento filosófico, unindo figuras de grandes pensadores da Antiguidade com uma abordagem refinada, que reflete os ideais humanistas da Renascença.",
        tecnicaDescricao: "A técnica utilizada foi pintura a afresco, que era a forma mais tradicional de pintura mural da época. A técnica do afresco envolve aplicar pigmentos dissolvidos em água sobre o gesso fresco, permitindo que a pintura se integre à parede.",
    },
    {
        href: "aperfeicaonoresnascimentopleno",
        nome: "A perfeição no Renascimento Pleno",
        src: "../assets/img/raphael/a-perfeicao.jpg",
        descricao: "Este quadro é uma das representações mais divinas e emotivas de Maria e do Menino Jesus. A composição suavemente curvada, a simetria e a suavidade das figuras são exemplos da maestria de Rafael em captar a pureza e a beleza espiritual. O quadro também inclui a famosa figura dos querubins, cujos rostos redondos e expressões inocentes se tornaram extremamente icônicos.",
        tecnicaDescricao: "O Rafaelismo, O conceito de perfeição para Rafael não se limitava apenas à técnica, mas também à ideia de harmonia e proporção idealizada, baseada em modelos clássicos.",
    },
];


const nomeObra = params.get('obra').toLowerCase().replace(/\s+/g, '');
const nomeAutor = params.get('autor').toLowerCase().replace(/\s+/g, '');
console.log(nomeAutor)

const obraEncontrada = obras.find(obra => obra.href === nomeObra)

switch (nomeAutor) {
    case "leonardodavinci":
        autorImagem.src = `${"../assets/img/leonardo/leonardo.png"}`
        campoAutorNome.textContent = `${"Leonardo da Vinci (1452–1519)"}`
        campoAutorDescricao.textContent = `${"Leonardo da Vinci foi escolhido como um dos maiores nomes da História justamente por suas técnicas inovadoras, seus extensos estudos acadêmicos e o impacto profundo que causou em diversas áreas do conhecimento. Considerado um símbolo do homem renascentista ideal, ele personificou as virtudes da curiosidade insaciável, da busca incessante por inovação e do desejo de aprender e aplicar saberes em diferentes campos do saber. Leonardo não se limitou a ser apenas um pintor, mas se destacou também como cientista, engenheiro, anatomista, matemático, arquiteto, músico e inventor, entre outras atividades. Ele via a arte como um reflexo das leis da natureza, e seus estudos sobre anatomia humana, óptica e física ajudaram a aprimorar as técnicas de pintura e escultura da época, tornando suas obras ainda mais realistas e emocionantes."}`
        break;
    case "michelangelo":
        autorImagem.src = `${"../assets/img/michelangelo/michelangelo.png"}`
        campoAutorNome.textContent = `${"Michelangelo Buonarroti (1475–1564)"}`
        campoAutorDescricao.textContent = `${"Michelangelo Buonarroti merece um lugar de destaque na história da humanidade por suas contribuições incomparáveis à Escultura, Pintura monumental, Arquitetura e pelo impacto transformador que exerceu no mundo das artes. Como um dos maiores gênios do Renascimento, ele definiu um padrão insuperável de excelência artística e expressão emocional. Suas esculturas, como o icônico Davi e a Pietà, demonstram um domínio técnico extraordinário e uma sensibilidade única na representação da forma humana, capturando não apenas a anatomia perfeita, mas também emoções profundas. Na pintura, sua obra-prima no teto da Capela Sistina é um testemunho de sua habilidade de combinar narrativa bíblica com inovação artística, criando uma das obras mais reverenciadas da história."}`
        break;
    case "vangogh":
        autorImagem.src = `${"../assets/img/van-gogh/van-gogh.png"}`
        campoAutorNome.textContent = `${"Vincent Van-Gogh (1853–1890)"}`
        campoAutorDescricao.textContent = `${"Vincent van Gogh é uma das figuras mais emblemáticas da história da arte, reconhecido por sua profunda contribuição ao Pós-Impressionismo e pela intensidade emocional que permeia suas obras. Embora tenha vivido uma vida marcada por dificuldades pessoais e incompreensão, ele se tornou um símbolo universal da genialidade incompreendida e da busca incansável por expressão artística. Van Gogh superou limitações técnicas para criar uma arte profundamente pessoal, capaz de transmitir emoções de maneira única. Suas pinceladas vigorosas e cores vibrantes, como vistas em obras icônicas como Noite Estrelada e Os Girassóis, não apenas refletem sua visão interior, mas também revolucionaram a forma como a realidade podia ser retratada na pintura.   "}`
        break;
    case "fidias":
        autorImagem.src = `${"../assets/img/fidias/Fidias.png"}`
        campoAutorNome.textContent = `${"Fídias (Phidias) (c. 490–430 a.C.)"}`
        campoAutorDescricao.textContent = `${"Fídias foi um escultor e arquiteto grego da Era Clássica, amplamente considerado um dos maiores artistas da Antiguidade. Suas obras monumentais e seu papel essencial na consolidação do estilo clássico o tornaram uma figura central na história da arte, influenciando profundamente movimentos como o Renascimento e o Neoclassicismo. Reconhecido por sua habilidade ímpar em representar a beleza idealizada do corpo humano e a majestade dos deuses gregos, Fídias elevou a escultura a novos patamares. Ele é conhecido principalmente por sua contribuição à ornamentação do Parthenon, em Atenas, incluindo as impressionantes estátuas de Atena Parthenos e os relevos do friso do templo. Sua obra mais icônica, a colossal estátua de Zeus em Olímpia, foi considerada uma das Sete Maravilhas do Mundo Antigo. Esculpida em ouro e marfim, esta peça monumental simbolizava a harmonia perfeita entre humanidade e divindade, um tema recorrente em seu trabalho."}`
        break;
    case "raphael":
        autorImagem.src = `${"../assets/img/raphael/raphael.png"}`
        campoAutorNome.textContent = `${"Raphael (1483–1520)"}`
        campoAutorDescricao.textContent = `${"Raffaello Sanzio, conhecido como Raphael, foi um dos artistas mais brilhantes do Alto Renascimento, celebrado por sua habilidade excepcional em criar obras que uniam perfeição técnica e profunda harmonia estética. Reconhecido como o príncipe dos pintores, Raphael ajudou a moldar os ideais artísticos do mundo ocidental, deixando um legado que continua a inspirar gerações de artistas. Sua maestria na pintura de retratos e frescos é evidenciada em obras icônicas como A Escola de Atenas, um triunfo de composição, perspectiva e simbolismo que encapsula o espírito do Renascimento. Raphael também se destacou por sua capacidade única de integrar estilos diversos, fundindo a monumentalidade de Michelangelo e a graça de Leonardo da Vinci com uma clareza e equilíbrio próprios."}`
        break;
    default:
        break;
}

switch (nomeObra) {
    case "ultimaceia":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`     
        break;
    case "monalisa":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "acriacaodeadao":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "david":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "girassois":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "noiteestrelada":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "dioniso":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "aestatuadezeus":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "escoladeatenas":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    case "aperfeicaonoresnascimentopleno":
        obraImagem.src = `${obraEncontrada.src}`
        campoObraNome.textContent = `${obraEncontrada.nome}`
        campoObraDescricao.textContent = `${obraEncontrada.descricao}`
        campoTecnicaDescricao.textContent = `${obraEncontrada.tecnicaDescricao}`
        break;
    default:
        break;
}