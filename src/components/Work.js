import "./WorkCardStyles.css";
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";
import WordCardData from "./WorkCardData"
function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-card">
         {WordCardData.map=((val,ind)=>{
            return(
                <WorkCard key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
         })}
        </div>
    </div>
  );
};

export default Work
