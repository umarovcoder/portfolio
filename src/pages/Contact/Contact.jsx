import React from 'react'
import './Contact.scss'
import SendMessage from './SendMessage'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div data-aos="zoom-in" className="title rever">
        <div className="section-title">Contact Me</div>
      </div>
      <div className="content">
        <div className="row">
          <div data-aos="zoom-in" className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h3>Address</h3>
              <span>Tashkent city reveal 33 house</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info">
              <h3>Phone</h3>
              <span>+998 90 029 05 95</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
              <h3>Email Address</h3>
              <span>umarovdeveloper@gmail.com</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="info">
              <h3>Website</h3>
              <span>umarovalisher.netlify.app</span>
            </div>
          </div>
        </div>


        <SendMessage />
      </div>
    </section>
  )
}

export default Contact