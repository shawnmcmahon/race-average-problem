import React, {FunctionComponent, ReactElement} from 'react'

interface raceTimeProps {
  raceTimes: ReactElement | Array<string>,
}

const Results:FunctionComponent<raceTimeProps> = ({raceTimes}) => {

  const mapRaceTimesToResults = (raceTimes: any) => {
    const mappedTimes = raceTimes.map((raceTime: string) => {
      return (
        <article> 
          {raceTime}
        </article>
      )
    })

    return mappedTimes
  }

  return (
    <section className="flex flex-col h-full w-100 bg-[#F6F7F7]">
      <section className="bg-[#F5F6F7] h-96 w-100 m-8"> 
        <p className="font-proximaNovaBold text-xl">Results</p>
      </section>
      <div>
        {mapRaceTimesToResults(raceTimes)}
      </div>
    </section>
  )
}

export default Results;
