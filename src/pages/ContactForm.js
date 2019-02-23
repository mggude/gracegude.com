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
        };
    }

    render() {
        return(
            <div>
                <Field onChange={} value={} />
            </div>
        )
    }
}