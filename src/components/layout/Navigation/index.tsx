import Navibar from "./Navbar";
import Logo from "./Logo";

const Navegation = () => {
  return (
    <>
      <nav className="bg-darker justify-between z-10 h-30 md:h-30 w-[100vw] fixed flex flex-wrap items-center pr-6 pl-6">
        <Logo />
        <Navibar />
      </nav>
    </>
  );
};

export default Navegation;
