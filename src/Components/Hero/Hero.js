import React from 'react'
import "./hero.css"
// import Img from "../../Images/about-perfil.jpg"
import Img from "../../Images/adi.jpg"
import arrow from "../../Images/curved-arrow.svg"
import line from "../../Images/random-lines.svg"
import { FaLinkedinIn } from "react-icons/fa"
import { ImGithub } from "react-icons/im"
import { SiLeetcode } from "react-icons/si"
import { AiOutlineDown } from "react-icons/ai"
import { Link } from 'react-router-dom'


const Hero = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value to stop at 80 pixels above the section
      const targetPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div id="home">
      <div className='home_container container grid'>
        <h1 className='heroname'>Aditya Pratap Singh</h1>
        <div className="homeImg">
          <div className='widthimgD'>
            <img src={Img} alt="Img" className='img' />
            <div className='shadow'></div>
            <img src={arrow} alt="arrow" className="arrow" />
            <img src={line} alt="line" className="line" />
            <div className='orangebox'></div>
          </div>


          <div className='social'>
            <a href="https://www.linkedin.com/in/adityapratapsingh004/" target="_blank" rel="noreferrer" className=''><FaLinkedinIn /></a>
            <a href="https://github.com/Adityapratap2004" target="_blank" rel="noreferrer" className=''><ImGithub /></a>
            <a href="https://leetcode.com/adityaprataps2004/" target="_blank" rel="noreferrer" className=''><SiLeetcode /></a>
          </div>
        </div>

        <div className='info'>
          <p className="desc">
            <b>MERN Developer </b> with strong proficiency in <b>C++</b> and a passion for Data Structures and Algorithms. Specializing in crafting dynamic web applications and optimizing code for efficiency.
          </p>

          <Link to="/" className='downscroll' onClick={(e)=>{
              e.preventDefault();
              scrollToSection('Skills')}} >
            <div className='downscrollBox'>
              <AiOutlineDown  />
            </div>
            <div className='scrollDown-text' >
              Scroll Down
            </div>
          </Link>

        </div>

      </div>

     
    </div >
  )
}

export default Hero