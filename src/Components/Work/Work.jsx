import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Style/Work.css";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("Graphic");
  const [showMore, setShowMore] = useState(false);

  const images = {
    Graphic: [
      "/imgs/Work-imgs/Graphic-imgs/1.jpg",
      "/imgs/Work-imgs/Graphic-imgs/2.jpg",
      "/imgs/Work-imgs/Graphic-imgs/3.jpg",
      "/imgs/Work-imgs/Graphic-imgs/4.jpg",
      "/imgs/Work-imgs/Graphic-imgs/5.jpg",
      "/imgs/Work-imgs/Graphic-imgs/6.jpg"
    ],
    App: [
      "/imgs/Work-imgs/App-imgs/1.jpg",
      "/imgs/Work-imgs/App-imgs/2.jpg",
      "/imgs/Work-imgs/App-imgs/3.jpg",
      "/imgs/Work-imgs/App-imgs/4.jpg",
      "/imgs/Work-imgs/App-imgs/5.jpg",
      "/imgs/Work-imgs/App-imgs/6.jpg"
    ],
    Software: [
      "/imgs/Work-imgs/Software-imgs/1.jpg",
      "/imgs/Work-imgs/Software-imgs/2.jpg",
      "/imgs/Work-imgs/Software-imgs/3.jpg",
      "/imgs/Work-imgs/Software-imgs/4.jpg",
      "/imgs/Work-imgs/Software-imgs/5.jpg",
      "/imgs/Work-imgs/Software-imgs/6.jpg"
    ]
  };

  return (
    <div className="work" style={{ padding: "10% 15%" }}>
      <p className="work-title">MY WORK</p>
      <h2 className="work-header">RECENT WORK</h2>

      <Navbar expand="lg" className="work-navbar">
        <Container>
          <Nav className="nav-menu">
            {["Graphic", "App", "Software"].map((category) => (
              <Nav.Link
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowMore(false);
                }}
                className={activeCategory === category ? "active" : ""}
              >
                {category === "Graphic" ? "Graphic Design" : category}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      <div className="image-gallery">
        <div className="row">
          {images[activeCategory]
            .slice(0, showMore ? 6 : 4)
            .map((img, index) => (
              <div className="col-md-6" key={index}>
                <div className="work-image-container">
                  <img src={img} alt={activeCategory} className="work-image" />
                </div>
              </div>
            ))}
        </div>
        {!showMore && (
          <button className="show-more-btn" onClick={() => setShowMore(true)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
