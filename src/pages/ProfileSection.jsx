import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../components/Carousel';

const ProfileSection = () => {
  const slides = [
    { src: '/assets/react.svg', alt: 'Slide 1' },
    { src: '/assets/html.svg', alt: 'Slide 2' },
    { src: '/assets/js.png', alt: 'Slide 3' },
    { src: '/assets/ts.png', alt: 'Slide 3' },
    { src: '/assets/css.svg', alt: 'Slide 3' },
  ];

  return (
    <div className="font-mona flex flex-col md:flex-row items-center justify-evenly p-8 mt-[5rem]">

      <div className="md:w-[50%] text-left space-y-4 ">
        <h1 className="text-7xl font-bold  mb-10">
          Ayesha Malik,
        </h1>
        <p className="font-light text-gray-600">
            • Detail-oriented and highly motivated undergraduate student pursuing a Bachelor's degree in Software
            Engineering with a passion for innovative technology solutions.<br/>
            • Possesses a solid foundation in computer science principles and programming languages, combined
            with hands-on experience in software development projects.<br/>
            • Proven ability to adapt quickly to new technologies and methodologies, coupled with excellent problem
            solving skills and a collaborative mindset.
            Contact me 
        </p>
        <p  className='font-bold text-blue-400'>Get in Touch</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/ayeshaMalik86" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ayesha-malik-0bb7a727a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="w-[50%] md:w-[10%] mt-8 md:mt-0">
       <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default ProfileSection;
