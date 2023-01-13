import {React,useState} from 'react'
import './Wallpaper.css'
import axios from 'axios';

function Wallpaper() {
  const [state, setstate] = useState([])
  const [search, setsearch] = useState("")

  async function apicall(term){
    
  
      const response = await axios.get('https://api.unsplash.com/search/photos',{
    params : {query : term},  
    headers : {
      Authorization: 'Client-ID m3gmLiCbu9gFm3woo0qpMpZlZ-w06Ky3rDwRzGwTI64'
    }
    
    
  });
  console.log(response.data.results)
  setstate(response.data.results);
    }
  
  return (
    <>
    <div className="wall">
      <h1>Backdrops</h1>
        <input placeholder='Search for the wallpapers' onChange={(e)=>{setsearch(e.target.value)}}></input>
        <button onClick={(()=>{apicall(search)})}>Search</button>
        <div className="xyz">
        {state.map((data)=>{return(
          <>
          <div className="wallcard" style={{backgroundImage:`url(${data.urls.regular})`}}>
          
          </div>
      
          </>
        )})}
</div>
    </div>
    </>
  )
}

export default Wallpaper