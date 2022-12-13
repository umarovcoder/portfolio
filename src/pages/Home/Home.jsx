import React from 'react'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import ScrollTop from '../../components/ScrollTop/ScrollTop'
import './Home.scss'

const Home = () => {
    return (
        <div>
            <ScrollTop/>
            <Header />

            <section className="main" id="main">
                <div className="content">
                    <h2>Hello, I'm <br /> <span>Alisher Umarov</span></h2>
                    <div className="animated-text">
                        <h3>Blogger</h3>
                        <h3>Frontend developer</h3>
                        <h3>YouTuber</h3>
                    </div>
                    <a href="#work" className="btn">See my work</a>
                    <div className="media-icons">
                        <a href="https://github.com/Alisher-Umarov" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/umaroff_117/" target="_blank"><i
                            className="fab fa-instagram-square"></i></a>
                        <a href="https://www.linkedin.com/in/alisher-umarov-code/" target="_blank"><i
                            className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </section>

            <About />
            <Skills />
            <Services />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home