"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedButton() {
    return (
        <motion.button
            initial={false}
            whileHover="hover"
            animate="rest"
            className="relative flex items-center justify-between px-6 py-7 rounded-full border border-gray-500 bg-transparent overflow-hidden w-[235px] h-[48px] cursor-pointer"
        >
            {/* Текст */}
            <motion.span
                className="font-normal text-base relative z-20"
                variants={{
                    rest: { color: "#ffffff" },
                    hover: { color: "#000000" },
                }}
                transition={{ duration: 0.25 }}
            >
                Запросить демо
            </motion.span>

            {/* Растягивающийся круг */}
            <motion.div
                className="absolute right-1 top-1/2 -translate-y-1/2 h-12 w-10 bg-white rounded-full z-0"
                variants={{
                    rest: { width: "50px" },
                    hover: { width: "100%", height: "100%", right: 0 },
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
                <ArrowUpRight className="text-black" size={20} />
            </motion.div>
        </motion.button>
    );
}




