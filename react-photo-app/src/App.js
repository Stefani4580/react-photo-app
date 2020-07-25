import React from "react";
import "./App.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

// Helper Classes and Functions
import imageLoader from "./components/images";
import MyImage from "./components/MyImage";

// Components
import UserProfile from "./components/UserProfile";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      images: this.loadImages(),
    };
  }

  loadImages = () => {
    let jpgs = imageLoader();
    let images = [];
    for (let i = 0; i < jpgs.length; i++) {
      let image = new MyImage(jpgs[i].id, jpgs[i].src);
      images[i] = image;
    }
    return images;
  };

  render() {
    const listOfImages = this.state.images.map((item, index) => {
      // console.log(`${index}:  ${item.filename}`);
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${item.filename}`)} rounded />
        </Col>
      );
    });

    return (
      <div className="App">
        <Container fluid>
          {/* Navbar */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Reactagram</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#userProfile">User Profile</Nav.Link>
                <NavDropdown title="Users" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">ilikephotos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    theRealPhotog
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    weLikePhotosToo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row>{listOfImages}</Row>
        </Container>
        <div id="userProfile">
        <UserProfile images={this.state.images}  />

        </div>
      </div>
    );
  }
}

export default App;
