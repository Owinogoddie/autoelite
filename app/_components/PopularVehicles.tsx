// components/PopularVehicles.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { vehicles } from '@/data/vehicles';
import { VehicleCard } from '../vehicles/_components/VehicleCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const PopularVehicles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Get 7 popular vehicles (you can modify the logic to get actually popular ones)
  const popularVehicles = [...vehicles]
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      scale: 0.8,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      scale: 0.8,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = popularVehicles.length - 1;
      if (nextIndex >= popularVehicles.length) nextIndex = 0;
      return nextIndex;
    });
  }, [popularVehicles.length]);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  const bounceAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Popular Vehicles</h2>
          <p className="mt-4 text-gray-600">
            Our most sought-after luxury vehicles
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute w-full max-w-5xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <motion.div
                  animate={currentIndex === popularVehicles.indexOf(popularVehicles[currentIndex]) ? bounceAnimation : {}}
                  className="w-full flex justify-center"
                >
                  <div className="w-full max-w-md">
                    <VehicleCard
                      vehicle={popularVehicles[currentIndex]}
                      layout="grid"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => paginate(-1)}
            aria-label="Previous vehicle"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => paginate(1)}
            aria-label="Next vehicle"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
            {popularVehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to vehicle ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};