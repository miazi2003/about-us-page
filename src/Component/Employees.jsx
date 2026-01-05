import React from "react";

const Employees = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-center text-3xl md:text-[56px] font-bold mb-10 md:mb-14">
      Our Employees <span className="text-[#ffffff80]">Are Our</span> Greatest Asset
    </h2>

    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* Row 1 */}
      <div className="col-span-12 md:col-span-4 aspect-[4/3] md:h-80 bg-zinc-800 rounded-xl" />
      <div className="col-span-12 md:col-span-8 aspect-[16/9] md:h-80 bg-zinc-800 rounded-xl" />

      {/* Row 2 */}
      <div className="col-span-12 md:col-span-8 aspect-[16/9] md:h-80 bg-zinc-800 rounded-xl" />
      <div className="col-span-12 md:col-span-4 aspect-[4/3] md:h-80 bg-zinc-800 rounded-xl" />
    </div>
  </section>
);

export default Employees;
