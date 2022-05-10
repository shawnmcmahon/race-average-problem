import calculateTime from '../util/calculateTime';

test('calculateTime should return correct minutes for time #1 / test case #1', () => {
  const timeInMinutes = calculateTime(12, 0, 'PM', 1)
  expect(timeInMinutes).toBe(240)
})

test('calculateTime should return correct minutes for time #2 / test case #1', () => {
  const timeInMinutes = calculateTime(12, 1, 'PM', 1)
  expect(timeInMinutes).toBe(241)
})

test('calculateTime should return correct minutes for time #1 / test case #2', () => {
  const timeInMinutes = calculateTime(12, 0, 'AM', 2)
  expect(timeInMinutes).toBe(960)
})

test('calculateTime should return correct minutes for time #1 / test case #3', () => {
  const timeInMinutes = calculateTime(2, 0, 'PM', 19)
  expect(timeInMinutes).toBe(26280)
})

test('calculateTime should return correct minutes for time #2 / test case #3', () => {
  const timeInMinutes = calculateTime(1, 58, 'PM', 20)
  expect(timeInMinutes).toBe(27718)
})