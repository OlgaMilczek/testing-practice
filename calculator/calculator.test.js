const calculator = require('./calculator.js');

test('Add numbers', () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });

test('Add floating point numbers', () => {
    expect(calculator.add(0.1, 0.3)).toBeCloseTo(0.4);
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
    expect(calculator.multiply(2,0.5)).toEqual(1);
  });

test('Works with numbers as a string', () => {
    expect(calculator.add('1', 2)).toEqual(3);
    expect(calculator.add('1', '2')).toEqual(3);
    expect(calculator.add(1, '2')).toEqual(3);
  });

test('Subtract numbers', () => {
    expect(calculator.subtract(2,1)).toEqual(1);
    expect(calculator.subtract(10,20)).toEqual(-10);
  });

test('Divide numbers', () => {
    expect(calculator.divide(2,1)).toEqual(2);
    expect(calculator.divide(10,20)).toBeCloseTo(0.5);
  });

test('Divide by 0 throw Error', () => {
    expect(() => calculator.divide(2,0)).toThrow('Can\'t divide by 0');
  });

test('Multiply numbers', () => {
    expect(calculator.multiply(2,5)).toEqual(10);
  });

