

export default function TechnologiSection() {

    return (
        <section className="relative pt-20 w-full h-full  bg-gradient-to-b from-[#c4d3e2] to-[#E9EEF3]">
            <div className="flex text-center justify-center w-full text-[#1d2529] text-6xl font-medium">
                <h1>Решения для крупного бизнеса</h1>
            </div>
            <div className="flex w-[80%] flex-col mx-auto mt-20">
                <div className="flex w-full justify-between">
                    <div className="flex w-full h-full min-h-[267px] text-white text-2xl font-normal bg-[#1d2529] rounded-2xl items-end px-[27px] py-[30px]">
                        Мы используем современные и проверенные технологии для разработки высококачественных продуктов, обеспечивающих стабильность, производительность и удобство использования. В наших продуктах мы используем Python, PHP, Node JS. React, JS.
                    </div>
                    <div className="group ml-3">
                        <div className="w-[225px] h-full bg-[#1F262B] rounded-2xl flex items-center justify-center bg-[#1d2529]">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Top row */}
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#EF626C] transition-colors duration-400"/>
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#56C2A3] transition-colors duration-400"/>

                                {/* Middle row */}
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#66B6E1] transition-colors duration-400"/>
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#7088F3] transition-colors duration-400"/>

                                {/* Bottom row */}
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#758BD7] transition-colors duration-400"/>
                                <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#8279D9] transition-colors duration-400"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                    <div
                        className="flex w-full h-full justify-between items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="flex flex-col w-full h-full justify-end">
                            <h3 className="text-2xl font-semibold text-[#0F172A] leading-tight">
                                Внедрение<br/>и интеграция
                            </h3>
                            <p className="mt-3 text-lg leading-[20px] w-full max-w-[302px]">
                                Комплексное внедрение продуктов Knomary во внутренний ИТ-контур клиента
                            </p>
                        </div>
                        <div className="w-full max-w-[240px] h-[203px] flex items-center justify-center">
                            <img
                                src="/gif/elips.gif"
                                alt="integration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div
                        className="flex justify-between items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="flex flex-col w-full h-full justify-end">
                            <h3 className="text-2xl font-semibold text-[#0F172A] leading-tight">
                                Техническая<br/>поддержка
                            </h3>
                            <p className="mt-3 text-lg leading-[20px] w-full max-w-[290px]">
                                Поддержка безотказной работы ПО и обеспечение поддержки пользователей
                            </p>
                        </div>
                        <div className="w-full max-w-[240px] h-[203px] flex items-center justify-center">
                            <img
                                src="/gif/horizont_elips.gif"
                                alt="support"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}