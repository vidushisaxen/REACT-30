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
        <label>Spacing</label>
        <input></input>
        <label>Border</label>
        <input></input>
        <label>Color</label>
        <input></input>
    </div>
    
    </>
  )
}

export default Editpictures