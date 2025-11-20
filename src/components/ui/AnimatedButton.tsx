"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
    buttonColor?: string; // цвет фона кнопки
    textColor?: string; // цвет текста
    borderColor?: string; // цвет границы
    hoverColor?: string; // цвет текста при ховере
    hoverBgColor?: string; // цвет фона при ховере
    circleColor?: string; // цвет растягивающегося круга
    arrowClassName?: string; // класс для стрелки
    arrowSize?: number; // размер стрелки
}

export default function AnimatedButton({
                                           buttonColor = "transparent",
                                           textColor = "#ffffff",
                                           borderColor = "#6B7280",
                                           hoverColor = "#000000",
                                           hoverBgColor = "#ffffff",
                                           circleColor = "#ffffff", // по умолчанию белый
                                           arrowClassName = "text-black", // по умолчанию черная стрелка
                                           arrowSize = 20, // размер стрелки по умолчанию
                                       }: AnimatedButtonProps) {
    return (
        <motion.button
            initial={false}
            whileHover="hover"
            animate="rest"
            className={`relative flex items-center justify-between px-6 py-6 rounded-full border ${borderColor} ${buttonColor} overflow-hidden w-[246px] h-[50px] cursor-pointer`}
        >
            {/* Текст */}
            <motion.span
                className="font-normal text-base relative z-20"
                variants={{
                    rest: { color: textColor },
                    hover: { color: hoverColor },
                }}
                transition={{ duration: 0.25 }}
            >
                Запросить демо
            </motion.span>

            {/* Растягивающийся круг */}
            <motion.div
                className="absolute right-1 top-1/2 -translate-y-1/2 h-12 w-10 rounded-full z-0"
                style={{ backgroundColor: circleColor }} // Цвет круга можно задать через пропс
                variants={{
                    rest: { width: "50px", height: "47px" },
                    hover: { width: "100%", height: "100%", right: 0, backgroundColor: hoverBgColor },
                }}
                transition={{ type: "spring", stiffness: 190, damping: 22 }}
            />

            {/* Стрелка */}
            <motion.div
                className="relative z-20 origin-center mr-[-5px]"
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: [1, 0.7, 1] },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <ArrowUpRight className={`${arrowClassName}`} size={arrowSize} />
            </motion.div>
        </motion.button>
    );
}

