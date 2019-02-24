import React from "react";
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";
import ReactTooltip from 'react-tooltip';

function Projects() {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <Container className="content">
        <Row>
          <Col sm="4">
            <div className="work">
              <a href="https://fast-plateau-84984.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-tip data-for='ClickyGame'><img src="https://i.imgur.com/A8pCmbk.png" alt="ClickyGame" /></a>
              <ReactTooltip id='ClickyGame' type='error' className='customTheme'>
                  <span>ClickyGame</span>
                </ReactTooltip>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://tarotbygrace.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-tip data-for='TarotCard'><img src="https://s3-media3.fl.yelpcdn.com/bphoto/sDSyL4PFbtOIpR4WKH1bJw/ls.jpg" alt="Tarot" /></a>
              <ReactTooltip id='TarotCard' type='error' className='customTheme'>
                  <span>Tarot Card of the Day</span>
                </ReactTooltip>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://zoosnatch.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-tip data-for='ZooSnatch'><img src="https://i.imgur.com/XyOFuZh.png" alt="ZooSnatch" /></a>
              <ReactTooltip id='ZooSnatch' type='error' className='customTheme'>
                  <span>ZooSnatch</span>
                </ReactTooltip>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div className="work">
              <a href="https://github.com/mggude/gracegude.com" target="_blank" rel="noopener noreferrer" data-tip data-for='MyWebsite'><img src="https://i.imgur.com/TmYtR55.jpg" alt="My Website" /></a>
              <ReactTooltip id='MyWebsite' type='error' className='customTheme'>
                  <span>My Portfolio Website Repo</span>
                </ReactTooltip>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://whispering-bayou-58102.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-tip data-for='todo'><img src="https://i.imgur.com/WDFCLJQ.jpg" alt="To Do" /></a>
              <ReactTooltip id='todo' type='error' className='customTheme'>
                  <span>To Do List</span>
                </ReactTooltip>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://mggude.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer" data-tip data-for='trivia'><img src="https://i.imgur.com/GGIkaXE.jpg" alt="Harry Potter Trivia" /></a>
              <ReactTooltip id='trivia' type='error' className='customTheme'>
                  <span>Harry Potter Trivia Game</span>
                </ReactTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </Animated>
  );
}

export default Projects;