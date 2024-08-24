import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    const handleToggle = () => {
        const header = document.querySelector('.header');
        header.classList.toggle('header-show');
    };

    const closeSidebar = () => {
        const header = document.querySelector('.header');
        if (header.classList.contains('header-show')) {
            header.classList.remove('header-show');
        }
    };

    return (
        <header id="header" className="header dark-background d-flex flex-column">
            <i className="header-toggle d-xl-none bi bi-list" onClick={handleToggle}></i>

            <div className="profile-img">
                <img src={props.profileImg} alt="" className="img-fluid rounded-circle" />
            </div>

            <a href="/" className="logo d-flex align-items-center justify-content-center">
                <h1 className="sitename">Hamid Zahoor</h1>
            </a>

            <div className="social-links text-center">
                <a href="https://github.com/HamidZahoor2468" className="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100089109289362" className="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/hamidzahoor_/?next=%2F&hl=en" className="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com/hamidzahoorr" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
               
                <a href="https://www.linkedin.com/in/hamid-zahoor-7405a5253" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={closeSidebar}
                        >
                            <i className="bi bi-house navicon"></i> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={closeSidebar}
                        >
                            <i className="bi bi-person navicon"></i> About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={closeSidebar}
                        >
                            <i className="bi bi-file-earmark-text navicon"></i> Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={closeSidebar}
                        >
                            <i className="bi bi-images navicon"></i>  Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={closeSidebar}
                        >
                            <i className="bi bi-envelope navicon"></i> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Sidebar;