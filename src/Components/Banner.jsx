import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center flex flex-col justify-center items-center mb-0">
          <h1 className="text-5xl font-bold py-4">
            We Build <br /> <span className="text-[#8c58eb]">Productive</span>{" "}
            Apps
          </h1>

          <p className="text-gray-500">
            At APPS VAULT , we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="text-2xl font-semibold flex justify-center items-center gap-5 mt-10">
            <div className="btn flex items-center gap-2">
              <img className="w-7 h-7" src="/assets/playstore.png" alt="" />
              <Link to={"https://play.google.com/"}>Google Play</Link>
            </div>
            <div className="btn flex items-center gap-2">
              <img className="w-7 h-7" src="/assets/Appstore.png" alt="" />
              <Link to={"https://www.apple.com/"}>Apps Store</Link>
            </div>
          </div>
          <div className="w-170 mt-10">
            <img className="w-full " src="/assets/hero.png" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center mb-10 mt-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mt-0">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 py-10">
            <div>
              <p className="text-4">Total Downloads</p>
              <h1 className="text-6xl font-extrabold py-5">29.6M</h1>
              <p className="text-4">21% more than last month</p>
            </div>
            <div>
              <p className="text-4">Total Reviews</p>
              <h1 className="text-6xl font-extrabold py-5">906K</h1>
              <p className="text-4">46% more than last month</p>
            </div>
            <div>
              <p className="text-4">Active Apps</p>
              <h1 className="text-6xl font-extrabold py-5">132+</h1>
              <p className="text-4">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
