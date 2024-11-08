import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { getAllClasse } from '../../utils/api/classe';

export default function NavMob() {
    const btn = [
        { id: 1, name: "الرئيسية", link: "/" },
        { id: 2, name: "الأقسام" },
        { id: 3, name: "من نحن", link: "/about" },
    ];

    const [value, setValue] = useState(false);
    const [classes, setClasses] = useState([]);
    const [showClasses, setShowClasses] = useState(false);

    const onShowClasses = () => setShowClasses(!showClasses);

    useEffect(() => {
        getAllClasse()
            .then((data) => {
                setClasses(data);
            });
    }, []);

    const toggleMenu = () => {
        setValue(!value);
    };

    return (
        <>
            <button onClick={toggleMenu} className="md:hidden">
                <FaBars />
            </button>
            <ul className={`${value ? "right-0" : "-right-full"} bg-orange-50 w-64 h-full flex flex-col fixed duration-300 top-0 ease-in`}>
                <button onClick={toggleMenu} className="self-end m-4 text-3xl">
                    <IoIosCloseCircleOutline />
                </button>
                {btn.map(({ name, link, id }) => (
                    <li key={id} className='flex items-center h-16 hover:border-b-4 hover:border-green-400 duration-200 group'>
                        <Link
                            onClick={id === 2 ? onShowClasses : undefined}
                            to={link}
                            className={`color-primary px-3 font-normal text-xl ${id === 2 ? 'relative' : ''}`}
                        >
                            {name}
                        </Link>
                        {id === 2 && showClasses && (
                            <div className="absolute flex flex-col items-center gap-y-1 p-1 border rounded">
                                {classes.map(({ name }, index) => (
                                    <p key={index} className='text-center text-black'>{name}</p>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
