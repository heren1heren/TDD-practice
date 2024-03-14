import caesarCipher from '../src/caesarCipher';

function ceasarCipherz(string: string, key: number = 0) {
  let newString = '';
  string.split('').forEach((char) => {
    let charCode = char.toUpperCase().charCodeAt(0);

    if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
      newString += char;
      return;
    } // current char is not a letter -> newString += 'current char' ; continue;

    for (let i = 1; i <= key; i++) {
      if (charCode >= 90) {
        charCode -= 25;
      } else {
        charCode++;
      }
    }

    const newChar = String.fromCharCode(charCode);
    console.log(newChar);
    newString += newChar;
  });
  return newString;
}
// test('caesar a letter', () => {
//   expect(ceasarCipherz('a')).toBe('A');
// });
test('caesar a harder letter with a key', () => {
  expect(ceasarCipherz('z', 0)).toBe('Z');
});

test('caesar a harder letter with a key', () => {
  expect(ceasarCipherz('z', 27)).toBe('A');
});

test('caesar a word', () => {
  expect(ceasarCipherz('abc', 0)).toBe('ABC');
});
test('caesar a sentence with space', () => {
  expect(ceasarCipherz('abc de', 26)).toBe('ABC DE');
});
console.log('!'.charCodeAt());

test('caesar a sentence with space and punctuation', () => {
  expect(ceasarCipherz('abc! de!', 26)).toBe('ABC! DE!');
});
