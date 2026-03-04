"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./DeliverySection.module.css";

export default function DeliverySection() {
    return (
        <section className={styles.delivery}>
            {/* Decorative curved lines */}
            <div className={styles.decorCurveLeft}>
                <svg viewBox="0 0 200 300" className={styles.curveSvg}>
                    <path
                        d="M100 0 C100 100, 0 100, 0 200 C0 250, 50 280, 100 300"
                        fill="none"
                        stroke="var(--color-light-gray)"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        opacity="0.4"
                    />
                </svg>
            </div>
            <div className={styles.decorCurveRight}>
                <svg viewBox="0 0 200 300" className={styles.curveSvg}>
                    <path
                        d="M100 0 C100 100, 200 100, 200 200 C200 250, 150 280, 100 300"
                        fill="none"
                        stroke="var(--color-light-gray)"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        opacity="0.4"
                    />
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <span className={styles.label}>Get Delivery</span>
                        <h2 className={styles.title}>On Your Desired Time</h2>
                        <Link href="/menu" className={styles.orderBtn}>
                            ORDER NOW
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/about-food-1.png"
                            alt="Delicious grilled food"
                            width={400}
                            height={300}
                            className={styles.foodImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
