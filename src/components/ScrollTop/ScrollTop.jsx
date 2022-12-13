import React, { useState, useEffect } from 'react';

const ScrollTop = () => {

    const [backTopToButton, setBackTopToButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackTopToButton(true)
            } else {
                setBackTopToButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backTopToButton && (
                <div 
                    onClick={scrollUp} 
                    className="scrollToTop-btn"
                    tabIndex={10}
                >
                    <i className="fas fa-angle-up"></i>
                </div>
            )}
        </>
    )
}

export default ScrollTop