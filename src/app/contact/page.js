"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./page.module.css";

export default function ContactPage() {
    const formRef = useScrollReveal();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        table: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", phone: "", guests: "", table: "", message: "" });
    };

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroContent}>
                    <span className={styles.heroLabel}>Get in Touch</span>
                    <h1 className={styles.heroTitle}>Let&apos;s Start a<br />Conversation</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.main} ref={formRef}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.infoCol}>
                            <h2 className={styles.infoTitle}>Visit Our Restaurant</h2>
                            <p className={styles.infoText}>
                                We&apos;d love to hear from you. Whether you&apos;re looking to make
                                a reservation, plan an event, or simply say hello.
                            </p>

                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📍</span>
                                    <div>
                                        <strong>Address</strong>
                                        <p>Shop No. 5, Marina Pearl View Hotel Apt., Al Masara Street, Dubai Marina</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p><a href="tel:+971543392616">+971 54 339 2616</a></p>
                                        <p><a href="tel:+97145147066">+971 4 514 7066</a></p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>🕐</span>
                                    <div>
                                        <strong>Hours</strong>
                                        <p>Daily: 7:00 AM – 12:00 Midnight</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📧</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>info@emberandoak.ae</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Send a Message</h3>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " className={styles.input} id="c-name" />
                                        <label htmlFor="c-name" className={styles.floatLabel}>Full Name</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " className={styles.input} id="c-email" />
                                        <label htmlFor="c-email" className={styles.floatLabel}>Email</label>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " className={styles.input} id="c-phone" />
                                        <label htmlFor="c-phone" className={styles.floatLabel}>Phone</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" placeholder=" " className={styles.input} id="c-guests" />
                                        <label htmlFor="c-guests" className={styles.floatLabel}>Number of Guests</label>
                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <select
                                        name="table"
                                        value={formData.table}
                                        onChange={handleChange}
                                        required
                                        className={`${styles.input} ${styles.selectInput}`}
                                        id="c-table"
                                    >
                                        <option value="" disabled>
                                            
                                        </option>
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                                            <option key={n} value={String(n)}>
                                                Table {n}
                                            </option>
                                        ))}
                                    </select>
                                    <label
                                        htmlFor="c-table"
                                        className={`${styles.floatLabel} ${styles.selectLabel}`}
                                    >
                                        Select Table
                                    </label>
                                </div>
                                <div className={styles.field}>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder=" " rows={4} className={`${styles.input} ${styles.textarea}`} id="c-msg" />
                                    <label htmlFor="c-msg" className={styles.floatLabel}>Your Message</label>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? <span className={styles.spinner} /> : submitted ? "✓ Sent!" : "Send Message"}
                                </button>

                                {submitted && (
                                    <p className={styles.success}>Thank you! We&apos;ll get back to you shortly.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className={styles.mapSection}>
              <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Ricky's+Restaurant,Dubai+Marina,UAE&zoom=15"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ricky's Restaurant Location"
                    className={styles.map}
                />
            </section>

        </>
    );
}
