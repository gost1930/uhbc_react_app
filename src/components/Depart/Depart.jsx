import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Correct import statement
import { getAllClasse } from "../../utils/api/classe";

export default function Depart() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getAllClasse().then((data) => {
      setClasses(data);
    });
  }, []);

  return (
    <section className="w-full flex flex-col h-fit">
      <h1 className="border-r-4 border-orange-400 pr-1 text-3xl">
        أقسام الكلية
      </h1>
      {classes.map(({ name, id }) => (
        <div className="flex flex-col w-full" key={id}>
          <Link
            to={`/lessons/${name.toString().split(" ")}/${id}`}
            className="text-slate-700 pt-3 pb-1 text-xl hover:underline border-y bg-white"
          >
            {name}
          </Link>
        </div>
      ))}
    </section>
  );
}
