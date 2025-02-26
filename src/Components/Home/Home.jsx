import { useState, useEffect } from "react";
import "../Style/Home.css";

const slides = [
  { image: "/imgs/10001.jpg", text: "I am a Designer" },
  {
    image: "/imgs/10002.jpg",
    text: (
      <>
        Hi!
        <br />
        I'm Jackson
      </>
    )
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="home"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="container-home">
          <h1>{slides[currentIndex].text}</h1>
          <p>
            100% HTML5 Bootstrap Templates Made
            <br />
            By <a href="https://colorlib.com/">Colorlib</a>
          </p>
          <button className="download-btn">DOWNLOAD CV</button>
        </div>
      </div>
    </>
  );
};

export default Home;
