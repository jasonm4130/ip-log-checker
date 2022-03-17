const getUniqueIPs = require('./getUniqueIps');
const getMostVisitedUrls = require('./getMostVisitedUrls');
const getMostActiveIP = require('./getMostActiveIps');

/**
 * Function that gets the stats and logs them to the console
 * @param {object[]} - the data to get the stats from
 * @returns {void}
 */
function getStats(data) {
  // Get the number of unique IP addresses
  const uniqueIPs = getUniqueIPs(data);

  // Get the 3 most visited URLs
  const mostVisitedUrls = getMostVisitedUrls(data, 3);

  // Get the most active IP address
  const mostActiveIP = getMostActiveIP(data, 3);

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
