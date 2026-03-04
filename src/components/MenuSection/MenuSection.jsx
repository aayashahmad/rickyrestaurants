"use client";

import Image from "next/image";
import Link from "next/link";
import { grillFeastItems } from "@/constants/menuData";
import styles from "./MenuSection.module.css";

export default function MenuSection() {
    const menuItems = grillFeastItems;

    return (
        <section className={styles.menu} id="menu">
            {/* Decorative SVGs */}
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
            <div className={styles.decorBottomLeft}>
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
            <div className={styles.decorBottomRight}>
                <svg viewBox="0 0 80 120" className={styles.decorSvg}>
                    <line x1="40" y1="0" x2="40" y2="90" stroke="var(--color-light-gray)" strokeWidth="1" opacity="0.3" />
                    <line x1="20" y1="90" x2="60" y2="90" stroke="var(--color-light-gray)" strokeWidth="1" opacity="0.3" />
                    <circle cx="40" cy="105" r="10" fill="none" stroke="var(--color-light-gray)" strokeWidth="1" opacity="0.3" />
                </svg>
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.label}>Catering Menu</span>
                    <h2 className={styles.title}>Grill Feast</h2>
                </div>

                {/* Menu Grid */}
                <div className={styles.grid}>
                    {menuItems.map((item) => (
                        <div key={item.id} className={styles.menuItem}>
                            <div className={styles.menuImageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={90}
                                    height={80}
                                    className={styles.menuImage}
                                />
                            </div>
                            <div className={styles.menuContent}>
                                <h3 className={styles.menuName}>
                                    {item.name}
                                    <span className={styles.dotLine} />
                                </h3>
                                <p className={styles.menuDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Menu Button */}
                <div className={styles.buttonWrapper}>
                    <Link href="/menu" className={styles.moreMenuBtn}>
                        MORE MENU
                    </Link>
                </div>
            </div>
        </section>
    );
}
