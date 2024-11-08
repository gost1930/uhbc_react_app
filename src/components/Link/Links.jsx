import Link from "./Link.jsx"
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Depart from "../Depart/Depart.jsx";

export default function Links() {
    return(
        <section className="w-full md:w-[27%]">
                
                <section className="flex flex-col w-full h-fit">
            <h1 className=" border-r-4 border-orange-400 pr-1  text-3xl">روابط مختصرة</h1>
            <div className="flex flex-row flex-wrap w-full h-full">
                <Link title={"موقع الجامعة"} icon={<FaMapMarkedAlt />}/>
                <Link title={"الافواج"} icon={<MdGroups />}/>
                <Link title={"التوقيت الاسبوعي"} icon={<FaRegCalendarAlt />}/>
            </div>
            <Depart />
        </section>
            </section>
    )
};