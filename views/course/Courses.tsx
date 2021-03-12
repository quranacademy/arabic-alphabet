import styles from "./Courses.module.scss";

import { Layout } from "~/components";
import { Lesson } from "./Lesson";
import { lessons } from "./lessons";
import Link from "next/link";

const Courses = () => {
    return (
        <Layout>
            <div className={styles.courseBlock}>
                <Link href="#">
                    <div className={styles.goBack}>
                        <div className={styles.goBackIcon}>
                            <i>
                                <svg
                                    width="18"
                                    height="36"
                                    viewBox="0 0 17 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.08318 1.66682L14.9165 14.5002L2.08318 27.3335"
                                        stroke="#77B5FE"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </i>
                        </div>
                        <div className={styles.goBackTitle}>Алфавит</div>
                    </div>
                </Link>
                <div className={styles.Block}>
                    {lessons.map((item) => (
                        <Lesson
                            key={item.orderNumber}
                            orderNumber={item.orderNumber}
                            subTitle={item.subTitle}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export { Courses };
