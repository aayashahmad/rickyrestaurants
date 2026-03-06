"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useOrder } from "@/context/OrderContext";
import styles from "./Header.module.css";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalItems } = useOrder();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Ricky's Restaurant"
                        width={200}
                        height={45}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={styles.navLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Reserve Button + Mobile Toggle */}
                <div className={styles.headerActions}>
                    <Link href="/order" className={styles.cartBtn} aria-label="View order">
                        <FiShoppingCart size={22} />
                        {getTotalItems() > 0 && (
                            <span className={styles.cartBadge}>{getTotalItems()}</span>
                        )}
                    </Link>
                    <Link href="/contact" className={styles.reserveBtn}>
                        Reserve a Table
                    </Link>
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* Fullscreen Mobile Menu */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileMenuInner}>
                    <div className={styles.mobileMenuHeader}>
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src="/images/logo.png"
                                alt="Ricky's Restaurant"
                                width={180}
                                height={40}
                                className={styles.logoImage}
                            />
                        </Link>
                        <button
                            className={styles.mobileCloseBtn}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <HiX size={28} />
                        </button>
                    </div>

                    <nav className={styles.mobileNavLinks}>
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                                <span className={styles.mobileLinkText}>{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.mobileFooter}>
                        <Link
                            href="/contact"
                            className={styles.mobileReserveBtn}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Reserve a Table
                        </Link>
                        <div className={styles.mobileContact}>
                            <a href="tel:+971543392616">+971 54 339 2616</a>
                            <span>Dubai Marina, UAE</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
