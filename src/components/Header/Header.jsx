"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import styles from "./Header.module.css";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    {
        label: "MENU",
        href: "/menu",
        dropdown: [
            { label: "CATERING", href: "/menu" },
        ],
    },
    {
        label: "CATERING",
        href: "#",
        dropdown: [
            {
                label: "PRIVATE CATERING",
                href: "/catering/private",
                submenu: [
                    { label: "WEDDING CATERING", href: "/catering/wedding" },
                    { label: "BIRTHDAY PARTY CATERING", href: "/catering/birthday" },
                    { label: "YACHT PARTY CATERING", href: "/catering/yacht" },
                    { label: "SPECIAL OCCASION CATERING", href: "/catering/special" },
                    { label: "KIDS PARTY CATERING", href: "/catering/kids" },
                    { label: "GET TOGETHER", href: "/catering/get-together" },
                ],
            },
            {
                label: "CORPORATE CATERING",
                href: "/catering/corporate",
                submenu: [
                    { label: "STAFF CATERING", href: "/catering/staff" },
                    { label: "BUSINESS PARTY CATERING", href: "/catering/business" },
                ],
            },
        ],
    },
    { label: "CONTACT US", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
    };

    const handleSubmenuEnter = (index) => {
        setActiveSubmenu(index);
    };

    const toggleMobileDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
        setActiveSubmenu(null);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Ricky's Restaurant"
                        width={280}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link, index) => (
                        <div
                            key={link.label}
                            className={styles.navItem}
                            onMouseEnter={() => link.dropdown && handleDropdownEnter(index)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                                {link.dropdown && (
                                    <IoChevronDown className={styles.dropdownIcon} />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && activeDropdown === index && (
                                <div className={styles.dropdown}>
                                    <div className={styles.dropdownInner}>
                                        {link.dropdown.map((item, subIdx) => (
                                            <div
                                                key={item.label}
                                                className={styles.dropdownItem}
                                                onMouseEnter={() =>
                                                    item.submenu && handleSubmenuEnter(subIdx)
                                                }
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={styles.dropdownLink}
                                                >
                                                    {item.label}
                                                    {item.submenu && (
                                                        <span className={styles.submenuArrow}>▸</span>
                                                    )}
                                                </Link>

                                                {/* Submenu */}
                                                {item.submenu && activeSubmenu === subIdx && (
                                                    <div className={styles.submenu}>
                                                        {item.submenu.map((sub) => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                className={styles.submenuLink}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Reservation Button */}
                <Link href="/contact" className={styles.reservationBtn}>
                    Reservation
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.overlayVisible : ""
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <nav
                className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""
                    }`}
            >
                <div className={styles.mobileNavHeader}>
                    <span className={styles.mobileNavTitle}>Menu</span>
                    <button
                        className={styles.mobileCloseBtn}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <HiX size={24} />
                    </button>
                </div>
                <div className={styles.mobileNavLinks}>
                    {navLinks.map((link, index) => (
                        <div key={link.label} className={styles.mobileNavItem}>
                            <div className={styles.mobileNavLinkRow}>
                                <Link
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <button
                                        className={`${styles.mobileDropdownToggle} ${activeDropdown === index ? styles.rotated : ""
                                            }`}
                                        onClick={() => toggleMobileDropdown(index)}
                                        aria-label="Toggle submenu"
                                    >
                                        <IoChevronDown />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Dropdown */}
                            {link.dropdown && activeDropdown === index && (
                                <div className={styles.mobileDropdown}>
                                    {link.dropdown.map((item, subIdx) => (
                                        <div key={item.label}>
                                            <div className={styles.mobileDropdownLinkRow}>
                                                <Link
                                                    href={item.href}
                                                    className={styles.mobileDropdownLink}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                                {item.submenu && (
                                                    <button
                                                        className={`${styles.mobileDropdownToggle} ${activeSubmenu === subIdx ? styles.rotated : ""
                                                            }`}
                                                        onClick={() => toggleMobileSubmenu(subIdx)}
                                                        aria-label="Toggle submenu"
                                                    >
                                                        <IoChevronDown size={14} />
                                                    </button>
                                                )}
                                            </div>
                                            {item.submenu && activeSubmenu === subIdx && (
                                                <div className={styles.mobileSubmenu}>
                                                    {item.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            href={sub.href}
                                                            className={styles.mobileSubmenuLink}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.mobileNavFooter}>
                    <Link
                        href="/contact"
                        className={styles.mobileReservationBtn}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Reservation
                    </Link>
                </div>
            </nav>
        </header>
    );
}
