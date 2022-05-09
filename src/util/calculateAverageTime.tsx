const calculateAverageTime = (times:Array<any>) => {
  let totalHours:number = 0; 
  let averageTime:number = 0;
  let averageTimeInMinutes:number = 0;


  // The basic premise of my solution is to convert the time into military time,
  // to check for edge cases with 1 and 2 day race times, and calculate the average.    

  // for loop through the times array 
  for (let i = 0; i < times.length; i++) {
  
    
    // Split the time array by spaces to create a specific time arrays
      times[i] = times[i].split(' ')
    // Create a sub array in index 0 for the clock time format
      times[i][0] = times[i][0].split(':')
    // Reassign strings into numbers 
      times[i][0][0] = parseInt(times[i][0][0])
      times[i][0][1] = parseInt(times[i][0][1])
      times[i][3] = parseInt(times[i][3])
      
    // If the time of day is equal to pm and the hour is not 12
    if (times[i][0][0] !== 12 && times[i][1].includes('P')) {
      // then we need to turn the time into military time by adding 12 to the hour
        times[i][0][0] += 12
        // If the day is equal to 1 and the hour is not 12
    } else if (times[i][0][0] !== 12 && times[i][3] === 1 ) {
    // then we subtract 8 hours
      times[i][0][0] -= 8
    } else if (times[i][3] === 1 && times[i][1].includes('P')) {
      times[i][0][0] -= 8
    } 

  // if the time is greater than 1 day and the time of day is PM
    if (times[i][3] > 1 && times[i][1].includes('P')) {
      // then we add 16 hours (because that is the entire amount of hours in day 1)
      times[i][0][0] += 16   
    } else if (times[i][3] > 1 && times[i][0][0] === 12) {
      times[i][0][0] += 4
    } else if (times[i][3] > 1 && times[i][1].includes('A')) {
      times[i][0][0] += 16
    }

  // If time is longer than 2 days, add the remaining amount of hours for each day
    if (times[i][3] > 2) {
      times[i][0][0] += ((times[i][3] - 2) * 24)
    }
    
  // If the minutes are not 0, then turn seconds into fractions of hours
    if (times[i][0][1] !== 0) {
      // Divide by number of minutes in an hour. Round to 3rd decimal point. Change back to a float
      times[i][0][1] = parseFloat((times[i][0][1] / 60).toFixed(3))
    }
  
  // Add that amount of hours to a variable called total hours 
  totalHours += times[i][0][0];
  totalHours += times[i][0][1]
  
  // Calculate the average time
  averageTime = totalHours / times.length

  // Convert to minutes and round
  averageTimeInMinutes = Math.round(averageTime * 60)


  console.log(averageTime)

  }

  console.log('average has run')
  return averageTimeInMinutes;
  
}

export default calculateAverageTime;