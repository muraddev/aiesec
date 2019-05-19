import React from 'react'


//single station
const Station = (props) => {
  return (
    <div className="station">
      <div>
        <div className={`active ${props.active?"notToggled":"toggled"}`}>
          <a><img src="/images/minus.png" /></a>
          <img src="/images/fm.png" className="fmLogo" />
          <a><img src="/images/plus.png" /></a>
        </div>

      </div>
      <div className="toggle" onClick={()=>props.click(props.station)}>
        <span>{props.station.name}</span>
        <span className="frequency">{props.station.frequency}</span>
      </div>

    </div>
  )
}

export default Station;