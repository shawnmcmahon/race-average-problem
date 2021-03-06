import { FunctionComponent } from 'react'
import sailBoat from '../assets/images/sailBoat.svg'

interface TimePropTypes {
  raceTime: string, 
  index: number
  timesInMinutes: Array<number>
}

const Time:FunctionComponent<TimePropTypes> = ({raceTime, index, timesInMinutes}) => {
  return (
    <article 
      className="bg-white h-16 w-64 m-4 flex flex-col justify-center rounded-sm font-proximaNovaRegular"
      key={index}
      data-cy="time">
      <section>
        <p className="text-left text-md text-black pl-4 pt-4" data-cy="finish-time">{raceTime}</p>
      </section>
      <section className="flex h-full">
        <div className="bg-white w-2/4 pl-4 pb-2">   
          <p className="text-left text-sm text-orange" data-cy="time-in-minutes">{timesInMinutes[index]} min</p>
        </div>
        <div className="flex justify-end bg-white w-2/4 pr-2 pb-2">   
          <p className="text-right text-lg pr-2 text-black" data-cy="runner-number">
            {(index + 1)}
          </p>
          <img className="h-6" src={sailBoat} data-cy="runner-icon" alt="Runner icon" />
        </div>
      </section>
    </article>
  )
}

export default Time