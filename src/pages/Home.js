import React from "react";
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";

function Home() {
    return (
        <div>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Container className="content">
                <Row>
                    <Col md="2.5 offset-2">
                        <img src="https://media.licdn.com/dms/image/C4E03AQHaXK3aDzJVhQ/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=gPaSkfXFErG2JGpG6zsEKazkur0l7YqGOnpiZUIPwe4" alt="Avatar" id="avatar"></img>
                    </Col>
                    <Col md="6">
                        <br></br>
                        <br></br>
                        <h1>Hello World!</h1>
                        <p>
                            My name is Grace and I am a web developer, visual designer and project manager based in Denver.
                            I enjoy developing, designing and managing interesting projects with cool people!
                        </p>
                    </Col>
                </Row>
            </Container>
            </Animated>
        </div >
    );
}

export default Home;




