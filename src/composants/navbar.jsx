import React from 'react'
import "./styles/navbar.css"
import Liveclock from './liveclock'
export default function Navbar() {

  return (
      
    <>
        <nav className="nav">
          <div className="logo">
            <h1 className='name'>SH.Dev</h1>
            <h3>
              <Liveclock />
            </h3>
           
          </div>
          <div className="links">
            <a href="#section1" className='alinks'>Home</a>
            <a href="#section2" className='alinks'>About</a>
            <a href="#section2" className='alinks'>Skills</a>
            <a href="#section3" className='alinks'>Projects</a>
            <a href="#section4" className='alinks'>Contact</a>
          </div>
        </nav>
    </>
  )
}
