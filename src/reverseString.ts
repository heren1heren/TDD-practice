export default function reverseString(string: string) {
  //
  const splittedString = string.trim().split('');
  console.log(splittedString);
  const newArr: string[] = [];
  splittedString.forEach((element) => {
    newArr.unshift(element);
  });

  return newArr.join('');
}
