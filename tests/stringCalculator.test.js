const add = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
  
  test('should return number for single number string', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });
  test('should return sum for two numbers separated by comma', () => {
    expect(add("1,2")).toBe(3);
    expect(add("4,5")).toBe(9);
  });
});
