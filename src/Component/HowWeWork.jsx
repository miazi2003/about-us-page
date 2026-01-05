import React from "react";
import CountUp from "react-countup";

const workData = [
  { count: 30, suffix: "+", label: "Team" },
  { count: 13, suffix: "+", label: "Experts" },
  { count: 250, suffix: "+", label: "Projects" },
  { count: 5, suffix: "M+", label: "Lines" },
  { count: 20, suffix: "+", label: "Tech" },
  { count: 8, suffix: "+", label: "Industries" },
];

const HowWeWork = () => (
  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="flex items-center gap-6 mb-14">
      <h2 className="lg:text-[56px] font-bold w-1/3">
        How We <span className="text-[#ffffff80]">Work</span>
      </h2>

      <p className="text-[#ffffff80] text-xl w-2/3">
        We promise pixel-perfect results for our client's websites. 
        We design, develop, and deliver high-quality responsive websites.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3">
      {workData.map((item, i) => (
        <div
          key={i}
          className="bg-[#0c0c0c] md:min-h-[236px] text-center flex flex-col items-center justify-center border border-[#2d324890]"
        >
          <h3 className="lg:text-5xl font-bold">
            <CountUp
              end={item.count}
              duration={5}
            />
            {item.suffix}
          </h3>

          <p className="mt-2 lg:text-2xl text-white">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HowWeWork;
