const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArray,expectedArray) {
  let check = eqArrays(actualArray,expectedArray);
  if (check === true) {
    console.log(`✅✅✅  Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

module.exports = assertArraysEqual;