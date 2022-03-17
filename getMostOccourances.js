/**
 * Function that gets the most occourances of a given property of a url
 * @param {object[]} - the data to get the stats from
 * @param {string} - the property to get the stats from
 * @param {number} - the number of URLs to return
 * @returns {string[]} - an array of the most visited URLs
 */
function getMostOccourances(data, property, itemsToReturn = 3) {
  // Throw an error if no data is passed
  if (!data) {
    throw new Error('No data was passed');
  }

  // Throw an error if the data is not an array
  if (!Array.isArray(data)) {
    throw new Error('The data must be an array');
  }

  // Throw an error if the number is not a number
  if (typeof itemsToReturn !== 'number') {
    throw new Error('The itemsToReturn must be a number');
  }

  // Throw an error if the property is not a string
  if (typeof property !== 'string') {
    throw new Error('The property must be a string');
  }

  // Create an object to store the value of the property we are counting
  const propertyValues = {};

  // Loop through the data
  data.forEach((item) => {
    // If the property value is not in the object, add it
    if (!propertyValues[item[property]]) {
      propertyValues[item[property]] = 0;
    }

    // Increment the count for the property value
    propertyValues[item[property]] += 1;
  });

  // If propertyValues is empty, return an empty array
  if (Object.keys(propertyValues).length === 0) {
    return [];
  }

  // Create an array to store the occourances
  const mostOccourances = [];

  // Loop through the occourances
  Object.keys(propertyValues).forEach((key) => {
    // Add the occourance to the array
    mostOccourances.push({ occourance: key, count: propertyValues[key] });
  });

  // Sort the URLs by count
  mostOccourances.sort((a, b) => b.count - a.count);

  // Return the top itemsToReturn URLs
  return mostOccourances.slice(0, itemsToReturn).map((url) => url.occourance);
}

module.exports = getMostOccourances;
