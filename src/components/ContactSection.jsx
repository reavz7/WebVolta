import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skontaktuj się z nami</h2>
          <p className="text-gray-400 text-xl">Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów</p>
        </motion.div>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-400 text-xl mb-4">Skontaktuj się z nami poprzez:</p>
          
          <motion.a 
            href="mailto:stepienmontaz@gmail.com"
            className="block text-yellow-500 text-2xl mb-4 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            stepienmontaz@gmail.com
          </motion.a>
          
          <motion.a 
            href="tel:+123456789"
            className="block text-yellow-500 text-2xl mb-4 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            +48 787 652 240
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
