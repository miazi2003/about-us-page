import React from "react";
import hero_image from "../assets/team.jpg";

const Hero = () => (
  <section className="max-w-7xl pt-20 md:pt-28 pb-16 md:pb-20 text-center mx-auto px-4">
    {/* Main heading */}
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
      United For <br />
      <span className="text-gray-500">— Your Success.</span>
    </h1>

    {/* Background text */}
    <h2 className="mt-12 md:mt-20 text-4xl sm:text-5xl md:text-7xl font-black opacity-10 tracking-widest">
      MEET OUR TEAM
    </h2>

    {/* Image */}
    <div className="max-w-6xl mx-auto mt-[-20px] md:mt-[-40px]">
      <div className="bg-zinc-800 rounded-xl overflow-hidden aspect-[16/9] md:h-56">
        <img
          className="h-full w-full "
          src={hero_image}
          alt="Our Team"
        />
      </div>
    </div>
  </section>
);

export default Hero;
