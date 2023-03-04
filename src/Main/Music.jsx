import React from 'react'
import { useRef ,useState,useEffect} from 'react';
import './Music.css';
import {AiFillPlayCircle} from 'react-icons/ai';
import {AiFillPauseCircle} from 'react-icons/ai';

function Music() {
  const play=useRef();
  const play2=useRef();
  const play3=useRef();
  const play4=useRef();
  const play5=useRef();
  const play6=useRef();
  const play7=useRef();
  const play8=useRef();
  const play9=useRef();
  const play10=useRef();
  const play11=useRef();
  const play12=useRef();


  const [command, setcommand] =useState(false);
  const [musicid, setmusicid] = useState("");
  const [sunbtn, setsunbtn] = useState(false);
  const [rainbtn, setrainbtn] = useState(false);
  const [birdbtn, setbirdbtn] = useState(false);
  const [riverbtn, setriverbtn] = useState(false);
  const[thunderbtn,setthunderbtn]=useState(false);
  const [wavebtn, setwavebtn] = useState(false);
  const [pianobtn, setpianobtn] = useState(false);
  const [guitarbtn, setguitarbtn] = useState(false);
  const [flutebtn, setflutebtn] = useState(false);
  const [tablabtn, settablabtn] = useState(false);
  const [drumbtn, setdrumbtn] = useState(false);
  const [violinbtn, setviolinbtn] = useState(false);


function playbtn(data){
  setcommand(!command);
  setmusicid(data);
}

useEffect(() => {
  switch (musicid) {
    case "q":
      if(command){
        setsunbtn(!sunbtn);
        play.current.play();
      }
      else{
        setsunbtn(!sunbtn);
        play.current.pause();
      }
      break;
      case "w":
      if(command){
        setrainbtn(!rainbtn);
        play2.current.play();
      }
      else{
        setrainbtn(!rainbtn);
        play2.current.pause();
      }
      break;
      case "e":
      if(command){
        setbirdbtn(!birdbtn);
        play3.current.play();
      }
      else{
    setbirdbtn(!birdbtn);
        play3.current.pause();
      }
      break;
      case "r":
      if(command){
        setriverbtn(!riverbtn);
        play4.current.play();
      }
      else{
        setriverbtn(!riverbtn);
        play4.current.pause();
      }
      break;
      case "t":
      if(command){
        setthunderbtn(!thunderbtn);
        play5.current.play();
      }
      else{
        setthunderbtn(!thunderbtn);
        play5.current.pause();
      }
      break;
      case "y":
      if(command){
        setwavebtn(!wavebtn);
        play6.current.play();
      }
      else{
        setwavebtn(!wavebtn);
        play6.current.pause();
      }
      break;
      case "u":
      if(command){
        setpianobtn(!pianobtn);
        play7.current.play();
      }
      else{
        setpianobtn(!pianobtn);
        play7.current.pause();
      }
      break;
      case "i":
      if(command){
        setguitarbtn(!guitarbtn);
        play8.current.play();
      }
      else{
        setguitarbtn(!guitarbtn);
        play8.current.pause();
      }
      break;
      case "o":
      if(command){
        setflutebtn(!flutebtn);
        play9.current.play();
      }
      else{
        setflutebtn(!flutebtn);
        play9.current.pause();
      }
      break;
      case "p":
      if(command){
        settablabtn(!tablabtn);
        play10.current.play();
      }
      else{
        settablabtn(!tablabtn);
        play10.current.pause();
      }
      break;
      case "a":
      if(command){
        setdrumbtn(!drumbtn);
        play11.current.play();
      }
      else{
        setdrumbtn(!drumbtn);
        play11.current.pause();
      }
      break;
      case "s":
      if(command){
        setviolinbtn(!violinbtn);
        play12.current.play();
      }
      else{
        setviolinbtn(!violinbtn);
        play12.current.pause();
      }
      break;
  
    default:
      break;
  }
}, [command])



  return (
    <>
    <audio src="sound2.mp3" ref={play}></audio>
    <audio src="rain.mp3" ref={play2}></audio>
    <audio src="birds.mp3" ref={play3}></audio>
    <audio src="river.mp3" ref={play4}></audio>
    <audio src="thunder.mp3" ref={play5}></audio>
    <audio src="waves.mp3" ref={play6}></audio>
    <audio src="piano.mp3" ref={play7}></audio>
    <audio src="guitar.mp3" ref={play8}></audio>
    <audio src="flute.mp3" ref={play9}></audio>
    <audio src="tabla.mp3" ref={play10}></audio>
    <audio src="drum.mp3" ref={play11}></audio>
    <audio src="violin.mp3" ref={play12}></audio>


    <div className="container">
      <img src='https://wallpaperaccess.com/full/2129433.jpg'></img>
    </div>
    <h1>Nature's love</h1>
    <div className="bodycard">
    <div className="cards">
    <img src='https://images.unsplash.com/photo-1585089858717-f4378c2031d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'></img>
    <p>Enjoy the sunset.</p>
    <button onClick={()=>playbtn("q")}>{sunbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button> 
    </div>
    <div className="cards">
    <img src='https://thumbs.dreamstime.com/b/hand-blue-umbrella-under-heavy-rain-against-nature-background-rainy-weather-concept-hand-blue-umbrella-under-heavy-rain-153356243.jpg'></img>
    <p>Listen to the rhythm of falling rain.</p>
    <button onClick={()=>playbtn("w")}>{rainbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://media.istockphoto.com/id/530427077/photo/robin-wild-bird-in-a-natural-habitat.jpg?s=612x612&w=0&k=20&c=YmPxlc5yVEZ2T0w0CIUlH53eTC7Fd9yPWhCobEd1iDo='></img>
    
    <p>Let the bird sing.</p>
    <button onClick={()=>playbtn("e")}>{birdbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://w0.peakpx.com/wallpaper/141/527/HD-wallpaper-flowing-river-rocks-nature-river-water.jpg'></img>
    <p>Flow beyond your limits.</p>
    <button onClick={()=>playbtn("r")}>{riverbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcm0lMjBjbG91ZHN8ZW58MHx8MHx8&w=1000&q=80'></img>
    <p>Thunder at its loudest.</p>
    <button onClick={()=>playbtn("t")}>{thunderbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://www.itl.cat/pngfile/big/290-2907694_ocean-waves.jpg'></img>
    <p>Rise high.</p>
    <button onClick={()=>playbtn("y")}>{wavebtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    </div>


    <h1>Musical Instruments</h1>
    <div className="bodycard">
    <div className="cards">
    <img src='https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Images-Piano-Wallpapers-HD.jpg'></img>
    <p>Let the keys play.</p>
    <button onClick={()=>playbtn("u")}>{pianobtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button> 
    </div>
    <div className="cards">
    <img src='https://www.superprof.co.in/blog/wp-content/uploads/2019/12/guitar.jpg'></img>
    <p>Keep strings tight and in hold.</p>
    <button onClick={()=>playbtn("i")}>{guitarbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://images.squarespace-cdn.com/content/v1/577aaad8e3df28197022a5b8/1641167227337-O85XK5410AG1CRDMPXWV/Bansuri.jpg?format=1500w'></img>
    
    <p>Play the flute for the joy of it.</p>
    <button onClick={()=>playbtn("o")}>{flutebtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://us.123rf.com/450wm/nbaturo/nbaturo1904/nbaturo190400026/nbaturo190400026.jpg?ver=6'></img>
    <p>Rhythm of the percussion twirled her inhibitions inside out !.</p>
    <button onClick={()=>playbtn("p")}>{tablabtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://wallpapercave.com/wp/wp2727682.jpg'></img>
    <p>Dance to the beat of your own drum.</p>
    <button onClick={()=>playbtn("a")}>{drumbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    <div className="cards">
    <img src='https://thumbs.dreamstime.com/b/violin-12390698.jpg'></img>
    <p>The violin sings.</p>
    <button onClick={()=>playbtn("s")}>{violinbtn?<AiFillPauseCircle size={30}/>:<AiFillPlayCircle size={30}/>}</button>
    </div>
    </div>
    </>
  )
}

export default Music