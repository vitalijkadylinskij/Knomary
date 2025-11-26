import React from "react"
import Image from "next/image";


export default function MissionSection() {
    const items = [
        {
            title: "С 2016 года",
            text: "создаем электронные курсы, видео и анимацию для дистанционного обучения",
            subTitle: "",
        },
        {
            title: "50–60 курсов",
            text: "ежемесячно в поточной разработке",
            subTitle: "",
        },
        {
            title: "8 из ТОП-20*",
            text: "российских компаний по чистой прибыли – клиенты Knomary Production",
            subTitle: "* согласно рейтингу Forbes",
        }
    ];

    return (
        <section className="w-[85%] mx-auto flex flex-col pt-30 px-6">
            <h1 className="text-5xl md:text-6xl font-semibold text-[#192128] ml-60 mb-12">
                Привет!
            </h1>
            <p className="text-[#192128] font-normal text-lg md:text-xl max-w-[640px] ml-60 mb-20">
                Мы – Knomary Production, команда специалистов в сфере EdTech.
            </p>
            <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#5972F3] mt-3"></div>
                <h2 className="text-[#192128] text-4xl md:text-7xl font-medium max-w-[1300px] ml-[-20] mt-3">
                    <span className="ml-58">
                        Наша миссия – максимально
                    </span><br/>эффективно закрывать потребности заказчиков по обучению сотрудников.
                </h2>
            </div>
            <div className="flex flex-col gap-3 w-full items-center mt-30">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-end bg-[#E8EFFB] rounded-2xl pt-[70px] px-[20px] pb-[20px] w-[800px] h-[250px]"
                    >
                        <h2 className="text-[#3E4CE2] text-7xl font-medium mb-4">
                            {item.title}
                        </h2>

                        <p className="text-[#192128] text-xl leading-relaxed mb-3">
                            {item.text}
                        </p>
                        <p className="text-[#A0AEC0] text-xl">
                            {item.subTitle}
                        </p>
                    </div>
                ))}
                <div className="w-full max-w-[800px] font-normal text-xl mt-10">Наши клиенты – лидеры в своих отраслях с тысячами сотрудников. Поэтому мы умеем гибко управлять большими и сложными проектами.</div>
                <div className="relative w-full max-w-[800px] h-[415px] my-5">
                    <Image
                        src="/images/products-page-image/partners.png"
                        alt="partners"
                        fill
                        className="relative object-contain"
                    />
                </div>
                <div className="w-full max-w-[800px] font-normal text-xl mt-10">
                    За 8 лет у нас накопилось много опыта, и каждый день мы пробуем новые инструменты, подходы и решения – всем этим хочется делиться, поэтому мы здесь.
                </div>
            </div>
        </section>
    );
}