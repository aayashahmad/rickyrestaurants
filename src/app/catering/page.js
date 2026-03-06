"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import styles from "./page.module.css";

const tabs = [
    { id: "private", label: "Private Events" },
    { id: "corporate", label: "Corporate" },
    { id: "special", label: "Special Occasions" },
];

const services = {
    private: [
        { title: "Wedding Catering", desc: "Elegant menus and flawless service for your special day", image: "/images/wedding-catering.png" },
        { title: "Birthday Celebrations", desc: "Festive spreads tailored to any age or theme", image: "/images/birthday-catering.png" },
        { title: "Yacht Parties", desc: "Luxury dining on Dubai's stunning waters", image: "/images/yacht-catering.png" },
        { title: "Kids Events", desc: "Fun, colorful menus that children love", image: "/images/kids-catering.png" },
    ],
    corporate: [
        { title: "Staff Catering", desc: "Daily meals and refreshments for your team", image: "/images/staff-catering.png" },
        { title: "Business Conferences", desc: "Professional catering for seminars and meetings", image: "/images/business-catering.png" },
    ],
    special: [
        { title: "Get-Togethers", desc: "Social gatherings with curated menus", image: "/images/get-together.png" },
        { title: "Themed Dinners", desc: "Bespoke culinary experiences for any occasion", image: "/images/special-occasion.png" },
    ],
};

const process = [
    { step: "01", title: "Consultation", desc: "Tell us about your event, preferences, and vision" },
    { step: "02", title: "Menu Design", desc: "Our chefs craft a bespoke menu tailored to your occasion" },
    { step: "03", title: "Setup & Service", desc: "We handle everything — setup, service, and cleanup" },
    { step: "04", title: "Enjoy", desc: "Sit back and enjoy an unforgettable culinary experience" },
];

export default function CateringPage() {
    const [activeTab, setActiveTab] = useState("private");
    const router = useRouter();
    const { selectCateringItem } = useBooking();

    const handleCateringClick = (service) => {
        selectCateringItem({
            ...service,
            category: tabs.find(t => t.id === activeTab)?.label || activeTab
        });
        router.push("/booking");
    };

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroLabel}>Bespoke Services</span>
                    <h1 className={styles.heroTitle}>Catering<br />Redefined</h1>
                    <p className={styles.heroSubtitle}>
                        From intimate dinners to grand celebrations — Ricky&apos;s Restaurant brings culinary
                        excellence to your venue, anywhere in Dubai.
                    </p>
                </div>
            </section>

            {/* Services with Tabs */}
            <section className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.tabsHeader}>
                        <span className={styles.label}>Our Services</span>
                        <h2 className={styles.sectionTitle}>
                            Choose Your <span className={styles.gold}>Experience</span>
                        </h2>
                    </div>

                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.servicesGrid}>
                        {services[activeTab].map((service) => (
                            <div 
                                key={service.title} 
                                className={styles.serviceCard}
                                onClick={() => handleCateringClick(service)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.serviceImage}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={500}
                                        height={350}
                                        className={styles.serviceImg}
                                        loading="lazy"
                                        quality={75}
                                    />
                                </div>
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDesc}>{service.desc}</p>
                                    <button className={styles.bookBtn}>Book Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.processHeader}>
                        <span className={styles.label}>How It Works</span>
                        <h2 className={styles.sectionTitle}>
                            Our <span className={styles.gold}>Process</span>
                        </h2>
                    </div>

                    <div className={styles.processGrid}>
                        {process.map((item) => (
                            <div key={item.step} className={styles.processCard}>
                                <span className={styles.processStep}>{item.step}</span>
                                <h3 className={styles.processTitle}>{item.title}</h3>
                                <p className={styles.processDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Plan Your Event?</h2>
                    <p className={styles.ctaText}>
                        Let&apos;s create something extraordinary together.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
