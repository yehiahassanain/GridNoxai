import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import video from "../../assets/images/video.mp4";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <div >
          <section className="container">
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
            <div className={`${Style.contentContainer} mt-25 p-15`}>
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
                <button className={Style.ctaButton}>
                  Discover Our Solutions
                </button>
              </NavLink>
            </div>
          </section>
        </div>
        <div className="bg-[#101010] p-15 w-full absolute ">
            <h2 className="text-[#bc2710] text-[56px] md:text-[80px] xl:text-[96px] pb-[20px]">we help</h2>
            <p className ="text-white text-[32px] xl:text-[55px]">In Creating Strategies, Design and Development.</p>
        </div>
      </div>
    </>
  );
}
