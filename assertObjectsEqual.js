const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays')

const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(object1,object2){
  let checkObjects = eqObjects(object1,object2);
  const inspect = require('util').inspect;
    if (checkObjects === true) {
      console.log(`✅✅✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    }
  };

  module.exports = assertObjectsEqual;
  
  //Test
  // assertObjectsEqual({a:"helloA",b:"helloB"},{a:"helloA",b:"helloB"});

