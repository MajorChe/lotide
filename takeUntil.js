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

const takeUntil = function(array,callback){
  const result = [];
  let stopper = 0;
  for (let item in array){
    if(callback(array[item])){
      stopper = item;
    }
  }
  for (let value = 0; value < stopper; value++){
    result.push(array[value]);
  }
  return result;
}

//Test cases added

// const array1 = [4,74,23,-1,0,10,2,4,5];
// const result1 = takeUntil(array1,x => x < 0);
// console.log(result1);
// console.log(assertArraysEqual(result1,[4,74,23]));

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);