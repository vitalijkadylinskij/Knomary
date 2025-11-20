

export default function ContactFormSection() {

    return (
        <section className="relative w-full h-full bg-gradient-to-b from-[#D0E2F0] via-[#A9BEEC] to-[#5155F5] py-30">
            <div className="max-w-[80%] bg-gradient-to-b from-[#EFF4F8] to-[#E7EDF2] rounded-xl p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mx-auto">
                <div>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#1B1F23] leading-tight">
                        Свяжитесь с нами<br/>
                        для проведения<br/>
                        демонстрации и<br/>
                        запроса цен
                    </h2>
                </div>


                <form className="flex flex-col space-y-4 w-full max-w-md">


                    <input
                        type="text"
                        placeholder="Имя"
                        className="w-full h-[54px] px-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-gray-400"
                    />


                    <div
                        className="w-full h-[54px] rounded-md bg-white border border-gray-200 flex items-center px-4 space-x-3">
                        <span className="text-gray-700">+375</span>
                        <input
                            type="tel"
                            placeholder="(00) 000-00-00"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                    </div>


                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-[54px] px-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-gray-400"
                    />


                    <input
                        type="text"
                        placeholder="Кратко опишите свой запрос"
                        className="w-full h-[54px] px-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-gray-400"
                    />


                    <div className="relative flex">
                        <select
                            className="cursor-pointer appearance-none w-full h-[54px] px-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-gray-400">
                            <option>Выберите продукт</option>
                            <option value="1">Продукт 1</option>
                            <option value="2">Продукт 2</option>
                            <option value="3">Продукт 3</option>
                        </select>
                        <div className="w-2 h-2 border-b-1 border-r-1 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-custom-dark rotate-45"></div>
                    </div>


                    <button
                        type="submit"
                        className="w-[164px] h-[50px] mt-5 cursor-pointer rounded-full border border-black text-black text-sm font-medium hover:bg-custom-dark transition-all duration-400 ease-out hover:text-white transition"
                    >
                        Отправить
                    </button>

                </form>

            </div>
        </section>
    )
}