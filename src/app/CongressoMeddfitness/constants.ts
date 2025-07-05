import {
  congresso,
  face,
  insta,
  linkedin,
  rede,
  revista,
  revistaBranca,
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
  {
    icon: congresso,
    name: "Congresso Meddfitness",
    value: "10,2K",
    type: "visualizações",
  },
  { icon: insta, name: "Instagran", value: "284K", type: "seguidores" },
  {
    icon: rede,
    name: "Site IFBB World",
    value: "15 Milhões/ mes",
    type: "visualizações",
  },
  {
    icon: revista,
    name: "Revista Bem-estar",
    value: "35K",
    type: "seguidores",
  },
  {
    icon: revistaBranca,
    name: "Revista Elite Magazine",
    value: "34K",
    type: "seguidores",
  },
  {
    icon: revista,
    name: "Revista Caras",
    value: "49K",
    type: "seguidores",
  },
];

export const duvidasRespostas01: FAQsProps[] = [
  {
    id: 0,
    question: "Por que em Olímpia?",
    response: [
      "Primeira vês que a IFBB e MEDDFITNESS escolhem uma cidade e obtém  apoio total  da Secretaria de Esportes e Turismo da Prefeitura Municipal para sediar esse evento, cuja magnitude propiciará um encontro científico e demonstrativo Da capacidade de atendimento médico da cidade e participação de seus  atletas em campeonatos. A cidade atende mais de 93 municípios vizinhos que utilizam sua malha de saúde, conta com os grandes especialistas de medicina esportiva da cidade e região, fazendo fronteira com os estados de Mato Grosso do Sul, Minas Gerais e Goiás e atendendo em sua malha pacientes dos três estados.",
    ],
  },
  {
    id: 1,
    question: "Por que o Workshop/feira?",
    response: [
      "Uma cidade como São Jose do Rio Preto que possui sua malha de medicina uma capacidade atraronômica de atendimento, incluído 93 municípios da região o que eleva sua população de amostragem para 2,5 milhões de pessoas que utilizam seus suas 27 unidades básicas de atendimentos de saúde, seus 250 clinicas e consultórios especializados e mais de 100 unidades de apoio e diagnósticos. Com 2356 médicos a cidade possui o mais alto índice de atendimento por paciente chegando a 5,6 pacientes por médico sendo a maior do Brasil.",
    ],
  },
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
      "A MEDDFITNESS, será uma diversificação de eventos simultâneos, reunindo grandes marcas, profissionais de medicina esportiva e áreas correlatas, conta com uma grande programação técnica e eventos com artistas mundiais, (Casuo – Cirque du Soleil), Steacen Seagal – Lutador, ator e músico, Campeonato Feminino de Fisiculturismo e Fitness, Campeonato Kids, além de estandes e praça de alimentação. Os participantes terão a oportunidade de aprender sobre Medicina Esportiva, treinos, truques, campeonatos e sobre as últimas tendências do mercado fitness, conhecer novos produtos e serviços.",
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
      "Faça parte da organização do maior evento de fitness e bem-estar da América Latina. Participe como monitor voluntário do MEDDFITNESS 2025, entre os dias 25 e 26 de julho, no centro regional de eventos, em Rio Preto (SP)",
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
    desc: "Idealizado para percorrer o Brasil, o MeddFitness promove o acesso à medicina esportiva baseada em evidências, com foco no fisiculturismo, performance e bem-estar. É um espaço interativo e acessível para médicos, nutricionistas, fisioterapeutas, educadores físicos, atletas, estudantes e profissionais da saúde.",
    icon: aboutIccon,
  },
  {
    title: "OBJETIVOS",
    desc: "Democratizar o conhecimento técnico-científico da medicina esportiva. Estimular o intercâmbio de ideias, estudos e práticas seguras. Promover o aperfeiçoamento profissional e a saúde no esporte. Aproximar marcas, profissionais e o público em geral.",
    icon: objectiveIccon,
  },
  {
    title: "PÚBLICO-ALVO",
    desc: "Profissionais e estudantes de Nutrição, Medicina, Educação Física, Fisioterapia e áreas afins Atletas, treinadores e praticantes de atividades físicas Empresas do setor esportivo e fitness Pesquisadores e grupos de estudo em medicina esportiva.",
    icon: targetIccon,
  },
  {
    title: "WORKSHOP MEDDFITNESS – OLÍMPIA 2025",
    desc: "Será o primeiro de muitos. Um encontro científico com grandes nomes das ciências do esporte debatendo temas atuais como:",
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
    title: "FEIRA MEDDFITNESS",
    desc: "Estandes de marcas de suplementos, equipamentos, tecnologia esportiva, moda fitness e muito mais. Um hub de tendências, lançamentos e networking.",
    icon: feira,
  },
  {
    title: "MEDDCAST MEDDFITNESS",
    desc: "Conversas com especialistas, atletas, influenciadores do universo fitness, expositores entre outros convidados. Uma troca de experiências que ultrapassa os bastidores do evento.",
    icon: cast,
  },
  {
    title: "CAMPEONATO DE FISICULTURISMO",
    desc: "Organizado pela IFBB Brasil, o campeonato celebra a excelência muscular com base em equilíbrio, estética e saúde. A IFBB – Federação Internacional de Fisiculturismo e Fitness, com 204 países afiliados, realiza mais de 8 mil campeonatos por ano, incluindo 52 etapas no Brasil.",
    icon: fisioculturiosmo,
    itens: ["Acesse o regulamento completo no site oficial: www.ifbb.com"],
  },
  {
    title: "CONCURSO MEGAFITNESS",
    desc: "Celebrando a beleza e o estilo de vida saudável com o concurso Miss & Mister MegaFitness. Aberto ao público, com inscrições online.",
    icon: concusto,
  },
  {
    title: "SHOWS E ENTRETENIMENTO",
    desc: "Abertura com o espetáculo do Universo Casuo, atrações musicais e apresentações que tornam a experiência ainda mais inesquecível.",
    icon: shows,
  },
];
