import React from "react";
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";

function Projects() {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <Container className="content">
        <Row>
          <Col sm="4">
            <div className="work">
              <a href="https://fast-plateau-84984.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/A8pCmbk.png" alt="ClickyGame" /></a>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://tarotbygrace.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://s3-media3.fl.yelpcdn.com/bphoto/sDSyL4PFbtOIpR4WKH1bJw/ls.jpg" alt="Tarot" /></a>
            </div>
          </Col>
          <Col sm="4">
            <div className="work">
              <a href="https://zoosnatch.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/XyOFuZh.png" alt="ZooSnatch" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </Animated>
  );
}

export default Projects;