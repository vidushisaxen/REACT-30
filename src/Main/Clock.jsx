import {React ,useState, useEffect} from 'react'
import './Clock.css'

function Clock() {
    const [seconds, setseconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [hours, sethours] = useState(0);

    useEffect(()=>{
       givetime()
       },[])

       function givetime(){
        var date= new Date();
        const sec = date.getSeconds();
        const min = date.getMinutes();
        const hours = date.getHours();

        setseconds(sec*6 );
        setminutes(min*6);
        sethours(30*hours + min/2);
       }
       
       setInterval(givetime , 1000)
    
  return (
    <>
    <div className="clock">
        <div className="outercircle">
           <div className="innercircle">
                <div className=" hand hour_hand" style={{transform:`rotate(${hours}deg)` }}></div>
                <div className="hand minute_hand" style={{transform:`rotate(${minutes}deg)` }}></div>
                <div className="hand second_hand" style={{transform:`rotate(${seconds}deg)` }}></div>


                <div className="number one">
                    
                </div>
                <div className="number two">
                    
                </div>
                <div className="number three">
                    
                </div>
                <div className="number four">
                    
                </div>
                <div className="number five">
                    
                </div>
                <div className="number six">
                   
                </div>
                <div className="number seven">
                   
                </div>
                <div className="number eight">
                    
                </div>
                <div className="number nine">
                    
                </div>
                <div className="number ten">
                    
                </div>
                <div className="number eleven">
                    
                </div>
                <div className="number twelve">
                    
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Clock