import React, { useEffect, useRef } from "react";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Moments = () => {
  const trackRef = useRef(null);
  const isHovering = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    let animationId;

    const animate = () => {
      if (!isHovering.current) {
        position.current -= 0.8;

        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(position.current) >= halfWidth) {
          position.current = 0;
        }

        track.style.transform = `translateX(${position.current}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <h2 className="text-center lg:text-[56px] font-bold mb-10">
        Moments at <span className="text-gray-400 ">— Zentexx</span>
      </h2>

      <div
        className="overflow-hidden"
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="min-w-[320px] h-105 rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Moment ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moments;
