// IMPORTS #############################################
import {
  bikiniFitFem01,
  bikiniFitFem02,
  bodyFitFem01,
  bodyFitFem02,
  fitFem01,
  fitFem02,
} from "@/assets/images/categorias";
import {
  BetaoMonteiro,
  CassioBirque,
  defaultPerfilPhoto,
  DianaMonteiro,
  LeandroMoraes,
  PauloNetto,
} from "@/assets/images/perfilPhoto";
import {
  academias,
  boxCrossfit,
  clubeExportivo,
  pilates,
  yoga,
} from "@/assets/images/parceiros";
import {
  anatoly1,
  anatoly2,
  casuoAtraction1,
  casuoAtraction2,
  stevenSagal1,
  stevenSagal2,
} from "@/assets/images/atractions";
import {
  anadem,
  ifbbAcademy,
  ifbbBrasil,
  linkedFun,
  Logo,
  LogoPrincipal,
  megafitness,
  // rissi,
  universoCasuo,
  // vivaCare,
  sbtBank,
  chronus,
  jacCo,
  arena,
} from "@/assets/images/logos";
import { books, hands, instruments, network } from "@/assets/icons";
import { banner1, banner2, banner3 } from "@/assets/images/banners";
import { categoryFem, simpleCard, simpleImage } from "./types";
import { atractionProps } from "@/components/ui/AtractionCard/types";

// LISTIS #############################################

export const premiacoes = [
  {
    id: 0,
    title: "1º-Colocado por categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos cosméticos/suplementos",
      "Contrato de publicidade no valor de R$ 10.000,00",
    ],
  },
  {
    id: 1,
    title: "2º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos cosméticos/ suplementos",
      "Contrato de publicidade no valor de R$ 5.000,00",
    ],
  },
  {
    id: 2,
    title: "3º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos Belifit/ cosméticos/suplementos",
      "Contrato de publicidade no valor de R$ 3.000,00",
    ],
  },
  {
    id: 3,
    title: "4º a 6º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha e flores",
      "Produtos Belifit/ cosméticos/suplementos",
      "Prêmio em dinheiro no valor de R$ 1.000,00",
    ],
  },
];

export const categorias: categoryFem[] = [
  {
    id: 0,
    title: "FITNESS FEMININO",
    desc: [
      "Este conceito foi introduzido pela IFBB no início dos anos 90, começando como competição oficial em 1996 em resposta à crescente demanda por competições para mulheres que preferem desenvolver um físico menos musculoso, mas atlético e esteticamente agradável e também mostrar seus físicos em movimento",
    ],
    images: [fitFem01, fitFem02],
  },
  {
    id: 1,
    title: "BODYFITNESS FEMININO",
    desc: [
      "O Bodyfitness foi implementado pela IFBB em 2002 para dar uma chance de competir para um amplo grupo de mulheres bem torneadas sem as rodadas de rotina, apenas as de físico.",
      "Esta fórmula provou ser útil e o número de competidoras participantes aumenta a cada ano.",
      "Mais tarde, a IFBB criou para elas a possibilidade de mostrar sua figura em movimento durante uma curta apresentação individual no palco chamada “I-walking”",
    ],
    images: [bodyFitFem01, bodyFitFem02],
  },
  {
    id: 2,
    title: "FITNESS FEMININO",
    desc: [
      "Esta categoria foi introduzida em 2011 e é voltada para mulheres que mantêm o corpo em forma e comem de forma saudável. As linhas gerais do corpo, equilíbrio e proporções, tônus ​​corporal e aparência saudável são levados em consideração. Treinamento de peso de alta intensidade e músculos duros e magros não são necessários. A ênfase está em uma aparência bem formada, em forma, saudável e atraente, semelhante à das modelos.",
    ],
    images: [bikiniFitFem01, bikiniFitFem02],
  },
  {
    id: 3,
    title: "FITNESS BEM-ESTAR FEMININO",
    desc: [
      "A divisão Wellness Fitness é destinada a mulheres que preferem um físico musculoso sem separação muscular, atlético e esteticamente agradável, com uma massa corporal maior do que no Bikini Fitness. Deste ponto de vista, o Wellness Fitness está em algum lugar entre o Bikini Fitness e o Women's Physique.",
    ],
    images: [fitFem01, fitFem02],
  },
  {
    id: 4,
    title: "MISS FIT MODEL",
    desc: [
      "A divisão é destinada a mulheres que possuem atributos no conjunto geral em uma época de constante busca pela quebra dos padrões estéticos, A busca agora é por candidatas que precisam ter uma representatividade muito grande, pois a forma como elas se comunicam e o que representam é mais importante do que seu visual. Nos concursos de hoje busca-se mais personalidade e consciência.",
    ],
    images: [bodyFitFem01, bodyFitFem02],
  },
  {
    id: 5,
    title: "APTIDÃO FÍSICA PARA CRIANÇAS",
    desc: [
      "Children Fitness é a única divisão esportiva da IFBB disponível para crianças, sem limite de idade inferior. O limite de idade superior é 16 anos. Então, as crianças vão para a divisão de idade júnior.",
      "O Fitness Infantil é uma das categorias mais bonitas, em um ambiente familiar, pois é obrigatório que os atletas tenham a mãe (que geralmente também é uma atleta da IFBB) como treinadora e, portanto, os eventos de Fitness Infantil da IFBB são uma celebração maravilhosa, repleta de famílias com estilo de vida fitness, nas quais as crianças, seguindo os passos de seus pais, iniciam suas carreiras esportivas, para se tornarem mais tarde os campeões do futuro.",
    ],
    images: [bikiniFitFem01, bikiniFitFem02],
  },
];

export const parceiros = [
  {
    id: 0,
    name: "ACADEMIAS",
    src: academias,
  },
  {
    id: 1,
    name: "BOX DE CROSSFIT",
    src: boxCrossfit,
  },
  {
    id: 2,
    name: "STUDIO DE YOGA",
    src: yoga,
  },
  {
    id: 3,
    name: "PSTUDIO DE PILATES",
    src: pilates,
  },
  {
    id: 4,
    name: "CLUBES ESPORTIVOS",
    src: clubeExportivo,
  },
];

export const atractions: atractionProps[] = [
  {
    id: 0,
    subTitle: "UNIVERSO CASUO",
    title: "CIRQUE DU SOLEIL",
    desc: [
      "Espetáculo artístico criado por Marcos Casuo, ex-integrante do Cirque du Soleil, unindo música, performance e acrobacias em um show único e vibrante.",
    ],
    images: [casuoAtraction1, casuoAtraction2],
  },
  {
    id: 1,
    title: "ANATOLY",
    subTitle: "VLADIMIR SHMONDENKO",
    desc: [
      "Atleta de fisiculturismo de renome internacional, referência em treinamento de alto rendimento e desenvolvimento muscular extremo.",
    ],
    images: [anatoly1, anatoly2],
  },
  {
    id: 2,
    title: "STEVEN SEAGAL",
    subTitle: "ATOR",
    desc: [
      "Ator, mestre em artes marciais e ícone dos filmes de ação, conhecido por sua destreza no Aikido e por sua carreira no cinema de Hollywood.",
    ],
    images: [stevenSagal1, stevenSagal2],
  },
  // {
  //   id: 3,
  //   title: "ZÉ NETO E CRISTIANO",
  //   subTitle: "CANTOR SERTAJEJO",
  //   desc: [
  //     "Uma das duplas sertanejas mais populares do Brasil, conhecida por seus sucessos românticos e animados que conquistam multidões.",
  //   ],
  //   images: [zeNetoCristiano1, zeNetoCristiano2],
  // },
];
import ana from "@/assets/images/perfilPhoto/AnaCláudiaCassebFinatoZuliani_perfil.png";
import perla from "@/assets/images/perfilPhoto/PerlaFernandesSouza_perfil.png";

export const embaixadores: simpleCard[] = [
  {
    id: 1,
    title: "Frederico Lapenda",
    src: ana,
    desc: "",
  },
  {
    id: 2,
    title: "PERLA FERNANDES DE SOUZA",
    src: perla,
    desc: "",
  },
];
export const patrocinadores = [
  { id: 0, name: "XXX", src: defaultPerfilPhoto, desc: " EM BREVE" },
  { id: 1, name: "XXX", src: defaultPerfilPhoto, desc: " EM BREVE" },
  { id: 2, name: "XXX", src: defaultPerfilPhoto, desc: " EM BREVE" },
  { id: 3, name: "XXX", src: defaultPerfilPhoto, desc: " EM BREVE" },
];

export const echosystem = [
  {
    id: 0,
    title: "CONCURSO DE GAROTA MEGAFIT",
    desc: "Promovendo a representatividade do Universo Fitness.",
    src: megafitness,
  },
  {
    id: 1,
    title: "IFBB",
    desc: "Campeonatos de fisiculturismo regionais, estaduais, brasileiro e sulamenticano.",
    src: ifbbBrasil,
  },
  {
    id: 2,
    title: "IFBB ACADEMY",
    desc: "Cursos de MBA/Tecnologo.",
    src: ifbbAcademy,
  },
  // {
  //   id: 3,
  //   title: "VIVA CARE",
  //   desc: "Banco para Antecipação de recebíveis médicos.",
  //   src: vivaCare,
  // },
  {
    id: 4,
    title: "ANADEM",
    desc: "Seguros de Responsabilidade Civil Médica.",
    src: anadem,
  },
  {
    id: 5,
    title: "UNIVERSO CASUO",
    desc: "Shows.",
    src: universoCasuo,
  },
  // {
  //   id: 6,
  //   title: "RISSI",
  //   desc: "Cursos de MBA/Tecnologo.",
  //   src: rissi,
  // },
  {
    id: 7,
    title: "LINKED FUN",
    desc: "Criação de Eventos sob Medida.",
    src: linkedFun,
  },
  {
    id: 8,
    title: "STB BANK",
    desc: "Participação de Recebíveis Médicos.",
    src: sbtBank,
  },
  {
    id: 8,
    title: "CHRONUS BANK",
    desc: "Participação de Recebíveis Médicos.",
    src: chronus,
  },
  {
    id: 8,
    title: "JAC & CO",
    desc: "Participação de Recebíveis Médicos.",
    src: jacCo,
  },
  {
    id: 8,
    title: "ARENA OLÍMPIA",
    desc: "Participação de Recebíveis Médicos.",
    src: arena,
  },
];
export const palestrants: simpleCard[] = [
  {
    id: 0,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    src: defaultPerfilPhoto,
  },
  {
    id: 1,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    src: defaultPerfilPhoto,
  },
  {
    id: 2,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    src: defaultPerfilPhoto,
  },
  {
    id: 3,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    src: defaultPerfilPhoto,
  },
];

export const projetoMeddfitness = [
  {
    id: 0,
    title: "NETWORK",
    desc: "Congregar, estimular e apoiar o intercâmbio de informações atualizadas e do conhecimento técnico-científico na área de medicina, na área da medicina esportiva, alinhando-se às diretrizes das políticas de promoção do esporte saudável, adequado e da segurança física e mental.",
    icon: network,
  },
  {
    id: 1,
    title: "EDUCAÇÃO",
    desc: "Gerar oportunidades de aperfeiçoamento profissional e promover a divulgação de estudos e avanços científicos, contribuindo para a melhoria dos serviços de saúde e do bem-estar do indivíduo, com foco no fisiculturismo.",
    icon: books,
  },
  {
    id: 2,
    title: "NEGÓCIOS",
    desc: "Incentivar a troca de experiências, a cooperação e o enriquecimento profissional, reunindo especialistas e empresas de diversos estados brasileiros e de países ibero-americanos. Além disso, proporcionar aos participantes a oportunidade de ampliar o relacionamento com entidades atuantes nas diferentes áreas da medicina esportiva.",
    icon: hands,
  },
  {
    id: 3,
    title: "ENTRETENIMENTO",
    desc: "Proporcionar momentos inesquecíveis através de eventos Espetáculos em formato de feiras ou corporativos.",
    icon: instruments,
  },
];

export const stafPerfilPhotos: simpleCard[] = [
  {
    id: 0,
    src: PauloNetto,
    title: "Paulo Netto",
    desc: "Comissão Organizadora",
  },
  {
    id: 1,
    src: LeandroMoraes,
    title: "Leandro Moraes",
    desc: "Comissão Organizadora",
  },
  {
    id: 2,
    src: CassioBirque,
    title: "Cassio Birque",
    desc: "Comissão Organizadora",
  },
  {
    id: 3,
    src: DianaMonteiro,
    title: "Diana Monteiro",
    desc: "Comissão Organizadora",
  },
  {
    id: 4,
    src: BetaoMonteiro,
    title: "Betão Monteiro",
    desc: "Comissão Organizadora",
  },
];

export const navegation = [
  {
    id: "0",
    title: "SOBRE NÓS",
    url: "/About",
    options: [],
  },
  {
    id: "1",
    title: "MEGAFITNESS 2025",
    url: "/MegaFitness2025",
    options: [],
  },
  {
    id: "2",
    title: "1° CONGRESSO MEDDFITNESS BRASIL",
    url: "/CongressoMeddfitness",
    options: [],
  },
  {
    id: "3",
    title: "EVENTOS EM GRANDE ESTILO",
    url: "/EventoGrandeEstilo",
    options: [],
  },
  // {
  //   id: "4",
  //   title: "BLOG",
  //   url: "/Blog",
  //   options: [],
  // },
  {
    id: "5",
    title: "CONTATO",
    url: "/Contact",
    options: [],
  },
];
export const images: simpleImage[] = [
  {
    id: 0,
    alt: "MeddFitness Logo",
    src: Logo,
  },
  {
    id: 1,
    alt: "MeddFitness Logo Principal",
    src: LogoPrincipal,
  },
];

export const banners: simpleImage[] = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
  { id: 3, src: banner3, alt: "Banner 3" },
];

export const ingressosCard = [
  { title: "Workshop de Medicina Esportiva", neonWords: ["Workshop", "de"] },
  {
    title: "MegaFitness: O maior concurso fitness do Brasil",
    neonWords: ["MegaFitness:"],
  },
  {
    title: "Campeonato de Fisiculturismo com a CBMFF | IFBB Brasil",
    neonWords: ["Fisiculturismo"],
  },
];
export const ingressos = [
  {
    id: 0,
    title: "MEDDPOWER ",
    descs: [
      "2 dias de evento em cadeiras exclusivas em frente ao palco, ao lado das celebridades.",
      "Melhor visão do evento, com conforto e status VIP.",
    ],
    redirect: "#",
    value: 997,
  },
  {
    id: 1,
    title: "MEDDPRO",
    descs: [
      "2 dias de eventos Para quem busca conforto e exclusividade.",
      "Cadeiras mais próximas ao palco.",
    ],
    redirect: "#",
    value: 497,
  },
  {
    id: 2,
    title: "MEDDFIT",
    descs: [
      "2 dias de evento, com assento nas arquibancadas, garantindo uma visão ampla do espetáculo.",
    ],
    redirect: "#",
    value: 297,
  },
];
