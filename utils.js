/**
 * Utility functions for data processing
 */

/**
 * Finds the index of a target value in a sorted array using binary search
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - Value to find
 * @returns {number} Index of target, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The average value
 */
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

/**
 * Safely gets a nested property from an object
 * @param {Object} obj - The object to query
 * @param {string} path - Dot-separated path (e.g., 'user.address.city')
 * @returns {*} The value at the path, or undefined
 */
function getNestedProperty(obj, path) {
    const keys = path.split('.');
    let current = obj;

    for (let key of keys) {
        if (current === null || current === undefined) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}

module.exports = {
    binarySearch,
    calculateAverage,
    getNestedProperty
};
