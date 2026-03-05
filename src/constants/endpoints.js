// API Base URL — update when backend is ready
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.emberandoak.ae";

// API Endpoints
export const ENDPOINTS = {
    // Menu
    MENU: {
        GET_ALL: "/api/menu",
        GET_BY_CATEGORY: (category) => `/api/menu/${category}`,
        GET_ITEM: (id) => `/api/menu/item/${id}`,
    },

    // Catering
    CATERING: {
        GET_SERVICES: "/api/catering",
        GET_SERVICE: (slug) => `/api/catering/${slug}`,
    },

    // Reservation
    RESERVATION: {
        CREATE: "/api/reservation",
        GET_AVAILABILITY: "/api/reservation/availability",
    },

    // Contact
    CONTACT: {
        SEND: "/api/contact",
    },

    // Gallery
    GALLERY: {
        GET_ALL: "/api/gallery",
    },
};
