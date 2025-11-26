import React from "react"
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

interface CardProps {
    title: string;
    text: string;
    gifSrc: string;
}

const Card = ({ title, text, gifSrc }: CardProps) => {
    return (
        <div className="relative w-[430px] h-[406px] bg-white rounded-3xl p-10 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="w-full flex justify-center mb-6">
                <Image
                    src={gifSrc}
                    alt="animation"
                    width={230}
                    height={194}
                    className="object-contain pointer-events-none"
                />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="w-full text-xm text-gray-600 font-medium">{text}</p>
            </div>
        </div>
    );
};

export default function DecisionSection() {

    return (
        <section className="py-20 bg-gradient-to-b from-[#DCE0EB] via-[#BEC2DC] to-[#7F6BB7]">
            <h2 className="text-center text-5xl font-semibold mb-16">
                Решения для крупного бизнеса
            </h2>
            <div className="w-full max-w-[1311px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 mb-30">
                <div
                    className="relative w-[430px] h-[406px] bg-custom-dark rounded-3xl p-10 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="w-full flex mb-6">
                        <Image
                            src="/images/Eagle.svg"
                            alt="black"
                            width={82}
                            height={82}
                        />
                    </div>
                    <h3 className="text-lg text-white font-normal">Продукты Knomary полностью отвечают требованиям крупного бизнеса — соответствуют законодательным нормам и входят в реестр отечественного ПО</h3>
                    </div>
                <Card
                    title="Внедрение и интеграция"
                    text="Комплексное внедрение продуктов Knomary во внутренний ИТ-контур клиента"
                    gifSrc="/gif/elips.gif"
                />

                <Card
                    title="Техническая поддержка"
                    text="Поддержка безотказной работы ПО и обеспечение поддержки пользователей"
                    gifSrc="/gif/horizont_elips.gif"
                />

            </div>
            <div className="w-[85%] mx-auto">
                <ContactForm />
            </div>
        </section>
    );
}