'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Browse our extensive collection of quality vehicles today.
          </p>
          <Link
            href="/vehicles"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
          >
            View All Vehicles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};