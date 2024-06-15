const stringCalculator = require('../AddCalculator');

test('should return 0 for an empty string', () => {
  expect(stringCalculator('')).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(stringCalculator('1')).toBe(1);
  expect(stringCalculator('5')).toBe(5);
});

test('should return the sum of two numbers', () => {
  expect(stringCalculator('1,2')).toBe(3);
  expect(stringCalculator('4,5')).toBe(9);
});

test('should return the sum of multiple numbers', () => {
  expect(stringCalculator('1,2,3')).toBe(6);
  expect(stringCalculator('4,5,6,7')).toBe(22);
});

test('should handle new lines between numbers', () => {
  expect(stringCalculator('1\n2,3')).toBe(6);
  expect(stringCalculator('4\n5\n6')).toBe(15);
});

test('should handle different delimiters', () => {
  expect(stringCalculator('//;\n1;2')).toBe(3);
  expect(stringCalculator('//|\n4|5|6')).toBe(15);
  expect(stringCalculator('//#\n2#3#4')).toBe(9);
});

test('should throw an exception for negative numbers', () => {
  expect(() => stringCalculator('1,-2,3')).toThrow(
    'negative numbers not allowed: -2',
  );
  expect(() => stringCalculator('1,2,-3,-4')).toThrow(
    'negative numbers not allowed: -3,-4',
  );
  expect(() => stringCalculator('//;\n1;-2;3')).toThrow(
    'negative numbers not allowed: -2',
  );
});
