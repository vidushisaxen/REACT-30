import React from 'react'
import './Pomodoro.css';
import Timer from './Timer';
import { useState } from 'react';
import Sett from './Sett';

const Pomodoro = () => {
    const[settings,setSettings]=useState(false);


  return (
    <>
    <div className='pomo_main'>
     <div className='pomo'>
       {settings?<Sett/>:<Timer/>}
     </div>
    </div>
    </>
  )
}

export default Pomodoro