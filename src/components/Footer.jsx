import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">WebVolta</h3>
            <p className="mt-2 text-gray-400">Stronki robimy</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2025 WebVolta. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;