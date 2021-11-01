const countLetters = require('./countLetters');
const assertArraysEqual = require('./assertEqual');

const letterPositions = function(sentence) {
  const results = {};
  let sentenceArray = sentence.split("");
  const findIndex = function(letter, str) {
    let result = [];
    let indexLetter = str.indexOf(letter);
    while (indexLetter !== -1) {
      result.push(indexLetter);
      indexLetter = str.indexOf(letter, indexLetter + 1);
    }
    return result;
  };
  for (let index = 0; index < sentenceArray.length; index++) {
    if (sentenceArray[index] !== ' ') {
      results[sentenceArray[index]] = findIndex(sentence[index],sentenceArray);
    }
  }
  return results;
};

module.exports = letterPositions;