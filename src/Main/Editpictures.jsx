import {React, useState} from 'react'
import './Editpictures.css';

function Editpictures() {
    const [imglink, setimglink] = useState("https://media.istockphoto.com/id/809971888/photo/night-sky-landscape.jpg?b=1&s=170667a&w=0&k=20&c=-1smAP9--twhHyqopksRe3lIORQvO9JaaNWbT1Ra-Is=");
    const[value , setValue] = useState("");
    const[value1 , setValue1] = useState("");

    function changeblur(event)
    { 
       setValue(event.target.value);
       console.log(value)
     document.documentElement.style.setProperty('--blur' , value+"px");
    }
   
   function changespacing(event)
   {
       setValue1(event.target.value);
     document.documentElement.style.setProperty('--spacing' , value1+"px");
   
   }
   function changecolor(event)
   {
       document.documentElement.style.setProperty('--base' , event.target.value);
   }
   function changeradius(event)
   {
       document.documentElement.style.setProperty('--radius' , event.target.value+"px");
   }
  return (
    <>
    <div className="editbody">
    <h1>Let's be creative</h1>
    <div className="edit">
        
        <div className="left">
        <label>Image link :</label>
        <input onChange={(event)=>setimglink(event.target.value)}></input>
        <label>Blur :</label>
        <input type={"range"} min = {"-1"} max = {"100"}  onChange = {changeblur}></input>
        <label>Spacing :</label>
        <input type={"range"} min = {"0"} max = {"100"} onChange = {changespacing} ></input>
        <label>Border radius :</label>
        <input type={"range"} min = {"0"} max = {"100"} onChange = {changeradius}></input>
        <label>Base color :</label>
        <input type={"color"}  onChange = {changecolor}  ></input>
        </div>



        <div className="right">
        <img src={imglink} alt="" /></div> 
        
    </div>
    </div>
    
    </>
  )
}

export default Editpictures