import { time } from 'console';
import React, { FunctionComponent, useState } from 'react'

interface RaceData {
  time: string[]
}

const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<any>([]);
  const [time, setTime] = useState<any>([])

  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    event.preventDefault();
    const timeToBeAdded = time;
    setRaceTimes([...raceTimes, timeToBeAdded])

  } 

  const handleClear = (event:React.ChangeEvent<any>) => {
    event.preventDefault()
    setRaceTimes([])
  }  

  const handleInputChange = (event:React.ChangeEvent<any>) => {
    const target = event.target;
    const name = target.name;

    setTime(event.target.value);
  }


  return (
    <section className="h-96 w-100 bg-[#F6F7F7]">
      <div className="h-full w-100 ml-8 mr-8 border-b-2 border-[#E5E7E8]">
        <p className="pt-8 font-proximaNovaRegular text-xl text-[#888A8C]">Race Time</p>
        <form>
          <input 
            type="text"
            name="time"
            onChange={handleInputChange}
            className="h-14 w-2/6 mt-2 border-[#E5E7E8] border-2 rounded-sm font-proximaNovaRegular focus:outline-none"
            placeholder="ex: 12:01 PM, DAY 3">
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
      </div>
    </section>
  )
}

export default TimeSubmit
