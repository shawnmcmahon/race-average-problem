import React, {FunctionComponent} from 'react'

interface raceTimeProps {
  raceTimes: Array<string>,
}

const Results:FunctionComponent<raceTimeProps> = ({raceTimes}) => {

  const mapRaceTimesToResults = (raceTimes:Array<string>) => {
    raceTimes.map((raceTime, index) => {
      return (
        <article> 
          {raceTime}
        </article>
      )
    })
  }

  return (
    <section className="flex flex-col h-full w-100 bg-[#F6F7F7]">
      <section className="bg-[#F5F6F7] h-96 w-100 m-8"> 
        <p className="font-proximaNovaBold text-xl">Results</p>
      </section>
      <div>
        {/* {mapRaceTimesToResults} */}
      </div>
    </section>
  )
}

export default Results;
