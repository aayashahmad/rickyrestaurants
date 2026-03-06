"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./CateringSection.module.css";

const services = [
    { title: "Private Events", desc: "Weddings, birthdays & celebrations", image: "/images/wedding-catering.png", href: "/catering" },
    { title: "Corporate Events", desc: "Conferences, staff parties & seminars", image: "/images/business-catering.png", href: "/catering" },
    { title: "Yacht Parties", desc: "Luxury dining on the water", image: "/images/yacht-catering.png", href: "/catering" },
    { title: "Special Occasions", desc: "Bespoke menus for every moment", image: "/images/special-occasion.png", href: "/catering" },
];

export default function CateringSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className={styles.catering} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Bespoke Services</span>
                    <h2 className={styles.title}>
                        Catering <span className={styles.titleGold}>Redefined</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From intimate gatherings to grand celebrations — we bring Ricky&apos;s Restaurant&apos;s
                        culinary excellence to your venue, anywhere in Dubai.
                    </p>
                </div>

                <div className={styles.bentoGrid}>
                    {services.map((service, i) => (
                        <Link key={service.title} href={service.href} className={`${styles.bentoItem} ${i === 0 ? styles.bentoLarge : ""}`}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className={styles.bentoImg}
                            />
                            <div className={styles.bentoOverlay} />
                            <div className={styles.bentoContent}>
                                <h3 className={styles.bentoTitle}>{service.title}</h3>
                                <p className={styles.bentoDesc}>{service.desc}</p>
                                <span className={styles.bentoArrow}>→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/catering" className={styles.ctaBtn}>
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
