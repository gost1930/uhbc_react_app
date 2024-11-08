export default function Link({title , icon}) {
    return(
        <div className="flex flex-col bg-white p-3 border w-24 h-28">
            <h1 className="text-5xl self-center">{icon}</h1>
            <h1 className="text-xs self-center mt-2">{title}</h1>
        </div>
    )
};