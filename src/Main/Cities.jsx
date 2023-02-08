import React from 'react'
import './Cities.css'
import React, { useEffect, useState } from 'react'
import axios from "axios";
function Search() {
    const[citydata,setData] = useState("");
    const[searchvalue ,setSearchvalue] = useState("");
    const[recommend , setRecommed] = useState([]);
     async function call()
    {
        const datafile=   await axios("https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json");
        setData(datafile.data);
          console.log(citydata)
         
    }
}

function Cities() {
  return (
    <>
    <div className="cities">
       <h1>Explore India</h1>
       <input type="search"></input>
       <button>Search</button>
    </div>
    </>
  )
}

export default Cities