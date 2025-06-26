import {
  face,
  ifbb,
  insta,
  linkedin,
  rede,
  revista,
  youtube,
} from "@/assets/images/logos/midias";
import { Midias } from "./types";

export const MdAbout = [
  "Nosso propósito é claro: democratizar o acesso à medicina esportiva, criando espaços dinâmicos, acessíveis e interativos para profissionais e entusiastas da área.",
  "Queremos transformar a forma de como a medicina esportiva é compreendida e praticada, oferecendo oportunidades reais para que médicos, fisioterapeutas, nutricionistas, treinadores, atletas e estudantes possam se atualizar, trocar experiências e evoluir em suas carreiras.",
  "O primeiro workshop da jornada Meddfitness acontecerá na cidade de Olímpia, reunindo grandes nomes das ciências do esporte para debater temas atuais, sempre com base em evidências científicas e foco no universo do fisiculturismo e fitness.",
];
export const midias: Midias[] = [
  { icon: linkedin, name: "Linkedin", value: "30K", type: "seguidores" },
  { icon: youtube, name: "Youtube", value: "5,75K", type: "seguidores" },
  { icon: face, name: "Facebook", value: "5,75K", type: "seguidores" },
  { icon: ifbb, name: "IFBB WORLD", value: "34,2K", type: "seguidores" },
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
];
