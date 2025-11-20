import Image from "next/image";

export default function ResearchSection() {
    return (
        <section className="w-full h-full bg-gradient-to-b from-[#E9EEF3] via-[#EFF3F6] to-[#E4EDF7] py-30">
            <div className="max-w-[80%] h-full mx-auto flex">
                <div className="flex flex-col mr-30">
                    <h2 className="text-5xl font-semibold text-[#0F172A] w-[355px]">
                        Наши<br />исследования
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg w-[355px]">
                        Независимая команда аналитики, которая проводит уникальные исследования
                        совместно с ведущими экспертами отрасли
                    </p>
                </div>
                <div className="w-full flex">
                    <div className="group w-full cursor-pointer pt-3 mr-3 min-w-[417px] h-full min-h-[666px] bg-[#1F262B] text-white
                     rounded-2xl overflow-hidden shadow transition hover:shadow-lg
                     transition-all duration-900 ease-out hover:scale-[1.04] hover:shadow-xl
                     ">
                        <div className="relative items-center justify-center min-w-[396px] h-[327px] mx-3">
                            <Image
                                src="/images/researches.png"
                                alt="research"
                                fill
                                className="object-cover w-full object-center rounded-lg"
                            />
                        </div>
                        <div className="w-full h-[330px] p-6 flex flex-col gap-4 justify-between">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-300/70 mb-6">1 февраля 2024</p>
                                    <div className="relative w-[15px] h-[15px] transition-transform duration-700 group-hover:scale-125">
                                        <Image
                                            src="/images/arrow.svg"
                                            alt="arrow"
                                            fill
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-semibold leading-[35px]">
                                    Трансформация HR: жизненный цикл сотрудника 2030
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <Image src="/images/Logo.svg" alt="logo" width={90} height={24}/>
                                <Image src="/images/actra.svg" alt="logo" width={70} height={24} />
                                <Image src="/images/mindsmith.svg" alt="logo" width={90} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[417px] h-full flex flex-col">
                        <div className="group w-full cursor-pointer h-full mb-3 bg-[#1F262B] w-full text-white rounded-2xl p-6 flex flex-col
                         justify-between shadow transition hover:shadow-lg
                         transition-all duration-900 ease-out hover:scale-[1.04] hover:shadow-xl">
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-300/70">27 февраля 2024</p>
                                    <div className="relative w-[15px] h-[15px] transition-transform duration-700 group-hover:scale-125">
                                        <Image
                                            src="/images/arrow.svg"
                                            alt="arrow"
                                            fill
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold leading-snug">
                                    Искусственный интеллект в HR
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 mt-10">
                                <Image src="/images/Logo.svg" alt="logo" width={90} height={24}/>
                                <Image src="/images/tech.svg" alt="logo" width={70} height={24} />
                            </div>
                        </div>
                        <div className="group w-full max-w-[417px] h-full cursor-pointer bg-[#1F262B] w-full text-white rounded-2xl p-6 flex flex-col
                        justify-between shadow transition-all duration-900 ease-out hover:scale-[1.04] hover:shadow-xl">
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-300/70">4 февраля 2022</p>
                                    <div className="relative w-[15px] h-[15px] transition-transform duration-700 group-hover:scale-125">
                                        <Image
                                            src="/images/arrow.svg"
                                            alt="arrow"
                                            fill
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold leading-snug">
                                    Российский рынок контента для корпоративного дистанционного обучения
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 mt-10">
                                <Image src="/images/Logo.svg" alt="logo" width={90} height={24} />
                                <Image src="/images/beeline.svg" alt="logo" width={70} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
