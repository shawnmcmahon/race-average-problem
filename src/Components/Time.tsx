import React, { FunctionComponent } from 'react'
import runner from '../assets/images/run.svg';

interface timeProps {
  raceTime: string, 
  index: number
}

const Time:FunctionComponent<timeProps> = ({raceTime, index}) => {
  return (
    <article 
      className="bg-[#FFFFFF] h-16 w-64 m-4 flex flex-col justify-center rounded-sm font-proximaNovaRegular"
      key={index}
    >
      <section>
        <p className="text-left text-md text-[#000000] pl-4 pt-4">{raceTime}</p>
      </section>
      <section className="flex h-full">
        <div className="bg-[#FFFFFF] w-2/4 pl-4 pb-2">   
          <p className="text-left text-sm text-[#EB5821]">+01.03</p>
        </div>
        <div className="flex justify-end bg-[#FFF] w-2/4 pr-2 pb-2">   
          <p className="text-right text-lg pr-2 text-[#000000]">
            {(index + 1)}
          </p>
          <img 
            className="h-6"
            src={runner} 
          />
        </div>
      </section>
    </article>
  )
}

export default Time;