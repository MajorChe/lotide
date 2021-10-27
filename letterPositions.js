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
  // logic to update results here
  return results;
};