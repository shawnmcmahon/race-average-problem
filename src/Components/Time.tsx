import React, { FunctionComponent } from 'react'

interface timeProps {
  raceTime: string, 
  index: number
}

const Time:FunctionComponent<timeProps> = ({raceTime, index}) => {
  return (
    <article key={index}>
      {raceTime}
    </article>
  )
}

export default Time;