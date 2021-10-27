const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 3);

const countLetters = function(arr) {
  let obj = {};
  arr = arr.split('');
  for (let val of arr) {
    if (val !== ' ') {
      obj[val] = arr.filter(function(letter) {
        return letter === val;
      }).length;
    }
  }
  return obj;
};

console.log(countLetters("lighthouse in the house "));

const letterPositions = function(sentence) {
  const results = {};
  sentenceArray = sentence.split("");
  const findIndex = function(letter, str) {
    let result = [];
    let indexLetter = str.indexOf(letter);
    while (indexLetter != -1) {
        result.push(indexLetter);
        indexLetter = str.indexOf(letter, indexLetter + 1);
    }
    return result;
}
  for (let index = 0; index < sentenceArray.length; index++){
    if(sentenceArray[index] !== ' '){
      results[sentenceArray[index]] = findIndex(sentence[index],sentenceArray)
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house "));