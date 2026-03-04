"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.overlay} />
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>
            <div className={styles.content}>
                <p className={styles.welcome}>Welcome To Rickys Restaurant</p>
                <h1 className={styles.title}>
                    Eat What Makes You <span className={styles.highlight}>Happy</span>
                </h1>
                <Link href="/contact" className={styles.ctaBtn}>
                    Contact Us
                </Link>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
