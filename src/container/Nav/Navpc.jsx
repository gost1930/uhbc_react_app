import { Link } from "react-router-dom";

export default function NavPc() {
    const btn = [
        {id:1 ,name: "الرئيسية", link: "/"},
        {id:4 , name:"المنتديات" , link:"/meetings"},
        {id:5 ,name:"من نحن" , link:"/about"},
    ]
    return(
        <ul className="hidden md:flex flex-row h-full">
            
            {
                btn.map(({name , link , id} ) => (
                    <Link key={id} to={link} className='flex items-center h-full hover:border-b-4 hover:border-green-400 duration-200 group'>
                        <span className='color-primary px-3 font-normal text-xl'>{name}</span>
                    </Link>
                )
                )
            }
        </ul>
    );
}
