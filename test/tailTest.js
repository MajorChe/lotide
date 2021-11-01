// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];    // Initializing the array of words
// const tailArr = tail(words); // no need to capture the return value since we are not checking it.
// assertEqual(tailArr.length,2) // Testing tail function, now the length of tail is 2
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
});