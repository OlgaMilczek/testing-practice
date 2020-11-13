const reverseString = require('./reverseString');


test('Reverse string', () => {
    expect(reverseString('string')).toBe('gnirts');
  });

test('Works with multi words', () => {
    expect(reverseString('multi string')).toBe('gnirts itlum');
  });

test('Works with symbols', () => {
    expect(reverseString('multi string!')).toBe('!gnirts itlum');
  });

test('Works with numbers', () => {
    expect(reverseString('123! ABC!')).toBe('!CBA !321');
  });

  test('Works with empty string', () => {
    expect(reverseString('')).toBe('');
  });


