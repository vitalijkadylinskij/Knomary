export interface ProductData {
    title: string;
    description: string;
    image: string;
    tags: string[];
    subtitle?: string;
    modalText?: string;
    title2?: string;
    title3?: string;
    modalStrongText?: string;
}

const productsData: Record<string, ProductData> = {
    goal: {
        title: "Системный подход к управлению",
        title2: " целями",
        subtitle: "Целеполагание",
        description: " – решение для построения системы целеполагания в организации, повышения прозрачности процессов и оптимизации нагрузки на HR",
        modalStrongText: "Целеполагание входит в Реестр отечественного ПО",
        modalText: " и является на 100% собственной разработкой Knomary",
        image: "/red.png",
        tags: ["Цели", "Мотивация"],
    },

    tms: {
        title: "Новый подход к",
        title2: "развитию",
        title3: "сотрудников",
        subtitle: "Knomary TMS",
        description: "– это гибкая платформа для адаптации, обучения, оценки и карьерного развития сотрудников",
        modalStrongText: "Knomary TMS входит в Реестр отечественного ПО",
        modalText: " и является на 100% собственной разработкой",
        image: "/violet.jpg",
        tags: ["Автоматизация", "Таланты"],
    },

    production: {
        title: "Knomary Production",
        description: "Решаем любые задачи, связанные с коммуникацией и обучением сотрудников крупных компаний: от онбординга новичков до видео с ТОП-менеджерами и анимационных роликов про продукты и процессы.",
        image: "/bluee.jpg",
        tags: ["Разработка курсов"],
    },

    linda: {
        title: "Линда",
        description: "Платформа для совместной разработки электронных SCORM-курсов.",
        image: "/green.png",
        tags: ["Линда", "Курсы"],
    },
};

export default productsData;
