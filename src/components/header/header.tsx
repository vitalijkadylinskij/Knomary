import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Header() {

    return (
        <header className="relative w-full py-5 px-10 bg-transparent z-20">
            <div className="flex w-full items-center justify-between text-white">
                <div className="w-[175px] h-[21px]">
                    <Link href="/">
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={175}
                            height={21}
                            className="w-[175px] h-[21px]"
                            style={{width: "100%", height: "auto"}}
                        />
                    </Link>
                </div>
                <div className="flex w-[50%] items-center justify-around font-normal text-base">
                    <div className="flex items-center justify-center">
                        <div className="w-[9px] h-[9px] border border-transparent rounded-full bg-custom-red mr-3"/>
                        <div className="cursor-pointer hover:text-custom-red transition-colors duration-300">Целепологание</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[9px] h-[9px] border border-transparent rounded-full bg-custom-violet mr-3"/>
                        <div className="cursor-pointer hover:text-custom-violet transition-colors duration-300">TMS</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[9px] h-[9px] border border-transparent rounded-full bg-custom-blue mr-3"/>
                        <div className="cursor-pointer hover:text-custom-blue transition-colors duration-300">Production</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[9px] h-[9px] border border-transparent rounded-full bg-custom-green mr-3"/>
                        <div className="cursor-pointer hover:text-custom-green transition-colors duration-300">Линда</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="cursor-pointer">Контакты</div>
                    </div>
                </div>
                <AnimatedButton/>
            </div>
        </header>
    );
}

