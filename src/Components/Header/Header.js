import React, { useEffect, useState } from 'react'

import "./header.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
const resume=process.env.REACT_APP_RESUME

const Header = () => {

    const [menu, setMenu] = useState(false);
    const [border, setborder] = useState(false);

    

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



    useEffect(() => {

        const addBorder = () => {
            if (window.scrollY > 60) {
                setborder(true);
            }
            else {
                setborder(false);
            }
        }

        const scrollActive = () => {
            const containers = document.querySelectorAll('div[id]');
            const scrollDown = window.scrollY;
            containers.forEach((current) => {
              const containerHeight = current.offsetHeight;
              const containerTop = current.offsetTop -50;
              const containerId = current.getAttribute('id');
              const containerClass = document.querySelector(
                `.nav a[href*='${containerId}']`
              );
      
              if (containerClass) { 
                if (scrollDown > containerTop && scrollDown <= containerTop + containerHeight) {
                  containerClass.classList.add('active_link');
                } else {
                  containerClass.classList.remove('active_link');
                }
              }
            });
          };

      

        window.addEventListener('scroll', scrollActive);
        window.addEventListener('scroll', addBorder);

        return () => {
            window.removeEventListener('scroll', scrollActive,addBorder);
            window.removeEventListener('scroll', addBorder);
        }
    }, [])

    return (
        <div className={`${border ? "border" : " "} header`}>
            <div className='nav'>
                <div className='logo'>
                    <span className='logo_circle'>A</span>
                    <span className='logo_logoname'>Aditya Pratap Singh</span>
                </div>
                <div className={`${menu ? "show_menu" : ""} nav_menu`}>
                    <span className='menu_name'>Menu</span>
                    <h3 className="name">Aditya</h3>
                    <ul className='nav_list'>
                        <li>
                            <a href="#home" className='nav_link' onClick={(e) => { 
                                e.preventDefault();
                                setMenu(false);
                                scrollToSection('home') ;
                                 }}>Home</a>
                        </li>
                        <li>
                            <a href="#Skills" className='nav_link' onClick={(e) => { 
                                e.preventDefault();
                                setMenu(false);
                                scrollToSection('Skills') ;
                                 }}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className='nav_link' onClick={(e) => { 
                                e.preventDefault();
                                setMenu(false);
                                scrollToSection('projects') ;
                                 }}>Projects</a>
                        </li>
                        <li>
                            <a href="#education" className='nav_link' onClick={(e) => { 
                                e.preventDefault();
                                setMenu(false);
                                scrollToSection('education') ;
                                 }}>Education</a>
                        </li>
                        <li>
                            <a href="#contact" className='nav_link' onClick={(e) => { 
                                e.preventDefault();
                                setMenu(false);
                                scrollToSection('contact') ;
                                 }}>Contact me</a>
                        </li>

                        <li>
                            <a href={resume} target="_blank" rel="noreferrer" className='nav_link nav_resume'>Resume</a>
                        </li>
                    </ul>
                    <div className='close' onClick={(e) => { 
                                setMenu(false);
                                 }}><AiOutlineClose /></div>
                </div>
                <div className='hamberger' onClick={() => { 
                    setMenu(true) 
                    }}>
                    <AiOutlineMenu />
                </div>
            </div>
        </div>
    )
}

export default Header