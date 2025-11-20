

export default function Footer() {

    return (
        <footer className="w-full h-screen flex flex-col justify-between bg-gradient-to-b from-[#1A2226] to-[#1D262B] text-white pt-30 pb-10 relative overflow-hidden">
            <div className="flex w-full max-w-[80%] mx-auto px-6 justify-between">
                <div>
                    <h2 className="text-4xl font-semibold mb-8">Контакты</h2>

                    <div className="text-base font-normal text-gray-300/30 leading-relaxed space-y-4">
                        <p>ООО «НОМАРИ СиАйЭс»</p>
                        <p>
                            ИНН 9723069811; КПП 772301001;<br/>
                            ОГРН 1187746949510
                        </p>
                        <p>
                            Юр. адрес: г. Москва,<br/>
                            ул. Братиславская, д. 14, оф. 2/1В
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 justify-center">
                    <div className="flex items-center gap-3">
                        <span>📞</span>
                        <a href="tel:+74996775093" className="text-lg font-normal text-gray-300 hover:text-white">
                            +7 (499) 677-50-93
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <span>✉️</span>
                        <a href="mailto:info@knomary.ru" className="text-lg font-normal text-gray-300 hover:text-white">
                            info@knomary.ru
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-end text-lg font-normal">
                    <h3 className="text-gray-400 mb-4">Продукты</h3>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 hover:text-[#6B8BFF] cursor-pointer"><span
                            className="w-[9px] h-[9px] rounded-full bg-[#6B8BFF]"></span>Knomary TMS
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#FF6A67] cursor-pointer"><span
                            className="w-[9px] h-[9px] rounded-full bg-[#FF6A67]"></span>Knomary Целеполагание
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#4D7BFF] cursor-pointer"><span
                            className="w-[9px] h-[9px] rounded-full bg-[#4D7BFF]"></span>Knomary Production
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#38B593] cursor-pointer"><span
                            className="w-[9px] h-[9px] rounded-full bg-[#38B593]"></span>Линда
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center text-lg font-normal">
                    <h3 className="text-gray-400 mb-4">Legal</h3>

                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Terms of service</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-[90%] mx-auto">
                <img
                    src="/images/footer-logo.svg"
                    alt="background"
                    className="relative w-full object-cover pointer-events-none select-none"
                />
                <div
                    className="w-full px-6 flex justify-between items-center mt-10 text-base text-white">
                    <span>Сделано в Knomary Production</span>
                    <span>2025</span>
                    <span>© Все права защищены</span>
                </div>
            </div>
        </footer>
    )
}