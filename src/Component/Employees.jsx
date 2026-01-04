import React from "react";

const Employees = () => (
  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-center text-3xl font-bold mb-14">
      Our Employees Are Our Greatest Asset
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-44 bg-zinc-800 rounded-xl" />
      ))}
    </div>
  </section>
);

export default Employees