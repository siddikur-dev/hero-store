import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" bg-[#001931] text-white p-4  ">
      <div className="container mx-auto px-5 ">
        <div className="flex mx-auto justify-between py-3 border-b  border-gray-700  ">
          <div className="md:flex  items-center gap-2">
            <img className="w-12" src={logo} alt="" />
            <p className="hidden md:flex  ">Hero Store</p>
          </div>
          <div className="">
            <h2 className="font-bold pb-3">Social Icon</h2>
            <div className="flex gap-2">
              <FaXTwitter></FaXTwitter>
              <FaLinkedin></FaLinkedin>
              <FaFacebook></FaFacebook>
            </div>
          </div>
        </div>

        <aside className="py-2 text-center">
          <p className="text-sm md:text-base text-gray-300">
            Copyright © {new Date().getFullYear()} - All right reserved by Books
            Store.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
