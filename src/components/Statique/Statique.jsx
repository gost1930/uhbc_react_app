import Cart from "./Cart";

export default function Statique() {
    return(
        <section className="flex  flex-col items-center justify-center w-full my-20 ">
            <h1 className="text-5xl mb-6">إحصائيات الكلية</h1>
            <div className="flex flex-col md:flex-row justify-around w-full">
            <Cart n={'10'} title={"الاقسام"} />
            <Cart n={'10'} title={"الشعب"} />
            <Cart n={'10'} title={"التخصصات"} />
            <Cart n={'10'} title={"المنشورات"} />
            </div>
        </section>
    )
};