import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex]);

  return (
    <div className="max-w-md mx-auto relative">

      <div className="w-full h-64 flex justify-center items-center bg-white">
        <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className="object-contain h-full" />
      </div>


      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[-35px] transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-200">
        &lt;
      </button>


      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 rounded-lg bg-white p-2 hover:bg-gray-200">
        &gt;
      </button>

    </div>
  );
};

export default Carousel;
