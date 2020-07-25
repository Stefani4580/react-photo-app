import React from "react";
// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Bookmarks = (props) => {
  //Simulating Users Photos - just post a few by using %.  Post the index is divisible by 3.
  const listOfImages = props.images.map((item, index) => {
    if (index % 2 === 0) {
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${item.filename}`)} rounded />
        </Col>
      );
    } else {
      return "";
    }
  });

  return (
    <div>
      <div className="user-profile">
        <h1>Bookmarks</h1>
        <Row>{listOfImages}</Row>
      </div>
    </div>
  );
};

export default Bookmarks;
