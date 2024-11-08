export default function Content() {
    return(
        <section className="">
            <form class="w-full flex flex-col max-w-sm">
            <div class="flex  items-center border-b border-orange-500 py-2 mb-3">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="الاسم" />
            </div>
            <div class="flex  items-center border-b border-orange-500 py-2 mb-3">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="الايميل" />
            </div>
            <div class="flex  items-center border-b border-orange-500 py-2 mb-3">
                <textarea class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="الرسالة" />
            </div>
                <button class="flex-shrink-0  btn-primary  btn-primary-hover  text-sm  text-white rounded" type="button">
               أرسل
                </button>
            </form>
        </section>
    )
};