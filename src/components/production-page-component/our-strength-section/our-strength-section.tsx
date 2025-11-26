import React from "react"
import Image from "next/image";


export default function OurStrengthSection() {
    const images = [
        "/images/products-page-image/str-1.png",
        "/images/products-page-image/str-2.png",
        "/images/products-page-image/str-3.png",
        "/images/products-page-image/str-4.png",
    ];
    const items = [
        "Articulate Rise",
        "Видео со спикером",
        "Анимация"
    ];

    return (
        <section className="w-[85%] mx-auto flex flex-col py-30 px-6">
            <div className="flex flex-col gap-3 w-full items-center mt-30">
                <h2 className="text-5xl font-medium w-[800px]">В чем сила</h2>
                <div className="w-full max-w-[800px] font-normal text-xl mt-5">
                    Мы берем на себя весь цикл разработки: от концепции до финального тестирования. При этом по запросу выполняем и отдельные задачи, например, помогаем с дизайном или методологией.
                </div>
                <div className="w-full max-w-[800px] font-normal text-xl mt-5">
                    Секрет такой многозадачности – сильная команда, закаленная в десятках проектов. Мы хорошо понимаем рынок, своих заказчиков и их потребности. Это помогает выстроить процесс так, чтобы гарантированно получить качественный и красивый продукт.
                </div>
                <div className="w-full max-w-[800px] font-normal text-xl mt-5">
                    У нас семь отделов, и каждый отвечает за отдельный этап и имеет свой набор компетенций.
                </div>
                <div className="relative w-full max-w-[800px] h-[580px] mt-5">
                    <Image
                        src="/images/products-page-image/Frame_tech.png"
                        alt="tech"
                        fill
                        className="relative object-cover"
                    />
                </div>
                <div className="w-full max-w-[800px] font-normal text-xl mt-5">
                    Работая вместе над продуктом, мы усиливаем экспертизу друг друга, чтобы получить лучший результат.
                </div>
            </div>
            <div className="relative w-full mt-5">
                <Image
                    src="/images/products-page-image/strength-1.png"
                    alt="str"
                    width={2000}
                    height={1000}
                    className="relative object-cover w-full h-full"
                />
                <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">

                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative w-full h-[260px] md:h-[330px] lg:h-[380px] overflow-hidden border border-gray-300"
                        >
                            <Image
                                src={src}
                                alt="strImage"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    ))}

                </div>
                <div className="flex items-center gap-3 mt-6">
                    {items.map((text, i) => (
                        <div
                            key={i}
                            className="px-5 py-1.5 bg-[#192128] text-white text-sm rounded-full"
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}