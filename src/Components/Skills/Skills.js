import React from 'react'
import "./skill.css"
import { AiOutlineLayout, AiOutlineDatabase } from "react-icons/ai"
import {LiaToolsSolid} from "react-icons/lia"
import html from "../../Images/html-icon.png"
import css from "../../Images/css-icon.png"
import tailwindcss from "../../Images/tailwind-css-icon.png"
import git from "../../Images/git-icon.png"
import github from "../../Images/github-icon.png"
import vercel from "../../Images/vercel.svg"
import redux from "../../Images/redux-icon.png"
import canva from "../../Images/canva-icon.png"
import net from "../../Images/netlify-icon.png"
import node from "../../Images/nodejs-icon.png"
import express from "../../Images/express-js.png"
import mongodb from "../../Images/mongodb.png"
import mysql from "../../Images/mysql-icon.png"
// import firebase from "../../Images/firebase-icon.png"
import cpp from "../../Images/cpp-icon.png"
import c from "../../Images/c-icon.png"
import js from "../../Images/js-icon.png"
import sql from "../../Images/sql-icon.png"
import java from "../../Images/java-icon.png"
const Skills = () => {
    return (
        <div id="Skills">
            <h2 className='section_heading'>
                <span>My Tech Stack</span>
            </h2>

            <div className='skill_section container grid'>
                <article className='skills_card'>
                    <div className='skill_border'></div>
                    <div className='skill_con'>
                        <div className='skill_icon'><AiOutlineLayout /> <div className='orange-skill_box'></div></div>
                        <h2 className='skill_heading'>Front End</h2>
                        <p className='tech'><p><span><img src={html} alt="html icon" /></span><span>HTML5</span></p>
                            <p> <span><img src={css} alt="css icon" /></span><span>CSS3</span></p>
                            <p><span><img src={css} alt="css icon" /></span><span>Javascript</span></p>
                            <p><span><img src={js} alt="js icon" /></span><span>React</span></p>
                            <p><span><img src={tailwindcss} alt="tailwind css" /></span><span>TailwindCSS</span></p>
                        </p>
                    </div>
                </article>

                <article className='skills_card'>
                    <div className='skill_border'></div>
                    <div className='skill_con'>
                        <div className='skill_icon'><AiOutlineDatabase /> <div className='orange-skill_box'></div></div>
                        <h2 className='skill_heading'>Back End</h2>
                        <p className='tech'><p><span><img src={node} alt="nodejs_icon"></img></span><span>Node Js</span></p>
                            <p> <span><img src={express} alt="express js icon" /></span><span>Express Js</span></p>
                            <p><span><img src={mongodb} alt="mongo db icon" /></span><span>MongoDB</span></p>
                            <p><span><img src={mysql} alt="mysql icon" /></span><span>Mysql</span></p>
                            {/* <p><span><img src={firebase} alt="firebase icon" /></span><span>FireBase</span></p> */}
                        </p>
                    </div>
                </article>

                <article className='skills_card'>
                    <div className='skill_border'></div>
                    <div className='skill_con'>
                        <div className='skill_icon'><AiOutlineLayout /> <div className='orange-skill_box'></div></div>
                        <h2 className='skill_heading'>Programming Languages</h2>
                        <p className='tech'>
                            <p> <span><img src={c} alt="C language" /></span><span>C</span></p>
                            <p><span><img src={cpp} alt="Cpp" /></span><span>C++</span></p>
                            <p><span><img src={js} alt="js language" /></span><span>Javascript</span></p>
                            <p><span><img src={sql} alt="sql" /></span><span>Sql</span></p>
                            <p><span><img src={java} alt="java" /></span><span>Java</span></p>
                        </p>
                    </div>
                </article>

                <article className='skills_card'>
                    <div className='skill_border'></div>
                    <div className='skill_con'>
                        <div className='skill_icon'><LiaToolsSolid /> <div className='orange-skill_box'></div></div>
                        <h2 className='skill_heading'>Tools</h2>
                        <p className='tech'>
                            <p> <span><img src={git} alt="Git language" /></span><span>Git</span></p>
                            <p><span><img src={github} alt="Github" /></span><span>Github</span></p>
                            <p><span><img src={vercel} alt="Vercel" /></span><span>Vercel</span></p>
                            <p><span><img src={net} alt="netlify" /></span><span>Netlify</span></p>
                            <p><span><img src={redux} alt="redux" /></span><span>Redux Toolkit</span></p>
                            <p><span><img src={canva} alt="canva" /></span><span>Canva</span></p>
                        </p>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default Skills