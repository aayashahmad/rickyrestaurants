"use client";

import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaUsers, FaCommentDots } from "react-icons/fa";
import styles from "./ReservationSection.module.css";

export default function ReservationSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        guests: "",
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

        // TODO: Replace with API call
        // await apiService.post(ENDPOINTS.RESERVATION.CREATE, formData);
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ firstName: "", lastName: "", mobile: "", email: "", guests: "", message: "" });
    };

    return (
        <section className={styles.reservation} id="reservation">
            <div className={styles.bgPattern} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Book a Table</span>
                    <h2 className={styles.title}>Reservation</h2>
                    <p className={styles.subtitle}>
                        Reserve your spot and let us prepare an unforgettable dining experience for you.
                    </p>
                </div>

                <div className={styles.formCard}>
                    {/* Glow accents */}
                    <div className={styles.glowTop} />
                    <div className={styles.glowBottom} />

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* Name Row */}
                        <div className={styles.nameRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaUser className={styles.inputIcon} />
                                    First Name <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaUser className={styles.inputIcon} />
                                    Last Name <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                <FaPhone className={styles.inputIcon} />
                                Mobile Number <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+971 XX XXX XXXX"
                                required
                                className={styles.input}
                            />
                        </div>

                        {/* Email */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                <FaEnvelope className={styles.inputIcon} />
                                Email <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                                className={styles.input}
                            />
                        </div>

                        {/* Guests */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                <FaUsers className={styles.inputIcon} />
                                Number of Guests <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="number"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                placeholder="Enter number of guests"
                                min="1"
                                required
                                className={styles.input}
                            />
                        </div>

                        {/* Message */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                <FaCommentDots className={styles.inputIcon} />
                                Comment or Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any special requests or dietary requirements..."
                                rows={4}
                                className={`${styles.input} ${styles.textarea}`}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className={styles.spinner} />
                            ) : submitted ? (
                                "✓ Reservation Sent!"
                            ) : (
                                "Submit Reservation"
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
