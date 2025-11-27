import ContactForm from "@/components/ui/ContactForm";

export default function EnterpriseSolutions() {
    const cards = [
        {
            id: 1,
            type: "big",
            bg: "bg-[#1F252B]",
            icon: "/images/Eagle.svg",
            text: "Продукты Knomary полностью отвечают требованиям крупного бизнеса — соответствуют законодательным нормам и входят в реестр отечественного ПО",
        },
        {
            id: 2,
            type: "default",
            title: "Внедрение и интеграция",
            text: "Комплексный процесс интеграции и внедрения продуктов Knomary в IT-инфраструктуру клиента",
        },
        {
            id: 3,
            type: "default",
            title: "Техническая\nподдержка",
            text: "Обеспечение стабильной работы программного обеспечения и поддержка пользователей",
        },
        {
            id: 4,
            type: "install",
            title: "Гибкость\nв установке",
            items: [
                {
                    label: "SaaS",
                    text: "для максимальной доступности и масштабируемости",
                },
                {
                    label: "On-Premise",
                    text: "для независимости и контроля над данными",
                },
            ],
        },
    ];

    return (
        <section className="w-full pt-24 bg-gradient-to-b from-[#E3E8F0] via-[#F3E8EF] to-[#E56565]">
            <div className="max-w-[1350px] mx-auto px-6">
                <h2 className="text-center text-6xl font-medium text-[#1D2529] mb-20">
                    Решения для крупного бизнеса
                </h2>
                <div className="flex justify-between items-center">

                    {cards.map((card) => {
                        switch (card.type) {
                            case "big":
                                return (
                                    <div
                                        key={card.id}
                                        className={`${card.bg} w-[430px] rounded-2xl p-10 flex flex-col justify-between h-[360px]`}
                                    >
                                        <img
                                            src={card.icon}
                                            alt="eagle"
                                            className="opacity-40 w-[80px] mb-10"
                                        />
                                        <p className="text-white text-xl leading-relaxed">
                                            {card.text}
                                        </p>
                                    </div>
                                );
                            case "install":
                                return (
                                    <div
                                        key={card.id}
                                        className="w-[282px] bg-white rounded-2xl p-[20px] flex flex-col justify-between h-[360px]"
                                    >
                                        <h3 className="text-3xl font-semibold whitespace-pre-line text-[#1D2529] mb-6">
                                            {card.title}
                                        </h3>

                                        <div className="space-y-6 text-xl text-[#1D2529]">
                                            {card.items?.map((i, index) => (
                                                <div key={index}>
                                                    <span className="font-semibold">{i.label}</span>
                                                    <p>{i.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );

                            default:
                                return (
                                    <div
                                        key={card.id}
                                        className="w-[282px] bg-white rounded-2xl p-10 flex flex-col h-[360px]"
                                    >
                                        <h3 className="text-3xl font-semibold whitespace-pre-line text-[#1D2529] mb-6">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#1D2529] text-xl font-normal">
                                            {card.text}
                                        </p>
                                    </div>
                                );
                        }
                    })}

                </div>
            </div>
            <div className="w-full py-30">
                <div className="w-[85%] mx-auto">
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
}


