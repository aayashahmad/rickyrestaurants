"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { menuSections } from "@/constants/menuData";
import { useOrder } from "@/context/OrderContext";
import Toast from "@/components/ui/Toast";
import styles from "./page.module.css";

const categories = ["All", ...new Set((menuSections || []).flatMap(s => s.items || []).map(() => ""))].filter(Boolean);

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const router = useRouter();
    const { addItem } = useOrder();

    const allItems = useMemo(() => 
        (menuSections || []).flatMap((section) =>
            (section.items || []).map((item) => ({ ...item, category: section.title }))
        ), []
    );

    const sectionTitles = useMemo(() => ["All", ...(menuSections || []).map(s => s.title)], []);
    
    const filtered = useMemo(() => {
        let items = activeCategory === 0 ? allItems : allItems.filter(item => item.category === sectionTitles[activeCategory]);
        
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            items = items.filter(item => 
                item.name.toLowerCase().includes(query) ||
                (item.description && item.description.toLowerCase().includes(query))
            );
        }
        return items;
    }, [activeCategory, searchQuery, allItems, sectionTitles]);

    const handleItemClick = (item) => {
        addItem(item);
        setToastMessage(`${item.name} added to your order!`);
        setShowToast(true);
    };

    const handleViewOrder = () => {
        setShowToast(false);
        router.push("/order");
    };

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroLabel}>Culinary Collection</span>
                    <h1 className={styles.heroTitle}>Our Menu</h1>
                </div>
            </section>

            {/* Menu */}
            <section className={styles.menuSection}>
                <div className={styles.container}>
                    {/* Search Bar */}
                    <div className={styles.searchContainer}>
                        <FiSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search for dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        {searchQuery && (
                            <button
                                className={styles.clearBtn}
                                onClick={() => setSearchQuery("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    {/* Category Filter */}
                    <div className={styles.filters}>
                        {sectionTitles.map((cat, i) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === i ? styles.filterActive : ""}`}
                                onClick={() => setActiveCategory(i)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Items Grid */}
                    <div className={styles.grid}>
                        {filtered.map((item) => (
                            <div 
                                key={item.id || item.name} 
                                className={styles.menuCard}
                                onClick={() => handleItemClick(item)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.cardImage}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={300}
                                        className={styles.cardImg}
                                        loading="lazy"
                                        quality={75}
                                    />
                                    <span className={styles.cardBadge}>{item.category}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardName}>{item.name}</h3>
                                    {item.description && (
                                        <p className={styles.cardDesc}>{item.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {showToast && (
                <Toast
                    message={toastMessage}
                    type="info"
                    action="View Order"
                    onAction={handleViewOrder}
                    onClose={() => setShowToast(false)}
                />
            )}
        </>
    );
}
