import React from "react";

export default function headerpage() {
  return (
    <>
      <div className="header">
        <div className="container">

          {/* header */}
          

          <div className="complogo">
            <img
              src="/logo.png"
              // src="https://logos-world.net/wp-content/uploads/2021/02/Simple-Emblem.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#Testimonials">Testimonials</a>
            <a href="#pricing">Pricing Plan</a>
            <a href="#work">Work</a>
            <button>
              <a href="#talk">Let's Talk</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
