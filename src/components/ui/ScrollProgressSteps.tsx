"use client";

import { useEffect, useRef, useState } from "react";

export interface StepItem {
    label: string;
    offset?: number;
}

interface ScrollStepperProps {
    steps: StepItem[];
    startOffset?: number;
    onStepChange?: (index: number) => void;

    dotColor?: string;
    activeDotColor?: string;
    sliderColor?: string;
}

export default function ScrollStepper({
                                          steps,
                                          startOffset = 0.3,
                                          onStepChange,

                                          dotColor = "#A1A5B2",
                                          activeDotColor = "#E76C73",
                                          sliderColor = "#E76C73"
                                      }: ScrollStepperProps) {

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeStep, setActiveStep] = useState(0);
    const [height, setHeight] = useState(0);
    const [barTop, setBarTop] = useState(0);
    const [sliderPos, setSliderPos] = useState(0);

    const sliderHeight = 440;

    const addStepRef = (el: HTMLDivElement | null, index: number) => {
        stepRefs.current[index] = el;
    };

    // measure
    useEffect(() => {
        if (!wrapperRef.current) return;

        const parent = wrapperRef.current.parentElement;
        if (!parent) return;

        const measure = () => {
            const rect = parent.getBoundingClientRect();
            setHeight(rect.height);
            setBarTop(window.scrollY + rect.top);
        };

        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(parent);

        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    // scroll
    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            const slider = scrollY + vh / 2 - barTop;
            setSliderPos(Math.min(Math.max(slider, 0), height - sliderHeight));

            const centerY = vh / 2;
            let closestIndex = 0;
            let closestDelta = Infinity;

            stepRefs.current.forEach((el, idx) => {
                if (!el) return;

                const r = el.getBoundingClientRect();
                const dotCenter = r.top + r.height / 2;
                const delta = Math.abs(dotCenter - centerY);

                if (delta < closestDelta) {
                    closestDelta = delta;
                    closestIndex = idx;
                }
            });

            if (closestIndex !== activeStep) {
                setActiveStep(closestIndex);
                onStepChange?.(closestIndex);
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [steps.length, height, barTop, activeStep, onStepChange]);

    return (
        <div ref={wrapperRef} className="relative pointer-events-none w-fit">

            {/* Серая линия (фон барра) */}
            <div
                className="absolute left-8 top-0 w-[3px] bg-[#D4D7DF] rounded-full"
                style={{ height }}
            />

            {/* ПОЛЗУНОК */}
            <div
                className="absolute left-8 w-[4px] rounded-full"
                style={{
                    top: sliderPos,
                    height: sliderHeight,
                    background: `
                        linear-gradient(
                            to bottom,
                            ${sliderColor}00 0%,
                            ${sliderColor}BF 10%,
                            ${sliderColor}59 90%,
                            ${sliderColor}00 100%
                        )
                    `
                }}
            />

            {/* ТОЧКИ */}
            <div className="relative flex flex-col" style={{ height }}>
                {steps.map((step, index) => {
                    const isActive = index === activeStep;

                    return (
                        <div
                            key={index}
                            ref={(el) => addStepRef(el, index)}
                            className="relative flex justify-center"
                            style={{ marginBottom: step.offset ?? 0 }}
                        >
                            <div
                                className={`
                                    w-[68px] h-[68px] rounded-full text-xl font-bold text-white 
                                    flex items-center justify-center
                                    transition-all duration-500
                                `}
                                style={{
                                    background: isActive ? activeDotColor : dotColor,
                                    boxShadow: isActive
                                        ? `0 0 20px 10px ${activeDotColor}55`
                                        : "none",
                                }}
                            >
                                {index + 1}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

