import React from "react";
import { Layout } from "~/components";

import styles from "./LessonsList.module.scss";

const LessonsList: React.FC = () => {
    return (
        <Layout>
            <div className="lessonsListWrapper">
                <div className={styles.listBlock}>
                    <div className={styles.listContent}>
                        <div className={styles.listLeftContent}>
                            <div className={styles.listOrderNumber}>
                                <div className={styles.orderNumber}>0</div>
                            </div>
                            <div className={styles.listDescription}>
                                <div className={styles.listTitle}>
                                    Предисловие
                                </div>
                                <div className={styles.listSubTitle}>
                                    Небольшие советы перед началом занятий
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
        </Layout>
    );
};

export { LessonsList };
