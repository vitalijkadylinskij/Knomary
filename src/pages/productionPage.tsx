import React from "react";
import MissionSection from "@/components/production-page-component/mission-section/mission-section";
import OurStrengthSection from "@/components/production-page-component/our-strength-section/our-strength-section";



export default function ProductionPage() {
    return (
        <main className="w-full h-fill">
            <MissionSection />
            <OurStrengthSection />
        </main>
    );
}