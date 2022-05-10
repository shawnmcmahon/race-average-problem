import React, { FunctionComponent, useState, useEffect } from 'react'
import Results from './Results';
import calculateTime from '../util/calculateTime';


const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<Array<string>>([])
  const [time, setTime] = useState<string>('')
  const [timesInMinutes, setTimesInMinutes] = useState<Array<number>>([])
  const [averageTimeInMinutes, setAverageTimeInMinutes] = useState<number>(0)
  const [warning, setWarning] = useState<string>('')


  useEffect(() => {
    if (raceTimes.length > 1) {
      setAverageTimeInMinutes(calculateAverage(timesInMinutes))
    }

  }, [timesInMinutes])

  
  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    event.preventDefault()
    setRaceTimes([...raceTimes, time])
    if (!time.includes(',') || !time.includes(':') || !time.includes('DAY')) {
      setWarning('Please make sure format matches placeholder text')
    } else {
      let input = time.split(',')
      let hours = parseInt(input[0].split(':')[0])
      let minutes = parseInt(input[0].split(':')[1].split(' ')[0]) 
      let period = input[0].split(':')[1].split(' ')[1]
      let days = parseInt(input[1].split(' DAY ')[1])
      const convertedTime = calculateTime(hours, minutes, period, days)
      setTimesInMinutes([...timesInMinutes, convertedTime])
      setAverageTimeInMinutes(calculateAverage(timesInMinutes))
    }

  } 

  const calculateAverage = (times: Array<number>) => {
    let averageTime = 0;
    for (let i = 0; i < times.length; i++) {
      averageTime += times[i]
    }
    averageTime = averageTime / times.length

    return Math.round(averageTime)
  }

  const handleClear = (event:React.ChangeEvent<any>): void  => {
    event.preventDefault()
    setRaceTimes([])
    setTime('')
    setTimesInMinutes([])
    setAverageTimeInMinutes(0)
    setWarning('')
  }  

  const handleInputChange = (event:React.ChangeEvent<any>): void  => {
    setTime(event.target.value)
  }


  return (
    <div>
      <section className="h-96 w-100 bg-[#F6F7F7]">
        <div className="h-full w-100 ml-8 mr-8 border-b-2 border-[#E5E7E8]">
          <p className="pt-8 font-proximaNovaRegular text-xl text-[#888A8C]">Race Time</p>
          <form>
            <input 
              className="h-12 w-2/6 max-w-lg mt-2 pl-4 border-[#E5E7E8] border-2 rounded-sm font-proximaNovaRegular focus:outline-none"
              onChange={handleInputChange}
              type="text"
              name="time"
              value={time}
              placeholder="ex: 08:01 PM, DAY 3">
            </input>
            <button 
              className="h-14 w-36 sm-12 ml-6 bg-[#2A5BD7] rounded-md font-proximaNovaRegular text-[#FFFFFF] text-xl"
              onClick={(event) => handleSubmit(event)}>
              Submit
            </button>
            <button 
              className="h-14 w-36 sm-12 ml-6 bg-[#EB5821] rounded-md font-proximaNovaRegular text-[#FFFFFF] text-xl"
              onClick={(event) => handleClear(event)}>  
              Clear
            </button>
            <p className="pt-8 font-proximaNovaRegular text-md text-[#EB5821]">{warning}</p>
          </form>
        </div>
      </section>
      <Results 
        raceTimes={raceTimes}
        timesInMinutes={timesInMinutes}
        averageTimeInMinutes={averageTimeInMinutes}
      />
    </div>
  )
}

export default TimeSubmit
