const readFile = require('./readFile');
const gatherData = require('./gatherData');
const getStats = require('./getStats');

const logData = readFile('data.log');

const parsedData = gatherData(logData);

getStats(parsedData);
