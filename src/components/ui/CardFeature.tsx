"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface CardFeatureProps {
    title: string;
    description: string;
    tags?: string[];
    image: string;
    href?: string;

    className?: string;

    tagsClassName?: string;
    tagsHoverClassName?: string;

    imageWrapperClassName?: string;
    imageWrapperHoverClassName?: string;

    imageClassName?: string;
    imageHoverClassName?: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({
                                                     title,
                                                     description,
                                                     tags = [],
                                                     image,
                                                     href = "#",
                                                     className,

                                                     tagsClassName,
                                                     tagsHoverClassName,

                                                     imageWrapperClassName,
                                                     imageWrapperHoverClassName,

                                                     imageClassName,
                                                     imageHoverClassName,
                                                 }) => {
    return (
        <div
            className={clsx(
                "group w-full max-w-[820px] max-h-[620px] items-center bg-white rounded-2xl shadow-sm p-3 border border-gray-200 cursor-pointer transition-all duration-500",
                className
            )}
        >
            {/* Header */}
            <Link href={href}>
            <div className="flex items-center justify-between px-5">
                <div className="flex items-center">
                    <h3 className="text-2xl font-semibold mr-5">{title}</h3>


                        <span className="text-gray-500 group-hover:text-black transition text-3xl">›</span>

                </div>

                <div className="flex gap-2 mt-3">
                    {tags.map((t, i) => (
                        <span
                            key={i}
                            className={clsx(
                                "px-3 py-1 rounded-full text-sm transition-colors duration-500",
                                "bg-[#b2c0cb] text-white",

                                tagsClassName,

                                tagsHoverClassName && `group-hover:${tagsHoverClassName}`
                            )}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <p className="w-3/4 mt-3 text-dark font-normal text-xm px-5 pb-9">
                {description}
            </p>

            {/* Image wrapper */}
            <div
                className={clsx(
                    "flex items-center justify-center w-full h-[340px] rounded-xl overflow-hidden transition-colors duration-500",
                    "bg-[#b2c0cb]",

                    imageWrapperClassName,

                    imageWrapperHoverClassName && `group-hover:${imageWrapperHoverClassName}`
                )}
            >
                <img
                    src={image}
                    alt={title}
                    className={clsx(
                        "w-full max-w-[420px] h-[270px] object-cover rounded-xl transition-transform duration-700 ease-out",
                        "group-hover:scale-[1.05]",

                        imageClassName,
                        imageHoverClassName && `group-hover:${imageHoverClassName}`
                    )}
                />
            </div>
            </Link>
        </div>
    );
};

export default CardFeature;



