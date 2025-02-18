import React from 'react';
import { motion } from 'framer-motion';

const offerData = [
  {
    title: "STRONA INTERNETOWA", 
    description: "Tworzenie nowoczesnych i responsywnych stron internetowych dla twojej działalności",
    gradient: "from-[#FF0080] via-[#7928CA] to-[#4C1D95]",
    price: "od 1000 zł"
  },
  {
    title: "APLIKACJA Z BAZĄ DANYCH",
    beta: true,
    description: "Wydajne aplikacje serwerowe z Node.js i bazami danych.",
    gradient: "from-[#0EA5E9] via-[#2563EB] to-[#4F46E5]",  
    price: "od 4000 zł"
  }
];

const OfferCard = ({ title, description, gradient, beta, price }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`relative p-[1px] rounded-xl overflow-hidden`}
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-60`} />
    <div className="relative bg-black bg-opacity-90 p-8 rounded-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {beta && (
            <span className="px-2 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded">
              BETA
            </span>
          )}
        </div>
        <p className="text-gray-400 text-lg mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        <p className="text-2xl font-bold text-yellow-500">{price}</p>
      </div>
    </div>
  </motion.div>
);

const OfferSection = () => {
  return (
    <section id="services" className="py-24 bg-black min-h-screen">
      <div className="container mx-auto py-36">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            DLA CIEBIE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Stworzymy wydajną i nowoczesną stronę lub aplikacje internetową,
            wykorzystując najnowsze technologie webowe.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offerData.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;