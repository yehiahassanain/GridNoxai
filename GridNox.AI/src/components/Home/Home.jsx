import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import video from "../../assets/videos/video.mp4";
import { NavLink } from "react-router-dom";
import im1 from "../../assets/images/image.jpg";
import im2 from "../../assets/images/image3.png";
import im3 from "../../assets/images/image2.png";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <section>
            <video
              className={Style.backgroundVideo}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className={Style.overlay}></div>
            <div className={`${Style.contentContainer} mt-25 px-15 `}>
              <h1 className="text-white md:text-4xl sm:text-3xl font-bold mb-5">
                At GridNox.AI, we excel in
              </h1>
              <p
                className={`text-red-500 font-semibold md:text-3xl sm:text-2xl mb-5 ${Style.slideInLeft}`}
              >
                GRC automation & Cybersecurity consulting
              </p>
              <p className="text-white text-semibold md:text-xl sm:text-l mb-5">
                GridNox.ai delivers GRC automation, Cybersecurity consulting,
                and professional services to streamline compliance, optimize
                operations, and accelerate growth. We combine practical
                expertise and scalable solutions to drive measurable efficiency
                and risk reduction for large and small/medium Enterprises.
              </p>
              <NavLink to="/services">
                <button className={`${Style.ctaButton} m-5`}>
                  Discover Our Solutions
                </button>
              </NavLink>
            </div>
          </section>
        </div>
        <div className=" bg-[#101010] p-15 w-full">
          <h2 className="text-[#bc2710] text-[56px] md:text-[80px] xl:text-[96px] pb-[20px]">
            we help
          </h2>
          <p className="text-white text-[32px] xl:text-[55px]">
            In Creating Strategies, Design and Development.
          </p>
          <p className="text-[#f9f9f9] text-[16px]  xl:text-[18px] mt-5 max-w-4xl">
            Since 2023, GridNox has established itself as a leader in
            cybersecurity and digital solutions, building a reputation as a
            trusted advisor in the evolving digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="relative group overflow-hidden">
            <img
              src={im1}
              alt="Cybersecurity"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <h3 className="text-white text-2xl font-bold text-center px-5">
                Cybersecurity Consulting
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src={im2}
              alt="GRC"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <h3 className="text-white text-2xl font-bold text-center px-5">
                GRC Automation
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src={im3}
              alt="Digital Solutions"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <h3 className="text-white text-2xl font-bold text-center px-5">
                Digital Risk Management
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
