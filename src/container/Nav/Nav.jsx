import banner from "../../assets/banner.png";
import NavPc from "./Navpc";
import NavMob from "./NavMob";

export default function Nav() {
  return (
    <>
      <nav className="flex flex-row md:justify-around items-center w-full h-20 shadow-lg relative overflow-hidden bg-orange-50 px-1">
        <NavMob />
        <NavPc />
      </nav>
    </>
  );
}
