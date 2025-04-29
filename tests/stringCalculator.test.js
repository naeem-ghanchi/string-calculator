const add = require('../src/stringCalculator');
const expectedNegativesMessage = require('../utils/helper');

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
    expect(add("1,5")).toBe(6);
    expect(add("4,5")).toBe(9);
  });
  test('should return sum for multiple numbers separated by comma', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("10,20,30,40")).toBe(100);
  });
  
  test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });
  test('should support custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//-\n3-2-1")).toBe(6);
  });
  test('should throw exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow(expectedNegativesMessage("-2"));
  });
  
  test('should list all negative numbers in exception message', () => {
    expect(() => add("-1,-2,3,-4")).toThrow(expectedNegativesMessage("-1","-2","-4"));
  });
});
