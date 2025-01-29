'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Vehicles Sold', value: 1000 },
  { label: 'Happy Customers', value: 950 },
  { label: 'Years Experience', value: 10 },
  { label: 'Awards Won', value: 15 }
];

export const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};