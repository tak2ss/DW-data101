import React from "react";
import "./Gallery.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />
        <button className="l">
          <IoChevronBackOutline />
        </button>
        <button className="r">
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Ryb218ZW58MHx8MHx8fDA%3D";
