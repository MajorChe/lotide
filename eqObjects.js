const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;
//Test

// const ab = { a: "1", b: "2" , c: '2'};
// const ba = { b: "2", a: "1" , c: '2'};
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false