import React, { FunctionComponent } from 'react'
import bityLogo from '../assets/images/logo.svg';


const Header:FunctionComponent = () => {
  return (
    <header className="bg-[#273144] h-24 w-full">
      <img src={bityLogo} className="h-full p-4 pl-8" />
    </header>
  )
}

export default Header;