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

const assertArraysEqual = function (actualArray,expectedArray){
  let check = eqArrays(actualArray,expectedArray);
  if (check === true) {
    console.log(`✅✅✅  Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};
// map function actual;ly starts

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);

console.log(results1);