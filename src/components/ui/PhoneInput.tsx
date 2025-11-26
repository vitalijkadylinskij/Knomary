"use client";

import { useState } from "react";

const countries = [
    { code: "by", flag: "/flags/by.svg", prefix: "+375" },
    { code: "ru", flag: "/flags/ru.svg", prefix: "+7" },
    { code: "kz", flag: "/flags/kz.svg", prefix: "+77" },
];

export default function PhoneInput() {
    const [localPhone, setLocalPhone] = useState("");
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState(countries[0]);

    const formatLocalPhone = (digits: string) => {
        if (country.prefix === "+7") {
            return digits
                .replace(/(\d{3})(\d)/, "$1 $2")
                .replace(/(\d{3}) (\d{3})(\d)/, "$1 $2-$3")
                .replace(/(\d{3}) (\d{3})-(\d{2})(\d)/, "$1 $2-$3-$4")
                .slice(0, 15);
        }

        if (country.prefix === "+375") {
            return digits
                .replace(/(\d{2})(\d)/, "$1 $2")
                .replace(/(\d{2}) (\d{3})(\d)/, "$1 $2-$3")
                .replace(/(\d{2}) (\d{3})-(\d{2})(\d)/, "$1 $2-$3-$4")
                .slice(0, 15);
        }

        return digits;
    };

    const handleChange = (e: any) => {
        const digits = e.target.value.replace(/\D/g, "");
        setLocalPhone(formatLocalPhone(digits));
    };

    return (
        <div className="relative w-[540px]">
            <div className="w-full h-[62px] bg-white rounded-lg flex items-center px-4">
                {/* Country selector */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img src={country.flag} className="w-6 h-6" />
                    <span>{country.prefix}</span>
                </div>

                {/* Input ONLY local number */}
                <input
                    type="text"
                    value={localPhone}
                    onChange={handleChange}
                    className="flex-1 ml-4 outline-none"
                    placeholder="Введите номер"
                />
            </div>

            {open && (
                <div className="absolute w-full bg-white shadow-xl rounded-lg mt-2 z-20">
                    {countries.map((c) => (
                        <div
                            key={c.code}
                            onClick={() => {
                                setCountry(c);
                                setLocalPhone("");
                                setOpen(false);
                            }}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <img src={c.flag} className="w-6 h-6" />
                            <span className="ml-3">{c.prefix}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
