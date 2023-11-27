import React from "react";
import "../components/Footer.css";

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <div className="footer">
        <p className="name">© WU {year}</p>
    </div>
  )
}

export default Footer
