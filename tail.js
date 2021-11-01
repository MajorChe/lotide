const assertEqual = require('./assertEqual');

const tail = function(array) {        // Tail function is defined
  const newTail = array.slice(1);
  return newTail;
};

module.exports = tail;