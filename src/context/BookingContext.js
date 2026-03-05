"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [selectedCatering, setSelectedCatering] = useState(null);

    const selectCateringItem = (item) => {
        setSelectedCatering(item);
    };

    const clearSelection = () => {
        setSelectedCatering(null);
    };

    return (
        <BookingContext.Provider
            value={{
                selectedCatering,
                selectCateringItem,
                clearSelection,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within BookingProvider");
    }
    return context;
}
