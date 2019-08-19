/**
 * Limits an array for a given limit.
 * Starts at the first item of the array.
 * @param {array} arr Array items to limit
 * @param {number} limit Number of array items you wish to limit
 *
 * @returns A new array containing the limited items.
 */
const limit = (arr, limit) => {
	if (!Array.isArray(arr)) {
		return [];
	}
	return arr.slice(0, limit);
};

/**
 * Limits a list of array based on the number of items you want to skip from the start of the array.
 * @param {array} arr Array items to limit
 * @param {number} numberOfItemsToSkip Number of array items you wish to skip
 *
 * @returns A new array containing the limited items.
 */
const skip = (arr, numberOfItemsToSkip) => {
	if (!Array.isArray(arr)) {
		return [];
	}
	return arr.slice(numberOfItemsToSkip);
};

export { limit, skip };
