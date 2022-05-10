import calculateAverage from '../util/calculateAverage'

test('calculateAverage function should return correct value', () => {
  const average = calculateAverage([1, 2, 3])
  expect(average).toBe(2)
});

test('calculateAverage should return the correct value for test case #1', () => {
  const average = calculateAverage([240, 241])
  console.log(average)
  expect(average).toBe(27239)
});

test('calculateAverage should return the correct value for test case #3', () => {
  const average = calculateAverage([26280, 27720, 27718])
  console.log(average)
  expect(average).toBe(27239)
});

