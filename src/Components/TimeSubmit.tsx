import React, { FunctionComponent, useState } from 'react'
import Results from './Results';
import calculateAverageTime from '../util/calculateAverageTime';
import calculateRaceTime from '../util/calculateRaceTime';


const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<any>([])
  const [time, setTime] = useState<string>('')
  const [timeInHours, setTimeInHours] = useState<number>(0)
  const [averageTimeInMinutes, setAverageTimeInMinutes] = useState<number>(0);
  const [averageTimeInHours, setAverageTimeInHours] = useState<number>(0)

  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    event.preventDefault()
    const timeToBeAdded = time
    // checkForFormatIssues(timeToBeAdded)
    setRaceTimes([...raceTimes, timeToBeAdded])
    setAverageTimeInMinutes(calculateAverageTime(raceTimes));
    setAverageTimeInHours(Math.round(averageTimeInMinutes / 60));
    setTimeInHours(calculateRaceTime(timeToBeAdded))
  } 

  const handleClear = (event:React.ChangeEvent<any>): void  => {
    event.preventDefault()
    setRaceTimes([])
    setAverageTimeInMinutes(0)
    setAverageTimeInHours(0)
  }  

  const handleInputChange = (event:React.ChangeEvent<any>): void  => {
    setTime(event.target.value);
  }

  // Having trouble with the Regex format for the date

  // const checkForFormatIssues = (input: any) => {
  //   const regex =/^[0-1]{1}[0-9]{2}:[0-9]{2}\s[A-Z]{2},\s[A-Z]{3}\s[0-9]{1}/
  // }


  return (
    <>
      <section className="h-96 w-100 bg-[#F6F7F7]">
        <div className="h-full w-100 ml-8 mr-8 border-b-2 border-[#E5E7E8]">
          <p className="pt-8 font-proximaNovaRegular text-xl text-[#888A8C]">Race Time</p>
          <form>
            <input 
              className="h-12 w-2/6 max-w-lg mt-2 pl-4 border-[#E5E7E8] border-2 rounded-sm font-proximaNovaRegular focus:outline-none"
              onChange={handleInputChange}
              type="text"
              name="time"
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
          <section className="bg-[#FFFFFF] h-28 w-48 mt-2 flex flex-col justify-center rounded-sm font-proximaNovaRegular">
            <p className="text-center text-lg text-[#00000">{averageTimeInMinutes} minutes <br/> {averageTimeInHours} hours</p>
          </section>
        </div>
      </section>
      <Results 
        raceTimes={raceTimes}
        averageTimeInHours={averageTimeInHours}
        timeInHours={timeInHours}
      />
    </>
  )
}

export default TimeSubmit
