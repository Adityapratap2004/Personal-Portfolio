import React from 'react'
import Project from './Project'
import "./projects.css"
import {project} from "./text"

const Projects = () => {
  return (
    <div id='projects'>
        <h2 className='project_heading'>
            <span>Projects</span>
        </h2>

        <div className='project_container grid'>
          {
            project.map((p)=>{
              return <Project project={p}/>
            })

          }

       
            
                   
        </div>
    </div>
  )
}

export default Projects