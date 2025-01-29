'use client';

import { motion } from 'framer-motion';
import { vehicles } from '@/data/vehicles';
import { VehicleCard } from '../vehicles/_components/VehicleCard';

export const FeaturedVehicles = () => {
  // Get 5 random vehicles
  const randomVehicles = [...vehicles]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
          <p className="mt-4 text-gray-600">
            Discover our premium selection of luxury vehicles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomVehicles.map((vehicle, index) => (
            <div key={vehicle.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} layout="grid" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};