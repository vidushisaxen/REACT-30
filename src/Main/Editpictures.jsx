import {React, useState} from 'react'
import './Editpictures.css';

function Editpictures() {
    const [imglink, setimglink] = useState("https://media.istockphoto.com/id/809971888/photo/night-sky-landscape.jpg?b=1&s=170667a&w=0&k=20&c=-1smAP9--twhHyqopksRe3lIORQvO9JaaNWbT1Ra-Is=");
  return (
    <>
    <div className="editbody">
    <h1>Let's be creative</h1>
    <div className="edit">
        
        <div className="left">
        <label>Image link :</label>
        <input onChange={(event)=>setimglink(event.target.value)}></input>
        <label>Blur :</label>
        <input></input>
        <label>Spacing :</label>
        <input></input>
        <label>Border :</label>
        <input></input>
        <label>Color :</label>
        <input></input>
        </div>



        <div className="right">
        <img src={imglink} alt="" /></div> 
        
    </div>
    </div>
    
    </>
  )
}

export default Editpictures