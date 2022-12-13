import React from 'react'
import Rasm from '../../assets/img/me.jpg'
import './About.scss'

const About = () => {

  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });

  return (
    <>
      <section className='about' id='about'>
        <div data-aos="zoom-in-up" className="title reveal">
          <div className="section-title">About Me</div>
        </div>
        <div className="content">
          <div data-aos="zoom-in-up" className="column col-left reveal">
            <div className="img-card">
              <img src={Rasm} alt="img" />
            </div>
          </div>
          <div data-aos="zoom-in-up"className="column col-right reveal">
            <h2 style={{ marginBottom: "40px" }} className="content-title">Hey there! I'm Alisher Umarov</h2>
            <p className="paragraph-text">I was born in 2004 in Tashkent. It's been more than 1 year since I entered the
              world of programming. <br /> Currently Programming has become an integral part of my life. <br /> I work
              as a Frontend developer at "Idrok Ta'lim" company.
              <br /> Until now I developed several websites.
            </p>
            <br />
            <p className="paragraph-text"><br />
              "It takes a lot of work to become a strong programmer!" This is now my motto.
            </p>
            <a href="#" className="btn">See More</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About