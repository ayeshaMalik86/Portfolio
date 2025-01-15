import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaEnvelope, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProfileSection = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-evenly p-8 mt-[5rem]">
      {/* Left Side */}
      <div className="md:w-[50%] text-left space-y-4 ">
        <h1 className="text-7xl font-bold">
          Ayesha Malik,
        </h1>
        <p className="text-gray-600">
            • Detail-oriented and highly motivated undergraduate student pursuing a Bachelor's degree in Software
            Engineering with a passion for innovative technology solutions.<br/>
            • Possesses a solid foundation in computer science principles and programming languages, combined
            with hands-on experience in software development projects.<br/>
            • Proven ability to adapt quickly to new technologies and methodologies, coupled with excellent problem
            solving skills and a collaborative mindset.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
          <FaStackOverflow />
          <FaEnvelope />
          <FaYoutube />
          <FaFacebook />
        </div>
      </div>

      {/* Right Side (Carousel) */}
      <div className=" md:w-1/3 w-[50%] mt-8 md:mt-0">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
          <div className="w-[120px] justify-center">
            <img src="/assets/html.svg" alt="html" />
          </div>
          <div className="w-[120px]">
            <img src="/assets/react.svg" alt="React" />
          </div>
          <div className="w-[120px]">
            <img src="/assets/css.svg" alt="css" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ProfileSection;
