/**
 * Function that gets the number of unique IP addresses from an array of objects
 * @param {object[]} - the data to get the stats from
 * @returns {number} - the number of unique IP addresses
 */
function getUniqueIPs(data) {
  // Throw an error if no data is passed
  if (!data) {
    throw new Error('No data was passed');
  }

  // Throw an error if the data is not an array
  if (!Array.isArray(data)) {
    throw new Error('The data must be an array');
  }

  // Create an array of unique IPs
  const uniqueIPs = [];
  // Loop through the data
  data.forEach((item) => {
    // If the IP is not in the array, add it
    if (!uniqueIPs.includes(item.ip)) {
      uniqueIPs.push(item.ip);
    }
  });
  // Return the number of unique IPs
  return uniqueIPs.length;
}

module.exports = getUniqueIPs;
