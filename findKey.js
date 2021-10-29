const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 3);

const findKey = function(object,callback){
  let result = [];
  for (let item in object){
    if(callback(object[item])) {
      result.push(item);
    }
  }
  return result[0];
};

const results1 =findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
},x => x['stars'] === 2);
assertEqual(results1,'noma');