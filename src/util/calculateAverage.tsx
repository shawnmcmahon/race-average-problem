const calculateAverage = (times: Array<number>) => {
  let averageTime = 0;
  for (let i = 0; i < times.length; i++) {
    averageTime += times[i]
  }
  averageTime = averageTime / times.length

  return Math.round(averageTime)
}

export default calculateAverage