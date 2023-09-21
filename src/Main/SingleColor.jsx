import React, { useEffect } from 'react'
import { rgbToHex } from './utils'
import { useState } from 'react'

const SingleColor = (rgb,weight,index,hexColor) => {
     
    const[alert,setAlert] = useState(false)
    const arr= rgb.join(",");
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`


    useEffect(()=>{
       const timeOut = setTimeout(()=>{
         setAlert(false);
       },3000)

       return()=> clearTimeout(timeOut)

    },[alert])

  return (
    <>
    <article className={`color ${index}>10 && 'color-light'}`}
    style={{backgroundColor:`rgb(${arr})`}}
    onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue); 
    }}
    >

    </article>
    </>
  )
}

export default SingleColor