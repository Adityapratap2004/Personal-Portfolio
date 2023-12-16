import React from 'react'
// import project from "../../Images/blog-website-icon.png"/
import {BsArrowUpRight} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"
import {IoEarthOutline} from "react-icons/io5"
const Project = ({project}) => {
  return (
    <article className='pro'>
        <div className='project_img'>
            <img src={project.imgurl} alt="project" />
            <a href={project.github} className='arrow_button'>
                <BsArrowUpRight/>
            </a>
        </div>  
        <div className='project_content'>
            <h3 >{project.type}</h3>
            <h2 >{project.name}</h2>
            <p >{project.desc}</p>
        </div>
        <div className='project_link'>
            <a href={project.github}>
            <FiGithub/>  View              
            </a>
            <a href={project.link}>
                <IoEarthOutline/>View
            </a>
        </div>      
    </article>
  )
}

export default Project