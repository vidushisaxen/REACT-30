import React, { useContext } from 'react'
import ReactSlider  from 'react-slider'
import './Pomodoro.css'
import SettingContext from './SettingContext'
import BackButton from './BackButton'

function Sett() {
    const settingsInfo = useContext(SettingContext)


  return (
    <div style={{textAlign:'left'}}>
        <label>Work :{settingsInfo.workMinutes}:00</label>
        <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue=>settingsInfo.setworkMinutes(newValue)}
        min={1}
        max={120}
        />
        <label>Break :{settingsInfo.breakMinutes}:00</label>
        <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue=>settingsInfo.setbreakMinutes(newValue)}
        min={1}
        max={120}
        />
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={()=>settingsInfo.setsettings(false)}/>   
        </div>
        
    </div>

  )
}

export default Sett