'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export const ContactHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        alt="AutoElite Kenya Contact"
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team for any inquiries</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};