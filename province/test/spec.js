const { expect } = require("chai");
const Province = require("../src/Province");
const sampleProvinceData = require("../src/sampleProvinceData");
describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it('shortfail', () => {
    expect(asia.shortfail).equal(5);
  });
  it('profit', () => {
    expect(asia.profit).equal(230);
  });
  it('change production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfail).equal(-6);
    expect(asia.profit).equal(292);
  });
  it('zero demand', () => {
    asia.demand = 0;
    expect(asia.shortfail).equal(-25);
    expect(asia.profit).equal(0);
  });
  it('nagative demand', () => {
    asia.demand = -1;
    expect(asia.shortfail).equal(-26);
    expect(asia.profit).equal(-10);
  });
  it('empty string demand', () => {
    asia.demand = '';
    expect(asia.shortfail).NaN;
    expect(asia.profit).NaN;
  });
});

describe('no producers', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data);
  });
  it('shortfall', () => {
    expect(noProducers.shortfail).equal(30);
  });
  it('profit', () => {
    expect(noProducers.profit).equal(0);
  });
});

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20
    }
    const prov = new Province(data);
    expect(prov.shortfail).equal(0);
  });
});