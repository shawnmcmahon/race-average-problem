import React, {FunctionComponent} from 'react'
import Time from './Time'

interface raceTimeProps {
  raceTimes: Array<string>,
}

const Results:FunctionComponent<raceTimeProps> = ({raceTimes}) => {

  const mapRaceTimesToResults = (raceTimes: Array<string>) => {
    const mappedTimes = raceTimes.map((raceTime: string, index: number) => {
      return (
          <Time 
            raceTime={raceTime}
            key={index}
            index={index}
          />
      )
    })

    return mappedTimes
  }

  return (
    <section className="flex flex-col h-full w-100 bg-[#F6F7F7]">
      <div className="bg-[#F5F6F7] h-96 w-100 m-8 flex flex-col"> 
        <p className="font-proximaNovaBold text-xl">Results</p>
        <div className="flex flex-row flex-wrap">
          {mapRaceTimesToResults(raceTimes)}
        </div>
      </div>
    </section>
  )
}

export default Results;
