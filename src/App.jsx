import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Component/Hero";
import Intro from "./Component/Intro";
import Team from "./Component/Team";
import Moments from "./Component/Moments";
import HowWeWork from "./Component/HowWeWork";
import AnotherSpace from "./Component/AnotherSpace";
import Employees from "./Component/Employees";
import FuelingMinds from "./Component/FuelingMinds";
import Contact from "./Component/Contact";

function App() {

  return (
    <>
     <div className="bg-[#050505] text-white font-sans">
      <Hero />
      <Intro />
      <Team />
      <Moments />
      <HowWeWork />
      <AnotherSpace />
      <Employees />
      <FuelingMinds />
      <Contact />
    </div>
    </>
  );
}

export default App;
