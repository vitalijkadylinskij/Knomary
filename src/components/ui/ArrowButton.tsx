"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLenis } from "@/app/lenis";

const ScrollTopArrow: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY;

            if (top === 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        lenis.current?.scrollTo("#Products");
    };

    return (
        <div
            className={`flex w-full items-center justify-center py-10 transition-all duration-900 ease-out ${
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
            }`}
        >
            <button
                onClick={handleClick}
                className="flex items-center justify-center w-8 h-6 cursor-pointer"
            >
                <div className="w-7 h-7 border-b-2 border-r-2 border-white rotate-45"></div>
            </button>
        </div>
    );
};

export default ScrollTopArrow;