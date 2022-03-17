const IP_REGEX =
  /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
const ADDRESS_REGEX = /GET\s(.*)\sHTTP/;

/**
 * Function that takes a glob of text and returns an array of objects
 * @param {string} glob - The glob of text to parse
 * @returns {object[]} - An array of objects
 */
function gatherData(glob) {
  // If no glob is passed return an error
  if (!glob) {
    throw new Error('No glob was passed');
  }

  // If the glob is not a string throw an error
  if (typeof glob !== 'string') {
    throw new Error('The glob must be a string');
  }

  // Split the data into an array of lines
  const lines = glob.split('\n');

  // Trim any empty lines
  const trimmedLines = lines.filter((line) => line.length > 0);

  // Loop through the lines and transform them into usable objects
  const data = trimmedLines.map((line) => {
    // Get the ip address from the data
    const ip = line.match(IP_REGEX);

    // Get the web address (adduming only GET requests)
    const web = line.match(ADDRESS_REGEX);

    return {
      ip: ip ? ip[0] : null,
      web: web ? web[1] : null,
    };
  });

  // Return the data
  return data;
}

module.exports = gatherData;
