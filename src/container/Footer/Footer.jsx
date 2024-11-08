import Links from "./Links";
import Logo from "./Logo";
import Social from "./Social";

export default function Footer() {
    return(
        <footer className="flex flex-col w-full bg-white  pt-6 ">
            <section className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full">
            <Logo />
            <Links />
            <Social />
        </section>
        <div className="flex w-full flex-col border-y-2 mt-5">
        <h1 className="self-center my-3">created withe ❤️ by <a href="" className=" underline">Hadbi Mohamed</a></h1>
        </div>
        </footer>
    )
}