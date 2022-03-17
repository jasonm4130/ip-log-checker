const getMostOccourances = require('./getMostOccourances');

const TEST_DATA = [
  { ip: '192.168.0.1', web: '/' },
  { ip: '192.168.0.1', web: '/' },
  { ip: '192.168.0.1', web: '/' },
  { ip: '192.168.0.1', web: '/' },
  { ip: '192.168.0.2', web: '/home' },
  { ip: '192.168.0.2', web: '/home' },
  { ip: '192.168.0.2', web: '/home' },
  { ip: '192.168.0.3', web: '/contact' },
  { ip: '192.168.0.3', web: '/contact' },
  { ip: '192.168.0.4', web: '/about' },
];

// Should throw an error if no data is passed
test('getMostOccourances returns an error if no data is passed', () => {
  expect(() => getMostOccourances()).toThrow('No data was passed');
});

// Should throw an error if the data is not an array
test('getMostOccourances returns an error if the data is not an array', () => {
  expect(() => getMostOccourances(123)).toThrow('The data must be an array');
});

// Should throw an error if property is not a string
test('getMostOccourances returns an error if the property is not a string', () => {
  expect(() => getMostOccourances([], 123)).toThrow(
    'The property must be a string'
  );
});

// Should throw an error if itemsToReturn is not a number
test('getMostOccourances returns an error if the itemsToReturn is not a number', () => {
  expect(() => getMostOccourances([], 'url', '3')).toThrow(
    'The itemsToReturn must be a number'
  );
});

// Should return an array the correct length
test('getMostOccourances returns the correct number of ip addresses', () => {
  expect(getMostOccourances(TEST_DATA, 'ip', 3)).toHaveLength(3);
  expect(getMostOccourances(TEST_DATA, 'ip', 2)).toHaveLength(2);
  expect(getMostOccourances(TEST_DATA, 'ip', 4)).toHaveLength(4);
});

// Should return the correct ip addresses
test('getMostOccourances returns the correct ip addresses', () => {
  expect(getMostOccourances(TEST_DATA, 'ip', 3)).toEqual([
    '192.168.0.1',
    '192.168.0.2',
    '192.168.0.3',
  ]);
});
