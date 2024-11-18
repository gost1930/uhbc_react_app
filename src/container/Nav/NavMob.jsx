import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { getAllClasse } from "../../utils/api/classe";

export default function NavMob({btn}) {
  

  const [value, setValue] = useState(false);
  const [classes, setClasses] = useState([]);
  const [showClasses, setShowClasses] = useState(false);

  const onShowClasses = () => setShowClasses(!showClasses);

  useEffect(() => {
    getAllClasse().then((data) => {
      setClasses(data);
    });
  }, []);

  const toggleMenu = () => {
    setValue(!value);
    if (value === false) {
      setShowClasses(false);
    }
  };
  console.log("value", value);
  
  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center gap-x-2"
      >
        <FaBars className=" w-10 h-7" /> <h1>القائمة</h1>
      </button>
      <ul
        className={`${
          value ? "right-0" : "-right-full"
        } bg-orange-50 w-64 h-full flex flex-col fixed duration-300 top-0 ease-in`}
      onBlur={() => setValue(false)}
      >
        <button onClick={toggleMenu} className="self-end m-4 text-3xl active:text-green-400">
          <IoIosCloseCircleOutline />
        </button>
        {btn.map(({ name, link, id }) => (
          <li
            key={id}
            className="flex items-center h-16 hover:border-b-4 hover:border-green-400 duration-200 group"
          >
            <Link
              onClick={id === 2 ? onShowClasses : () => setValue(false)}
              to={link}
              className={`color-primary px-3 font-normal text-xl ${
                id === 2 ? "relative" : ""
              }`}
            >
              {name}
            </Link>
            {id === 2 && showClasses && (
              <div className="absolute flex flex-col items-center gap-y-1  border rounded bg-white translate-y-[70%] translate-x-[-10%] p-6">
                {classes.map(({ name, id }, index) => (
                  <Link
                    onClick={() => setValue(false)}
                    to={`/lessons/${name.toString().split(" ")}/${id}`}
                    key={index}
                    className="text-center text-black"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
