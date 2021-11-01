const assert = require('chai').assert;
const head = require('../head');

describe("check to see if the head functioin is working.", () => {
  it("returns 1 for [1,2,3] ", () =>{
    assert.strictEqual(head([1,2,3]),1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']),'5');
  });

  it("returns 'Hello' for ['Hello', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['Hello', 'lighthouse', 'labs']),'Hello');
  });
});