const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];    // Initializing the array of words
const tailArr = tail(words); // no need to capture the return value since we are not checking it.
assertEqual(tailArr.length,2) // Testing tail function, now the length of tail is 2
assertEqual(words.length, 3); // original array should still have 3 elements!