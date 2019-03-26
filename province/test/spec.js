const assert = require("assert");
const Province = require("../src/Province");
const sampleProvinceData = require("../src/sampleProvinceData");
describe('province', () => {
  it('shortfail', () => {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfail, 5);
  })
})