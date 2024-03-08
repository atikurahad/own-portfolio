import React from "react";
import image from "../assets/images/1.jpg";
import { FaDownload, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import cv from "../assets/images/atikur.pdf";

const Header = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-5">
      <div className="avatar">
        <div className="w-48 rounded-full ">
          <img src={image} />
        </div>
      </div>

      <h2 className="text-white text-xl font-bold">Atikur Rahaman Ahad</h2>
      <h2 className="text-base-300 font-semibold">MERN Developer</h2>

      <section className=" flex items-center gap-3">
        <a
          className="text-base-100 p-1 text-3xl rounded-md hover:bg-base-100 hover:text-neutral cursor-pointer transition-all"
          href="www.facebook.com"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a className="text-base-100 p-1 text-3xl rounded-md hover:bg-base-100 hover:text-neutral cursor-pointer transition-all">
          <FaLinkedin />
        </a>
        <a className="text-base-100 p-1 text-3xl rounded-md hover:bg-base-100 hover:text-neutral cursor-pointer transition-all">
          <FaGithub />
        </a>
        <a className="text-base-100 p-1 text-3xl rounded-md hover:bg-base-100 hover:text-neutral cursor-pointer transition-all">
          <FaInstagram />
        </a>
      </section>

      <div>
        <a
          download
          target="_blank"
          href={cv}
          className="btn btn-primary px-10 rounded-full"
        >
          Download CV
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
