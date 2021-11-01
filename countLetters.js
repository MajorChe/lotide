const assertEqual = require('./assertEqual');

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

module.exports = countLetters;
// Test code
// console.log(countLetters("lighthouse in the house "));