import Link from 'next/link'

import styles from "./Lesson.module.scss";

interface ILesson {
    orderNumber: number;
    title: string;
    subTitle: string;
}

const Lesson: React.FC<ILesson> = ({
    orderNumber,
    title,
    subTitle,
}) => {
    return (
        <Link href='#'>
        <div className={styles.BlockWrapper}>
            <div className={styles.Block}>
                <div className={styles.Content}>
                    <div className={styles.LeftContent}>
                        <div className={styles.OrderNumberWrp}>
                            <div className={styles.orderNumber}>
                                {orderNumber}
                            </div>
                        </div>
                        <div className={styles.Description}>
                            <div className={styles.Title}>{title}</div>
                            <div className={styles.SubTitle}>
                                {subTitle}
                            </div>
                        </div>
                    </div>

                    <span className={styles.RightIcon}>
                        <svg
                            width="13"
                            height="25"
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
        </Link>
    );
};

export { Lesson };
