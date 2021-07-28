import React from 'react';
//import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" style={{color:"#334A79"}} href="#home">
                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM2.2198 10C2.2198 14.2969 5.70311 17.7802 10 17.7802C14.2969 17.7802 17.7802 14.2969 17.7802 10C17.7802 5.70311 14.2969 2.2198 10 2.2198C5.70311 2.2198 2.2198 5.70311 2.2198 10Z" fill="#334A79"/>
                    <path d="M27 15C27 20.5228 22.5228 25 17 25C11.4772 25 7 20.5228 7 15C7 9.47715 11.4772 5 17 5C22.5228 5 27 9.47715 27 15ZM9.2198 15C9.2198 19.2969 12.7031 22.7802 17 22.7802C21.2969 22.7802 24.7802 19.2969 24.7802 15C24.7802 10.7031 21.2969 7.2198 17 7.2198C12.7031 7.2198 9.2198 10.7031 9.2198 15Z" fill="#334A79"/>
                    </svg>Trinity Insurance
                </a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="home" id="home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="about-us" id="about-us" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="why-us" id="why-us" className="nav-link">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="plans" id="plans" className="nav-link">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a href="testimonials" id="testimonials" className="nav-link">Testionials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
