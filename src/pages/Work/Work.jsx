import React from 'react'
import macbro from '../../assets/img/macbro.png';
import obhavo from '../../assets/img/obhavo.png';
import moomkin from '../../assets/img/moomkin.png';
import work from '../../assets/img/work.png';
import clock from '../../assets/img/clock.png';
import m2 from '../../assets/img/m2.png';
import xo from '../../assets/img/xo.png'
import './Work.scss';

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="title rever">
        <div className="section-title">My Work</div>
      </div>
      <div className="content">
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={macbro} alt="img" />

          </div>
          <span className='span'>
            <a target='_blank' href="https://github.com/seniorDevelopers/shop">
              github
            </a>
            <a target="_blank" href="https://tech-bazaar.netlify.app/">
              live preview
            </a>
          </span>
        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={obhavo} alt="img" />

          </div>
          <span className='span'>
            <a target='_blank' href="https://github.com/Alisher-Umarov/JS-weather-app">
              github
            </a>
            <a target="_blank" href="https://my-ob-havo.netlify.app/">
              live preview
            </a>
          </span>
        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={moomkin} alt="img" />

          </div>
          <span className="span">
            <a target="_blank" href="https://github.com/Alisher-Umarov/moomkin">
              github
            </a>
            <a target="_blank" href="https://umarov-moomkin.netlify.app/">
              live preview
            </a>
          </span>
        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={work} alt="img" />

          </div>
          <span className="span">
            <a target="_blank" href="https://github.com/Alisher-Umarov/country-app">
              github
            </a>
            <a target="_blank" href="https://umarovcountryapp.netlify.app/">
              live preview
            </a>
          </span>

        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={clock} alt="img" />

          </div>
          <span className="span">
            <a target="_blank" href="https://github.com/Alisher-Umarov/Clock">
              github
            </a>
            <a target="_blank" href="https://umarovclock.netlify.app/">
              live preview
            </a>
          </span>

        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={m2} alt="img" />

          </div>
          <span className="span">
            <a target="_blank" href="https://github.com/Alisher-Umarov/M2">
              github
            </a>
            <a target="_blank" href="https://my-m2-project.netlify.app">
              live preview
            </a>
          </span>
        </div>
        <div data-aos="zoom-out" className="card reveal">
          <div className="card-img">

            <img src={xo} alt="img" />

          </div>
          <span className="span">
            <a target="_blank" href="https://github.com/Alisher-Umarov/xo">
              github
            </a>
            <a target="_blank" href="https://umarovgame.netlify.app/">
              live preview
            </a>
          </span>

        </div>
      </div>
    </section>
  )
}

export default Work