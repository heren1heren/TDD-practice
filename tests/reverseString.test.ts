import reverseString from '../src/reverseString';

test('reverse a string', () => {
  expect(reverseString('he')).toBe('eh');
});
test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverse a sentence', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});
