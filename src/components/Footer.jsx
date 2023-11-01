import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white grid grid-rows-3 gap-3 max-w-4xl mx-auto p-4">
      <div>
        <h2 className="text-3xl">Contact</h2>
      </div>
      <div>
        <h3 className="text-lg">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect
          <div>
          <span className="text-violet-700">gonzalezgomezjosegabriel@gmail.com</span>
          </div>
        </h3>
      </div>
      <div className="flex text-[40px] pt-[20px]">
        <AiFillLinkedin />
        <AiOutlineGithub />
        <AiFillGoogleCircle />
      </div>
    </div>
  );
};

export default Footer;
