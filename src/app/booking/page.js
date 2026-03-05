"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import styles from "./page.module.css";

 const BOOKING_PHONE_NUMBER = "7006052604";

export default function BookingPage() {
    const router = useRouter();
    const { selectedCatering, clearSelection } = useBooking();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        numberOfGuests: "",
        description: "",
        partyType: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!selectedCatering) {
            router.push("/catering");
        }
    }, [selectedCatering, router]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

     const handleCallRequest = () => {
         window.location.href = `tel:${BOOKING_PHONE_NUMBER}`;
     };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.phone || !formData.numberOfGuests) {
            setError("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const bookingDetails = {
                catering: selectedCatering,
                customer: formData,
                timestamp: new Date().toISOString(),
            };

            const response = await fetch("/api/booking/confirm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingDetails),
            });

            const result = await response.json();

            if (response.ok) {
                if (result.whatsappUrl) {
                    window.open(result.whatsappUrl, "_blank");
                }
                clearSelection();
                alert("Booking request submitted! We will contact you shortly.");
                router.push("/");
            } else {
                setError(result.error || "Failed to submit booking");
            }
        } catch (err) {
            setError("Failed to submit booking. Please try again.");
            console.error("Booking submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!selectedCatering) {
        return null;
    }

    return (
        <div className={styles.bookingPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Book Your Event</h1>
                <p className={styles.subtitle}>
                    Complete the form below and we'll call you to finalize the details
                </p>

                <div className={styles.bookingLayout}>
                    <div className={styles.selectedItem}>
                        <h2 className={styles.sectionTitle}>Selected Service</h2>
                        <div className={styles.itemCard}>
                            <h3 className={styles.itemTitle}>{selectedCatering.title}</h3>
                            <p className={styles.itemDesc}>{selectedCatering.desc}</p>
                            <span className={styles.itemCategory}>{selectedCatering.category}</span>
                        </div>
                    </div>

                    <div className={styles.bookingForm}>
                        <h2 className={styles.sectionTitle}>Your Details</h2>
                        {error && <div className={styles.error}>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="numberOfGuests" className={styles.label}>
                                    Number of Guests *
                                </label>
                                <input
                                    type="number"
                                    id="numberOfGuests"
                                    name="numberOfGuests"
                                    value={formData.numberOfGuests}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="Expected number of guests"
                                    min="1"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="partyType" className={styles.label}>
                                    Party Type
                                </label>
                                <input
                                    type="text"
                                    id="partyType"
                                    name="partyType"
                                    value={formData.partyType}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="e.g., Birthday, Wedding, Corporate Event"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="description" className={styles.label}>
                                    Additional Details
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className={styles.textarea}
                                    placeholder="Tell us more about your event, special requirements, preferred date, etc."
                                    rows={5}
                                />
                            </div>

                            <div className={styles.btnRow}>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Request"}
                                </button>
                                <button
                                    type="button"
                                    className={styles.callBtn}
                                    onClick={handleCallRequest}
                                >
                                    Call Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
