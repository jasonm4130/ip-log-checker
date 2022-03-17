const gatherData = require('./gatherData');

// Test that gather data returns an error if no glob is passed
test('gatherData returns an error if no glob is passed', () => {
  expect(() => gatherData()).toThrow('No glob was passed');
});

// Should throw an error if not passed a string
test('gatherData returns an error if the glob is not a string', () => {
  expect(() => gatherData(123)).toThrow('The glob must be a string');
});

// Should return correct ip and web address
test('gatherData returns an array of objects', () => {
  const data = gatherData(
    '72.44.32.10 - - [09/Jul/2018:15:48:07 +0200] "GET / HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0" junk extra'
  );
  expect(data).toEqual([{ ip: '72.44.32.10', web: '/' }]);
});
