import Image from "next/image";
import { menuSections } from "@/constants/menuData";
import ReservationSection from "@/components/ReservationSection/ReservationSection";
import styles from "./page.module.css";

export const metadata = {
    title: "Catering Menu | Ricky's Restaurant",
    description:
        "Explore our full catering menu — Grill Feast, Grill Paradise, Extravaganza, and International selections.",
};

export default function MenuPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>CATERING MENU</h1>
            </section>

            {/* Menu Sections */}
            <div className={styles.menuPage}>
                {menuSections.map((section) => (
                    <section key={section.id} className={styles.section} id={section.id}>
                        {/* Decorative SVGs */}
                        <div className={styles.decorLeft}>
                            <svg viewBox="0 0 120 200" className={styles.decorSvg}>
                                <path d="M60 10 L90 80 L70 80 L60 190 L50 80 L30 80 Z" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                                <circle cx="60" cy="30" r="25" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                            </svg>
                        </div>
                        <div className={styles.decorRight}>
                            <svg viewBox="0 0 120 200" className={styles.decorSvg}>
                                <path d="M60 10 L90 80 L70 80 L60 190 L50 80 L30 80 Z" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                                <circle cx="60" cy="30" r="25" fill="none" stroke="var(--color-light-gray)" strokeWidth="1.5" opacity="0.3" />
                            </svg>
                        </div>

                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>

                            <div className={styles.grid}>
                                {section.items.map((item) => (
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
                                            <p className={styles.menuDescription}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Reservation Form */}
            <ReservationSection />
        </>
    );
}
