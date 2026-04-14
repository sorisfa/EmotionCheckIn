// localStorage utility functions

/**
 * Save an item to localStorage
 * @param {string} key - The key of the item to save
 * @param {any} value - The value to save, will be stringified
 */
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get an item from localStorage
 * @param {string} key - The key of the item to retrieve
 * @returns {any} - The parsed value from localStorage or null if not found
 */
export const getFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

/**
 * Remove an item from localStorage
 * @param {string} key - The key of the item to remove
 */
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

/**
 * Clear all items from localStorage
 */
export const clearLocalStorage = () => {
    localStorage.clear();
};