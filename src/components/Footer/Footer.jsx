"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import styles from "./Footer.module.css";

const services = [
    { label: "Yacht Party Catering In Dubai", href: "/catering/yacht" },
    { label: "Birthday Party Catering", href: "/catering/birthday" },
    { label: "Wedding Catering in Dubai", href: "/catering/wedding" },
    { label: "Business Party Catering", href: "/catering/corporate" },
    { label: "Private Catering", href: "/catering/private" },
];

const quicklinks = [
    { label: "Reservation", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "" },
];

const galleryImages = [
    "/images/about-food-1.png",
    "/images/about-food-2.png",
    "/images/catering-wedding.png",
    "/images/catering-yacht.png",
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Contact Us */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>CONTACT US</h3>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FaMapMarkerAlt />
                            </div>
                            <p>
                                Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara
                                Street, Dubai Marina
                            </p>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FaPhoneAlt />
                            </div>
                            <a href="tel:+971543392616">+971 54 339 2616</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <MdPhone />
                            </div>
                            <a href="tel:+97145147066">+971 4 514 7066</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FaEnvelope />
                            </div>
                            <a href="mailto:director@rickyrestaurants.com">
                                director@rickyrestaurants.com
                            </a>
                        </div>
                    </div>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>SERVICES</h3>
                    <ul className={styles.linkList}>
                        {services.map((service) => (
                            <li key={service.label}>
                                <Link href={service.href} className={styles.footerLink}>
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quicklinks */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>QUICKLINKS</h3>
                    <ul className={styles.linkList}>
                        {quicklinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div className={styles.column}>
                    <div className={styles.gallery}>
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className={styles.galleryItem}>
                                <Image
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    width={130}
                                    height={100}
                                    className={styles.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Ricky&apos;s Restaurant. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
