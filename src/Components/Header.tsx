import React, { FunctionComponent } from 'react'
import bityLogo from '../assets/images/logo.svg';


const Header:FunctionComponent = () => {
  return (
    <header className="bg-[#273144] h-20 w-full" data-cy="header">
      <img src={bityLogo} className="h-5/6 pt-3 pl-8" data-cy="logo" alt="Bitly Logo"/>
    </header>
  )
}

export default Header;