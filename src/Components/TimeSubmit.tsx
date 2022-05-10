import React, { FunctionComponent, useState, useEffect } from 'react'
import Results from './Results';
import calculateAverageTime from '../util/calculateAverageTime';
import calculateRaceTime from '../util/calculateRaceTime';
import { timeEnd } from 'console';


const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<any>([])
  const [time, setTime] = useState<string>('')



  const [formattedRaceTimes, setFormattedRaceTimes] = useState<any>([])
  const [timeInHours, setTimeInHours] = useState<number>(0)
  const [timeInMinutes, setTimeInMinutes] = useState<number>(0)
  const [averageTimeInMinutes, setAverageTimeInMinutes] = useState<number>(0)
  const [averageTimeInHours, setAverageTimeInHours] = useState<number>(averageTimeInMinutes / 60)



  
  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    event.preventDefault()
    let input = time.split(',')
    let hours = parseInt(input[0].split(':')[0])
    let minutes = parseInt(input[0].split(':')[1].split(' ')[0]) 
    let period = input[0].split(':')[1].split(' ')[1]
    let days = parseInt(input[1].split(' DAY ')[1])


    console.log(input)
    console.log('hours', hours)
    console.log('minutes', minutes)
    console.log('period', period)
    console.log('days', days)

  } 

  const handleClear = (event:React.ChangeEvent<any>): void  => {
    event.preventDefault()
    setRaceTimes([])
    setAverageTimeInMinutes(0)
    setAverageTimeInHours(0)
    setTimeInHours(0)
    setTimeInMinutes(0)
    setTime('')
  }  

  const handleInputChange = (event:React.ChangeEvent<any>): void  => {
    setTime(event.target.value)
  }

  // Having trouble with the Regex format for the date

  // const checkForFormatIssues = (input: any) => {
  //   const regex =/^[0-1]{1}[0-9]{2}:[0-9]{2}\s[A-Z]{2},\s[A-Z]{3}\s[0-9]{1}/
  // }


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
          </form>
            <p className="pt-8 mt-4 font-proximaNovaRegular text-xl text-[#888A8C]">Average Time</p>
          <section className="bg-[#F6F7F7] h-28 w-48 mt-2 flex flex-col justify-center rounded-sm font-proximaNovaRegular">
            <p className="text-center text-lg text-[#00000]">
              {raceTimes.length === 1 ? timeInMinutes + " minutes" : Math.round(averageTimeInMinutes) + " minutes"} <br/>
              {/* {averageTimeInMinutes === 0 ? timeInHours + " hours" : averageTimeInHours + " hours"} */}
            </p>
          </section>
        </div>
      </section>
      <Results 
        raceTimes={raceTimes}
        averageTimeInHours={averageTimeInHours}
        timeInHours={timeInHours}
      />
    </div>
  )
}

export default TimeSubmit
