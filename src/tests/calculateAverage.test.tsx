import calculateAverage from '../util/calculateAverage'

test('calculateAverage function should return correct value', () => {
  const average = calculateAverage([1, 2, 3])
  expect(average).toBe(2)
})

test('calculateAverage should return 0 if the raceTimes array is empty', () => {
  const average = calculateAverage([])
  expect(average).toBe(0)
})

test('calculateAverage should return the correct value for test case #1', () => {
  const average = calculateAverage([240, 241])
  expect(average).toBe(241)
})

test('calculateAverage should return the correct value for test case #2', () => {
  const average = calculateAverage([960])
  expect(average).toBe(960)
})

test('calculateAverage should return the correct value for test case #3', () => {
  const average = calculateAverage([26280, 27720, 27718])
  expect(average).toBe(27239)
})

