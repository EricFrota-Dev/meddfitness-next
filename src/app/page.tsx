import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import BannerCarousel from "@/components/ui/BannerCarousel";
import Ingressos from "@/components/ui/Tickets/Ingressos";

const Home = () => {
  return (
    <>
      <div id="banners" className="p-0 m-0">
        <BannerCarousel />
      </div>
      <div id="MedFuture">
        <div className="customContainer flex items-center justify-center bg-darker xl:min-h-40">
          <EntryAnimation from="right">
            <h3>
              <p>
                O futuro da <span>medicina esportiva</span> e do{" "}
                <span>fitness</span> começa aqui.
              </p>
              <p className="font-extralight text-center">
                {" "}
                Viva a experiência, transforme sua performance!
              </p>
            </h3>
          </EntryAnimation>
        </div>
      </div>
      <section id="events">
        <Ingressos />
      </section>
    </>
  );
};

export default Home;
