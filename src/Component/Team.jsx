import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Zerin Hossain",
    position: "UI/UX Designer",
    image: "/images/team/zerin.jpg",
  },
  {
    id: 2,
    name: "Abid Hossain",
    position: "Frontend Developer",
    image: "/images/team/abid.jpg",
  },
  {
    id: 3,
    name: "Sadiqur Ahmed",
    position: "Backend Developer",
    image: "/images/team/sadiqur.jpg",
  },
  {
    id: 4,
    name: "Faruq Ahammed",
    position: "MERN Stack Developer",
    image: "/images/team/faruq.jpg",
  },
  {
    id: 5,
    name: "Masnun Riyad",
    position: "Software Engineer",
    image: "/images/team/masnun.jpg",
  },
  {
    id: 6,
    name: "Tanvir Hossain",
    position: "Full Stack Developer",
    image: "/images/team/tanvir.jpg",
  },
  {
    id: 7,
    name: "Rakibul Islam",
    position: "DevOps Engineer",
    image: "/images/team/rakibul.jpg",
  },
  {
    id: 8,
    name: "Sajid Abdullah",
    position: "QA Engineer",
    image: "/images/team/sajid.jpg",
  },
  {
    id: 9,
    name: "Imran Ali",
    position: "Product Manager",
    image: "/images/team/imran.jpg",
  },
  {
    id: 10,
    name: "Jannatul Ferdous",
    position: "Content Strategist",
    image: "/images/team/jannatul.jpg",
  },
];


const Team = () => (
  <section className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-center text-3xl font-bold mb-14">
      Meet the Zentexx Team
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="bg-[#0c0c0c] p-4  rounded-xl text-center hover:scale-[1.02] transition"
        >
          <img
            src={member.image}
            alt={member.name}
            className="h-60 w-full object-cover rounded-lg mb-4"
          />

          <h4 className="font-semibold text-sm">{member.name}</h4>
          <p className="text-xs text-gray-500">{member.position}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
