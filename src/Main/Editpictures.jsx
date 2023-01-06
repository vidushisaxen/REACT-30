import React from 'react'
import './Editpictures.css';

function Editpictures() {
  return (
    <>
    <div className="edit">
        <h1>Let's edit pictures</h1> 
        <label>Image link</label>
        <input></input>
    </div>
    
    <br></br><br></br>
    <div className="editmain">
        <label>Blur</label>
        <input></input>
        <br></br>
        <label>Spacing</label>
        <input></input>
        <br></br>
        <label>Border</label>
        <input></input>
        <br></br>
        <label>Color</label>
        <input></input>
        <br></br>
    </div>
    <div className="editimg">
        <img src='https://media.istockphoto.com/id/809971888/photo/night-sky-landscape.jpg?b=1&s=170667a&w=0&k=20&c=-1smAP9--twhHyqopksRe3lIORQvO9JaaNWbT1Ra-Is='></img>
    </div>
    
    </>
  )
}

export default Editpictures