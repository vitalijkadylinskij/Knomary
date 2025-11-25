export interface ProductData {
    title: string;
    description: string;
    image: string;
    imageSecondBlock_2?: any;
    imageSecondBlock_3?: any;
    tags: string[];
    subtitle?: string;
    modalText?: string;
    title2?: string;
    title3?: string;
    modalStrongText?: string;
    titleSecondBlock?: string;
}

const productsData: Record<string, ProductData> = {
    goal: {
        title: "Системный подход к управлению",
        title2: " целями",
        subtitle: "Целеполагание",
        description: " – решение для построения системы целеполагания в организации, повышения прозрачности процессов и оптимизации нагрузки на HR",
        modalStrongText: "Целеполагание входит в Реестр отечественного ПО",
        modalText: " и является на 100% собственной разработкой Knomary",
        image: "/images/products-page-image/process-image-1.svg",
        imageSecondBlock_2: "/images/products-page-image/process-image-second-2.svg",
        tags: ["Цели", "Мотивация"],
        titleSecondBlock: "Все этапы процесса целеполагания",
    },

    tms: {
        title: "Новый подход к",
        title2: "развитию",
        title3: "сотрудников",
        subtitle: "Knomary TMS",
        description: "– это гибкая платформа для адаптации, обучения, оценки и карьерного развития сотрудников",
        modalStrongText: "Knomary TMS входит в Реестр отечественного ПО",
        modalText: " и является на 100% собственной разработкой",
        image: "/images/products-page-image/talant-image-1.svg",
        imageSecondBlock_2: "/images/products-page-image/talant-image-2.svg",
        imageSecondBlock_3: "/images/products-page-image/talant-image-3.svg",
        tags: ["Автоматизация", "Таланты"],
        titleSecondBlock: "Полный цикл управления талантами",
    },

    production: {
        title: "Knomary Production",
        description: "Решаем любые задачи, связанные с коммуникацией и обучением сотрудников крупных компаний: от онбординга новичков до видео с ТОП-менеджерами и анимационных роликов про продукты и процессы.",
        image: "/bluee.jpg",
        tags: ["Разработка курсов"],
        titleSecondBlock: "",
    },

    linda: {
        title: "Линда",
        description: "Платформа для совместной разработки электронных SCORM-курсов.",
        image: "/green.png",
        tags: ["Линда", "Курсы"],
    },
};

export default productsData;
