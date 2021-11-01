const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("check to see if middle element of [1,2,3] is [2]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });

  it("check to see if middle element of [1,2,3,4,5] is [3]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });

  it("check to see if middle element of [1,2,3,4] is [2,3]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });

  it("check to see if middle element of [1,2,3,4,5,6] is [3,4]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });

  it("check to see if middle element of [1,2] is []", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
});