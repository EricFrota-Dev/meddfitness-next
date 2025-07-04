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
        <EntryAnimation
          from="right"
          className="customContainer text-light-500 flex items-center justify-center gap-[10%] bg-darker xl:min-h-22"
        >
          <h1 className="font-extrabold">CRIAÇÃO</h1>{" "}
          <h1 className="font-extrabold">CELEBRAÇÃO</h1>{" "}
          <h1 className="font-extrabold">CONEXÃO</h1>
        </EntryAnimation>
      </div>

      <section id="events">
        <Ingressos />
      </section>
    </>
  );
};

export default Home;
