import styles from "./LessonsList.module.scss";

interface LessonsListProps {
    orderNumber: number;
    title: string;
    subTitle: string;
}

const LessonsList: React.FC<LessonsListProps> = ({
    orderNumber,
    title,
    subTitle,
}) => {
    return (
        <div className={styles.listBlockWrapper}>
            <div className={styles.listBlock}>
                <div className={styles.listContent}>
                    <div className={styles.listLeftContent}>
                        <div className={styles.listOrderNumber}>
                            <div className={styles.orderNumber}>
                                {orderNumber}
                            </div>
                        </div>
                        <div className={styles.listDescription}>
                            <div className={styles.listTitle}>{title}</div>
                            <div className={styles.listSubTitle}>
                                {subTitle}
                            </div>
                        </div>
                    </div>

                    <span className={styles.listRightIcon}>
                        <svg
                            width="17"
                            height="29"
                            viewBox="0 0 17 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.08318 1.66682L14.9165 14.5002L2.08318 27.3335"
                                stroke="#77B5FE"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export { LessonsList };
