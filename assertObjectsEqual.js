const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1,object2) {
  let output = [];
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    output.push(false);
  } else {
    for (let item in arr1) {
      let result = arr2.indexOf(arr1[item]) !== -1;
      if (result === false) {
        output.push(false);
      } else {
        for (let itemTwo in object1) {
          if (Array.isArray(object1[itemTwo])) {
            let newReturn = eqArrays(object1[itemTwo],object2[itemTwo]);
            if (newReturn === false) {
              output.push(false);
            }
          }
          else {
            if (object1[itemTwo] !== object2[itemTwo]) {
              output.push(false);
            }
          }
        }
      }
    }
  }
  if (output.length !== 0) {
    return false;
  } else {
    return true;
  }
};

const assertObjectsEqual = function(object1,object2){
  let checkObjects = eqObjects(object1,object2);
  const inspect = require('util').inspect;
    if (checkObjects === true) {
      console.log(`✅✅✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    }
  };
  //Test
  // assertObjectsEqual({a:"helloA",b:"helloB"},{a:"helloA",b:"helloB"});

