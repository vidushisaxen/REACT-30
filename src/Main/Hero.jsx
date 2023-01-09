import React from 'react'
import './Hero.css';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <div className="hero">
    <div className="main">
      <div className="nav">
      <p2>React 30</p2>
        <p1>Home</p1>
        <p1>Documentation</p1>
        <p1>About</p1>
      </div>
      
      <ul>
        <Link to="/Music" className='link'><li>Music</li></Link>
        <Link to="/Clock" className='link'><li>Clock</li></Link>
        <Link to="/Editpictures" className='link'><li>Edit pictures</li></Link>
        <Link to="/Wallpaper" className='link'><li>Wallpaper</li></Link>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Hero