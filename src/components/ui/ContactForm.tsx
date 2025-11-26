"use client";

import { useState } from "react";
import PhoneInput from "@/components/ui/PhoneInput";

export default function ContactForm() {
    const [employees, setEmployees] = useState("");
    const [product, setProduct] = useState("");

    return (
        <section className="w-full bg-[#E9EDF3] rounded-2xl p-10 md:p-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* LEFT TEXT */}
                <div>
                    <h2 className="text-6xl leading-tight font-semibold text-[#1B1B1B]">
                        Свяжитесь с нами <br />
                        для проведения <br />
                        демонстрации и <br />
                        запроса цен
                    </h2>
                </div>

                {/* FORM */}
                <form className="flex flex-col space-y-5 w-full">

                    <input
                        type="text"
                        placeholder="Имя"
                        className="w-[540px] h-[62px] rounded-lg bg-white px-5 text-gray-700 outline-none"
                    />

                    {/* PHONE */}<PhoneInput />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-[540px] h-[62px] rounded-lg bg-white px-5 text-gray-700 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Кратко опишите свой запрос"
                        className="w-[540px] h-[62px] rounded-lg bg-white px-5 text-gray-700 outline-none"
                    />

                    {/* EMPLOYEES SELECT */}
                    <select
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        className="w-[540px] h-[62px] rounded-lg bg-white px-5 text-gray-700 outline-none cursor-pointer"
                    >
                        <option value="">Количество сотрудников</option>
                        <option value="0-500">До 500</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1000-1500">1000-1500</option>
                        <option value="1500-2000">1500-2000</option>
                        <option value="2000+">Более 2000</option>
                    </select>

                    {/* PRODUCT SELECT */}
                    <select
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-[540px] h-[62px] rounded-lg bg-white px-5 text-gray-700 outline-none cursor-pointer"
                    >
                        <option value="">Выберите продукт</option>
                        <option value="tms">Knomary TMS</option>
                        <option value="lms">Knomary Адаптация</option>
                        <option value="hr">Knomary Целепологание</option>
                        <option value="hr">Linda</option>
                        <option value="hr">Knomary Production</option>
                    </select>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="mt-4 w-[180px] h-[52px] cursor-pointer rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-400"
                    >
                        Отправить
                    </button>
                </form>

            </div>
        </section>
    );
}
