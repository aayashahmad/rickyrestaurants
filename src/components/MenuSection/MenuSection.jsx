"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./MenuSection.module.css";

const dishes = [
    { name: "Grilled Lamb Kofta", category: "Mains", image: "/images/menu/kofta.png", price: "68" },
    { name: "Caesar Salad", category: "Starters", image: "/images/menu/caesar-salad.png", price: "42" },
    { name: "Creamy Penne Pasta", category: "Mains", image: "/images/menu/pasta.png", price: "55" },
    { name: "Classic Hummus", category: "Starters", image: "/images/menu/hummus.png", price: "28" },
    { name: "Grilled Chicken", category: "Mains", image: "/images/menu/grilled-chicken.png", price: "58" },
    { name: "Crispy French Fries", category: "Sides", image: "/images/menu/french-fries.png", price: "22" },
];

export default function MenuSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className={styles.menu} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Curated Selection</span>
                    <h2 className={styles.title}>
                        Signature <span className={styles.titleGold}>Creations</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A glimpse into our menu — dishes crafted with precision,
                        passion, and the finest ingredients from around the world.
                    </p>
                </div>

                <div className={styles.grid}>
                    {dishes.map((dish, i) => (
                        <div key={dish.name} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className={styles.cardImage}>
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    width={400}
                                    height={300}
                                    className={styles.img}
                                />
                                <span className={styles.cardCategory}>{dish.category}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.dishName}>{dish.name}</h3>
                                <span className={styles.dishPrice}>AED {dish.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/menu" className={styles.viewAll}>
                        View Full Menu
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
