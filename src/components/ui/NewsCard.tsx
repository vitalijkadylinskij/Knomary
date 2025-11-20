"use client"
import React from 'react';

interface CardProps {
    title: string;  // Заголовок карточки
    description: string;  // Описание
    date: string;  // Дата
    imageSrc: string;  // Источник изображения
    imageAlt: string;  // Alt текст для изображения
    backgroundColor?: string;  // Цвет фона карточки
    textColor?: string;  // Цвет текста
    borderColor?: string;  // Цвет границы
    hoverColor?: string;  // Цвет при наведении
}

const NewsCard: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       date,
                                       imageSrc,
                                       imageAlt,
                                       backgroundColor = '#111820',
                                       textColor = '#ffffff',
                                       borderColor = '#6B7280',
                                       hoverColor = '#1F2937',
                                   }) => {
    return (
        <div
            className={`relative h-full min-h-[671px] rounded-2xl border ${borderColor} overflow-hidden bg-[${backgroundColor}] hover:bg-[${hoverColor}] transition-all`}

        >
            <div className="w-full overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full h-full p-6 bg-white">
                <p className="text-sm text-gray-400">{date}</p>
                <h3 className={`text-lg font-semibold ${textColor} mt-3`}>{title}</h3>
                <p className={`text-sm ${textColor} mt-2`}>{description}</p>
            </div>
        </div>
    );
};

export default NewsCard;
