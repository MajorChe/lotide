const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array,callback) {
  const result = [];
  let stopper = 0;
  for (let item in array) {
    if (callback(array[item])) {
      stopper = item;
    }
  }
  for (let value = 0; value < stopper; value++) {
    result.push(array[value]);
  }
  return result;
};

module.exports = takeUntil;

//Test cases added

// const array1 = [4,74,23,-1,0,10,2,4,5];
// const result1 = takeUntil(array1,x => x < 0);
// console.log(result1);
// console.log(assertArraysEqual(result1,[4,74,23]));

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);