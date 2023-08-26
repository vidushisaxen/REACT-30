import React from 'react'
import './Pomodoro.css';
import Timer from './Timer';
import { useState } from 'react';
import Sett from './Sett';
import SettingContext from './SettingContext';

const Pomodoro = () => {
    const[settings,setsettings]=useState(false);
    const [workMinutes, setworkMinutes] = useState(45);
    const [breakMinutes, setbreakMinutes] = useState(15);


  return (
    <>
    <div className='pomo_main'>
     <div className='pomo'>
        <SettingContext.Provider value={{
            setsettings,
            settings,
            workMinutes,
            breakMinutes,
            setworkMinutes,
            setbreakMinutes
        }}>
        {settings?<Sett/>:<Timer/>}
        </SettingContext.Provider>
      
     </div>
    </div>
    </>
  )
}

export default Pomodoro