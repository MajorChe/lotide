const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
