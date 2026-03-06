"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className={styles.about} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.imageCol}>
                    <div className={styles.imageStack}>
                        <div className={styles.imgMain}>
                            <Image
                                src="/images/about-food-1.png"
                                alt="Signature dish"
                                width={400}
                                height={500}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.imgOverlap}>
                            <Image
                                src="/images/about-food-2.png"
                                alt="Chef preparation"
                                width={280}
                                height={350}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.experienceBadge}>
                            <span className={styles.badgeNumber}>12+</span>
                            <span className={styles.badgeText}>Years of<br />Excellence</span>
                        </div>
                    </div>
                </div>

                <div className={styles.textCol}>
                    <span className={styles.label}>Our Story</span>
                    <h2 className={styles.title}>
                        Where Heritage Meets<br />
                        <span className={styles.titleGold}>Modern Gastronomy</span>
                    </h2>
                    <p className={styles.description}>
                        Nestled in the vibrant heart of Dubai Marina, Ricky&apos;s Restaurant
                        has been a beacon of culinary excellence since its inception. We blend
                        time-honored recipes from across the Middle East and Mediterranean with
                        contemporary techniques to create dishes that surprise and delight.
                    </p>
                    <p className={styles.description}>
                        Our philosophy is simple — source the finest ingredients,
                        treat them with respect, and serve them with passion. Every plate
                        that leaves our kitchen carries the dedication of our talented
                        culinary team.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🔥</span>
                            <div>
                                <strong>Live Kitchen</strong>
                                <p>Watch our chefs craft your meal</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🌿</span>
                            <div>
                                <strong>Farm Fresh</strong>
                                <p>Locally sourced ingredients daily</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className={styles.readMore}>
                        Discover Our Journey
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
