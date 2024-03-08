import React from "react";
import image from "../assets/images/1.jpg";

const Header = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-48 rounded-full ">
          <img src={image} />

          <p>Atikur Rahaman Ahad</p>
          <p>MERN Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
