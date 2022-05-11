const calculateAverage = (times: Array<number>):number => {
  let averageTime:number = 0
  for (let i = 0; i < times.length; i++) {
    averageTime += times[i]
  }
  averageTime = averageTime / times.length

  if (isNaN(averageTime)) {
    return 0
  }

  return Math.round(averageTime)
}

export default calculateAverage