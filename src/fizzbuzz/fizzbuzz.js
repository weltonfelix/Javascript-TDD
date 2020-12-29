function fizzBuzz(number) {
  if (number !== 0) {
    let finalResult = '';

    if (number % 3 === 0) {
      finalResult += 'Fizz';
    }

    if (number % 5 === 0) {
      finalResult += 'Buzz'
    }

    return finalResult;
  }

  return number;
}

module.exports = fizzBuzz;
