import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-y-0 text-base-content py-10 ">
        <aside className="flex flex-col ">
          <img className="w-20 h-20 mb-3" src="/assets/logo.png" alt="" />
          <p>
            Apps Vault
            <br />
            Providing reliable tech <br />
            since 1992
          </p>
        </aside>
        <nav className="flex flex-col gap-y-2">
          <h6 className="footer-title mb-3">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-y-2">
          <h6 className="footer-title mb-3">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-y-2">
          <h6 className="footer-title mb-3">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col gap-y-2 ite">
          <h6 className="footer-title mb-3">Follow Us</h6>
          <div className="flex flex-row gap-1.5">
            <Facebook />
            <a href="">Facebook</a>
          </div>
          <div className="flex flex-row gap-1.5">
            <Twitter />
            <a href="">Twitter</a>
          </div>
          <div className="flex flex-row gap-1.5">
            <Instagram />
            <a href="">Instagram</a>
          </div>
          <div className="flex flex-row gap-1.5">
            <Github />
            <a href="">Github</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
