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
              <p>Tarot Card of the Day, currently experiencing downtime.</p>
            </div>
          </div>
    </Animated>
  );
}

export default Projects;
