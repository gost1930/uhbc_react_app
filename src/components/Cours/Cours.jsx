import Pagination from '../Pagination/Pagination'
import { Cart } from './Cart'

export default function Cours() {
    return(
        <section className="flex flex-col w-full md:w-[75%] ">
            <h1 className='self-start border-r-4 border-orange-400 pr-1 text-3xl'>الإعلانات</h1>
            <div className="flex flex-row justify-center flex-wrap w-full">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            </div>
            <Pagination />
            </section>
    )
};