import React from "react"
import Image from "next/image";



export default function AccessSection() {

    return (
        <section className="relative w-full h-full bg-custom-dark">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute w-full h-full bg-[url('/images/tms-page-image/Access-bg.png')] bg-cover bg-center bg-fixed"></div>
            </div>
            <div className="relative z-1 border border-t-[124px] border-b-[164px] border-x-[124px] border-custom-dark">
                {/* Внутренний блок — радиус должен быть тем же, что и "внутренняя форма" */}
                <div
                    className="relative z-10 p-10 flex flex-col justify-between w-full max-w-[1500px] h-full min-h-[716px]">

                    <div className="max-w-xl">
                        <h2 className="text-white text-5xl font-semibold mb-6">
                            Всегда в доступе
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Мобильное приложение <span className="text-[#B59CFF]">Knomary TMS</span>
                            позволяет полноценно пользоваться платформой даже без ПК.
                        </p>
                    </div>

                    <div className="mb-[-150px] max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-8 shadow-md w-[430px] h-[344px]">
                            <div className="flex justify-end mb-4">
                                <Image
                                    src="/images/tms-page-image/arrow-card.svg"
                                    alt="arrow"
                                    width={99}
                                    height={47}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-10">Адаптация и обучение в кармане</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Полноценная пользовательская функциональность. Идеальное решение для новых
                                сотрудников и тех, кто не имеет постоянного доступа к ПК.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md w-[430px] h-[344px]">
                            <div className="flex justify-end mb-4">
                                <Image
                                    src="/images/tms-page-image/arrow-card.svg"
                                    alt="arrow"
                                    width={99}
                                    height={47}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-10">Нативное приложение для iOS и Android</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Стабильная и надежная работа на любых мобильных устройствах. Высокий уровень пользовательского опыта.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md w-[430px] h-[344px]">
                            <div className="flex justify-end mb-4">
                                <Image
                                    src="/images/tms-page-image/arrow-card.svg"
                                    alt="arrow"
                                    width={99}
                                    height={47}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-10">Полная синхронизация с веб-версией</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Возможность получить доступ к учебным и адаптационным материалам в любое время в любом месте.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}