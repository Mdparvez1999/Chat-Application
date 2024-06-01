/**
 * Extracts the time from a given date string and returns it in a formatted string.
 *
 * @param {string} dateString - The date string to extract the time from.
 * @return {string} The formatted time string.
 */
export const extractTime = (dateString) => {
    // Create a new Date object from the date string
    const date = new Date(dateString);
    // Format the time using the toLocaleTimeString method
    // with the 'en-US' locale and the specified options
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric', // Display the hour in numeric format
        minute: 'numeric', // Display the minute in numeric format
        hour12: true // Display the time in 12-hour format
    });
}
