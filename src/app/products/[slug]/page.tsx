import productsData from "@/data/products-data";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import RotatingText from "@/components/ui/RotatingText";
import TextType from "@/components/ui/TextType";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params; // <- обязательное await !
    const product = productsData[slug];

    if (!product) {
        return (
            <div className="container mx-auto pt-20 text-white">
                <h1 className="text-4xl font-bold">Продукт не найден</h1>
            </div>
        );
    }

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
            <Footer/>
        </div>
    );
}



