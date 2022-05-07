import React, { FunctionComponent, useState } from 'react'

// interface SyntheicEvent<T> {
//   currentTarget: EventTarget & T
// }

interface RaceData {
  time: string
}

const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<RaceData[]>([]);
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    setRaceTimes(event.target.value)
    console.log(raceTimes)
  } 

  const handleClear = () => {

  } 


  return (
    <section className="bg-[#F6F7F7] h-96 w-100">
      <div className="border-b-2 border-[#E5E7E8] h-full w-100 ml-8 mr-8">
        <p className="pt-8 font-proximaNovaRegular text-xl text-[#888A8C]">Race Time</p>
        <form>
          <input 
            type="text"
            name="time"
            value={time}
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
            onClick={handleClear}>  
            Clear
          </button>
        </form>
      </div>
    </section>
  )
}

export default TimeSubmit
