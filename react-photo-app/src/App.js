import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import imageLoader from "./components/images";
import Image from "./components/Image";

// Images
// import IMAGE_1 from "./assets/images/alex-nemo-hanse-_KP6Ve-rnNw-unsplash.jpg";
// import IMAGE_2 from "./assets/images/chris-knight--ucnC7PMDqE-unsplash.jpg";
// import IMAGE_3 from "./assets/images/clarke-sanders-ybPJ47PMT_M-unsplash.jpg";
// import IMAGE_4 from "./assets/images/hian-oliveira-7-gtkXm2b5U-unsplash.jpg";
// import IMAGE_5 from "./assets/images/obi-onyeador-uijVyqj-oc8-unsplash.jpg";
// import IMAGE_6 from "./assets/images/obi-onyeador-zSl8Di_N_9U-unsplash.jpg";
// import IMAGE_7 from "./assets/images/prince-akachi-LWkFHEGpleE-unsplash.jpg";
// import IMAGE_8 from "./assets/images/simone-fischer-Rh1FYpKcYLs-unsplash.jpg";
// import IMAGE_9 from "./assets/images/terricks-noah-n9R0MN3XGvY-unsplash.jpg";
// import IMAGE_10 from "./assets/images/alex-nemo-hanse-_KP6Ve-rnNw-unsplash.jpg";

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
      let image = new Image(jpgs[i].id, jpgs[i].src);
      images[i] = image;
    }
    return images;
  };

  render() {
    const listOfCards = this.state.images.map((item, index) => {
      // console.log("testing list items****", id)
      return (
        <Card>
          <Card.Img variant="top" src={require(`${item.filename}`)} />
        </Card>
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
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
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
              {listOfCards}
            </CardGroup>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
