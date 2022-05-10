import calculateAverage from '../util/calculateAverage'



test('calculateAverage function should return correct value', () => {
  const average = calculateAverage([1, 2, 3])
  expect(average).toBe(2)
});

