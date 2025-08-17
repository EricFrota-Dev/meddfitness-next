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
          className="customContainer flex items-center justify-center gap-[10%] xl:min-h-22"
        >
          <h1 className="font-extrabold text-center">
            <span>Vida em Movimento</span>
          </h1>
        </EntryAnimation>
      </div>

      <section id="events">
        <Ingressos />
      </section>
    </>
  );
};

export default Home;
