const calculateTime = (hours: any, minutes: any, period: string, days: number) => {
  let totalTime = 0;

  // Count the amount of hours
  if (hours === 12 && period === 'PM' && days === 1 ) {
    totalTime += hours
  } else if (hours !== 12 && period === 'PM' && days === 1) {
    totalTime += hours
  } else if (period === 'AM' && days === 1) {
    totalTime += (hours + 12)
  }

  // Check for edge cases for races that start outside day 1
  if (hours === 12 && period === 'AM' && days > 1) {
    totalTime += 24
  } else if (hours === 12 && period === 'PM' && days > 1) {
    totalTime += 36
  } else if (hours !== 12 && period === 'PM' && days > 1) {
    totalTime += (hours + 36)
  } else if (hours !== 12 && period === 'AM' && days > 1) {
    totalTime += (hours + 24)
  }

  // Add a full day for each time longer than 2 days
  if (days > 2) {
    totalTime += ((days - 2) * 24)
  }

  
  // Convert to minutes
  totalTime *= 60 
  // Add minutes from original time
  totalTime += minutes 
  // Account for the start of the race at 8am by subtracting 8 hours
  totalTime -= 480
  
  return totalTime
  
}

export default calculateTime