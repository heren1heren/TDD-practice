function analyzeArray(arr: number[]) {
  //
  const statusObject = { average: 0, length: 0, max: arr[0], min: arr[0] };
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  arr.forEach((number) => {
    sum += number;
    if (number > max) {
      console.log(number);

      max = number;
    }
    if (number < min) {
      console.log(number);

      min = number;
    }
  });
  statusObject.average = sum / arr.length;
  statusObject.max = max;
  statusObject.min = min;
  statusObject.length = arr.length;

  return statusObject;
}

test('I am lazy to think about a name', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
