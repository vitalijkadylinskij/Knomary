import MainSection from "@/components/main-page/main-section";
import ProductsSection from "@/components/products-section/products-section";

export default function HomePage() {
    return (
        <main className="min-h-screen w-full mx-auto">
            <MainSection />
            <ProductsSection />
        </main>
    );
}