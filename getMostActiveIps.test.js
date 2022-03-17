const getMostActiveIPs = require('./getMostActiveIps');

const TEST_DATA = [
  { ip: '192.0.2.0' },
  { ip: '192.0.2.0' },
  { ip: '192.0.2.255' },
];

// Test that getMostActiveIPs returns an error if no data is passed
test('getMostActiveIPs returns an error if no data is passed', () => {
  expect(() => getMostActiveIPs()).toThrow('No data was passed');
});

// Should throw an error if the data is not an array
test('getMostActiveIPs returns an error if the data is not an array', () => {
  expect(() => getMostActiveIPs(123)).toThrow('The data must be an array');
});

// Should throw an error if the number is not a number
test('getMostActiveIPs returns an error if the number is not a number', () => {
  expect(() => getMostActiveIPs([], '123')).toThrow(
    'The number must be a number'
  );
});

// Shoud return the correct number of IP addresses
test('getMostActiveIPs returns the correct number of IP addresses', () => {
  expect(getMostActiveIPs(TEST_DATA, 1)).toEqual(['192.0.2.0']);
  expect(getMostActiveIPs(TEST_DATA, 2)).toEqual(['192.0.2.0', '192.0.2.255']);
});
