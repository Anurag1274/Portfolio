import React from 'react';

function Education({}) {
  return (
    <div className="h-auto w-full bg-black flex items-center justify-center px-6 sm:px-8 flex-col sm:flex-row">
      <div className="text-white w-full sm:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#00FF3E] text-shadow-lg">
          Education
        </h2>
        <div className="relative pl-10">
          <div className="absolute left-6 top-0 h-full border-l-2 border-[#00FF3E]"></div>
          <div className="flex items-start mb-8 relative">
            <div className="w-4 h-4 bg-[#00FF3E] rounded-full absolute left-[-24px] top-1/2 transform -translate-y-1/2"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Information Technology</h3>
              <p className="text-sm">Priyadarshini College of Engineering, Nagpur</p>
              <p className="text-sm">CGPA: 7.29</p>
            </div>
          </div>
          <div className="flex items-start mb-8 relative">
            <div className="w-4 h-4 bg-[#00FF3E] rounded-full absolute left-[-24px] top-1/2 transform -translate-y-1/2"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">HSC (12th Grade)</h3>
              <p className="text-sm">Kamla Nehru College, Nagpur</p>
              <p className="text-sm">Percentage: 88%</p>
            </div>
          </div>
          <div className="flex items-start relative">
            <div className="w-4 h-4 bg-[#00FF3E] rounded-full absolute left-[-24px] top-1/2 transform -translate-y-1/2"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">SSC (10th Grade)</h3>
              <p className="text-sm">Shahu's Garden Convent, Nagpur</p>
              <p className="text-sm">Percentage: 74%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-white h-1/2 mx-6 hidden sm:block"></div>
      <div className="text-white w-full sm:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#00FF3E] text-shadow-lg">
          Experience
        </h2>
        <div className="relative pl-10">
          <div className="absolute left-6 top-0 h-full border-l-2 border-[#00FF3E]"></div>
          <div className="flex items-start mb-8 relative">
            <div className="w-4 h-4 bg-[#00FF3E] rounded-full absolute left-[-24px] top-1/2 transform -translate-y-1/2"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">Frontend Intern</h3>
              <p className="text-sm">Revat Network</p>
              <p className="text-sm">April 2022 - July 2022</p>
              <ul className="mt-2 list-disc ml-6">
                <li>Created responsive websites using React.js, HTML, CSS, and JavaScript.</li>
                <li>Collaborated with the team to implement modern UI/UX designs.</li>
                <li>Debugged and optimized code for better performance and scalability.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start relative">
            <div className="w-4 h-4 bg-[#00FF3E] rounded-full absolute left-[-24px] top-1/2 transform -translate-y-1/2"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">College Coding Competition</h3>
              <p className="text-sm">College Event</p>
              <p className="text-sm">Secured 5th rank out of 200 participants.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
