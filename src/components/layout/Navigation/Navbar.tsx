import EntryAnimation from "../AnimatedContent/EntryAnimation";
import NavItems from "./NavItems";
import Sidebar from "./Sidebar";

const Navibar = () => {
  return (
    <>
      <EntryAnimation from="right">
        <ul className="hidden xl:flex h-full">
          <NavItems />
        </ul>
        <Sidebar>
          <NavItems />
        </Sidebar>
      </EntryAnimation>
    </>
  );
};

export default Navibar;
