"use client";

import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import styles from "./OrderItem.module.css";

export default function OrderItem({ item, onUpdateQuantity, onRemove }) {
    return (
        <div className={styles.orderItem}>
            <div className={styles.itemImage}>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className={styles.image}
                />
            </div>
            <div className={styles.itemDetails}>
                <h4 className={styles.itemName}>{item.name}</h4>
                <p className={styles.itemCategory}>{item.category}</p>
                {item.price && (
                    <p className={styles.itemPrice}>AED {item.price} × {item.quantity} = AED {item.price * item.quantity}</p>
                )}
            </div>
            <div className={styles.itemActions}>
                <div className={styles.quantityControl}>
                    <button
                        className={styles.quantityBtn}
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                    >
                        <FiMinus />
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                        className={styles.quantityBtn}
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                    >
                        <FiPlus />
                    </button>
                </div>
                <button
                    className={styles.removeBtn}
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove item"
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
}
