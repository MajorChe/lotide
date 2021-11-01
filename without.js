const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      newArray = source.filter(function(item) {
        return !itemsToRemove.includes(item);
      });
    }
  }
  return newArray;
};

module.exports = without;
