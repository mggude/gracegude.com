import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
// import styled from "styled-components";
import ReactTooltip from 'react-tooltip';

const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                    <Link
                        to="/projects"
                        className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                        Projects
                </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                    <Link
                        to="/about"
                        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                </Link>
                </li>
                <li className="nav-item font-awesome">
                    <a href="https://www.linkedin.com/in/grace-gude-1b6205b2/" target="_blank" rel="noopener noreferrer"  data-tip data-for='linkedin'
                        className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <ReactTooltip id='linkedin' type='error' className='customTheme'>
                        <span>LinkedIn</span>
                    </ReactTooltip>
                </li>
                <li className="nav-item d-flex justify-content-start">
                    <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='github' className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}><i className="fab fa-github" data-tip="github"></i></a>
                    <ReactTooltip id='github' type='error' className='customTheme'>
                        <span>GitHub</span>
                    </ReactTooltip>
                </li>

            </ul>
        </>
    )
}





export default Nav;

