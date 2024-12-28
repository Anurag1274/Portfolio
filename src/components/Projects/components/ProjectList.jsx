import React from "react";

const projectList = [
  {
    title: "Code Craft AI",
    description:
      "Code Craft AI is a web application designed to offer AI-driven services. Built with TypeScript, Next.js, and React.js, it integrates the powerful Gemini API to provide sophisticated AI capabilities. The backend is powered by PostgresQL for database management, and Drizzle ORM ensures efficient data operations, making it a seamless experience for users seeking intelligent solutions.",
    techStack: [
      "Gemini API",
      "Next.js",
      "TypeScript",
      "React.js",
      "ShadCn UI",
      "PostgresQL",
      "TailwindCSS",
      "Drizzle ORM",
    ],
    imgSrc: "/Code_Craft_AI.PNG",
    liveDemo: "https://code-craft-ai-ag-55.vercel.app/",
    githubRepo: "https://github.com/Anurag1274/Code_Craft_AI",
  },
  {
    title: "Chat-APP",
    description:
      "The Chat-APP is a real-time messaging application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for real-time communication. It features user authentication, allowing users to securely sign up and log in. The application also includes chat rooms and real-time message notifications, enabling seamless communication between users across different platforms.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS"],
    imgSrc: "/Chat-App.PNG",
    liveDemo: "https://chat-app-mern-7fvm.onrender.com",
    githubRepo: "https://github.com/Anurag1274/CHAT-APP-MERN",
  },
  {
    title: "Fitness-App",
    description:
      "The Fitness-App is a health-focused application built using React.js, providing users with workout data and exercise suggestions. It integrates with the Rapid API, which offers a wealth of fitness-related information, such as exercise types, sets, and repetitions. This app helps users track their fitness goals and provides them with personalized exercise routines for optimal health improvement.",
    techStack: ["React.js", "Rapid API", "Material UI"],
    imgSrc: "/Fitness-App.PNG",
    liveDemo: "https://anurag-fitness-club.netlify.app/",
    githubRepo: "https://github.com/Anurag1274/Fitness-App/tree/main",
  },
  {
    title: "Vortex Gemini AI Clone",
    description:
      "Vortex Gemini AI Clone is a project that replicates the capabilities of the Gemini AI system using React.js. By integrating the Gemini API, this project allows users to interact with AI-powered responses and capabilities similar to the original Gemini AI. This project demonstrates how AI can be embedded into web applications for intelligent and context-aware interactions.",
    techStack: ["React.js", "Gemini API"],
    imgSrc: "/Vortex.PNG",
    liveDemo: "https://vortexaianurag.netlify.app/",
    githubRepo: "",
  },
  {
    title: "Golf Website",
    description:
      "The Golf Website is a simple static website built with HTML, CSS, and JavaScript to provide valuable information about golf, including details about golf courses, golfing tips, and related content. The website is designed to be user-friendly, with a responsive layout to cater to a wide range of devices. It serves as a one-stop resource for golf enthusiasts looking to enhance their skills and knowledge.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    imgSrc: "/Golf.PNG",
    liveDemo: "https://sidcup-golf-anurag.netlify.app/",
    githubRepo: "https://github.com/Anurag1274/Golfs",
  },
];

function ProjectList() {
  return (
    <div className="text-white w-full bg-black p-8">
      <div className="text-center mb-24">
        <h1 className="text-white text-4xl mb-4">Projects</h1>
        <div className="w-[200px] h-1 bg-[#00FF3E] mx-auto"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800  rounded-lg shadow-lg w-[400px] h-[auto] flex flex-col items-center"
          >
            <div className="w-full h-[200px] mb-4">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl text-primary-third font-semibold mb-8 text-center">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white text-black font-bold py-1 px-3 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg mb-4 text-pretty">{project.description}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => window.open(project.liveDemo, "_blank")}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Live Demo
                </button>
                <button
                  onClick={() => window.open(project.githubRepo, "_blank")}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  GitHub Repo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
