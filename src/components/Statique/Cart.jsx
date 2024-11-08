export default function Cart({n , title}) {
    return(
        <div className="flex  flex-col justify-centeri items-center bg-white rounded-lg
         p-10 border-b-2 border-blue-500
         shadow-lg">
            <h1>{n}</h1>
            <h1>{title}</h1>
        </div>
    )
};