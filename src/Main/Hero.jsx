import React from 'react'
import './Hero.css';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <div className="hero">
    <div className="main">
      <div className="nav">
      <p2>React 10</p2>
        <p1>Home</p1>
        <p1>Documentation</p1>
      </div>
      <div className='div-box'>
        <div className='left'>
      <ul>
        <Link to="/Music" className='link'><li>Music</li></Link>
        <Link to="/Clock" className='link'><li>Clock</li></Link>
        <Link to="/Editpictures" className='link'><li>Edit pictures</li></Link>
        <Link to="/Wallpaper" className='link'><li>Backdrops</li></Link>
        <Link to="/flexgallery" className='link'><li>Flex Gallery</li></Link>
        <Link to="/shades" className='link'><li>Shades</li></Link>
        {/* <Link to="/Stickynav" className='link'><li>Slide on Scroll</li></Link>
        <Link to="/Stickynav" className='link'><li>Canvas</li></Link>
        <Link to="/Stickynav" className='link'><li>Sticky Navbar</li></Link>
        <Link to="/Stickynav" className='link'><li>News app</li></Link> */}
      </ul>
      </div>
      <div className='right'>
        <img src='https://images.unsplash.com/photo-1692533801336-fb86a60f501f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Hero