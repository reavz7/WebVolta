import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('services');
    if (offersSection) {
      offersSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="text-gray-200 pt-20">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-2">Cześć!</h1>
        <div className="flex justify-center items-center mb-8">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold pr-2">Od teraz będzie tylko</p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["lepiej", "szybciej", "dokładniej"]}
            typeSpeed={34}
            backSpeed={96}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Sprawdź czym dokładnie się zajmujemy</p>

        <button
          onClick={scrollToOffers}
          className="bg-yellow-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[black] hover:text-white ease-in-out duration-300 cursor-pointer"
        >
          Oferta
        </button>   
      </div>
    </div>
  )
}

export default Hero;