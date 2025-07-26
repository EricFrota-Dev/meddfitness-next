import {
  face,
  insta,
  linkedin,
  rede,
  youtube,
} from "@/assets/images/logos/midias";
import { About, Midias } from "./types";
import { articleContent } from "@/constants/types";
import { FAQsProps } from "./types";

export const MdAbout = [
  "Nosso propósito é claro: democratizar o acesso à medicina esportiva, criando espaços dinâmicos, acessíveis e interativos para profissionais e entusiastas da área.",
  "Queremos transformar a forma de como a medicina esportiva é compreendida e praticada, oferecendo oportunidades reais para que médicos, fisioterapeutas, nutricionistas, treinadores, atletas e estudantes possam se atualizar, trocar experiências e evoluir em suas carreiras.",
  "O primeiro workshop da jornada Meddfitness acontecerá na cidade de Olímpia, reunindo grandes nomes das ciências do esporte para debater temas atuais, sempre com base em evidências científicas e foco no universo do fisiculturismo e fitness.",
];
export const midias: Midias[] = [
  { icon: linkedin, name: "Linkedin", value: "30K", type: "seguidores" },
  { icon: youtube, name: "Youtube", value: "5,75K", type: "seguidores" },
  { icon: face, name: "Facebook", value: "5,75K", type: "seguidores" },
  // {
  //   icon: congresso,
  //   name: "1°Congresso MeddFitness Brasil",
  //   value: "12K",
  //   type: "visualizações",
  // },
  { icon: insta, name: "Instagram", value: "284K", type: "seguidores" },
  {
    icon: rede,
    name: "Site IFBB World",
    value: "15 Milhões/ mês",
    type: "visualizações",
  },
  // {
  //   icon: revista,
  //   name: "Revista Bem-estar",
  //   value: "35K",
  //   type: "seguidores",
  // },
  // {
  //   icon: revistaBranca,
  //   name: "Revista Elite Magazine",
  //   value: "34K",
  //   type: "seguidores",
  // },
  // {
  //   icon: revista,
  //   name: "Revista Caras",
  //   value: "49K",
  //   type: "seguidores",
  // },
];

export const duvidasRespostas01: FAQsProps[] = [
  {
    id: 0,
    question: "Por que em Olímpia?",
    response: [
      "Localizada no interior de São Paulo, Olímpia é um dos principais polos turísticos do país, com uma das maiores redes hoteleiras do estado, ficando atrás apenas da capital. Conhecida por seus parques aquáticos com águas termais, a cidade atrai milhões de visitantes anualmente e se destaca como destino ideal para unir conteúdo, negócios e lazer. Além do turismo, Olímpia é reconhecida como a Capital Nacional do Folclore, enriquecendo o destino com uma forte identidade cultural. Essa combinação faz de Olímpia o local ideal para sediar o Fórum MeddFitness Brasil.",
    ],
  },
  // {
  //   id: 1,
  //   question: "Por que o Workshop/feira?",
  //   response: [
  //     "Uma cidade como São Jose do Rio Preto que possui sua malha de medicina uma capacidade atraronômica de atendimento, incluído 93 municípios da região o que eleva sua população de amostragem para 2,5 milhões de pessoas que utilizam seus suas 27 unidades básicas de atendimentos de saúde, seus 250 clinicas e consultórios especializados e mais de 100 unidades de apoio e diagnósticos. Com 2356 médicos a cidade possui o mais alto índice de atendimento por paciente chegando a 5,6 pacientes por médico sendo a maior do Brasil.",
  //   ],
  // },
  {
    id: 2,
    question: "Tema central",
    response: [
      "A MEDFITNESS e IFBB Brasil tem orgulho em promover um evento único denominado  “CONSTRUÇÃO DE CORPOS” com a finalidade de abranger diversos temas da atualidade por meio de discussões sobre os avanços e perspectivas da construção de corpos nos mais diversos esportes, principalmente no Fisiculturismo e Fitness e relacionados ao esporte de alto rendimento no Brasil, em um ambiente de debate e promoção do saber técnico-científico com temas atuais que serão abordados por especialistas nacionais internacionais.",
    ],
  },
  {
    id: 3,
    question: "Por que participar?",
    response: [
      "O MEDDFITNESS é um evento único que reúne simultaneamente grandes marcas, profissionais renomados da medicina esportiva e áreas afins, atletas, amantes do esporte e entusiastas do universo fitness. Com uma programação rica e diversificada, você poderá aproveitar conteúdos técnicos e atualizados, campeonatos e concursos emocionantes, experiências culturais e de entretenimento, além de networking e oportunidades de negócios. O evento também oferece espaços de convivência, como a praça de alimentação, para relaxar e trocar experiências com outros participantes. Participar do MEDDFITNESS é estar no centro de um ambiente que une ciência, esporte, saúde e cultura, proporcionando aprendizado, inspiração e conexão para todos que desejam evoluir — seja você profissional, atleta ou apaixonado por um estilo de vida ativo e saudável.",
    ],
  },
  {
    id: 4,
    question: "A quem se destina?",
    response: [
      "Profissionais e estudantes de graduação e pós-graduação das áreas de nutrição, educação física, medicina, fisioterapia e outros relacionados à área esportiva.",
      "Pesquisadores e membros de grupos de pesquisa e programas de pós-graduação nas áreas correlatas à medicina esportiva.",
      "Atletas, treinadores, praticantes de atividades físicas, além dos anteriormente descritos.",
      "Empresas prestadoras de serviços e fornecedoras de produtos relacionados à prática esportiva e de atividades físicas.  ",
    ],
  },
];

export const duvidasRespostas02: FAQsProps[] = [
  // {
  //   id: 0,
  //   question: "Quando será o MeddFitness 2025?",
  //   response: [
  //     "Ocorrerá de 07 a 09 de novenbro, na Arena Olímpia Shows & Eventos",
  //     "Rua Projetada A, Sem N° - Parque do Sol, Olímpia-SP.",
  //   ],
  // },
  // {
  //   id: 1,
  //   question: "Para quem é o workshop? Qual o público?",
  //   response: [
  //     "Profissionais e estudantes de graduação e pós-graduação das áreas de nutrição, educação física, medicina, fisioterapia e outros relacionados à área esportiva.",
  //     "Pesquisadores e membros de grupos de pesquisa e programas de pós-graduação nas áreas correlatas à medicina esportiva.",
  //     "Atletas, treinadores, praticantes de atividades físicas, além dos anteriormente descritos.",
  //     "Empresas prestadoras de serviços e fornecedoras de produtos relacionados à prática esportiva e de atividades físicas.  ",
  //   ],
  // },
  {
    id: 2,
    question: "Qual a idade mínima para entrar no evento?",
    response: [
      "Para menores de 12 anos, é necessário ter autorização e estar acompanhado dos pais ou responsável. (não será cobrado ingresso para menores de 12 anos).",
      "O formulário para preenchimento estará disponível nos guichês de credenciamento no dia do evento, obrigatório apresentar documento oficial do menor.",
      "De 13 aos 17 anos, é necessário apenas autorização dos pais para ingressar na feira sozinho, sem um responsável legal.",
      "Obrigatório apresentar documento com foto.",
    ],
  },
  {
    id: 3,
    question: "Onde se hospedar em Olímpia?",
    response: ["https://enjoyhoteis.com.br"],
  },
  {
    id: 4,
    question: "Quero sugerir ou ser um palestrante, como faço?",
    response: [
      "Envie um email para contato@meddfitness.com.br que analisaremos as possibilidades de contratação.",
    ],
  },
];
export const voluntiers: articleContent[] = [
  {
    id: 1,
    title: "SEJA UM VOLUNTÁRIO",
    content:
      "Faça parte do staff do maior evento de fitness e bem-estar da América Latina. Participe como voluntário do MEDDFITNESS 2025, entre os dias 07 e 09 de novembro, na Arena Olímpia Shows e Eventos, Olímpia, SP.",
  },
  {
    id: 2,
    title: "PAINEL NOVOS TALENTOS",
    content:
      "Quer subir no palco da MEDDFit 2025? Inscreva-se para o processo seletivo de novos palestrantes no Painel de Novos Talentos.",
  },
];

export const dailyTickets: articleContent[] = [
  {
    id: 1,
    title: "INGRESSO DIÁRIO",
    content:
      "Empresa STARTUP de entretenimento criada em 2022 com o objetivo de desplugar do mercado convencional de entretenimento.",
  },
  {
    id: 2,
    title: "INGRESSO DIÁRIO",
    content:
      "A Federação Internacional de Culturismo e Fitness (IFBB) possui 204 nações afiliadas e é reconhecida por mais de 90 federações esportivas mundiais. Com foco no esporte amador em todo o mundo, a IFBB representa a máxima expectativa de desenvolvimento físico muscular humano em harmonia saudável.",
  },
];
import aboutIccon from "@/assets/icons/about.svg";
import objectiveIccon from "@/assets/icons/objective.svg";
import targetIccon from "@/assets/icons/target.svg";
import workshop from "@/assets/icons/workshop.svg";
import feira from "@/assets/icons/feira.svg";
import cast from "@/assets/icons/cast.svg";
import fisioculturiosmo from "@/assets/icons/fisiculturismo.svg";
import concusto from "@/assets/icons/concurso.svg";
import shows from "@/assets/icons/shows.svg";
export const about: About[] = [
  {
    title: "SOBRE O EVENTO",
    desc: "Idealizado para percorrer o Brasil, o MeddFitness promove o acesso à medicina integrativa baseada em evidências, com foco no fisiculturismo, performance e bem-estar. É um espaço interativo e acessível para médicos, nutricionistas, fisioterapeutas, educadores físicos, atletas, estudantes e profissionais da saúde.",
    icon: aboutIccon,
  },
  {
    title: "OBJETIVOS",
    desc: "Democratizar o conhecimento técnico-científico da medicina integrativa. Estimular o intercâmbio de ideias, estudos e práticas seguras. Promover o aperfeiçoamento profissional e a saúde no esporte. Aproximar marcas, profissionais e o público em geral.",
    icon: objectiveIccon,
  },
  {
    title: "PÚBLICO-ALVO",
    desc: "Profissionais e estudantes de graduação e pós-graduação das áreas de Nutrição, Educação Física, Medicina, Fisioterapia e demais áreas relacionadas ao esporte. Pesquisadores e membros de grupos de pesquisa e programas de pós-graduação em áreas correlatas à Medicina Esportiva. Atletas, treinadores e praticantes de atividades físicas, além dos públicos já mencionados. Empresas prestadoras de serviços e fornecedoras de produtos voltados à prática esportiva e atividades físicas.",
    icon: targetIccon,
  },
  {
    title: "PALESTRAS OLÍMPIA 2025",
    desc: "Será o primeiro de muitos. Um encontro de alto nível com grandes nomes do esporte e da saúde debatendo temas atuais como:",
    itens: [
      "MEDICINA ESPORTIVA",
      "NUTRIÇÃO ESPORTIVA E ESTÉTICA",
      "RESPONSABILIDADES, AÇÕES E PROCESSOS",
      "PREPARAÇÃO TÉCNICA E TREINAMENTO",
      "SUPLEMENTAÇÃO",
      "INDÚSTRIA PHARMA",
      "CRIANÇAS, ADOLESCENTES E 3ª IDADE NO ESPORTE",
      "BODYBUILDING: MITOS E VERDADES",
      "PSICOLOGIA, SAÚDE E COMPORTAMENTO MENTAL",
      "SISTEMA CARDIOVASCULAR DO EXERCÍCIO DO ESPORTE",
      "ESTRUTURA ÓSSEA – LESÕES",
      "SAÚDE DA MULHER",
    ],
    icon: workshop,
  },
  {
    title: "FEIRA",
    desc: "Estandes de marcas de suplementos, equipamentos, tecnologia esportiva, moda fitness e muito mais. Um hub de tendências, lançamentos e networking.",
    icon: feira,
  },
  {
    title: "MEDDCAST",
    desc: "Conversas com especialistas, atletas, influenciadores do universo fitness, expositores entre outros convidados. Uma troca de experiências que ultrapassa os bastidores do evento.",
    icon: cast,
  },
  {
    title: "CAMPEONATO DE FISICULTURISMO",
    desc: "É a entidade esportiva responsável pela gestão do fisiculturismo e fitness em nível mundial. Com 204 nações afiliadas, a IFBB promove o esporte amador, representando a mais alta expressão do desenvolvimento muscular humano de forma equilibrada e saudável. Anualmente, organiza mais de 8.000 campeonatos mundiais e 52 campeonatos no Brasil: Regionais, Estaduais, Brasileiro, Sul-americano, Mundial, Feminino e Kids. Seu site oficial (www.ifbb.com) recebe 15 milhões de acessos por mês, provenientes de diversos países ao redor do mundo.",
    icon: fisioculturiosmo,
    itens: ["Acesse o regulamento completo no site oficial: www.ifbb.com"],
  },
  {
    title: "CONCURSO MEGAFITNESS",
    desc: "Mais que um concurso de beleza, o Miss & Mister MegaFitness celebra o estilo de vida saudável e valoriza pessoas autênticas, conscientes e representativas. Inscrições abertas ao público, com envio de vídeo criativo ao som da trilha oficial do evento.",
    icon: concusto,
  },
  {
    title: "SHOWS E ENTRETENIMENTO",
    desc: "Abertura com o espetáculo do Universo Casuo, atrações musicais e apresentações que tornam a experiência ainda mais inesquecível.",
    icon: shows,
  },
];

export const categories = [
  {
    title: "Women's Bikini",
    divisions: [
      { ageGroup: "Senior", height: "164cm / +164cm", overall: true },
      { ageGroup: "Master", category: "Única" },
    ],
  },
  {
    title: "Women's Fit Model",
    divisions: [
      { ageGroup: "Senior", height: "164cm / +164cm", overall: true },
      { ageGroup: "Master", category: "Única" },
    ],
  },
  {
    title: "Women's Wellness",
    divisions: [
      { ageGroup: "Senior", height: "158cm / 163cm / +163cm", overall: true },
      { ageGroup: "Master", category: "Única" },
    ],
  },
  {
    title: "Men's Muscle I",
    divisions: [{ ageGroup: "Senior", category: "Única" }],
  },
  {
    title: "Men's Physique",
    divisions: [
      { ageGroup: "Junior", category: "Única" },
      {
        ageGroup: "Senior",
        height: "170cm / 175cm / 176cm / +176cm",
        overall: true,
      },
      { ageGroup: "Master", category: "Única" },
    ],
  },
  {
    title: "Men's Body Shape",
    divisions: [{ ageGroup: "Senior", category: "Única" }],
  },
  {
    title: "Muscular Men's Physique",
    divisions: [
      { ageGroup: "Senior", height: "175cm / +175cm", overall: true },
    ],
  },
  {
    title: "Men's Body Muscle II",
    divisions: [{ ageGroup: "Senior", category: "Única" }],
  },
];
export const ifbbAwards = [
  {
    title: "1º Colocado",
    items: [
      "Troféu IFBB",
      "Medalha IFBB",
      "Book fotográfico por agência Megafitness Model",
      "Produtos cosméticos e suplementos",
      "Prêmio no valor de 5 mil reais",
    ],
  },
  {
    title: "2º Colocado",
    items: [
      "Troféu IFBB",
      "Medalha IFBB",
      "Book fotográfico por agência Megafitness Model",
      "Produtos cosméticos e suplementos",
      "Prêmio no valor de 3 mil reais",
    ],
  },
  {
    title: "3º Colocado",
    items: [
      "Troféu IFBB",
      "Medalha IFBB",
      "Book fotográfico por agência Megafitness Model",
      "Produtos cosméticos e suplementos",
      "Prêmio no valor de 2 mil reais",
    ],
  },
  {
    title: "4º a 6º Colocados",
    items: ["Troféu IFBB", "Medalha IFBB", "Produtos cosméticos e suplementos"],
  },
];
