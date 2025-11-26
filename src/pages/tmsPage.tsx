import React from "react";
import SolutionsSection from "@/components/tms-page-component/solutions-section/solutions-section";
import AccessSection from "@/components/tms-page-component/access-section/access-section";
import DecisionSection from "@/components/tms-page-component/decision-section/decision-section";



export default function TmsPage() {
    return (
        <main className="w-full h-fill">
            <SolutionsSection />
            <AccessSection />
            <DecisionSection />
        </main>
    );
}