# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @majorche/lotide`

**Require it:**

`const _ = require('@majorche/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: takes two arrays as parameters and compares them to return true or false
* `assertObjectsEqual(...)`: takes two objects as parameters and compares them to return true or false
* `assertEqual(...)`: takes two primitive data types as arguments compares them to return true or false
* `countLetters()` : counts the numbers of letters in the given array.
* `countOnly()` : takes in 2 parameters and returns the count of 2nd parameter in the first parameter.
* `findKey()` : takes in an object and a callback function to return all the keys corresponding to the value in the object.
* `findKeyByValue()` : takes in an object and a callback function to return the key corresponding to the value in the object.
* `flatten()` : takes in a nested array and returns a plain unnested array.
* `head()` : takes in an an array and returns the first element of the array.
* `letterPositions()` : takes in an array and an element of the array to return the indexes of the element in the array.
* `map()` : takes in an array to return the first letters of each element in that array.
* `middle()` : takes an array as an argument to returns the middle element of the array. If the size of the array is even all elements in the middle are returned. If the size of the array is odd then  only one element is returned.
* `tail()` : takes an array as an argument to returns all the elements except the first element of the array to represent the tail.
* `takeUntil()` : takes an array and a callback function as arguments to return the elements according to the callback.
* `without()` : takes an array and a string representing the element of the array as arguments to return an array without the element passed as the second parameter.