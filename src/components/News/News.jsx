import Pagination from '../Pagination/Pagination'
import Cart from './Cart'
import { getAllNews } from '../../utils/api/news'
import { useEffect, useState } from 'react'

export default function News() {

    const [news, setNews] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        getAllNews()    
        .then((data) => {
            setNews(data)
            setLoading(false)
            console.log(data);
            
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <section className="flex flex-col w-full md:w-[75%] ">
            <h1 className='self-start border-r-4 border-orange-400 pr-1 text-3xl'>الإعلانات</h1>
            <div className="flex flex-row justify-center flex-wrap w-full">
            {
                news.map(({name , updated_at , picture, pdf , category}) => {
                    return (
                        <Cart img={picture} title={name} category={category} date={updated_at} pdf={pdf} />
                    )
                })
            }
            </div>
            <Pagination />
            </section>
    )
};