"use client";

import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("orderItems");
        if (saved) {
            setOrderItems(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("orderItems", JSON.stringify(orderItems));
    }, [orderItems]);

    const addItem = (item) => {
        setOrderItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeItem = (id) => {
        setOrderItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setOrderItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const clearOrder = () => {
        setOrderItems([]);
        localStorage.removeItem("orderItems");
    };

    const getTotalItems = () => {
        return orderItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    return (
        <OrderContext.Provider
            value={{
                orderItems,
                addItem,
                removeItem,
                updateQuantity,
                clearOrder,
                getTotalItems,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used within OrderProvider");
    }
    return context;
}
