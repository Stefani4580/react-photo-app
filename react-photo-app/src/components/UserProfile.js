import React from "react";
// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import pic from "../assets/images/alex-nemo-hanse-_KP6Ve-rnNw-unsplash.jpg"
// Helper Classes and Functions
// import imageLoader from "./images";
// import MyImage from "./MyImage";


const UserProfile = (props) => {


//  const loadImages = () => {
//     let jpgs = imageLoader();
//     let images = [];
//     for (let i = 0; i < jpgs.length; i++) {
//       let image = new MyImage(jpgs[i].id, jpgs[i].src);
//       images[i] = image;
//     }
//     return images;
//   };


    //Simulating Users Photos - just post a few by using %.  Post the index is divisible by 3.
  const listOfImages = props.images.map((item, index) => {
    let filename = `.${item.filename}`;
        console.log(`filename: ${filename}`);    
    if (index % 3 === 0) {
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
    <div className="user-profile">
      <h1>User Profile</h1>
      <i className="fas fa-smile-beam fa-10x"></i>
      <Row>{listOfImages}</Row>
    </div>
  );
};

export default UserProfile;
