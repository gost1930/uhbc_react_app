import { LuMessagesSquare } from "react-icons/lu";
import { useState } from "react";
import Content from "./Content";

export default function Contact() {
    const [value, setValue] = useState(false);
    const toggleMenu = () => {
        setValue(!value);
    };
    return(
        <>
        <a onClick={toggleMenu} className=" fixed bottom-3 right-1 bg-primary rounded-full p-5 z-10">
           <h1 className="text-white"><LuMessagesSquare /></h1> 
        </a>
        <section className={`${value ? "fixed" : "hidden"} flex-col  bottom-20 right-1  w-[300px] h-[475px] duration-300 rounded-t-lg rounded-lg bg-white p-3 shadow-gray-500 shadow-lg`}>
            <h1 className="self-center w-full">إملى المعلومات </h1>
        <Content />
        </section>
        </>
    )
};