import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
// import imageLoader from "./components/images";
// import Image from "./components/Image";
// Images
import IMAGE_1 from "./assets/images/alex-nemo-hanse-_KP6Ve-rnNw-unsplash.jpg";
import IMAGE_2 from "./assets/images/chris-knight--ucnC7PMDqE-unsplash.jpg";
import IMAGE_3 from "./assets/images/clarke-sanders-ybPJ47PMT_M-unsplash.jpg";
import IMAGE_4 from "./assets/images/hian-oliveira-7-gtkXm2b5U-unsplash.jpg";
import IMAGE_5 from "./assets/images/obi-onyeador-uijVyqj-oc8-unsplash.jpg";
import IMAGE_6 from "./assets/images/obi-onyeador-zSl8Di_N_9U-unsplash.jpg";
import IMAGE_7 from "./assets/images/prince-akachi-LWkFHEGpleE-unsplash.jpg";
import IMAGE_8 from "./assets/images/simone-fischer-Rh1FYpKcYLs-unsplash.jpg";
import IMAGE_9 from "./assets/images/terricks-noah-n9R0MN3XGvY-unsplash.jpg";
// import IMAGE_10 from "./assets/images/alex-nemo-hanse-_KP6Ve-rnNw-unsplash.jpg";

// Components
import UserProfile from "./components/UserProfile";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      images: "./assets/images/hian-oliveira-7-gtkXm2b5U-unsplash.jpg"
    }
  }

  // loadImages = () => {

  //   let jpgs = imageLoader();
  //   let images = [];
  //   for (let i = 0; i < jpgs.length; i++) {
  //     let image = new Image(jpgs[i].id, jpgs[i].src);
  //     images[i] = image;
          
  //   }
  //   return images;

  // }

  render() {
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
                <Nav.Link href="#link">User Profile</Nav.Link>
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
          <Row>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={this.state.images} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={IMAGE_2} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={IMAGE_3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>{" "}
          </Row>
        </Container>
        <UserProfile />
      </div>
    );
  }
}

export default App;
