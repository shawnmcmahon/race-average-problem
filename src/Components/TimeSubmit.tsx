import { FunctionComponent, useState, useEffect, ChangeEvent } from 'react'
import Results from './Results'
import calculateTime from '../util/calculateTime'
import calculateAverage from '../util/calculateAverage'

const TimeSubmit:FunctionComponent = () => {
  const [raceTimes, setRaceTimes] = useState<Array<string>>([])
  const [time, setTime] = useState<string>('')
  const [timesInMinutes, setTimesInMinutes] = useState<Array<number>>([])
  const [averageTimeInMinutes, setAverageTimeInMinutes] = useState<number>(0)
  const [warning, setWarning] = useState<string>('')

  useEffect(() => {
      setAverageTimeInMinutes(calculateAverage(timesInMinutes))

  }, [timesInMinutes])

  const handleSubmit = (event:ChangeEvent<any>): void => {
    event.preventDefault()
    setWarning('')
    if (!time.includes(',') || !time.includes(':') || !time.includes('DAY')) {
      setWarning('Please confirm time format matches placeholder text')
    } else {
      setRaceTimes([...raceTimes, time])
      let input = time.split(',')
      let hours:number = parseInt(input[0].split(':')[0])
      let minutes:number  = parseInt(input[0].split(':')[1].split(' ')[0]) 
      let period:string = input[0].split(':')[1].split(' ')[1]
      let days:number = parseInt(input[1].split(' DAY ')[1])
      const convertedTime:number = calculateTime(hours, minutes, period, days)
      setTimesInMinutes([...timesInMinutes, convertedTime])
      setAverageTimeInMinutes(calculateAverage(timesInMinutes))
    }
    setTime('')

  } 

  const handleClear = (event:ChangeEvent<any>): void  => {
    event.preventDefault()
    setRaceTimes([])
    setTime('')
    setTimesInMinutes([])
    setAverageTimeInMinutes(0)
    setWarning('')
  }  

  const handleInputChange = (event:ChangeEvent<any>): void  => {
    setTime(event.target.value)
  }

  return (
    <div>
      <section className="md:flex md:flex-col md:self-center h-96 w-100 bg-grayDark">
        <div className="h-full w-100 ml-8 mr-8 border-b-2 border-grayBorder ">
          <p className="pt-8 font-proximaNovaRegular text-xl text-grayDarker" data-cy="input-label">Race Time</p>
          <form className='flex flex-col md:flex-row'>
            <input 
              className="h-14 w-3/6 max-w-lg mt-2 pl-4 border-grayBorder border-2 rounded-sm font-proximaNovaRegular focus:outline-none"
              onChange={handleInputChange}
              type="text"
              name="time"
              value={time}
              placeholder="ex: 08:01 PM, DAY 3"
              data-cy="input">
            </input>
            <button 
              className="h-14 w-36 sm-12 ml-6 m-2 bg-blue rounded-md font-proximaNovaRegular text-white text-xl"
              onClick={(event) => handleSubmit(event)}
              data-cy="submit-button">
              Submit
            </button>
            <button 
              className="h-14 w-36 sm-12 ml-6 m-2 bg-orange rounded-md font-proximaNovaRegular text-white text-xl"
              onClick={(event) => handleClear(event)}
              data-cy="clear-button">  
              Clear
            </button>
          </form>
          <p className="pt-8 font-proximaNovaRegular text-md text-orange" data-cy="warning">{warning}</p>
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