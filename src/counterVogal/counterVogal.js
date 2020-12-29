function counterVogal(text) {
  if (typeof text !== 'string') {
    return new Error('Text must be a string');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let countVowels = 0;

  for (letter of text) {
    if (vowels.includes(letter.toLowerCase())){
      countVowels++;
    }
  }

  return countVowels;
}

module.exports = counterVogal;