import React from 'react'
import Values from'values.js'
import { useState } from 'react';
import SingleColor from './SingleColor';

const Shades = () => {

    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#f15025").all(10));

const handleSubmit=(e)=>{
    e.preventDefault();

    try{
        let colors = new Values(color).all(10);
        console.log(colors);
        setList(colors);
    } catch(error){
        setError(true);
        console.log(error);
    }

}

  return (
   <>
   <div className='box'>
    <h2> Get different shades</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' value={color} onChange={(event)=>{
            setColor(event.target.value)
        }}
        placeholder='#f15025' className={`${error ? 'error':null}`}/>
    
        <button className='btn' type='submit'>Search</button>
    </form>

   </div>

   <div className='displayColors'>
    {list.map((color,index)=>{
        return (
            <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
            />
        )

    })}

   </div>
   </>
  )
}

export default Shades