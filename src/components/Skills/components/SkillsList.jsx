import React from "react";

const data = [
  {
    category: "Languages:",
    skills: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries:",
    skills: [
      "Next JS",
      "React JS",
      "Node JS",
      "Express JS",
      "Socket.io",
      "Shadcn UI",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases:",
    skills: ["Mongo DB"],
  },
  {
    category: "Tools:",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render"],
  },
];

function SkillsList() {
  return (
    <div className="text-white">
      {data.map((item, index) => (
        <div className="mb-5" key={index}>
          <h1 className="text-3xl font-semibold">{item.category}</h1>
          <div className="flex flex-wrap gap-3 mt-3">
            {item.skills.map((skill, idx) => (
              <span
                className="bg-primary-dark text-white py-1 px-3 rounded-md"
                key={idx}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
