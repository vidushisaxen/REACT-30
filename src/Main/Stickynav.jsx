import React from 'react'
import './Stickynav.css';
import { useState, useEffect } from 'react';
 




function Stickynav() {
 const [fix, setfix] = useState(false);

// function fixnav(){
//     if(window.scrollY>=500){
//         setfix(true)
//     }
//     else{
//         setfix(false)
//     }
// }
useEffect(() => {
    const handlescroll=()=>{
    setfix(window.scrollY >200)
    }
    window.addEventListener('scroll',handlescroll);
    return()=> window.removeEventListener('scroll',handlescroll);
  
} )
  return (
    <>
        <div>
    <div className="stickimg">
        <img src='https://wallpapershome.com/images/wallpapers/lake-3840x2160-4k-hd-wallpaper-sea-pink-sunset-sunrise-reflection-sky-864.jpg'></img>
    </div>
    <nav className={`${fix?"stick":""}`}>
    <div className="sticknav">
        <p1>
            Home
        </p1>
        <p1>
            About
        </p1>
        <p1>
            Images
        </p1>
        <p1>
            Locations
        </p1>
        <p1>
            Maps
        </p1>
       </div>
    </nav>
    
    <div className="sticktxtbox">
        <h1>The adventure of living in the path of life.</h1>

     <p>
         We are born, live our lives, and eventually pass away with time. We are attempting to shape our lives in this way. Everyone's life is different. Some people have a lot of problems in life, while others do not. Those who have never faced adversity in their lives have one perspective on life. Those that struggle in life have a different perspective. Life is frequently described as priceless.
        <br></br>
        <br></br>

        One important aspect of Life is that it keeps going forward. This means nothing is permanent. Hence, there should be a reason to stay in dejection. A happy occasion will come to pass, just like a sad one. Above all, one must be optimistic no matter how bad things get. This is because nothing will stay forever. Every situation, occasion, and event shall pass. This is certainly a beauty of Life.
        <br></br>

        <br></br>

        The uncertainty of death is what makes life so precious. No one knows the hour of one’s death. This probably is the most important reason to live life to the fullest.
     </p>
    </div>
    <br></br>
    </div>
    </>
  )
}

export default Stickynav