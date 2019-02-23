import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        let newState = {}
       
        newState[e.target.name] = e.target.value
       
        this.setState(newState)
       }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <Container className="content">
                    <Row>
                        <Col lg="8 offset-2">
                            <Form action="/contact.php">
                                <Label for="message">Feel free to email me at <a href={"mailto:grace@gracegude.com"}>grace@gracegude.com</a> - or fill out the form below!</Label>
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="name-input"
                                        placeholder="YOUR NAME"
                                        value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email-input"
                                        placeholder="YOUR EMAIL"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="MESSAGE"
                                        placeholder="LET'S WORK TOGETHER!"
                                        value={this.state.message}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </FormGroup>
                                <Button
                                    className="btn-primary"
                                    color="light"
                                    onClick={e => this.handleFormSubmit(e)}
                                    value="Submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Animated>
        );
    }
}