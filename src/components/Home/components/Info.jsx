import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import React from "react";

function Info() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 m-auto p-4">
      <div className="flex justify-center">
        <img
          src="/Anurag-2.jpg"
          alt="user-photo"
          className="h-48 w-48 sm:h-60 sm:w-60 object-cover object-[50%_11%] rounded-full"
        />
      </div>

      <div className="w-full sm:w-[50%] flex flex-col gap-4">
        <h2 className="flex justify-start items-center text-2xl sm:text-3xl text-primary-light">
          Hey There, Myself <ArrowRight />
        </h2>
        <h1 className="text-4xl sm:text-6xl text-primary-dark font-bold">
          Anurag Gajbhiye
        </h1>
        <p className="text-3xl sm:text-5xl text-primary-light font-bold">
          Dedicated to crafting seamless, high-performance web applications.
        </p>
        <p className="text-primary-light text-lg sm:text-xl">
          I'm a full-stack web developer and tech enthusiast, creating dynamic
          and scalable solutions with modern web technologies. Currently focused
          on building seamless, high-performance applications using both
          frontend and backend frameworks.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-center gap-5 mt-4">
          {/* Updated download link */}
          <a
            href="/Resume-Final-Portfolio.pdf"  // Relative path to the PDF in the public folder
            download="Anurag_Gajbhiye_Resume.pdf"
            className="w-full sm:w-[25%] p-4 border-2 border-primary-light hover:bg-[#9999e1] rounded-sm text-center"
          >
            Download My Resume
          </a>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/Anurag1274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary-dark"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-gajbhiye-747404295"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary-dark"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:anuragajbhiye89@gmail.com"
              className="text-primary-light hover:text-primary-dark"
            >
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
