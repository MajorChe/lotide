const eqArrays = function(arr1,arr2) {
  let output = [];
  if (arr1.length !== arr2.length) {
    output.push(false);
  } else {
    for (let val in arr1) {
      if (arr1[val] !== arr2[val]) {
        output.push(false);
      }
    }
  }
  if (output.length !== 0) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(actualArray,expectedArray) {
  let check = eqArrays(actualArray,expectedArray);
  if (check === true) {
    console.log(`✅✅✅  Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

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

