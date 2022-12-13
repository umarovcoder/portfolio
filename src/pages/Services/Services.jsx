import React from 'react'
import './Services.scss'

const Services = () => {
  return (
    <section className="services" id="services">
        <div className="title rever">
            <div className="section-title">My Services</div>
            <p style={{textAlign: "center"}}>I produce web sites with different designs depending on the client's
                requirements.</p>
        </div>
        <div className="content">

            <div data-aos="zoom-in-up" className="card reveal">
                <div className="services-icon">
                    <i className="fas fa-file-code"></i>
                </div>
                <div className="info">
                    <h3>Landing Pages</h3>
                    <p>Various complex websites</p>
                </div>
            </div>
            <div data-aos="zoom-in-up" className="card reveal">
                <div className="services-icon">
                    <i className="fas fa-object-group"></i>
                </div>
                <div className="info">
                    <h3>SPA Web Apps</h3>
                    <p>Various complex websites</p>
                </div>
            </div>
            <div data-aos="zoom-in-up" className="card reveal">
                <div className="services-icon">
                    <i className="fas fa-file-code"></i>
                </div>
                <div className="info">
                    <h3>Web Applications</h3>
                    <p>Various complex websites</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services