import React, { Component } from "react";
// Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

// Components
import Reactagram from "./components/Reactagram";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: "invisible",
      userName: "",
      show: false,
      loginBtnVisibility: "visible",
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:  ", e.target.value);
    this.setState({
      loggedIn: "visible",
      loginBtnVisibility: "invisible",
    });
    this.handleClose();
  };

  getEmail = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container fluid className="loginContainer">
          <Row>
            <Col xs={6} md={4} lg={3}>
              <Button
              size="lg" block
                variant="primary"
                onClick={this.handleShow}
                className={this.state.loginBtnVisibility}
                id="loginBtn"
              >
                Login to Reactagram
              </Button>
            </Col>
            <Col xs={6} md={4} lg={9}>
              <h4 className={this.state.loggedIn}>Welcome, {this.state.userName}</h4>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login to Reactagram</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.getEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>

            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div class={this.state.loggedIn}>
          <Reactagram userName={this.state.userName} />
        </div>
      </div>
    );
  }
}
