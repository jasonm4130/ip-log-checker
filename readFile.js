const fs = require('fs');

/**
 * Function that reads in the log
 * @param {string} filePath - The path to the log file
 * @returns {string} - The log file contents
 */
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

module.exports = readFile;
