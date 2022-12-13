import React, { useState } from 'react'
import './Header.scss'

const Header = () => {
    const [menuBtn, setMenuBtn] = useState(true);

    const handleClick = () => {
        setMenuBtn(!menuBtn)
    }

    return (
        <header>
            <a href='#main' className="brand">Alisher</a>
            <div onClick={handleClick} className={menuBtn ? 'menu-btn' : 'menu-btn active'}></div>
            <div onClick={handleClick} className={menuBtn ? 'navigation' : 'navigation active'}>
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    )
}

export default Header