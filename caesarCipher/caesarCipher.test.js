const caesarCipher = require('./caesarCipher');

test('Works with single letter', () => {
    expect(caesarCipher('A',1)).toBe('B');
  });

test('Works with single words', () => {
    expect(caesarCipher('string',1)).toBe('tusjoh');
  });

test('Works with multiple words', () => {
    expect(caesarCipher('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  });

  test('Wraps', () => {
    expect(caesarCipher('Z',1)).toBe('A');
  });

test('Works with large shifts', () => {
    expect(caesarCipher('Hello, World!',75)).toBe('Ebiil, Tloia!');
  });

test('Works with negative shifts', () => {
    expect(caesarCipher('Mjqqt, Btwqi!',-5)).toBe('Hello, World!');
  });

  test('Works with negative large shifts', () => {
    expect(caesarCipher('Hello, World!',-29)).toBe('Ebiil, Tloia!');
  });

