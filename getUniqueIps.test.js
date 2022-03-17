const getUniqueIPs = require('./getUniqueIps');

const TEST_DATA = [
  { ip: '192.0.2.255' },
  { ip: '192.0.2.255' },
  { ip: '192.0.2.255' },
  { ip: '192.0.2.2' },
  { ip: '192.0.2.2' },
];

// Should return an error if no data is passed
test('getUniqueIPs returns an error if no data is passed', () => {
  expect(() => getUniqueIPs()).toThrow('No data was passed');
});

// Should throw an error if the data is not an array
test('getUniqueIPs returns an error if the data is not an array', () => {
  expect(() => getUniqueIPs(123)).toThrow('The data must be an array');
});

// Should return the correct number of unique IP addresses
test('getUniqueIPs returns the correct number of unique IP addresses', () => {
  expect(getUniqueIPs(TEST_DATA)).toEqual(2);
});
