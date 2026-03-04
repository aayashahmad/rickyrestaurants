"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.about} id="about">
            {/* Decorative ice cream cone SVG (matching original site) */}
            <div className={styles.decorLeft}>
                <svg viewBox="0 0 120 200" className={styles.decorSvg}>
                    <path
                        d="M60 10 L90 80 L70 80 L60 190 L50 80 L30 80 Z"
                        fill="none"
                        stroke="var(--color-light-gray)"
                        strokeWidth="1.5"
                        opacity="0.3"
                    />
                    <circle cx="60" cy="30" r="25" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                </svg>
            </div>
            <div className={styles.decorRight}>
                <svg viewBox="0 0 120 200" className={styles.decorSvg}>
                    <path
                        d="M60 10 L90 80 L70 80 L60 190 L50 80 L30 80 Z"
                        fill="none"
                        stroke="var(--color-light-gray)"
                        strokeWidth="1.5"
                        opacity="0.3"
                    />
                    <circle cx="60" cy="30" r="25" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                </svg>
            </div>

            <div className={styles.container}>
                {/* Left side - Images */}
                <div className={styles.imageGrid}>
                    <div className={styles.imageOne}>
                        <Image
                            src="/images/about-food-1.png"
                            alt="Grilled kebabs on charcoal"
                            width={280}
                            height={380}
                            className={styles.foodImage}
                        />
                    </div>
                    <div className={styles.imageTwo}>
                        <Image
                            src="/images/about-food-2.png"
                            alt="Gourmet sandwich"
                            width={300}
                            height={400}
                            className={styles.foodImage}
                        />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className={styles.content}>
                    <span className={styles.label}>About us</span>
                    <h2 className={styles.title}>EAT WHAT MAKES YOU HAPPY</h2>
                    <p className={styles.description}>
                        Get the food that makes you drool! Ricky&apos;s Restaurant is one of
                        the finest restaurants to dine-in with the best combination of
                        spices according to your taste. Our professional staff is at your
                        service with food delivery, event catering, and other services.
                    </p>
                    <Link href="/menu" className={styles.orderBtn}>
                        Order Now
                    </Link>

                    {/* Small gallery thumbnails */}
                    <div className={styles.thumbnails}>
                        <div className={styles.thumbnail}>
                            <Image
                                src="/images/catering-special.png"
                                alt="Food gallery"
                                width={120}
                                height={90}
                                className={styles.thumbImage}
                            />
                        </div>
                        <div className={styles.thumbnail}>
                            <Image
                                src="/images/catering-yacht.png"
                                alt="Food gallery"
                                width={120}
                                height={90}
                                className={styles.thumbImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
