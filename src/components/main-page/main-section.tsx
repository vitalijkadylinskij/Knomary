import Header from "@/components/header/header";
import Image from "next/image";
import Threads from "@/components/ui/Threads";
import Link from "next/link";
import ArrowButton from "@/components/ui/ArrowButton";


export default function MainSection() {

    return (
        <section className="relative w-full h-[100vh] bg-custom-dark">
            <div className="absolute w-full h-full">
                <Threads
                    color={[0.6, 0.0, 1.0]}
                    amplitude={3}
                    distance={0}
                    enableMouseInteraction={false}
                />
            </div>
            <Header />
            <div className="container h-[80vh] mx-auto">
                <div className="flex w-full h-full justify-between items-end">
                    <h1 className="w-full max-w-[816px] font-medium text-white text-[68px]">
                        Новое поколение решений для L&D</h1>
                    <div className="flex flex-col">
                        <div className="flex w-full max-w-[514px] font-normal text-[22px] text-white mb-10 ml-5">Более 8
                            лет разрабатываем передовые продукты для адаптации, обучения и развития сотрудников.
                        </div>
                        <div className="flex w-full h-full items-center gap-4 bg-gradient-to-b from-[#1F2227] to-[#191C20]
                         text-white px-5 py-4 max-w-[600px] min-h-[100px] rounded-xl">
                            <div className="flex items-center justify-center min-w-[51px] h-[50px]">
                                <Image
                                    src="/images/Eagle.svg"
                                    alt="Dark Logo"
                                    width={111}
                                    height={50}
                                    style={{width: "100%", height: "100%"}}
                                />
                            </div>
                            <div className="text-white/70 text-[15px]"><strong className="text-white">Входим в реестр
                                отечественного ПО</strong> и развиваем исключительно собственные продукты
                            </div>
                        </div>
                    </div>
                </div>
                <ArrowButton/>
            </div>
        </section>
    );
}