import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactForm from "./pages/Form";
import Projects from "./pages/Projects";
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Router>
            <div>
            <Nav/>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/form" component={ContactForm} />
            </div>
          </Router>
        </Row>

      </Container>



    );
  }
}

export default App;
