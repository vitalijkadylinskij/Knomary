import React from "react"
import CardFeature from "@/components/ui/CardFeature";


export default function ProductsSection() {

    return (
        <section id="Products" className="relative pt-20 w-full h-full bg-gradient-to-b from-[#1f232a] via-[#4b53ff] to-[#c4d3e2]">
            <div className="container w-[80%] h-full mx-auto">
                <h1 className="flex text-center justify-center text-white font-medium text-[44px] leading-[44px]">
                    Продукты Knomary
                </h1>
                <div className="py-20 grid grid-cols-2 grid-rows-2 gap-3">
                    <CardFeature
                        title="Целеполагание"
                        description="Платформа для постановки целей и управления мотивацией сотрудников"
                        tags={["Цели", "Мотивация"]}
                        image="/images/red.png"
                        href="/"
                        tagsClassName="group-hover:bg-custom-red"
                        imageWrapperClassName="group-hover:bg-custom-red"
                    />
                    <CardFeature
                        title="TMS"
                        description="Платформа для комплексной автоматизации процессов управления талантами"
                        tags={["Автоматизация", "Таланты"]}
                        image="/images/violet.jpg"
                        href="/"
                        tagsClassName="group-hover:bg-custom-violet"
                        imageWrapperClassName="group-hover:bg-custom-violet"
                    />
                    <CardFeature
                        title="Production"
                        description="Разработка обучающих курсов любого формата под индивидуальные требования"
                        tags={["Разработка курсов"]}
                        image="/images/bluee.jpg"
                        href="/"
                        tagsClassName="group-hover:bg-custom-blue"
                        imageWrapperClassName="group-hover:bg-custom-blue"
                    />
                    <CardFeature
                        title="Линда"
                        description="Платформа для совместной разработки электронных SCORM-курсов"
                        tags={["Линда", "Курсы"]}
                        image="/images/green.png"
                        href="/"
                        tagsClassName="group-hover:bg-custom-green"
                        imageWrapperClassName="group-hover:bg-custom-green"
                    />
                </div>
            </div>
        </section>
    );
}