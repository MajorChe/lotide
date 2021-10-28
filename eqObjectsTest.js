// works till primitive data types
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
          if (object1[itemTwo] !== object2[itemTwo]) {
            output.push(false);
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

// const ab = { a: "1", b: "2" , c: '2'};
// const ba = { b: "2", a: "1" , c: '2'};
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false