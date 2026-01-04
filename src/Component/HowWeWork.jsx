import React from "react";

const HowWeWork = () => (
  <section className="max-w-6xl mx-auto px-6 py-24">
    <h2 className="text-center text-3xl font-bold mb-14">
      How We Work
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {[
        "30+ Team",
        "13+ Experts",
        "250+ Projects",
        "5M+ Lines",
        "20+ Tech",
        "8+ Industries",
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#0c0c0c] p-8 rounded-xl text-center"
        >
          <h3 className="text-3xl font-bold">{item.split(" ")[0]}</h3>
          <p className="text-gray-400 mt-2">{item.split(" ").slice(1).join(" ")}</p>
        </div>
      ))}
    </div>
  </section>
);
export default HowWeWork