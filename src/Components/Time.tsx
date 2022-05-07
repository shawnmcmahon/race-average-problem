import React, { FunctionComponent } from 'react'

interface timeProps {
  raceTime: string, 
  index: number
}

const Time:FunctionComponent<timeProps> = ({raceTime, index}) => {
  return (
    <article 
      className="bg-[#FFFFFF] h-12 w-64 m-4 flex flex-col justify-center rounded-sm font-proximaNovaRegular text-lg text-[#000000]"
      key={index}
    >
      <p className="text-center">{raceTime}</p>
    </article>
  )
}

export default Time;