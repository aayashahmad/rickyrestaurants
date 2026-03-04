import { API_BASE_URL } from "@/constants/endpoints";

/**
 * Base API service with fetch wrapper
 * Handles request/response, errors, and auth headers
 */
class ApiService {
    constructor(baseURL = API_BASE_URL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;

        const config = {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw {
                    status: response.status,
                    message: error.message || `HTTP Error: ${response.status}`,
                    data: error,
                };
            }

            // Handle 204 No Content
            if (response.status === 204) return null;

            return await response.json();
        } catch (error) {
            if (error.status) throw error;
            throw {
                status: 0,
                message: error.message || "Network error",
                data: null,
            };
        }
    }

    get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: "GET" });
    }

    post(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    put(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(data),
        });
    }

    delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: "DELETE" });
    }
}

// Singleton instance
const apiService = new ApiService();
export default apiService;
