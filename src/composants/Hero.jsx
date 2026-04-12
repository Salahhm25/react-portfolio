import React from 'react'
import logo from '../assets/logo.png'
import "./styles/Hero.css"
export default function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="texts">
          <h1 className='me'>Salah.Dev <br />Services</h1>
          <h2 className='desc'>Full-Stack Developer & <br /> Computer Science Educator</h2>
          <p className='mytask'>I build modern web applications and help others learn coding.</p>
          <div className="buttons-home">
            <a href="#section3"   className="btn">View Projects </a>
            <a href="#section4" className="btn btn-online">Contact me</a>
          </div>
        </div>
        
        <div className="here-img">
          <img src={logo} alt="a wise and relaxed robot raising a WIFI energy ball " />
        </div>
      </div>
    </>
  )
}
