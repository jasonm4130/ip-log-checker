const getUniqueIPs = require('./getUniqueIps');
const getMostOccourances = require('./getMostOccourances');

/**
 * Function that gets the stats and logs them to the console
 * @param {object[]} - the data to get the stats from
 * @returns {void}
 */
function getStats(data) {
  // Get the number of unique IP addresses
  const uniqueIPs = getUniqueIPs(data);

  // Get the 3 most visited URLs
  const mostVisitedUrls = getMostOccourances(data, 'web', 3);

  // Get the most active IP address
  const mostActiveIP = getMostOccourances(data, 'ip', 3);

  console.log(`There were ${uniqueIPs} unique IP addresses`);
  console.log(`The most visited URLs were:`);
  mostVisitedUrls.forEach((url) => {
    console.log(`- ${url}`);
  });
  console.log(`The most active IP address' were:`);
  mostActiveIP.forEach((ip) => {
    console.log(`- ${ip}`);
  });
}

module.exports = getStats;
