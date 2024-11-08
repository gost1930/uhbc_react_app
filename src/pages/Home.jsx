import { Hero, Links, News, Map, Statique } from "../components";
import { Route, Routes } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full flex flex-col md:flex-row h-fit my-2 p-2">
        <News />

        <Links />
      </section>
      <Statique />
      <Map />
    </>
  );
}
