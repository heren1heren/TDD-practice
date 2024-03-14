import calculator from '../src/calculator';

test('calculator add test', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator sub test', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
test('calculator divide test', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});
test('calculator mul test', () => {
  expect(calculator.multiply(5, 2)).toBeCloseTo(10);
});
