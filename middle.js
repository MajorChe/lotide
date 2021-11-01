const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(middleIndex - 1,middleIndex + 1);
  } else {
    return arr.slice(middleIndex,middleIndex + 1);
  }
};

module.exports  = middle;























