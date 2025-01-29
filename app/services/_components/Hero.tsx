// ServicesPage.jsx
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export const ServicesHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e"
        alt="AutoElite Kenya Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive automotive solutions tailored to your needs</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
