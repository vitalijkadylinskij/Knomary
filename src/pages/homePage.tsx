import MainSection from "@/components/main-page/main-section";
import ProductsSection from "@/components/products-section/products-section";
import LogoLoop from "@/components/ui/LogoLoop";
import React from "react";
import {SiNextdotjs, SiReact, SiTailwindcss, SiTypescript} from "react-icons/si";
import TechnologiSection from "@/components/technologi/technologi-section";
import ResearchSection from "@/components/researches/researches-section";
import NewsSection from "@/components/news/news-section";
import ContactFormSection from "@/components/contact-form/contact-form-section";
import Footer from "@/components/footer/footer";


const techLogos = [
    { node: <SiReact className="text-white/30" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white/30" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-white/30" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-white/30" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function HomePage() {
    return (
        <main className="min-h-screen w-full mx-auto">
            <MainSection/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                background: 'oklch(25.47% 0.015 235.60)'
            }}>
                <LogoLoop
                    className="bg-custom-dark"
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                />
            </div>
            <ProductsSection/>
            <TechnologiSection />
            <ResearchSection />
            <NewsSection />
            <ContactFormSection />
            <Footer />
        </main>
    );
}