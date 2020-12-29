const counterVogal = require('./counterVogal');

describe('counterVogal', () => {
  test('should return an error when passed 1', () => {
    const result = counterVogal(1);

    expect(result).toBeInstanceOf(Error);
  });

  test('should return an error when passed true', () => {
    const result = counterVogal(true);

    expect(result).toBeInstanceOf(Error);
  });

  test('should return an error when passed an object', () => {
    const result = counterVogal({ text: 'My Text' });

    expect(result).toBeInstanceOf(Error);
  });

  test('should return 3 when passed "house"', () => {
    const result = counterVogal('House');

    expect(result).toEqual(3);
  });

  test('should return 3 when passed "HOUSE"', () => {
    const result = counterVogal('HOUSE');

    expect(result).toEqual(3);
  });

  test('should return 5 when passed "This is my house"', () => {
    const result = counterVogal('This is my house');

    expect(result).toEqual(5);
  });

  test('should return 5 when passed "THIS IS MY HOUSE"', () => {
    const result = counterVogal('THIS IS MY HOUSE');

    expect(result).toEqual(5);
  });
});