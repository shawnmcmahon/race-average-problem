import React, { FunctionComponent } from 'react'
import bityLogo from '../assets/logo.svg';


const Header:FunctionComponent = () => {
  return (
    <header className="bg-[#0C3042] h-28 w-full">
      <img src={bityLogo} className="h-full p-4 pl-8" />
    </header>
  )
}

export default Header;