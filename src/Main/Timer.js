import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Play from './Play'
import Pause from './Pause';
import Settings from './Settings';


const red= '#f54e4e';
const green = '#4aec8c';


function Timer(){
    return(
        <div>
            <CircularProgressbar value={60} text={`${60}%` } styles={buildStyles({
            textColor:'#fff',
            pathColor:red,
            trailColor:'rgba(255,255,255,0.2)',
        } )} />
        <div style={{marginTop:'20px'}}>
            <Play/>
            <Pause/>
        </div>
       <div style={{marginTop:'20px'}}>

       </div>
         <Settings/>
        </div>
    )
}


export default Timer