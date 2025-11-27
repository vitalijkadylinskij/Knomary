import React from "react";


export default function FlexibleToolSection() {
    const cards = [
        {
            id: 1,
            image: "/images/goal-settings-page-image/card-image-1.svg",
            title: "Библиотека целей",
            text:"Структурируйте цели в библиотеке для централизованной постановки",
        },
        {
            id: 2,
            image: "/images/goal-settings-page-image/card-image-2.svg",
            title: "Оценочные шкалы",
            text:"легко настраивайте количественные и качественные показатели\n" +
                "отражайте критерии и условия выполнения",
        },
        {
            id: 3,
            image: "/images/goal-settings-page-image/card-image-3.svg",
            title: "Гибкая этапность",
            text: "Ставьте цели на месяц, квартал, полугодие и год",
        },
        {
            id: 4,
            image: "/images/goal-settings-page-image/card-image-4.svg",
            title: "Аналитика",
            text: "Конструктор отчетов на уровне BI-системы",
        },
        {
            id: 5,
            image: "/images/goal-settings-page-image/card-image-5.svg",
            title: "Командная работа",
            text: "Легко настраивайте нужный маршрут, автоматизированный по организационной структуре или любой другой ветке подчинения",
        },
        {
            id: 6,
            image: "/images/goal-settings-page-image/card-image-6.svg",
            title: "История изменений",
            text: "Создавайте столько ролей, сколько будет необходимо. Более 100 полномочий для гибкой настройки",
        },
    ];

    return (
        <section className="w-full pt-24 bg-[#E3E8F0]">
            <div className="max-w-[1350px] mx-auto px-6">
                <h2 className="text-center text-6xl font-medium text-[#28304A] leading-tight mb-20">
                    Гибкий инструмент для автоматизации<br/>постановки целей
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="bg-white p-[8px] rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="w-full h-[337px] flex items-center justify-center">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-[#1d2529] mb-4">
                                    {card.title}
                                </h3>
                                {card.id === 2 ? (
                                    <ul className="text-[#1d2529] text-xl font-normal list-disc pl-6 space-y-2">
                                        {card.text.split("\n").map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[#1d2529] text-xl font-normal">
                                        {card.text}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    );
}