import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Play from './Play'
import Pause from './Pause';
import Settings from './Settings';
import { useContext,useState, useEffect } from 'react';
import SettingsContext from './SettingContext';


const red= '#f54e4e';
const green = '#4aec8c';


function Timer(){
  const settingsInfo = useContext(SettingsContext);
  const [mode, setmode] = useState('work');
  const [isPaused, setisPaused] = useState(true);
  const [secondsLeft, setsecondsLeft] = useState(0)



function switchMode(){
    const nextMode=mode === 'work'?'break':'work';
    setmode(nextMode);
    setsecondsLeft(nextMode=== 'work'? settingsInfo.workMinutes*60:settingsInfo.breakMinutes*60);
}

  function initTimer(){
    setsecondsLeft(settingsInfo.workMinutes *60);
  }


useEffect(() => {
  initTimer();


  setInterval(()=>{
    if(isPaused){
        return;
    }
    if(secondsLeft===0){
        switchMode();
    }
  },
  1000)
}, [settingsInfo])


    return(
        <div>
            <CircularProgressbar value={60} text={`${60}%` } styles={buildStyles({
            textColor:'#fff',
            pathColor:red,
            trailColor:'rgba(255,255,255,0.2)',
        } )} />
        <div style={{marginTop:'20px'}}>
            {isPaused?<Play/>:<Pause/>}
        </div>
       <div style={{marginTop:'20px'}}>

       </div>
         <Settings onClick={()=>settingsInfo.setsettings(true)}/>
        </div>
    )
}


export default Timer