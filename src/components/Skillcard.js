import React from 'react'

function Skillcard(props) {
  return (
    <div className="skill-card">
          <img src={props.src} alt="img"/>
          <div className="skill-card-heading">{props.heading}</div>
          <div className="skill-description">{props.description}</div>
      </div>
  )
}

export default Skillcard
