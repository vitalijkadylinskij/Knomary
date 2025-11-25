"use client"
import React from "react";
import { useEffect, useRef } from "react";
import productsData from "@/data/products-data";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import TextType from "@/components/ui/TextType";
import ScrollStepper from "@/components/ui/ScrollProgressSteps";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = React.use(params);
    const product = productsData[slug];

    if (!product) {
        return (
            <div className="container mx-auto pt-20 text-white">
                <h1 className="text-4xl font-bold">Продукт не найден</h1>
            </div>
        );
    }

    const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const centerY = window.innerHeight / 2;

            sectionRefs.current.forEach((sectionEl, index) => {
                if (!sectionEl) return;

                const rect = sectionEl.getBoundingClientRect();

                const inside =
                    centerY >= rect.top &&
                    centerY <= rect.bottom;

                if (inside) {
                    titlesRef.current[index]?.classList.add("active");
                } else {
                    titlesRef.current[index]?.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const titles = [
        {
            title: "Постановка целей",
            text: "Ставьте и фиксируйте цели сотрудников с помощью простой и централизованной системы постановки целей",
            mb: "pb-[380px]"
        },
        {
            title: "Корректировка целей",
            text: "Отслеживайте прогресс, определяйте сложности и адаптируйте цели с учётом меняющихся условий",
            mb: "pb-[320px]"
        },
        {
            title: "Подведение итогов",
            text: "Оценивате достижения, учитывайте фактическое исполнение и вознаграждайте за успех",
            mb: "pb-[310px]"
        },
        {
            title: "Анализ результатов",
            text: "Анализируйте результаты, определяйте наиболее эффективных сотрудников и легко принимайте стратегические решения",
            mb: "pb-[310px]"
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <div className={slug === "production"
                ? "relative w-full h-[100vh] text-white bg-[url('/images/bg-product-page-production.svg')] bg-cover bg-center bg-fixed"
                : "w-full h-screen text-white bg-[url('/images/bg-pattern2.png')] bg-cover bg-center"}>
                <Header/>
                <div className={slug === "production"
                    ? "w-full h-[100%] absolute inset-1 bg-gradient-to-b from-transparent via-[#2a2e32]/90 to-[#1c1f23]/100 pointer-events-none"
                    : "w-full h-[85%] bg-[url('/images/bg-utom.png')] bg-contain bg-center bg-no-repeat"}>
                    <div className={slug === "production"
                        ? "container flex flex-col w-[80%] mx-auto h-full justify-end items-center space-y-10 pb-20"
                        : "container flex flex-col w-[80%]  mx-auto h-full justify-center items-center space-y-10"}>
                        <h1 className={slug === "production"
                            ? "z-1 font-normal text-7xl w-full max-w-[850px]"
                            : "z-1 font-normal text-6xl w-full max-w-[965px] text-center"}>{product.title}
                            {slug === "goal" && (
                                <span className="inline-block">
                                    <TextType
                                        text={["стратегическими", "операционными", "экономическими"]}
                                        typingSpeed={100}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|"
                                        className="text-custom-red"
                                    />
                                </span>
                            )} <div className={slug === "tms"
                                ? "inline-block bg-custom-violet rounded-lg text-clip px-4 pb-4"
                                : "inline-block"}
                            >{product.title2}
                        </div>
                            {product.title3}
                        </h1>
                        {slug !== "production" &&(<p className="text-center text-2xl w-full max-w-[645px] font-normal z-1">
                            <span
                                className={slug === "tms" ? "text-[#a88dec]" : "text-custom-red"}>{product.subtitle} </span>
                            {product.description}
                        </p>)}
                        {slug === "production" && (
                            <p className="text-2xl w-full max-w-[850px] font-normal z-1">
                                {product.description}
                            </p>
                        )}
                        {slug !== "production" && (<div
                            className={slug === "tms"
                                ? "w-full max-w-[668px] z-1 px-10 py-5 h-full max-h-[115px] bg-custom-violet rounded-sm flex items-center justify-between"
                                : "w-full max-w-[668px] z-1 px-10 py-5 h-full max-h-[115px] bg-custom-red rounded-sm flex items-center justify-between"}>
                            <div className="w-full max-w-[52px] h-[52px]">
                                <Image
                                    src="/images/Eagle.svg"
                                    alt="Eagle"
                                    width={30}
                                    height={30}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ml-10 font-normal text-lg">
                                <strong>{product.modalStrongText}</strong>{product.modalText}</div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-[#F0F4F7]">
                <div className="flex flex-col w-[85%] h-full mx-auto">
                    <div className="flex w-full justify-center">
                        <h1 className="w-full max-w-[680px] text-center py-30 font-medium text-6xl">
                            {product.titleSecondBlock}
                        </h1>
                    </div>
                    <div className="flex justify-between pb-30 h-full">
                        <div className="h-full flex flex-col justify-between space-y-40">
                            <div className={slug === "goal"
                                ?"relative w-[550px] h-[300px]"
                                : "relative w-[520px] h-[380px]"}>
                                <Image
                                    src={product.image}
                                    alt="big"
                                    fill={slug === "goal"}
                                    width={slug === "tms" ? 550 : undefined}
                                    height={slug === "tms" ? 300 : undefined}
                                    className={slug === "tms"
                                        ? "object-cover w-full h-full rounded-lg shadow-video flot-3"
                                        :"object-cover"
                                }
                                />
                                <div className={slug === "goal"
                                    ?"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    : "absolute w-[179px] h-[420px] top-1/2 right-[-90px] -translate-y-1/2"}>
                                    <div className={slug === "goal" ? "animate-orbit" : "float-1 shadow-video rounded-lg"}>
                                        <Image
                                            src={product.imageSecondBlock_2}
                                            alt="small"
                                            width={179}
                                            height={420}
                                            className={slug === "goal" ? "rotate-[5deg]" : "w-full h-full"}
                                        />
                                    </div>
                                </div>
                                {slug !== "goal" && (<div className="absolute shadow-video float-2 w-[315px] h-[137px] bottom-[10px] left-[-40px] rounded-lg">
                                    <div>
                                        <Image
                                            src={product.imageSecondBlock_3}
                                            alt="small"
                                            width={315}
                                            height={137}
                                            className={"w-full h-full"}
                                        />
                                    </div>
                                </div>)}
                            </div>
                            <div className="relative w-[550px] h-[300px]">
                                <div className="absolute inset-0 z-0 flex items-center justify-center">
                                    <Image
                                        src="/images/products-page-image/line-dots.gif"
                                        alt="dots"
                                        width={140}
                                        height={140}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <Image
                                    src="/images/products-page-image/process-image-2.svg"
                                    alt="big"
                                    fill
                                    className="object-contain pointer-events-none z-10"
                                />
                            </div>
                            <div className="relative w-[412px] h-[224px]">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/products-page-image/process-imagsecond-bg-3.svg"
                                        alt="static"
                                        fill
                                        className="object-contain opacity-40"
                                    />
                                </div>
                                <div className="absolute inset-0 z-10">
                                    <Image
                                        src="/images/products-page-image/process-image-second-3.svg"
                                        alt="big"
                                        fill
                                        className="object-contain pointer-events-none animate-slide"
                                    />
                                </div>
                                <div className="absolute inset-0 z-10">
                                    <Image
                                        src="/images/products-page-image/process-image-3.svg"
                                        alt="moving"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                            </div>
                            <div className="relative w-[383px] h-[280px]">
                                <Image
                                    src="/images/products-page-image/process-image-4.svg"
                                    alt="base"
                                    fill
                                    className="object-contain"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none animate-move-lens">
                                    <div className="relative w-[300px] h-[300px]">
                                        <div className="absolute inset-0 overflow-hidden z-30">
                                            <Image
                                                src="/images/products-page-image/bg-in-loop.svg"
                                                alt="bg"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div
                                            className="absolute inset-0 rounded-full overflow-hidden z-20 flex items-center justify-center">
                                            <Image
                                                src="/images/products-page-image/grafik.svg"
                                                alt="chart"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <Image
                                            src="/images/products-page-image/loop.svg"
                                            alt="lens"
                                            fill
                                            className="object-contain z-10"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div>
                            <ScrollStepper
                                steps={[
                                    { label: "One", offset: 440 },
                                    { label: "Two", offset: 380 },
                                    { label: "Three", offset: 360 },
                                    { label: "Four" },
                                ]}
                                activeDotColor={slug === "tms" ? "#7e6cac" : "#e76c73"}
                                sliderColor={slug === "tms" ? "#7e6cac" : "#e76c73"}
                            />
                        </div>
                        <div className="flex flex-col">
                            {titles.map((item, index) => (
                                <div key={index}
                                     ref={(el) => {
                                         sectionRefs.current[index] = el;
                                     }}
                                     className={slug === "goal"
                                         ? `flex text-step flex-col ${item.mb} transition-all duration-900`
                                         : `flex text-step-2 flex-col ${item.mb} transition-all duration-900`}>
                                    <div
                                        ref={(el) => {
                                            titlesRef.current[index] = el;
                                        }}
                                        className={slug === "goal"
                                            ? "font-semibold text-3xl text-step text-[#A1A5B2] mb-5 transition-all duration-900"
                                            : "font-semibold text-3xl text-step-2 text-[#A1A5B2] mb-5 transition-all duration-900"}
                                    >
                                        {item.title}
                                    </div>

                                    <div className="text-[#192128] font-normal text-lg w-full max-w-[523px]">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}



