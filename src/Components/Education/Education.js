import React from 'react'
import "./education.css"
import Edu from './Edu'
import {education} from "./text"

const Education = () => {
  console.log(education);
  return (
    <div id="education">
        <h2 className='section_heading'>
                <span>Education</span>
        </h2>
        <div className='Education_section container grid'>
          {education.map((e)=>{
            return <Edu desc={e}/>
          })}
           
        </div>

    </div>
  )
}

export default Education