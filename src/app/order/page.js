"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOrder } from "@/context/OrderContext";
import OrderItem from "@/components/OrderItem/OrderItem";
import styles from "./page.module.css";

export default function OrderPage() {
    const router = useRouter();
    const { orderItems, updateQuantity, removeItem, clearOrder, getTotalItems } = useOrder();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        deliveryType: "home",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.phone || !formData.address) {
            setError("Please fill in all required fields");
            return;
        }

        if (orderItems.length === 0) {
            setError("Your order is empty");
            return;
        }

        setIsSubmitting(true);

        try {
            const orderDetails = {
                customer: formData,
                items: orderItems,
                totalItems: getTotalItems(),
                timestamp: new Date().toISOString(),
            };

            const response = await fetch("/api/order/confirm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderDetails),
            });

            const result = await response.json();

            if (response.ok) {
                if (result.whatsappUrl) {
                    window.open(result.whatsappUrl, "_blank");
                }
                clearOrder();
                alert("Order confirmed! Opening WhatsApp to send your order details.");
                router.push("/");
            } else {
                setError(result.error || "Failed to submit order");
            }
        } catch (err) {
            setError("Failed to submit order. Please try again.");
            console.error("Order submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (orderItems.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <div className={styles.emptyContent}>
                    <h1 className={styles.emptyTitle}>Your Order is Empty</h1>
                    <p className={styles.emptyText}>
                        Add items from our menu to get started!
                    </p>
                    <button
                        className={styles.menuBtn}
                        onClick={() => router.push("/menu")}
                    >
                        Browse Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.orderPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Complete Your Order</h1>

                <div className={styles.orderLayout}>
                    <div className={styles.orderItems}>
                        <h2 className={styles.sectionTitle}>
                            Your Items ({getTotalItems()})
                        </h2>
                        <div className={styles.itemsList}>
                            {orderItems.map((item) => (
                                <OrderItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={updateQuantity}
                                    onRemove={removeItem}
                                />
                            ))}
                        </div>
                        <button
                            className={styles.orderMoreBtn}
                            onClick={() => router.push("/menu")}
                        >
                            + Order More Items
                        </button>
                    </div>

                    <div className={styles.orderForm}>
                        <h2 className={styles.sectionTitle}>Delivery Details</h2>
                        {error && <div className={styles.error}>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="deliveryType" className={styles.label}>
                                    Delivery Type
                                </label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="deliveryType"
                                            value="home"
                                            checked={formData.deliveryType === "home"}
                                            onChange={handleInputChange}
                                        />
                                        <span>Home Delivery</span>
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="deliveryType"
                                            value="order"
                                            checked={formData.deliveryType === "order"}
                                            onChange={handleInputChange}
                                        />
                                        <span>Pickup Order</span>
                                    </label>
                                </div>
                            </div>

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
                                <label htmlFor="address" className={styles.label}>
                                    {formData.deliveryType === "home"
                                        ? "Delivery Address *"
                                        : "Pickup Location *"}
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={styles.textarea}
                                    placeholder={
                                        formData.deliveryType === "home"
                                            ? "Enter your complete delivery address"
                                            : "Enter pickup location details"
                                    }
                                    rows={4}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Processing..." : "Confirm Order"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
