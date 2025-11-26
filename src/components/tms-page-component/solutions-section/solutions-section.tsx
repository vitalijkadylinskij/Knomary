import React from "react"


export default function SolutionsSection() {
    const items = [
        {
            img: "/images/solutions-page-image/card-image-1.svg",
            title: "Мультдоменность",
            text: "Создавайте автономные платформы для дочерних компаний, отдельных департаментов или партнеров. Управляйте этими платформами из единого центра."
        },
        {
            img: "/images/solutions-page-image/card-image-2.svg",
            title: "Микросервисная архитектура",
            text: "Выбирайте те модули системы, которые подходят именно вам. При появлении новых задач вы можете добавить новые модули в любой момент."
        },
        {
            img: "/images/solutions-page-image/card-image-3.svg",
            title: "Применение nocode-конструкторов",
            text: "Настраивайте разделы, интерфейс и роли платформы под свои задачи без необходимости доработки системы. Самостоятельно либо при помощи нашей команды."
        }
    ];

    return (
        <section className="w-full h-full bg-[#F0F4F7] py-30">
            <div className="w-[85%] mx-auto px-4">
                <h2 className="text-center text-6xl leading-[1.1] font-medium text-[#192128] mb-16">
                    Гибкое решение для бизнесов<br/>
                    всех масштабов на основе продвинутой<br/>
                    архитектуры и технологий
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1310px] mx-auto h-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex p-[8px] flex-col items-center bg-white rounded-xl shadow-sm border border-[#E6EAF0] overflow-hidden w-[430px] h-[620px]"
                        >
                            <div className="w-[408px] h-[338px] bg-[white]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover bg-center rounded-lg"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-[22px] font-semibold text-[#192128] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[#192128] text-base leading-[1.45]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}