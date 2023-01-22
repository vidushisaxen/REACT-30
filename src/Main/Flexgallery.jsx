import {React,useState} from 'react'
import './Flex.css'

function Flexgallery() {
    const [state1, setstate1] = useState("panel panel1");
    const [state2, setstate2] = useState("panel panel2");
    const [state3, setstate3] = useState("panel panel3");
    const [state4, setstate4] = useState("panel panel4");
    function animate(data)
    {
         switch (data) {
            case 2:
                setstate1("panel panel2 outercontainer open")
                break;
                case 1:
                setstate2("panel panel1 outercontainer open")
                break;
         
                case 3:
                setstate3("panel panel3 outercontainer open")
                break;
         
                case 4:
                setState4("panel panel4 outercontainer open")
                break;
         
         
            default:
                break;
         }
    }

  return (
    <>
    <div className="panels">
    <div className="panel panel1">
        <p>Be</p>
        <p>The</p>
        <p>Change</p>
       
    </div>
    <div className="panel panel2">
       <p>Believe</p>
       <p>In</p>
       <p>Yourself</p>
    </div>
    <div className="panel panel3">
       <p>Change</p>
       <p>Is</p>
       <p>Good</p>
    </div>
    <div className="panel panel4">
        <p>Dreams</p>
        <p>Come</p>
       <p>True</p>
    </div>
    <div className="panel panel5">
        <p>Focus</p>
       <p>And</p>
       <p>Win</p>
    </div>
    </div>
    </>
  )
}

export default Flexgallery