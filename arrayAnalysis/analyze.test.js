const analyze = require('./analyze');

test('Works with array', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
  });


test('Works when average is decimal', () => {
    expect(analyze([2,8,3,4,6])).toEqual({
        average: 4.6,
        min: 2,
        max: 8,
        length: 5
      });
  });

test('Works with single number array', () => {
    expect(analyze([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
      });
  });

test('Works with empty array', () => {
    expect(analyze([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
      });
  });