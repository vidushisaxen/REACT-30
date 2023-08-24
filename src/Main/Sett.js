import React from 'react'
import ReactSlider  from 'react-slider'

function Sett() {
  return (
    <div style={{textAlign:'left'}}>
        <label>Work minutes:</label>
        <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        />
        <label>BReak minutes:</label>
    </div>
  )
}

export default Sett