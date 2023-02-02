import {React,useState} from 'react'
import './Flex.css'

function Flexgallery() {
    const [state1, setstate1] = useState("panel panel1");
    const [state2, setstate2] = useState("panel panel2");
    const [state3, setstate3] = useState("panel panel3");
    const [state4, setstate4] = useState("panel panel4");
    const [state5, setstate5] = useState("panel panel5");
    function animate(data)
    {
         switch (data) {
            case 1:
                setstate1("panel panel1 open-active open")
                break;
                case 2:
                setstate2("panel panel2 open-active open")
                break;
         
                case 3:
                setstate3("panel panel3 open-active open")
                break;
         
                case 4:
                setstate4("panel panel4 open-active open")
                break;

                case 5:
                setstate5("panel panel5 open-active open")
                break;
         
         
            default:
                break;
         }
    }

  return (
    <>
    <div className="panels">
    <div className={state1} onMouseOver={()=>animate(1)} onMouseOut={()=>setstate1("panel panel1")}>
        <p>Be</p>
        <p>The</p>
        <p>Change.</p>
       
    </div>
    <div className={state2} onMouseOver={()=>animate(2)} onMouseOut={()=>setstate2("panel panel2")}>
       <p>Believe</p>
       <p>In</p>
       <p>Yourself</p>
    </div>
    <div className={state3} onMouseOver={()=>animate(3)} onMouseOut={()=>setstate3("panel panel3")}>
       <p>Change</p>
       <p>Is</p>
       <p>Good</p>
    </div>
    <div className={state4} onMouseOver={()=>animate(4)} onMouseOut={()=>setstate4("panel panel4")}>
        <p>Dreams</p>
        <p>Come</p>
       <p>True</p>
    </div>
    <div className={state5} onMouseOver={()=>animate(5)} onMouseOut={()=>setstate5("panel panel5")}>
        <p>Focus</p>
       <p>And</p>
       <p>Win</p>
    </div>
    </div>
    </>
  )
}

export default Flexgallery