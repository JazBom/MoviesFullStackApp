const { expect, test } = require('@jest/globals');
const sum = require('./sum');

test('Adds two integers', () => {
    const result = sum(4, 8);
  expect(result).toBe(12)
});

test('Adds two strings as numbers', () => {
    const result = sum('4', '8');
  expect(result).toBe(12);
});

test('Error when passing array in 1st parameter', () => {
  const result = sum([3, 4], 9);
  expect(result).toBe('Error');
});

test('Error when passing array in 2nd parameter', () => {
    const result = sum(9, [4, 8]);
    expect(result).toBe('Error');
  });