import { FunctionComponent } from 'react'
import Time from './Time'

interface ResultsPropTypes {
  raceTimes: Array<string>,
  timesInMinutes: Array<number>,
  averageTimeInMinutes: number
}

const Results:FunctionComponent<ResultsPropTypes> = ({raceTimes, timesInMinutes, averageTimeInMinutes}) => {
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
    <section className="flex flex-col h-full w-100 bg-grayDark">
      <div className="bg-grayLight w-100 m-8 flex flex-col"> 
        <p className="font-proximaNovaBold text-xl" data-cy="results-label">Results</p>
        <p className="pt-8 pl-8 mt-4 font-proximaNovaRegular text-xl text-grayDarker"  data-cy="average-label">
          Average Time (min)
        </p>
        <section className="bg-grayDark h-28 w-48 mt-2 flex flex-col justify-center rounded-sm font-proximaNovaRegular">
          <p className="text-center text-2xl text-black" data-cy="average-value">
            {timesInMinutes.length === 1 ? timesInMinutes[0] : averageTimeInMinutes} 
          </p>
        </section>
        <section className="flex flex-row flex-wrap" data-cy="results-area">
          {mapRaceTimesToResults(raceTimes)}
        </section>
      </div>
    </section>
  )
}

export default Results