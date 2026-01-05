import React from "react";
import image from "../assets/1.png";

const data = [
  {
    count: 250,
    suffix: "+",
    title: "Project Completed",
    description:
      "With over 250+ projects completed globally, Zentexx has a proven track record of building world-class websites, software, and brands. Our expertise and dedication to excellence empower businesses to thrive in the digital world.",
  },
  {
    count: 100,
    suffix: "%",
    title: "Success Rate",
    description:
      "We take pride in our 100% success rate, consistently delivering exceptional results that exceed client expectations and drive business growth.",
  },
];

const AnotherSpace = () => (
  <section className="max-w-7xl mx-auto px-6 pt-20">
    {/* heading */}
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <h2 className="lg:text-[56px] text-3xl font-bold mb-4 lg:mb-6 w-full lg:w-3/5 flex justify-center lg:justify-end text-center lg:text-right">
          We Are From
        </h2>
        <div className="hidden lg:block w-2/5"></div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:block w-2/5"></div>
        <h2 className="lg:text-[56px] text-3xl font-bold mb-6 w-full lg:w-3/5 flex justify-center lg:justify-start text-center lg:text-left">
          <span className="text-gray-500">— Another Space</span>
        </h2>
      </div>
    </div>

    {/* content */}
    <div className="flex flex-col lg:flex-row gap-10 justify-between">
      {/* image */}
      <div className="image w-full lg:w-1/2">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>

      {/* text */}
      <div className="text w-full lg:w-1/2 flex flex-col gap-8">
        <p className="text-gray-400 leading-relaxed text-center lg:text-left">
          At Zentexx, we believe in a collaborative and transparent approach. We
          work closely with our clients, understanding their unique needs and
          challenges, and tailor solutions that drive success. Our team combines
          creativity, technology, and strategic thinking to deliver results that
          exceed expectations.
        </p>

        {/* mapped stats */}
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start border-b border-b-white/50 pb-6"
          >
            <p className="text-[36px] sm:text-[40px] font-bold border-b-4 border-b-white">
              {item.count}
              {item.suffix}
            </p>

            <div className="flex flex-col gap-3 text-center sm:text-left">
              <span className="text-xl font-bold">{item.title}</span>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AnotherSpace;
