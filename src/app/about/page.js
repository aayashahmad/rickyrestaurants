"use client";

import Image from "next/image";
import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";
import styles from "./page.module.css";

const values = [
    { icon: "🔥", title: "Passion", desc: "Every dish is crafted with love and dedication to the art of cooking" },
    { icon: "🌿", title: "Freshness", desc: "We source ingredients daily from trusted local and international suppliers" },
    { icon: "🤝", title: "Hospitality", desc: "Warm, personalized service that makes every guest feel like family" },
    { icon: "⭐", title: "Excellence", desc: "Relentless pursuit of perfection in every aspect of your experience" },
];

export default function AboutPage() {
    const heroRef = useScrollReveal();
    const storyRef = useScrollReveal();
    const valuesRef = useScrollReveal();
    const statsRef = useScrollReveal();

    const statYears = useCountUp(12, 2000);
    const statDishes = useCountUp(200, 2000);
    const statEvents = useCountUp(500, 2000);
    const statClients = useCountUp(10000, 2500);

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroLabel}>Our Journey</span>
                    <h1 className={styles.heroTitle}>The Story Behind<br />Every Flavor</h1>
                </div>
            </section>

            {/* Story */}
            <section className={styles.story} ref={storyRef}>
                <div className={styles.storyContainer}>
                    <div className={styles.storyText}>
                        <span className={styles.label}>Since 2012</span>
                        <h2 className={styles.sectionTitle}>
                            A Legacy of <span className={styles.gold}>Culinary Artistry</span>
                        </h2>
                        <p className={styles.paragraph}>
                            What began as a dream to bring authentic Mediterranean and Middle Eastern
                            flavors to Dubai has grown into one of Marina&apos;s most cherished dining
                            destinations. Ricky&apos;s Restaurant opened its doors in 2012, founded on
                            the belief that great food has the power to bring people together.
                        </p>
                        <p className={styles.paragraph}>
                            Over the years, we&apos;ve evolved our menu to reflect the diverse culinary
                            landscape of Dubai, incorporating influences from Arab, Asian, Continental,
                            and Mediterranean cuisines — all while maintaining the soulful cooking
                            techniques that define our identity.
                        </p>
                        <p className={styles.paragraph}>
                            From our live kitchen experience to our bespoke catering services, every
                            aspect of Ricky&apos;s Restaurant is designed to create moments worth savoring.
                        </p>
                    </div>
                    <div className={styles.storyImages}>
                        <div className={styles.storyImgMain}>
                            <Image src="/images/about-food-1.png" alt="Our cuisine" width={500} height={600} className={styles.img} />
                        </div>
                        <div className={styles.storyImgFloat}>
                            <Image src="/images/about-food-2.png" alt="Chef preparation" width={300} height={380} className={styles.img} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats} ref={statsRef}>
                <div className={styles.statsContainer}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber} ref={statYears}>0</span>
                        <span className={styles.statSuffix}>+</span>
                        <span className={styles.statLabel}>Years of Excellence</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber} ref={statDishes}>0</span>
                        <span className={styles.statSuffix}>+</span>
                        <span className={styles.statLabel}>Signature Dishes</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber} ref={statEvents}>0</span>
                        <span className={styles.statSuffix}>+</span>
                        <span className={styles.statLabel}>Events Catered</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber} ref={statClients}>0</span>
                        <span className={styles.statSuffix}>+</span>
                        <span className={styles.statLabel}>Happy Guests</span>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.values} ref={valuesRef}>
                <div className={styles.valuesContainer}>
                    <div className={styles.valuesHeader}>
                        <span className={styles.label}>What Drives Us</span>
                        <h2 className={styles.sectionTitle}>
                            Our Core <span className={styles.gold}>Values</span>
                        </h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v) => (
                            <div key={v.title} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{v.icon}</span>
                                <h3 className={styles.valueTitle}>{v.title}</h3>
                                <p className={styles.valueDesc}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
