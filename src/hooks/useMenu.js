"use client";

import { useState, useEffect, useCallback } from "react";
import menuService from "@/services/menuService";

/**
 * Custom hook for fetching menu data
 * Handles loading, error, and data states
 * Ready for API swap — just update menuService
 */
export function useMenu(category = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMenu = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const result = category
                ? await menuService.getMenuByCategory(category)
                : await menuService.getAllMenuItems();

            setData(result);
        } catch (err) {
            setError(err.message || "Failed to load menu");
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        fetchMenu();
    }, [fetchMenu]);

    return { data, loading, error, refetch: fetchMenu };
}

/**
 * Custom hook for fetching a single menu item
 */
export function useMenuItem(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchItem = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await menuService.getMenuItem(id);
                setData(result);
            } catch (err) {
                setError(err.message || "Failed to load item");
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return { data, loading, error };
}
