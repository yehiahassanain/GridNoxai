import React, { useEffect, useState } from "react";
import Style from "./Services.module.css";
import bg_services from "../../assets/videos/bg_services.mp4";
import Service1 from "../../assets/images/Service1.jpeg";
import Service2 from "../../assets/images/Service2.jpg";
import Service3 from "../../assets/images/Service3.jpg";
import Service4 from "../../assets/images/Service4.jpg";

const services = [
  {
    id: 1,
    title: "GRC Program Advisory",
    category: "Business",
    img: Service1,
    description:
      "Where do we start our GRC journey? How do we align our GRC investments to structure GRC or Compliance Program(s)?",
  },
  {
    id: 2,
    title: "GRC Implementation",
    category: "Business",
    img: Service2,
    description:
      "We have covered the length and breadth of GRC implementation Services, including: Design and Configuration.Setup & Customization.Fully Managed SolutionImplementation ",
  },
  {
    id: 3,
    title: "Xperts On Demand",
    category: "Business",
    img: Service3,
    description:
      "Our Xpert team manages and maintains your implementation, providing the expertise you need to ensure smooth and efficient operations. We offer flexible support options tailored to your needs, whether remotely or onsite.",
  },
  {
    id: 4,
    title: "Training",
    category: "Business",
    img: Service4,
    description:
      "Comprehensive GRC training focused on the practical application of solutions. Our programs include a 5-day in-house, hands-on administrator training, covering implementation processes, system integration, and specialized training tailored to specific organizational needs.",
  },
];

export default function Services() {
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
            <source src={bg_services} type="video/mp4" />
          </video>
          <div className={Style.overlay}></div>
          <div className={`${Style.contentContainer} mt-40 px-15 `}>
            <div className="grid-col-2 md:flex items-center justify-between">
              <div className="mt-66 animate-pulse">
                <h1 className="text-5xl md:text-8xl font-extrabold">OUR</h1>
                <h1 class="text-5xl md:text-8xl font-extrabold text-white tracking-wide">
                  SERVICES
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white hover:shadow-xl transition rounded-lg shadow-lg  "
              >
                <img
                  src={service.img}
                  className="w-full h-48 object-cover rounded-lg"
                  alt={service.title}
                />

                <div className="p-6">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-lg top-[-50px] left-[-15px] relative">
                    {service.category}
                  </span>

                  <h3 className="text-lg font-semibold mb-3 hover:text-red-600 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
