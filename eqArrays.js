const assertEqual = require('./assertEqual');

const eqArrays = (arr1,arr2) => {      // eqArrays is a function that takes in 2 arrays as parameters and checks if they are identical or not"
  let output = [];                      // output stores false if the comaparision of both arrays fail.
  if (arr1.length !== arr2.length) {    // comapares the length of the arrays.
    output.push(false);
  } else {
    for (let val in arr1) {
      if (arr1[val] !== arr2[val]) {  //comapares the value of each element in the array.
        output.push(false);
      }
    }
  }
  if (output.length !== 0) {      // if there is a false in the output array then the arrays are not equal.
    return false;
  } else {
    return true;
  }
};

module.exports = eqArrays;

