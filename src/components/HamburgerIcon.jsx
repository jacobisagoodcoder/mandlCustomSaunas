'use client';

import React from 'react';
import '../styles/hamburgerIcon.css';

const HamburgerIcon = () => {

  function animation(e) {
    e.classList.toggle("change");
    console.log(e.classList.contains("change") == true);
    const mobileMenu = document.getElementsByClassName("mobileHeader")[0];

    if(e.classList.contains("change") && mobileMenu){
      console.log("Hamburger icon is active");

      mobileMenu.style.display = "grid";
    } else if(e.classList.contains("change") == false){
      mobileMenu.removeAttribute("style");
    }
  }

  return (
    <div className="container" onClick={(e) => animation(e.target)}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default HamburgerIcon;