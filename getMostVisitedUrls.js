/**
 * Function that gets the most visited urls from an array of objects
 * @param {object[]} - the data to get the stats from
 * @param {number} - the number of URLs to return
 * @returns {string[]} - an array of the most visited URLs
 */
function getMostVisitedUrls(data, numUrls = 3) {
  // Throw an error if no data is passed
  if (!data) {
    throw new Error('No data was passed');
  }

  // Throw an error if the data is not an array
  if (!Array.isArray(data)) {
    throw new Error('The data must be an array');
  }

  // Throw an error if the number is not a number
  if (typeof numUrls !== 'number') {
    throw new Error('The number must be a number');
  }

  // Create an object to store the URLs and their counts
  const urls = {};

  // Loop through the data
  data.forEach((item) => {
    // If the URL is not in the object, add it
    if (!urls[item.web]) {
      urls[item.web] = 0;
    }

    // Increment the count for the URL
    urls[item.web] += 1;
  });

  // Create an array to store the URLs
  const mostVisitedUrls = [];

  // Loop through the URLs
  Object.keys(urls).forEach((key) => {
    // Add the URL to the array
    mostVisitedUrls.push({ url: key, count: urls[key] });
  });

  // Sort the URLs by count
  mostVisitedUrls.sort((a, b) => b.count - a.count);

  // Return the top numUrls URLs
  return mostVisitedUrls.slice(0, numUrls).map((url) => url.url);
}

module.exports = getMostVisitedUrls;
