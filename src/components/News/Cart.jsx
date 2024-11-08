


export default function Cart({img , title , category , date , pdf}) {
    return(
        <>
        <div className="flex flex-col w-[220px] bg-white rounded-xl m-1 overflow-hidden">
        <img src={`http://127.0.0.1:8000${img}`} className="h-[300px]" alt="" />
        <div className="flex flex-col px-2">
            <h1>{title}</h1>
            <div className='flex flex-row justify-between w-full'>
                <p className='text-sm color-primary'>{category}</p>
                <p className='text-xs'>{date}</p>
            </div>
            <a href={`http://127.0.0.1:8000${pdf}`} download className='self-end underline color-primary'>المزيد..</a>
        </div>
        </div>
        </>
    )
};