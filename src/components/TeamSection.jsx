import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import mielke from '../assets/mielke.jpg';
import stepien from '../assets/stepien.jpg';
import plocki from '../assets/plocki.jpg';

const TeamMember = ({ name, role, description, imageUrl, githubUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-6 space-y-4  rounded-lg shadow-lg overflow-hidden"
  >
    <div className="relative w-48 h-48 overflow-hidden rounded-full">   
      <img src={imageUrl || "/"} alt={name} className="object-cover w-full h-full" />   
      <div className="absolute inset-0 bg-gradient-to-br mix-blend-overlay opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/lightning.svg')] bg-no-repeat bg-center mix-blend-overlay opacity-30"></div>
    </div>
    <h3 className="text-2xl font-bold text-gray-300">{name}</h3>
    <p className="text-lg text-yellow-400 font-semibold">{role}</p>
    <p className="text-center text-gray-400">{description}</p>  
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
    >
      <Github className="mr-2" size={18} />
      GitHub
    </a>
  </motion.div>
)

const TeamSection = () => {
    const teamMembers = [
        {
          name: "Patryk",
          role: "Fullstack Developer",
          description: "Specjalizuje się w budowie aplikacji webowych, od frontend po backend, zapewniając ich wydajność i skalowalność.",
          imageUrl: mielke,
          githubUrl: "https://github.com/PatrykMielke"  
        },
        {
          name: "Kamil",
          role: "Frontend Developer, Obsługa klienta",
          description: "Tworzy interfejsy, które są zarówno estetyczne, jak i łatwe w obsłudze. Zajmuje się również wsparciem użytkowników.",
          imageUrl: stepien,
          githubUrl: "https://github.com/reavz7"
        },
        {
          name: "Kamil (kolejny)",
          role: "Python, Machine learning",
          description: "Zajmuje się analizą danych i implementacją rozwiązań opartych na uczeniu maszynowym, łącząc frontend z backendem.",
          imageUrl: plocki,
          githubUrl: "https://github.com/xKomil"
        }
      ]
      

  return (
    <section className="py-36 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">Studenciaki- Nasz zespół</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
