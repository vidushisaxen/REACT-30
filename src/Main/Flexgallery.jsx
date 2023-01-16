import React from 'react'
import './Flex.css'

function Flexgallery() {
    const [state,setState] = React.useState("panel panel2");

const [state1,setState1] = React.useState("panel panel1");

const [state2,setState2] = React.useState("panel panel3");

const [state3,setState3] = React.useState("panel panel4");
const panels= document.querySelectorAll('.panels');

function toggleopen(){
    this.classList.toggle('open');
}
function toggleactive(e){
    
    if(e.propertyName.includes('flex'));
    this.classList.toggle('open-active');
}
panels.forEach(panel=>panel.addEventListener('click',toggleopen));
panels.forEach(panel=>panel.addEventListener('transitioned',toggleactive));


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