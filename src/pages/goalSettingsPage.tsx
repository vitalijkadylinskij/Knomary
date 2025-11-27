import React from "react";
import InterfaceSection from "@/components/goal-setting-page-component/interface-section/interface-section";
import FlexibleToolSection from "@/components/goal-setting-page-component/flexible-tool-section/flexible-tool-section";
import DecisionsSection from "@/components/goal-setting-page-component/decisions-section/decisions-section";



export default function GoalSettingsPage() {
    return (
        <main className="w-full h-fill">
            <InterfaceSection />
            <FlexibleToolSection />
            <DecisionsSection />
        </main>
    );
}