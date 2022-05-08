import React, { FunctionComponent } from 'react'

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
      <p className="text-left pt-2 pl-2 text-md text-[#000000]">{raceTime}</p>
      <p className="text-left pb-2 pl-2 text-sm text-[#EB5821]">+01.03</p>
    </article>
  )
}

export default Time;