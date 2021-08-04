var assert = require("assert");
var expect = require("chai").expect;
var { or, nor, and, nand, xor, xnor, not, adder } = require("../index");

describe("index", function () {
  it("Idempotenz AND", function () {
    let a = true;
    let result = and(a, a);
    expect(result).to.be.eq(a);
  });

  it("Idempotenz OR", function () {
    let a = true;
    let result = or(a, a);
    expect(result).to.be.eq(a);
  });

  it("Komplemente AND", function () {
    let a = true;
    let result = and(a, not(a));
    expect(result).to.be.eq(false);
  });

  it("Komplemente OR", function () {
    let a = true;
    let result = or(a, not(a));
    expect(result).to.be.eq(true);
  });

  it("Neutrale Elemente AND", function () {
    let a = true;
    let result = and(true, a);
    expect(result).to.be.eq(a);
  });

  it("Neutrale Elemente OR", function () {
    let a = true;
    let result = or(false, a);
    expect(result).to.be.eq(a);
  });

  it("Auslöschung AND", function () {
    let a = true;
    let result = and(false, a);
    expect(result).to.be.eq(false);
  });

  it("Auslöschung OR", function () {
    let a = true;
    let result = or(true, a);
    expect(result).to.be.eq(true);
  });

  it("Absorptionsgesetz #2", function () {
    let a = true;
    let b = false;
    let result = or(a, and(a, b));
    expect(result).to.be.eq(a);
  });

  it("Absorptionsgesetz #1", function () {
    let a = true;
    let b = true;
    let result = or(a, and(a, b));
    expect(result).to.be.eq(a);
  });
});
