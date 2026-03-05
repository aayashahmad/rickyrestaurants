"use client";

import { useEffect } from "react";
import { FiCheck, FiX, FiShoppingCart } from "react-icons/fi";
import styles from "./Toast.module.css";

export default function Toast({ message, type = "success", onClose, action, onAction }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: <FiCheck />,
        error: <FiX />,
        info: <FiShoppingCart />,
    };

    return (
        <>
            <div className={styles.toastOverlay} onClick={onClose} />
            <div className={`${styles.toast} ${styles[type]}`}>
                <div className={styles.toastContent}>
                    <span className={styles.icon}>{icons[type]}</span>
                    <span className={styles.message}>{message}</span>
                </div>
                <div className={styles.actions}>
                    {action && (
                        <button className={styles.actionBtn} onClick={onAction}>
                            {action}
                        </button>
                    )}
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <FiX />
                    </button>
                </div>
            </div>
        </>
    );
}
