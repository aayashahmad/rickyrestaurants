import apiService from "./api";
import { ENDPOINTS } from "@/constants/endpoints";
import { menuData, grillFeastItems } from "@/constants/menuData";

/**
 * Menu Service
 * Currently returns local data, swap to API calls when backend is ready
 */
const menuService = {
    /**
     * Get all menu items (currently from local data)
     * Future: apiService.get(ENDPOINTS.MENU.GET_ALL)
     */
    async getAllMenuItems() {
        // TODO: Replace with API call when backend is ready
        // return apiService.get(ENDPOINTS.MENU.GET_ALL);
        return grillFeastItems;
    },

    /**
     * Get menu items by category
     * Future: apiService.get(ENDPOINTS.MENU.GET_BY_CATEGORY(category))
     */
    async getMenuByCategory(category) {
        // TODO: Replace with API call
        // return apiService.get(ENDPOINTS.MENU.GET_BY_CATEGORY(category));
        return menuData[category] || null;
    },

    /**
     * Get single menu item by ID
     * Future: apiService.get(ENDPOINTS.MENU.GET_ITEM(id))
     */
    async getMenuItem(id) {
        // TODO: Replace with API call
        // return apiService.get(ENDPOINTS.MENU.GET_ITEM(id));
        return grillFeastItems.find((item) => item.id === id) || null;
    },
};

export default menuService;
