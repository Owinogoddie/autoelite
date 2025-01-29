'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
        alt="Luxury car"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Discover Your Perfect Drive
            </h1>
            <p className="text-xl mb-8">
              Experience luxury and performance with Kenya&apos;s premier auto dealer.
            </p>
            <Link href="/vehicles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md text-lg font-medium"
              >
                Explore Vehicles
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};