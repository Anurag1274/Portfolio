import React from "react";
import SkillsScroller from "./components/SkillsScroller";
import Education_Experience from "./components/Education_Experience";
import SkillsList from "./components/SkillsList";

function Skills() {
  const skills = [
    { img: "/mongodb.png", name: "Mongo DB" },
    { img: "/icon-html.svg", name: "HTML" },
    { img: "/icon-react.svg", name: "React JS" },
    { img: "/express_white.png", name: "Express JS" },
    { img: "/icon-csss.png", name: "CSS" },
    { img: "/nodejs.png", name: "Node JS" },
    { img: "/icon-js.svg", name: "Javascript" },
    { img: "/git.png", name: "Git" },
  ];

  const skill_1 = [
    { img: "/github.png", name: "Github" },
    { img: "/icon-gsap.svg", name: "GSAP" },
    { img: "/Next.png", name: "Next JS" },
    { img: "/python.png", name: "Python" },
    { img: "/tailwind.png", name: "Tailwind CSS" },
    { img: "/icon-api.svg", name: "Rest API" },
  ];

  return (
    <div className="h-auto lg:h-[130vh] bg-black w-screen p-8 flex flex-col gap-8">
      {/* <div className="flex justify-center items-center gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="text-center text-white flex flex-col items-center"
          >
            <img src={item.img} alt={item.name} className="h-24 w-24" />
            <p className="mt-2">{item.name}</p>
          </div>

        ))}
      </div> */}

      {/* 
        {skill_1.map((item, index) => (
          <div className="flex justify-center items-center gap-4 scroller">
          <div
            key={index}
            className="text-center text-white flex flex-col items-center scroller-in"
          >
            <img src={item.img} alt={item.name} className="h-24 w-24" />
            <p className="mt-2">{item.name}</p>
          </div>
        /div>
        ))}
      < */}

<div className="text-center mb-8">
  <h1 className=" text-4xl mb-4 lg:text-white text-white ">
    Skills
  </h1>
  <div className=" w-[200px] h-1 bg-[#00FF3E] mx-auto"></div>
</div>




      <SkillsScroller />
      {/* <Education_Experience /> */}
      <SkillsList />
    </div>
  );
}

export default Skills;
