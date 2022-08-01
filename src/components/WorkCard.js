import "./WorkCardStyles.css";
import React from 'react'
import { Link, NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image"></img>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
               <p>{props.text}</p>
               <div className="pro-buttons">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="https://arihant522.github.io/TextUtils-React/" className="btn">Source</NavLink>
               </div>
            </div>
    </div>
  )
}

export default WorkCard
