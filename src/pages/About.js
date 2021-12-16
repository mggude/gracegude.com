import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Animated } from "react-animated-css";
import '../App.css';
import ReactTooltip from 'react-tooltip';
import firebase from '../firebase';

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      alert("Fill out your name, email and message please!");
    } else {
      alert("Your message has been sent!")
    }

    const itemsRef = firebase.database().ref('items');
    const item = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };


  render() {
    return (
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="content" margin="auto">

              <p>As a full-stack software engineer and Scrum Leader (CSM), I enjoy working with my team to design and build platforms with clean, modern, maintainable code to create efficient and effective user interfaces.</p><p>I live in Denver amongst a thriving tech community in which I’ve been fortunate to adopt several talented mentors. I have also been honored to assist junior devs in the genesis of their journeys.</p><p>My background in graphic design, marketing, photography, and publishing come in handy more often than my degrees in Anthropology and French, but maybe someday I will excavate ancient Neanderthal caves in the south of France.</p>
              <br />
              <h2 className="text-center">

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='html5'><i className="fab fa-html5 skill" data-tip="HTML5"></i></a>
                <ReactTooltip id='html5' type='error' className='customTheme'>
                  <span>HTML5</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='css3'><i className="fab fa-css3-alt skill"></i></a>
                <ReactTooltip id='css3' type='error' className='customTheme'>
                  <span>CSS3</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='js'><i className="fab fa-js-square skill"></i></a>
                <ReactTooltip id='js' type='error' className='customTheme'>
                  <span>JavaScript</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='node'><i className="fab fa-node-js skill"></i></a>
                <ReactTooltip id='node' type='error' className='customTheme'>
                  <span>Node.js</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='react'><i className="fab fa-react skill"></i></a>
                <ReactTooltip id='react' type='error' className='customTheme'>
                  <span>React</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='adobe'><i className="fab fa-adobe skill"></i></a>
                <ReactTooltip id='adobe' type='error' className='customTheme'>
                  <span>Adobe</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='wordpress'><i className="fab fa-wordpress-simple skill"></i></a>
                <ReactTooltip id='wordpress' type='error' className='customTheme'>
                  <span>WordPress</span>
                </ReactTooltip>

                <a href="https://www.github.com/mggude" target="_blank" rel="noopener noreferrer" data-tip data-for='more'><i className="fas fa-plus skill"></i></a>
                <ReactTooltip id='more' type='error' className='customTheme'>
                  <span>& MORE! Vue, Bootstrap, SQL, MongoDB, Express, SquareSpace, Firebase, etc...</span>
                </ReactTooltip>

              </h2>
              <br />
            <div margin="auto">
              <Form onSubmit={this.handleFormSubmit}>
                <Label for="message">Feel free to email me at <a href={"mailto:grace@gracegude.com"}>grace@gracegude.com</a> - or fill out the form below!</Label>
                <FormGroup>
                  <Input type="text" name="name" id="name" placeholder="YOUR NAME" onChange={this.handleChange} value={this.state.name} />
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" id="email" placeholder="YOUR EMAIL" onChange={this.handleChange} value={this.state.email} />
                </FormGroup>
                <FormGroup>
                  <Input type="textarea" name="message" id="message" placeholder="LET'S WORK TOGETHER!" onChange={this.handleChange} value={this.state.message} />
                </FormGroup>
                <Button className="btn-primary" type="submit" color="light" onClick={this.handleFormSubmit}>Submit</Button>
              </Form>
              </div>
              </div>
      </Animated>
    );
  }
}
