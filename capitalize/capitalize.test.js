const capitalize = require('./capitalize');

test('Works with lowercase string', () => {
    expect(capitalize('string')).toBe('String');
  });

test('Works with sentence', () => {
    expect(capitalize('works with sentence')).toBe('Works with sentence');
  });

test('Works with uppercase string', () => {
    expect(capitalize('STRING')).toBe('STRING');
  });

test('Works with empty string', () => {
    expect(capitalize('')).toBe('');
  });

test('Works with numbers', () => {
    expect(capitalize('123')).toBe('123');
  }); 