import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-y-0 text-base-content text-center lg:text-left py-10 ml-4">
          <aside className="flex flex-col items-center lg:items-start ">
            <img className="w-20 h-20 mb-3" src={logo} alt="" />
            <p>
              Apps Vault
              <br />
              Providing reliable tech <br />
              since 1992
            </p>
          </aside>
          <nav className="flex flex-col gap-y-2 items-center lg:items-start">
            <h6 className="footer-title mb-3">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col gap-y-2 items-center lg:items-start">
            <h6 className="footer-title mb-3">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col gap-y-2 items-center lg:items-start">
            <h6 className="footer-title mb-3">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-col items-center lg:items-start gap-y-2">
            <h6 className="footer-title mb-3 font-semibold">Follow Us</h6>
            <div className="flex flex-col gap-2 items-start">
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Facebook size={18} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Twitter size={18} /> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Github size={18} /> Github
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
