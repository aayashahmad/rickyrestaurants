"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topBorder} />
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Image
                            src="/images/logo.png"
                            alt="Ricky's Restaurant"
                            width={280}
                            height={62}
                            className={styles.logo}
                        />
                        <p className={styles.brandText}>
                            Crafting unforgettable culinary experiences in the heart
                            of Dubai Marina since 2012.
                        </p>
                        <div className={styles.social}>
                            <a href="https://www.instagram.com/rickys_restaurant_dubai/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/rickysrestaurantdubai/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Navigate</h4>
                        <nav className={styles.links}>
                            {footerLinks.map((link) => (
                                <Link key={link.label} href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>Visit Us</h4>
                        <div className={styles.contactInfo}>
                            <p>Shop No. 5, Marina Pearl View Hotel Apt.</p>
                            <p>Al Masara Street, Dubai Marina</p>
                            <p className={styles.contactHighlight}>
                                <a href="tel:+971543392616">+971 54 339 2616</a>
                            </p>
                            <p className={styles.contactHighlight}>
                                <a href="tel:+97145147066">+971 4 514 7066</a>
                            </p>
                            <p className={styles.hours}>Daily: 7:00 AM – 12:00 Midnight</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>© {new Date().getFullYear()} Ricky's Restaurant. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
