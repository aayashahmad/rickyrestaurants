"use client";

import { useState } from "react";
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock,
    FaUser,
    FaPhone,
    FaEnvelope,
    FaUsers,
    FaCommentDots,
} from "react-icons/fa";
import styles from "./page.module.css";

export default function ContactPage() {
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
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            guests: "",
            message: "",
        });
    };

    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Contact Us</h1>
            </section>

            {/* Info Cards */}
            <section className={styles.infoSection}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIconWrapper}>
                            <FaPhoneAlt className={styles.infoIcon} />
                        </div>
                        <h3 className={styles.infoTitle}>Call Us</h3>
                        <p className={styles.infoText}>
                            <a href="tel:+971543392616">+971 54 339 2616</a>
                        </p>
                        <p className={styles.infoText}>
                            <a href="tel:+97145147066">+971 4 514 7066</a>
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoIconWrapper}>
                            <FaMapMarkerAlt className={styles.infoIcon} />
                        </div>
                        <h3 className={styles.infoTitle}>Address</h3>
                        <p className={styles.infoText}>
                            Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara
                            Street, Dubai Marina
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoIconWrapper}>
                            <FaClock className={styles.infoIcon} />
                        </div>
                        <h3 className={styles.infoTitle}>Opening Hour</h3>
                        <p className={styles.infoText}>7:00 AM – 12:00 Midnight</p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className={styles.formSection}>
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <span className={styles.formLabel}>Get In Touch</span>
                        <h2 className={styles.formTitle}>Send Us a Message</h2>
                        <p className={styles.formSubtitle}>
                            Have a question or want to make a reservation? Fill out the form
                            below and we&apos;ll get back to you shortly.
                        </p>
                    </div>

                    <div className={styles.formCard}>
                        <div className={styles.glowAccent1} />
                        <div className={styles.glowAccent2} />

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.nameRow}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>
                                        <FaUser className={styles.labelIcon} />
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
                                        <FaUser className={styles.labelIcon} />
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

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaPhone className={styles.labelIcon} />
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

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaEnvelope className={styles.labelIcon} />
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

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaUsers className={styles.labelIcon} />
                                    Number of Guests <span className={styles.required}>*</span>
                                </label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                >
                                    <option value="">Select guests</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                        <option key={n} value={n}>
                                            {n} {n === 1 ? "Guest" : "Guests"}
                                        </option>
                                    ))}
                                    <option value="10+">10+ Guests</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>
                                    <FaCommentDots className={styles.labelIcon} />
                                    Comment or Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Any special requests, dietary requirements, or questions..."
                                    rows={5}
                                    className={`${styles.input} ${styles.textarea}`}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className={styles.spinner} />
                                ) : submitted ? (
                                    "✓ Message Sent!"
                                ) : (
                                    "Submit"
                                )}
                            </button>

                            {submitted && (
                                <p className={styles.successMsg}>
                                    Thank you! We&apos;ll get back to you shortly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
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
