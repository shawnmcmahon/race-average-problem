import calculateTime from '../util/calculateTime';

test('calculateTime should return correct minutes for time #1 / test case #1', () => {
  const timeInMinutes = calculateTime(12, 0, 'PM', 1)
  expect(timeInMinutes).toBe(240)
});

test('calculateTime should return correct minutes for time #2 / test case #1', () => {
  const timeInMinutes = calculateTime(12, 1, 'PM', 1)
  expect(timeInMinutes).toBe(241)
});