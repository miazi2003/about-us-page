import React from "react";



const Intro = () => (
  <section className="max-w-7xl mx-auto px-6 text-left py-20 flex flex-col gap-4">
    <h3 className="text-6xl font-semibold mb-4">
      Zentexx <span className="text-[#cccccc90]">IT Agency</span> Driving<br/> Excellence with <span className="text-[#cccccc90]">Dedication</span> and<br/> <span className="text-[#cccccc90]">Innovation</span>
    </h3>
    <p className="text-gray-400 leading-relaxed text-xl">
      We build scalable, high-performing digital products with passion and
      precision.
    </p>

<div className="gradient-bg lg:w-1/5 p-2 rounded">
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
export default Intro