import React, { Component } from 'react';
import './enterstyle.css';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

class Entercode extends Component {

  render() {
    return (
        <div className="entercodebody-container">
          <div className="entercode-header">
            <h3>Enter Code</h3>
          </div>
          <Container>
            <Row>
              <Col className="label-container">
                <h5>Enter Code Here</h5>
              </Col>
            </Row>
            <Row>
              <Col className="codeform-container">
                <Form>
                  <FormGroup>
                    <Input size="lg" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="codesubmit-container">
                <Button color="danger" size="lg">Submit</Button>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Entercode;
