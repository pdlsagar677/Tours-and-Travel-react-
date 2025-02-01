import React, { useState, useRef, useEffect } from "react";
import '../App.css';
export default function Navbar() {
  
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  const handleMenuOpen = () => {
    setIsMenuActive(true);
  };

  const handleMenuClose = () => {
    setIsMenuActive(false);
  };

  useEffect(() => {
    // Add any necessary side effects here, if needed.
    // For example, handling GSAP animations or other side effects.
  }, [isMenuActive]);
  return (
    <div>
      <section className="home">
        <div className="home-box">
          <nav className="navbar">
            <div className="logo bars">
              <div className="bar" onClick={handleMenuOpen}>
                <i className="fa fa-bars"></i>
              </div>
              <h3>TRAVEL DEMO</h3>
            </div>
            <div className={`menu ${isMenuActive ? 'active' : ''}`} ref={menuRef}>
              <div className="close" onClick={handleMenuClose}>
                <i className="fa fa-close"></i>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Travel Packages</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="login-signup">
              <a href="#">LogIn</a>
              <a href="#">SignUp</a>
            </div>
          </nav>

          <div className="content">
            <h4>Travel</h4>
            <h1>Let's embark on your dream journey</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              sapiente aperiam aliquam alias necessitatibus quos cupiditate
              assumenda adipisci odio modi.
            </p>
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Your journey begins with a search..."
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
