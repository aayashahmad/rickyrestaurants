"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./ReservationSection.module.css";

export default function ReservationSection() {
    const sectionRef = useScrollReveal();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        table: "",
        date: "",
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
        setFormData({ name: "", email: "", phone: "", guests: "", table: "", date: "", message: "" });
    };

    return (
        <section className={styles.reservation} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.textCol}>
                    <span className={styles.label}>Reserve Your Spot</span>
                    <h2 className={styles.title}>
                        Book a <span className={styles.titleGold}>Table</span>
                    </h2>
                    <p className={styles.description}>
                        Whether it&apos;s an intimate dinner for two or a gathering with friends,
                        we&apos;ll ensure everything is perfect for your visit.
                    </p>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Dubai Marina, UAE</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>🕐</span>
                            <div>
                                <strong>Hours</strong>
                                <p>7:00 AM – 12:00 Midnight</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📞</span>
                            <div>
                                <strong>Call Us</strong>
                                <p>+971 54 339 2616</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formCol}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className={styles.input}
                                    id="res-name"
                                />
                                <label htmlFor="res-name" className={styles.floatLabel}>Full Name</label>
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className={styles.input}
                                    id="res-email"
                                />
                                <label htmlFor="res-email" className={styles.floatLabel}>Email</label>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className={styles.input}
                                    id="res-phone"
                                />
                                <label htmlFor="res-phone" className={styles.floatLabel}>Phone</label>
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="number"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    placeholder=" "
                                    className={styles.input}
                                    id="res-guests"
                                />
                                <label htmlFor="res-guests" className={styles.floatLabel}>Guests</label>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <select
                                    name="table"
                                    value={formData.table}
                                    onChange={handleChange}
                                    required
                                    className={`${styles.input} ${styles.selectInput}`}
                                    id="res-table"
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
                                    htmlFor="res-table"
                                    className={`${styles.floatLabel} ${styles.selectLabel} ${formData.table ? styles.selectLabelActive : ""}`}
                                >
                                    Select Table
                                </label>
                            </div>
                            <div className={styles.field}>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className={`${styles.input} ${styles.dateInput}`}
                                    id="res-date"
                                />
                                <label htmlFor="res-date" className={`${styles.floatLabel} ${styles.dateLabel}`}>Preferred Date</label>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=" "
                                rows={3}
                                className={`${styles.input} ${styles.textarea}`}
                                id="res-message"
                            />
                            <label htmlFor="res-message" className={styles.floatLabel}>Special Requests</label>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? (
                                <span className={styles.spinner} />
                            ) : submitted ? (
                                "✓ Reservation Sent!"
                            ) : (
                                "Reserve Now"
                            )}
                        </button>

                        {submitted && (
                            <p className={styles.successMsg}>
                                Thank you! We&apos;ll confirm your reservation shortly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
