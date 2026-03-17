import React, { useEffect, useState } from "react";
import Style from "./About.module.css";
import bg from "../../assets/images/Service1.jpeg";
import bg_Video from "../../assets/videos/bg-about.mp4";
import { NavLink } from "react-router-dom";
export default function About() {
  const [Counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <section>
          <video
            className={Style.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bg_Video} type="video/mp4" />
          </video>
          <div className={Style.overlay}></div>
          <div className={`${Style.contentContainer} mt-40 px-15 `}>
            <div className="grid-col-2 md:flex items-center justify-between">
              <div className="md:w-1/2">
                <h1
                  className="text-5xl md:text-6xl font-extrabold text-transparent 
                  [-webkit-text-stroke:2px_white] tracking-wide"
                >
                  Why Choose
                </h1>
                <h1 class="text-5xl md:text-6xl font-extrabold text-white tracking-wide">
                  GridNox.AI
                </h1>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl font-light text-gray-200">
                  At GridNox Solutions, our mission is to empower organizations
                  to thrive in a complex regulatory and compliance landscape by
                  providing comprehensive Automation Solutions and Consultancy
                  Services. Our team with a background in global consulting
                  companies brings a wealth of experience and expertise as our
                  exposure to a wide spectrum of industries, from finance and
                  healthcare to manufacturing and technology, enables us to
                  provide tailored solutions that align seamlessly with a world
                  of industry-specific, as well as universally applicable, best
                  practices. At GridNox we thrive through a collaborative and
                  mutually beneficial nature of partnerships with leading
                  Technology vendors highlighting the potential for shared
                  growth and success to our customers. GridNox Your Reliable
                  Partner.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <section class="py-20 bg-[#f5f5f5]">
            <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
              {/* Card 1  */}
              <div class="bg-[#f5f5f5] p-8 flex items-center gap-6 shadow-sm">
                <div class="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full text-2xl">
                  🏛
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">Governance</h3>
                  <p class="text-gray-500 text-sm">With extensive high skill</p>
                </div>
              </div>

              {/* Card 2  */}
              <div class="bg-[#f5f5f5] p-8 flex items-center gap-6 shadow-sm">
                <div class="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full text-2xl">
                  !
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">Risk</h3>
                  <p class="text-gray-500 text-sm">With extensive high skill</p>
                </div>
              </div>

              {/* Card 3  */}
              <div class="bg-[#f5f5f5] p-8 flex items-center gap-6 shadow-sm">
                <div class="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full text-2xl">
                  ✔
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">Compliance</h3>
                  <p class="text-gray-500 text-sm">With extensive high skill</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
