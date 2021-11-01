const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertEqual');
// map function actually starts

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// Test Code

// const results1 = map(words, word => word[0]);

// console.log(results1);

// console.log(assertArraysEqual(['g','c','t','m','t'],results1));