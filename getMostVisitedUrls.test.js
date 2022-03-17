const getMostVisitedUrls = require('./getMostVisitedUrls');

const TEST_DATA = [
  { web: 'google.com' },
  { web: 'google.com' },
  { web: 'google.com' },
  { web: 'amazon.com' },
  { web: 'amazon.com' },
];

// Should return an error if no data is passed
test('getMostVisitedUrls returns an error if no data is passed', () => {
  expect(() => getMostVisitedUrls()).toThrow('No data was passed');
});

// Should throw an error if the data is not an array
test('getMostVisitedUrls returns an error if the data is not an array', () => {
  expect(() => getMostVisitedUrls(123)).toThrow('The data must be an array');
});

// Should throw an error if the number is not a number
test('getMostVisitedUrls returns an error if the number is not a number', () => {
  expect(() => getMostVisitedUrls([], '123')).toThrow(
    'The number must be a number'
  );
});

// Should return the correct number of web addresses
test('getMostVisitedUrls returns the correct number of web addresses', () => {
  expect(getMostVisitedUrls(TEST_DATA, 1)).toEqual(['google.com']);
  expect(getMostVisitedUrls(TEST_DATA, 2)).toEqual([
    'google.com',
    'amazon.com',
  ]);
});
