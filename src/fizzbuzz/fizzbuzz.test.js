const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz Puzzle', () => {
  test("should return 0 when passed 0", () => {
    const result = fizzBuzz(0);

    expect(result).toEqual(0);
  });

  test("should return 7 when passed 7", () => {
    const result = fizzBuzz(0);

    expect(result).toEqual(0);
  });

  test('should return Fizz when passed 3', () => {
    const result = fizzBuzz(3);
    
    expect(result).toEqual('Fizz');
  });

  test('should return Buzz when passed 5', () => {
    const result = fizzBuzz(5);
    
    expect(result).toEqual('Buzz');
  });

  test('should return Buzz when passed 10', () => {
    const result = fizzBuzz(10);
    
    expect(result).toEqual('Buzz');
  });

  test('should return FizzBuzz when passed 15', () => {
    const result = fizzBuzz(15);
    
    expect(result).toEqual('FizzBuzz');
  });
});
