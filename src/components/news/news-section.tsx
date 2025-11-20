import AnimatedButton from "@/components/ui/AnimatedButton";
import * as React from "react";
import NewsCard from "@/components/ui/NewsCard";
import Link from "next/link";


export default function NewsSection() {

    return (
        <section className="relative w-full h-full bg-gradient-to-b from-[#E4EDF7] via-[#D7E5F2] to-[#D0E2F0] py-30">
            <div className="container max-w-[80%] h-full mx-auto">
                <div className="flex flex-col items-center justify-between p-6 mb-10">
                    <h2 className="font-medium text-[#1d2529] text-6xl mb-10">Наши новости</h2>
                    <p className="w-full max-w-[420px] text-lg text-center text-[#2a3236] font-normal">Здесь мы делимся важными обновлениями, анонсами проектов и интересными кейсами.</p>
                </div>
                <div className="flex w-full justify-center mb-20">
                    <AnimatedButton
                        buttonColor="bg-transparent"
                        textColor="#1c2429"
                        borderColor="border-[#1c2429]"
                        hoverColor="white"
                        circleColor="#1c2429"
                        hoverBgColor="#1c2429"
                        arrowClassName="text-white"
                    />
                </div>
                <div className="flex w-full space-x-3">
                    <Link href="#" className="w-full">
                        <NewsCard
                            title="Кейс с германским журналом"
                            description="«ВИЛО РУС» и «ВИЛО Беларусь» внедрили в свою инфраструктуру «Линду»."
                            date="19 мая 2025"
                            imageSrc="/images/photo_1.jpg"
                            imageAlt="news image"
                        />
                    </Link>
                    <Link href="#" className="w-full">
                        <NewsCard
                            title="Knomary и Департамент управления персоналом ОАО «РЖД»: долгосрочное партнерство в создании обучающего контента и разработке программного обеспечения"
                            description="Разработчик платформ для корпоративного обучения и развития Knomary продолжает успешное сотрудничество с департаментом управления персоналом ОАО «РЖД» (ЦКАДР)."
                            date="23 апреля 2025"
                            imageSrc="/images/photo.png"
                            imageAlt="news image"
                        />
                    </Link>
                    <Link href="#" className="w-full">
                        <NewsCard
                            title="Группа «Черкизово» внедрила систему управления целеполаганием от компании Knomary"
                            description="Компания Knomary объявляет об успешном завершении проекта по внедрению системы «Knomary: Целеполагание» в Группе «Черкизово»."
                            date="12 марта 2025"
                            imageSrc="/images/Screenshot_2.png"
                            imageAlt="news image"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}