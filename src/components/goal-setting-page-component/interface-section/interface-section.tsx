"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";


export default function InterfaceSection() {
    const tabs = [
        { key: "roles", label: "Конструктор ролей" },
        { key: "security", label: "Конструктор карт" },
        { key: "analytics", label: "Конструктор отчетов" },
    ]
    type TabKey = typeof tabs[number]["key"];
    const [active, setActive] = useState<TabKey>("roles");
    const tabContent: Record<TabKey, {
        icon: string;
        image: string;
        text: string;
    }> = {
        roles: {
            icon: "/images/goal-settings-page-image/slider-icon-1.svg",
            image: "/images/goal-settings-page-image/slider-image-1.png",
            text: "Создайте столько ролей, сколько необходимо. Гибко управляйте полномочиями каждой роли.",
        },
        security: {
            icon: "/images/goal-settings-page-image/slider-icon-2.svg",
            image: "/images/goal-settings-page-image/slider-image-2.png",
            text: "Легко перенесите все excel-карты в привычный интерфейс: настраивайте необходимые секции, веса, указывайте комментарии",
        },
        analytics: {
            icon: "/images/goal-settings-page-image/slider-icon-3.svg",
            image: "/images/goal-settings-page-image/slider-image-3.png",
            text: "Управляйте всеми данными из одного места: отчеты с использованием любого параметра из системы в Вашем распоряжении",
        },
    };

    return (
        <section className="w-full h-full bg-[#29324E] py-30">
            <div className="flex justify-center w-full">
                <h2 className="text-center max-w-[640px] text-white text-6xl leading-[1.1] font-medium text-[#192128] mb-16">
                    Интуитивно понятный интерфейс
                </h2>
            </div>
            <div className="relative w-full text-white py-16 overflow-hidden">
                <div className="absolute bottom-60 left-130 w-[120px] h-[120px] bg-[#644359] rounded-xl float-orbit"
                     style={{animationDuration: "14s"}}/>

                <div className="absolute bottom-30 left-80 w-[135px] h-[135px] bg-white/5 rounded-xl float-orbit"
                     style={{animationDuration: "11s"}}/>

                <div className="absolute bottom-10 left-30 w-[141px] h-[141px] bg-white/5 rounded-xl float-orbit"
                     style={{animationDuration: "17s"}}/>

                <div className="absolute bottom-10 left-170 w-[141px] h-[141px] bg-[#2E3853] rounded-xl float-orbit"
                     style={{animationDuration: "17s"}}/>

                <div className="absolute top-170 right-0 w-[90px] h-[90px] bg-[#3D3852] rounded-xl float-orbit"
                     style={{animationDuration: "11s"}}/>

                <div className="relative z-10 w-full px-16">
                    <div className="w-full flex flex-col items-center mb-10">
                        {/* Табы */}
                        <div className="flex flex-col w-full max-w-[1160px] mb-3 items-center justify-between">
                            <div className="flex w-full justify-evenly">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActive(tab.key)}
                                        className="relative pb-2 text-2xl transition-colors cursor-pointer w-full"
                                    >
                                    <span
                                        className={
                                            active === tab.key
                                                ? "text-white"
                                                : "text-white/50 hover:text-white"
                                        }>
                                        {tab.label}
                                    </span>
                                        {/* Розовая линия под активным табом */}
                                        {active === tab.key && (
                                            <span
                                                className="absolute left-0 right-0 -bottom-[13px] h-[2px] bg-[#EB5765] duration-900 animate-grow"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                            {/* Серая линия на всю ширину */}
                            <div className="w-full relative left-0 right-0 -bottom-[13px] h-[1px] bg-white/20"></div>
                        </div>
                    </div>
                    <div className="relative mt-20">
                        <div className="absolute z-10 w-full bg-[#464E66] rounded-3xl p-10 h-[275px] mt-40">
                            <div
                                className="w-[154px] h-[95px] mt-[-90px] bg-[url('/images/goal-settings-page-image/slider-bg.svg')] bg-no-repeat bg-cover flex items-center justify-center mb-6"
                            >
                                <Image
                                    src={tabContent[active].icon}
                                    alt="icon"
                                    width={67}
                                    height={67}
                                />
                            </div>

                            <p className="w-[436px] h-[83px] text-2xl leading-relaxed font-normal">
                                {tabContent[active].text}
                            </p>
                        </div>
                    </div>
                    <div className="relative z-20 flex justify-end">
                        <Image
                            src={tabContent[active].image}
                            alt="content-image"
                            width={714}
                            height={772}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}