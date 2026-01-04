import React from "react";


const Moments = () => (
  <section className="py-24 px-6">
    <h2 className="text-center text-3xl font-bold mb-10">
      Moments at <span className="text-gray-400">— Zentexx</span>
    </h2>

    <div className="flex gap-6 overflow-x-auto">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="min-w-[320px] h-106 bg-zinc-800 rounded-xl"
        />
      ))}
    </div>
  </section>
);


export default Moments