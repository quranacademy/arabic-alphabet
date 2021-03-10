import { Layout } from "~/components";

import styles from "./LessonsBlockList.module.scss";
import { LessonsList } from "./LessonsList";

const LessonsBlockList = () => {
    let idX = 0;
    const lessonsList = [
        {
            orderNumber: 0,
            title: "Предисловие",
            subTitle: "Небольшие советы перед началом занятий",
            id: idX,
        },
        {
            orderNumber: 1,
            title: "УРОК №1",
            subTitle: "Вводный урок. Знакомство с арабским алфавитом",
            id: idX,
        },
        {
            orderNumber: 2,
            title: "УРОК №2",
            subTitle: "Буквы Алиф, Ба, Та, Са",
            id: idX,
        },
        {
            orderNumber: 3,
            title: "УРОК №3",
            subTitle: "Буквы Джим, Ха, Ха",
            id: idX,
        },
    ];

    return (
        <Layout>
            <div className={styles.lessonsBlock}>
                <div className={styles.goBack}>
                    <div className={styles.goBackIcon}></div>
                    <div className={styles.goBackTitle}></div>
                </div>
                <div className={styles.listsBlock}>
                    {lessonsList.map((item) => (
                        <LessonsList
                            orderNumber={item.orderNumber}
                            title={item.title}
                            subTitle={item.subTitle}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export { LessonsBlockList };
