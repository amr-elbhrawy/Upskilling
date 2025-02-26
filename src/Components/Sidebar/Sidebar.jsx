import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = useCallback(() => {
    if (window.innerWidth <= 992) {
      setIsOpen((prev) => !prev);
    }
  }, []);

  const closeNavbar = useCallback(() => {
    if (window.innerWidth <= 992) {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
       {window.innerWidth <= 992 && (
        <button className="menu-button" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

       {isOpen && window.innerWidth <= 992 && (
        <div className="overlay" onClick={closeNavbar} />
      )}

       <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="side">
          <div className="main" style={{ textAlign: "center" }}>
            <img src="imgs/112.jpg" alt="Profile" className="profile-img" />
            <h1 className="ms-2">Jackson Ford</h1>
            <p className="profile-info">
              <span> UI/UX Designer </span> in Philippines
            </p>
          </div>

          <nav className="nav">
            <Link to="/" onClick={toggleNavbar}>Home</Link>
            <Link to="/about" onClick={toggleNavbar}>About</Link>
            <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            <Link to="/skills" onClick={toggleNavbar}>Skills</Link>
            <Link to="/work" onClick={toggleNavbar}>Work</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;