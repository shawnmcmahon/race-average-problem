import {FunctionComponent} from 'react'
import Time from './Time'

interface resultsPropTypes {
  raceTimes: Array<string>,
  timesInMinutes: Array<number>,
  averageTimeInMinutes: number
}

const Results:FunctionComponent<resultsPropTypes> = ({raceTimes, timesInMinutes, averageTimeInMinutes}) => {
  const mapRaceTimesToResults = (raceTimes: Array<string>) => {
    const mappedTimes = raceTimes.map((raceTime: string, index: number) => {
      return (
          <Time 
            raceTime={raceTime}
            key={index}
            index={index}
            timesInMinutes={timesInMinutes}
          />
      )
    })

    return mappedTimes
  }

  return (
    <section className="flex flex-col h-full w-100 bg-[#F6F7F7]">
      <div className="bg-[#F5F6F7] w-100 m-8 flex flex-col"> 
        <p className="font-proximaNovaBold text-xl">Results</p>
        <p className="pt-8 pl-8 mt-4 font-proximaNovaRegular text-xl text-[#888A8C]">
          Average Time (minutes)
        </p>
        <section className="bg-[#F6F7F7] h-28 w-48 mt-2 flex flex-col justify-center rounded-sm font-proximaNovaRegular">
          <p className="text-center text-2xl text-[#00000]">
            {(timesInMinutes.length === 1 ? timesInMinutes[0] : averageTimeInMinutes)}
          </p>
        </section>
        <div className="flex flex-row flex-wrap">
          {mapRaceTimesToResults(raceTimes)}
        </div>
      </div>
    </section>
  )
}

export default Results;
