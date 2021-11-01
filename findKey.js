const assertEqual = require('./assertEqual');

const findKey = function(object,callback){
  let result = [];
  for (let item in object){
    if(callback(object[item])) {
      result.push(item);
    }
  }
  return result[0];
};

module.exports = findKey;

// Test code

// const results1 =findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// },x => x['stars'] === 2);
// assertEqual(results1,'noma');