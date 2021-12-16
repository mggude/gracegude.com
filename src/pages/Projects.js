import React from "react";
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";
import ReactTooltip from 'react-tooltip';

function Projects() {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div className="content">
            <div className="work" style={{marginRight: '5rem'}}>
              <a href="https://tarotbygrace.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-tip data-for='TarotCard'><img src="https://s3-media3.fl.yelpcdn.com/bphoto/sDSyL4PFbtOIpR4WKH1bJw/ls.jpg" alt="Tarot" /></a>
              <ReactTooltip id='TarotCard' type='error' className='customTheme'>
                  <span>Tarot Card of the Day</span>
                </ReactTooltip>
            </div>
            <div className="work">
              <p>My current projects include managing Kubernetes infrasture as an SRE. I primarily code in JavaScript.</p><p>I like to pretend I know how to read Tarot, and as a pet project have built a Tarot Deck API. I query that data on a site that is unfortunately still hosted on Heroku and linked on this page.</p>
            </div>
          </div>
    </Animated>
  );
}

export default Projects;
