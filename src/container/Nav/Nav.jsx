import banner from "../../assets/banner.png";
import NavPc from "./Navpc";
import NavMob from "./NavMob";
import { memo } from "react";

const Nav = ()=> {const btn = [
  { id: 1, name: "الرئيسية", link: "/" },
  { id: 2, name: "الأقسام" },
  { id: 3, name: "من نحن", link: "/about" },
  { id: 4, name: "dashboard", link: "/classe" },
];
  return (
    <>
      <nav className="flex flex-row md:justify-around items-center w-full h-20 shadow-lg relative overflow-hidden bg-orange-50 px-1 z-10">
        <NavMob btn={btn} />
        <NavPc btn={btn} />
      </nav>
    </>
  );
}

export default memo(Nav);