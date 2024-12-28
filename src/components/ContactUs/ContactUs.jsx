import { Github, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("message", formData.message);
    formDataToSubmit.append("access_key", "528cd7a7-1834-4b53-ba93-923478e9e9fc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-auto lg:h-screen bg-black w-screen flex items-center justify-center px-6 sm:px-8 flex-col sm:flex-row" id="contact-us">
      <div className="text-white w-full sm:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#00FF3E] text-shadow-lg">
          Let's Connect
        </h2>
        <p className="text-lg mb-6">
          Feel free to reach out to us. We'd love to hear from you!
        </p>
        <div className="flex gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFoQAGLcsJtewAAAZQMSXvQVq1Dj0PYB50RWJBbuzwuJOTFYBLvXTSt_oVusEcL_46UUyCDuL0pUtzoiAuTd48WcWu8-LiXnzY5iJptHas2dZw91s6IAp_GXwMq0sUoUIEimJc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanurag-gajbhiye-747404295%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Anurag1274"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <Github />
          </a>
          <a
            href="mailto:anuragajbhiye89@gmail.com"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <Mail />
          </a>
        </div>
      </div>
      <div className="border-l-2 border-white h-1/2 mx-6 hidden sm:block"></div>
      <div className="w-full sm:w-1/2 text-white p-8 rounded-lg shadow-md flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FF3E] border-2 border-gray-700 focus:border-[#00FF3E]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FF3E] border-2 border-gray-700 focus:border-[#00FF3E]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full p-3 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FF3E] border-2 border-gray-700 focus:border-[#00FF3E]"
              rows="4"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#00FF3E] text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="text-center mt-4">{result}</div>
      </div>
    </div>
  );
}

export default ContactUs;
