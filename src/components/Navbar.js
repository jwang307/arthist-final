import React from 'react';
import { Button } from './Button';
import './Bars.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Button buttonStyle='btn--outline'>HOME</Button>
            </div>
        </nav>
    </>
  )
}

export default Navbar