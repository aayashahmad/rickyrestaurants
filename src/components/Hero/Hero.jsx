"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

const words = ["Crafted", "Curated", "Celebrated"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated background */}
            <div className={styles.bgGradient} />
            <div className={styles.bgNoise} />
            <div className={styles.bgOrbs}>
                <div className={styles.orb1} />
                <div className={styles.orb2} />
                <div className={styles.orb3} />
            </div>

            <div className={styles.content}>
                <span className={styles.label}>Dubai Marina&apos;s Finest</span>

                <h1 className={styles.title}>
                    Flavors
                    <br />
                    <span className={styles.titleAccent} key={wordIndex}>
                        {words[wordIndex]}
                    </span>
                    <br />
                    With Passion
                </h1>

                <p className={styles.subtitle}>
                    An intimate culinary journey where every dish tells a story —
                    blending heritage recipes with modern artistry in the heart of Dubai.
                </p>

                <div className={styles.actions}>
                    <Link href="/menu" className={styles.btnPrimary}>
                        Explore Our Menu
                    </Link>
                    <Link href="/contact" className={styles.btnOutline}>
                        Book a Table
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </div>
        </section>
    );
}
