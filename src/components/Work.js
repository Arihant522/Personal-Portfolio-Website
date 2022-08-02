import "./WorkCardStyles.css";
import React from 'react'

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
const Work=()=>{
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container">
         {WorkCardData.map((val)=>{
            return(
                <WorkCard 
                imgsrc={val.imgsrc}
                title={val.title}
                tech={val.tech}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
         })}
        </div>
    </div>
  );
};

export default Work;
