import React from "react";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const teamMembers = [
  { id: 1, name: "Ahmed Hossain", position: "UI/UX Designer", image: image1, linkedIn: "#", portfolio: "#" },
  { id: 2, name: "Abid Hossain", position: "Frontend Developer", image: image2, linkedIn: "#", portfolio: "#" },
  { id: 3, name: "Sadiqur Ahmed", position: "Backend Developer", image: image3, linkedIn: "#", portfolio: "#" },
  { id: 4, name: "Faruq Ahammed", position: "MERN Stack Developer", image: image4, linkedIn: "#", portfolio: "#" },
  { id: 5, name: "Masnun Riyad", position: "Software Engineer", image: image5, linkedIn: "#", portfolio: "#" },
  { id: 6, name: "Tanvir Hossain", position: "Full Stack Developer", image: image6, linkedIn: "#", portfolio: "#" },
  { id: 7, name: "Rakibul Islam", position: "DevOps Engineer", image: image7, linkedIn: "#", portfolio: "#" },
  { id: 8, name: "Sajid Abdullah", position: "QA Engineer", image: image8, linkedIn: "#", portfolio: "#" },
];

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 lg:pt-20">
      {/* heading */}
      <h2 className="text-center mb-4 font-bold">
        <span className="text-[#ffffff80] text-3xl sm:text-4xl lg:text-[56px]">
          Meet the <span className="text-white">Zentexx</span> Team
        </span>
      </h2>

      <p className="text-center text-sm sm:text-base lg:text-lg text-[#ffffff90] max-w-3xl mx-auto">
        Get to know the passionate experts behind Zentexx! Our team of skilled
        designers, developers, and strategists is dedicated to delivering
        innovative solutions and exceptional results.
      </p>

      {/* grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 lg:mt-14">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#0c0c0c] p-2 rounded-xl text-center hover:scale-[1.02] transition border border-blue-200/50"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="font-semibold text-base sm:text-lg lg:text-xl text-white">
              {member.name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              {member.position}
            </p>

            <div className="flex gap-3 justify-center mt-2">
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faSquareLinkedin}
                  className="text-white text-lg cursor-pointer hover:text-gray-400"
                />
              </a>

              <a href={member.portfolio} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-white text-lg cursor-pointer hover:text-gray-400"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
