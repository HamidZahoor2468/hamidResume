import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = "Home - Hamid Zahoor";
    }, []);
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Designer", "Freelancer", "Developer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy(); // Destroy typed instance during cleanup to prevent memory leaks
        };
    }, []);

    return (
        <>   
        <div className="about">
        <div className='bgImg content'>
            <div className='p-5 heroDeatils sectionDeatils '>
            <h1 className="heading">Hamid Zahoor</h1>
            <p>I'm <span className="typed" ref={typedElement}></span></p>
            <ul className=''>
                <li>
                <i className="bi bi-chevron-right"></i> 
                <span>
                    <em>A little<Link to="/about"> <strong>About me</strong></Link></em>
                </span>
                </li>
                <li>
                <i className="bi bi-chevron-right"></i> 
                <span>
                    <em>Visit my<Link to="/resume"> <strong>Development career</strong></Link></em>
                </span>
                </li>
                <li>
                <i className="bi bi-chevron-right"></i> 
                <span>
                    <em>Feel Free to<Link to="/contact"> <strong>Get in touch</strong></Link></em>
                </span>
                </li>
            </ul>
            </div>
        </div></div>
        </>
    );

}

export default Home;