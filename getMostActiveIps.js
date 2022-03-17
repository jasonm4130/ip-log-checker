/**
 * Function that gets the most active IP addresses
 * @param {object[]} - the data to get the stats from
 * @param {number} - the number of IP addresses to return
 * @returns {string[]} - the most active IP addresses
 */
function getMostActiveIPs(data, number = 3) {
  // Throw an error if no data is passed
  if (!data) {
    throw new Error('No data was passed');
  }

  // Throw an error if the data is not an array
  if (!Array.isArray(data)) {
    throw new Error('The data must be an array');
  }

  // Throw an error if the number is not a number
  if (typeof number !== 'number') {
    throw new Error('The number must be a number');
  }

  // Create an object to store the IP addresses and their counts
  const ipCounts = {};

  // Loop through the data and add the IP address to the object if it doesn't exist
  // If it does exist, increment the count
  data.forEach((log) => {
    if (!ipCounts[log.ip]) {
      ipCounts[log.ip] = 1;
    } else {
      ipCounts[log.ip] += 1;
    }
  });

  // Create an array to store the IP addresses and their counts
  const ipCountsArray = [];

  // Loop through the ip addresses
  Object.keys(ipCounts).forEach((key) => {
    // Add the IP address and count to the array
    ipCountsArray.push({ ip: key, count: ipCounts[key] });
  });

  // Sort the array by the count
  ipCountsArray.sort((a, b) => b.count - a.count);

  // Return the top IP addresses
  return ipCountsArray.slice(0, number).map((ip) => ip.ip);
}

module.exports = getMostActiveIPs;
