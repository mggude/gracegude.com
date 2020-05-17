import React from "react";
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";
import ReactTooltip from 'react-tooltip';

function Home() {
    return (
        <div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Container className="content">
                <Row>
                    <Col md="2.5">
                        <img src="https://avatars2.githubusercontent.com/u/44000341?s=460&u=f2e74739de77a1de58fde4ed9cb414d408a3ac8f&v=4" style = {{ width: '80%'}} alt="Avatar" id="avatar" data-tip data-for='meetyou'></img>
                        <ReactTooltip id='meetyou' type='error' className='customTheme'>
                  <span>Nice to meet you!</span>
                </ReactTooltip>
                    </Col>
                    <Col md="6">
                        <br></br>
                        <br></br>
                        <h1>Hello World!</h1>
                        <p>
                            My name is Grace and I am a web developer, visual designer and project manager based in Denver.
                            I enjoy designing, developing and managing interesting projects with cool people!
                        </p>
                    </Col>
                </Row>
            </Container>
            </Animated>
        </div >
    );
}

export default Home;




