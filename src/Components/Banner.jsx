import React from "react";
import { Link } from "react-router";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Banner = () => {
  return (
    <div>
      <div className="">
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
              <img className="w-7 h-7" src={playstore} alt="" />
              <Link to={"https://play.google.com/"}>Google Play</Link>
            </div>
            <div className="btn flex items-center gap-2">
              <img className="w-7 h-7" src={appstore} alt="" />
              <Link to={"https://www.apple.com/"}>Apps Store</Link>
            </div>
          </div>
          <div className="w-auto md:w-auto lg:w-170 mt-10 ">
            <img className="w-full " src="/assets/hero.png" alt="" />
          </div>
        </div>
      </div>
      {/* Full-Width Gradient Section */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-0 mb-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <div className="max-w-7xl mx-auto text-center p-10">
          <h2 className="text-3xl font-semibold mt-0">
            Trusted by Millions, Built for You
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
            <div>
              <p className="text-lg">Total Downloads</p>
              <h1 className="text-6xl font-extrabold py-3">29.6M</h1>
              <p className="text-sm">21% more than last month</p>
            </div>

            <div>
              <p className="text-lg">Total Reviews</p>
              <h1 className="text-6xl font-extrabold py-3">906K</h1>
              <p className="text-sm">46% more than last month</p>
            </div>

            <div>
              <p className="text-lg">Active Apps</p>
              <h1 className="text-6xl font-extrabold py-3">132+</h1>
              <p className="text-sm">31 more will launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
