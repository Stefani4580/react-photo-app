import React from "react";
import "../App.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Helper Classes and Functions
import imageLoader from "./imageLoader";
import MyImage from "./MyImage";

// Components
import UserProfile from "./UserProfile";
import Bookmarks from "./Bookmarks";

class Reactagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.loadImages(),
      quit: "visible",
      containerVisibility: ""
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

  logout = () => {
    this.setState({
      containerVisibility: "invisible"
    })
  };

  render() {
    const listOfImages = this.state.images.map((item, index) => {
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${item.filename}`)} rounded />
        </Col>
      );
    });

    return (
      <div className="App">
        <Container fluid className={this.state.containerVisibility} >
          {/* Navbar */}
          <Navbar bg="light" expand="lg" > 
            <Navbar.Brand href="#home">Reactagram</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#user-profile">User Profile</Nav.Link>
                <Nav.Link href="#bookmarks">Bookmarks</Nav.Link>
              </Nav>
              <Button variant="primary" onClick={this.logout}>
                Logout
              </Button>
            </Navbar.Collapse>
          </Navbar>
          <Row>{listOfImages}</Row>
        </Container>
        <div id="user-profile">
          <UserProfile images={this.state.images} />
        </div>
        <div id="bookmarks">
          <Bookmarks images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Reactagram;
