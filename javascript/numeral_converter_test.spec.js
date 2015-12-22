var toRoman = require('./roman-numerals');

describe("toRoman()", function() {
  it("converts 1", function() {
    (toRoman(1)).toEqual('I');
  });

  it("converts 2", function() {
    (toRoman(2)).toEqual('II');
  });

  it("converts 3", function() {
    (toRoman(3)).toEqual('III');
  });

  it("converts 4", function() {
    (toRoman(4)).toEqual('IV');
  });

  it("converts 5", function() {
    (toRoman(5)).toEqual('V');
  });

  it("converts 6", function() {
    (toRoman(6)).toEqual('VI');
  });

  it("converts 9", function() {
    (toRoman(9)).toEqual('IX');
  });

  it("converts 27", function() {
    (toRoman(27)).toEqual('XXVII');
  });

  it("converts 48", function() {
    (toRoman(48)).toEqual('XLVIII');
  });

  it("converts 59", function() {
    (toRoman(59)).toEqual('LIX');
  });

  it("converts 93", function() {
    (toRoman(93)).toEqual('XCIII');
  });

  it("converts 141", function() {
    (toRoman(141)).toEqual('CXLI');
  });

  it("converts 163", function() {
    (toRoman(163)).toEqual('CLXIII');
  });

  it("converts 402", function() {
    (toRoman(402)).toEqual('CDII');
  });

  it("converts 575", function() {
    (toRoman(575)).toEqual('DLXXV');
  });

  it("converts 911", function() {
    (toRoman(911)).toEqual('CMXI');
  });

  it("converts 1024", function() {
    (toRoman(1024)).toEqual('MXXIV');
  });

  it("converts 3000", function() {
    (toRoman(3000)).toEqual('MMM');
  });
});