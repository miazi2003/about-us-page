import React from "react";

const Intro = () => (
  <section className="max-w-7xl mx-auto px-6 pt-16 lg:pt-20 flex flex-col gap-4 text-center lg:text-left">
    
    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
      Zentexx <span className="text-[#cccccc90]">IT Agency</span> Driving 
       Excellence with <span className="text-[#cccccc90]">Dedication</span> and
      <span className="text-[#cccccc90]"> Innovation</span>
    </h3>

    <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-none mx-auto lg:mx-0">
      We build scalable, high-performing digital products with passion and
      precision.
    </p>

    <div className="gradient-bg w-full sm:w-2/3 lg:w-1/5 p-2 rounded mx-auto lg:mx-0">
      <button className="group relative overflow-hidden border uppercase border-[#ffffff70] py-3 px-2 cursor-pointer bg-white rounded text-black w-full font-bold flex items-center justify-center">
        
        {/* Default text */}
        <span className="transition-transform duration-300 group-hover:-translate-y-[160%]">
          Got a question?
        </span>

        {/* Hover text */}
        <span className="absolute translate-y-[160%] transition-transform duration-300 group-hover:translate-y-0">
          Contact Us
        </span>

      </button>
    </div>

  </section>
);

export default Intro;
