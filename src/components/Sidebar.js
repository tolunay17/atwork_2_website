import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// import AboutGreen from './aboutGreen';


function Sidebar() {
  return (
    <Menu className='test2'>
      <a className="menu-item" href="/">
        Over green guide
      </a>
      
      <a className="menu-item" href="/App">
        De App
      </a>
      <a className="menu-item" href="/Bedrijven">
        Voor Bedrijven
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      {/* <AboutGreen/>  */}
    </Menu>
  )
}

export default Sidebar