import Image from "next/image";
import React from "react";
import banner4 from "@/assets/images/banners/banner4.jpg";
import { LogoPrincipalLight } from "@/assets/images/logos";
import { entregas, frentes } from "./constants";
import GradientCard from "@/components/ui/GradientCard";
import eventShow from "@/assets/images/events/show01.jpg";
import eventosRealizados from "@/assets/images/events/eventosRealizados.jpg";
import { targets } from "@/assets/images/logos/targets";

const EventoGrandeEstilo = () => {
  return (
    <div>
      <div>
        <Image src={banner4} alt="Eventos em Grande Estilo" />
      </div>
      <section className="bg-[#37A7E6]">
        <div className="customContainer">
          <div className=" p-10 gap-10 flex justify-end items-end">
            <div>
              <h4 className="text-justify text-2xl font-[500]">
                A MEDDFITNESS também é uma empresa especializada em eventos e
                entretenimento que promove encontros memoráveis que unem
                sofisticação, propósito e excelência. <br />
                <br /> Com uma equipe multidisciplinar e apaixonada pelo que
                faz, criamos experiências únicas, planejadas em cada detalhe
                para encantar, envolver e transformar.
              </h4>
            </div>
            <Image
              src={LogoPrincipalLight}
              alt="Meddfitness"
              height={200}
              className=""
            />
          </div>
        </div>
      </section>
      <section className="bg-light text-dark">
        <div className="customContainer">
          <h1 className="text-[4rem] mb-6">NOSSA ESSÊNCIA</h1>
          <p className="text-2xl">
            <strong className="text-3xl">Perpetuidade</strong> <br />
            Criamos experiências que ultrapassam o instante e se transformam em
            memórias duradouras. Eventos celebrativos fortalecem vínculos,
            inspiram conexões e promovem o bem-estar. São encontros marcantes
            que unem equipes, celebram conquistas e constroem histórias que
            permanecem vivas com o passar do tempo.
          </p>
        </div>
      </section>
      <section>
        <div className="customContainer grid grid-cols-2 gap-6">
          {frentes.map(({ title, desc }, i) => (
            <GradientCard
              bordered
              key={i}
              delay={150 * i}
              from="scale"
              className="max-w-100 mx-auto"
            >
              <h2>
                <span>{title}</span>
              </h2>
              <p>{desc}</p>
            </GradientCard>
          ))}
        </div>
      </section>
      <section className="bg-dark-100">
        <div className="customContainer">
          <h1 className="text-[4rem]">ALINHAMENTO DE EXPECTATIVAS</h1>
          <p className="text-2xl">
            Trabalhamos dentro do budget definido, sem abrir mão do espetáculo.
            Oferecemos experiências gastronômicas com food fingers de cozinha
            multicultural e open bar com bebidas premium e coquetéis exclusivos.
            Tudo pensado para encantar, surpreender e entregar exatamente o que
            foi sonhado, ou até mais.
          </p>
        </div>
      </section>
      <section
        className="text-shadow-lg bg-cover bg-center h-185 text-center"
        style={{ backgroundImage: `url('${eventShow.src}')` }}
      >
        <div className="customContainer bg-darker/50">
          <h1 className="text-[3rem] mb-10 font-extrabold">
            <span>ENERGIZE SEU EVENTO COM PERFORMANCES ÚNICAS</span>
          </h1>
          <p className="text-2xl">
            Realizamos eventos corporativos, sociais, culturais e promocionais
            com criatividade e excelência. Nossa equipe especializada, aliada a
            um repertório diversificado e produção técnica de alta qualidade,
            transforma cada evento em um momento marcante e inesquecível. Shows,
            ativações, experiências imersivas, festas personalizadas e uma
            produção técnica impecável: se você pode imaginar, nós podemos
            realizar.
          </p>
        </div>
      </section>
      <section>
        <div className="customContainer">
          <h1 className="text-[4rem] text-center mb-10">
            <span>ENTREGAS</span>
          </h1>
          <div className="flex gap-4">
            {entregas.map((item, i) => (
              <GradientCard key={i} bordered className="w-fit">
                <h2>{item.title}</h2>
                <ul>
                  {item.itens.map((text, j) => (
                    <li key={j}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer flex">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-[4rem]">DIFERENCIAIS</h1>
              <div className="">
                <ul className="list-disc pl-6 text-2xl">
                  <li>Planejamento estratégico com foco na experiência</li>
                  <li>Curadoria artística e técnica personalizada</li>
                  <li>Equipe experiente e versátil</li>
                  <li>Parcerias com fornecedores premium</li>
                  <li>Atendimento próximo, transparente e ágil</li>
                  <li>
                    Operação totalmente segurada pelas companhias Allianz,
                    Zurich e AXA.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://media-public.canva.com/vYstI/MAFLEHvYstI/1/s.jpg"
              alt="mulher"
              width={800}
              height={720}
            />
          </div>
        </div>
      </section>
      <section>
        <Image src={eventosRealizados} alt="eventos realizdos" />
      </section>
      <div className="flex bg-primary-darker">
        <div className="p-10 flex-1 pl-[10%] text-center flex justify-center items-center flex-col">
          <h1 className="text-[3rem] mb-4">
            PRESENÇA MARCANTE EM EVENTOS E REDES SOCIAIS
          </h1>
          <p className="text-2xl">
            Hair Fashion Show 1,4 milhões inscrições <br /> Monange Drean
            Fashion 2.0 milhões de pessoas <br />
            Like Mega Model 1,4 milhões incrições <br />
            Menina Fantástica 50 milhões impactados <br />
            TicTac Mega Model 2 milhões inscrições <br />
            Palmolive Mega Model 1,3 milhões inscrições <br />
            Atroveran Mega Model 1,3 milhões inscrições. <br />
            Pantene Menina Fantástica 50 milhões Impactados <br />
            Mega Challenge Simple Organic 320 milhões de “views “ em 30 dias no
            Tik Tok.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url('https://media-public.canva.com/Z9MsU/MADyQ6Z9MsU/1/s2.jpg')`,
          }}
          className="h-150 bg-cover bg-center flex-1"
        />
      </div>
      <section>
        <div className="customContainer">
          <h1>ENTRETENIMENTO AO VIVO</h1>
          <p>
            O setor de entretenimento ao vivo movimenta uma ampla rede de
            profissionais e serviços, envolvendo desde artistas e agentes até
            promotores de eventos, operadores de bilheteria, alimentação,
            merchandising e espaços. Os principais segmentos incluem shows,
            peças teatrais, exposições e eventos esportivos. São experiências
            que conectam marcas e públicos diversos. A viabilização de eventos
            depende de uma estrutura bem coordenada, onde cada elo da cadeia
            agrega valor, seja na produção, na operação ou na venda de
            patrocínios. Cada vez mais, empresas associam suas marcas a eventos
            culturais, esportivos e sociais, reforçando sua presença e
            propósito. Com crescimento constante desde os anos 2000, o setor
            segue em expansão e se mostra fundamental na construção de
            experiências memoráveis e de alto impacto.
          </p>
        </div>
      </section>
      <div className="bg-primary">
        <h1 className="text-center mb-6  text-dark py-10 px-[10%] border-b border-dark-100">
          ALGUNS CLIENTES & TARGET : NOSSA REDE DE RELACIONAMENTOS
        </h1>
        <div>
          <ul className="grid gap-6 customContainer grid-cols-7 bg-primary">
            {targets.map((image, i) => (
              <li
                key={i}
                className="flex items-center justify-center shadow-lg bg-light"
              >
                <div className=" rounded min-w-30 h-30 p-3 flex justify-center items-center">
                  <Image
                    src={image}
                    alt={"logo" + 1 + i}
                    width={120}
                    height={120}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventoGrandeEstilo;
