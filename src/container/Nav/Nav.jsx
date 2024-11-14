import banner from "../../assets/banner.png";
import NavPc from "./Navpc";
import NavMob from "./NavMob";
import { memo } from "react";

const Nav = ()=> {
  return (
    <>
      <nav className="flex flex-row md:justify-around items-center w-full h-20 shadow-lg relative overflow-hidden bg-orange-50 px-1 z-10">
        <NavMob />
        <NavPc />
      </nav>
    </>
  );
}

export default memo(Nav);