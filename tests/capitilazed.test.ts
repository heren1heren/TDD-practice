import sum from '../src/jestTest';
import capitalize from '../src/capitalize';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('capitalizing one character', () => {
  expect(capitalize('a')).toBe('A');
});
test('capitalizing one word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizing one sentence', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});
test('capitalizing one sentence with random space', () => {
  expect(capitalize('  hello there, how are you today')).toBe(
    'Hello there, how are you today'
  );
});
