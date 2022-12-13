import React from 'react'
import './Skills.scss'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import sass from '../../assets/img/sass.png'
import tailwind from '../../assets/img/tailwin4.jpg'
import js from '../../assets/img/js.png'
import react from '../../assets/img/reactjs.png'
import redux from '../../assets/img/redux.svg'
import typescript from '../../assets/img/typescript.png';

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="title rever">
            <div className="section-title">My Skills</div>
        </div>
        <div className="content">
            <div data-aos="zoom-in-up" className="column col-left reveal">
                <h2 className="content-title">My Skills and Experiences</h2>
                <p>What I know in programming: JavaScript, Reactjs, Redux.
                    Currently learning Next js. <br/>
                    I intend to learn other programming
                    languages ​​in the <br/> future</p>
                <a href="#" className="btn">See More</a>
            </div>
            <div data-aos="zoom-in-up" className="column col-right reveal">
                <div className="bar">
                    <div className="info">
                        <img src={html} alt="icon" />
                        <span>HTML</span>
                    </div>
                    <div className="line html"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={css} alt="icon" />
                        <span>CSS</span>
                    </div>
                    <div className="line css"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={sass} alt="icon" />
                        <span>SASS</span>
                    </div>
                    <div className="line css"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={tailwind} alt="icon" />
                        <span>Tailwindcss</span>
                    </div>
                    <div className="line css"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={js} alt="icon" />
                        <span>JavaScript</span>
                    </div>
                    <div className="line javascript"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={react} alt="icon" />
                        <span>React</span>
                    </div>
                    <div className="line react"></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <img src={typescript} alt="icon" />
                        <span>Typescript</span>
                    </div>
                    <div className="line redux"></div>
                </div>

                <div className="bar">
                    <div className="info">
                        <img src={redux} alt="icon" />
                        <span>Redux</span>
                    </div>
                    <div className="line redux"></div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills