import { motion } from 'framer-motion';

export const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional automotive solutions that exceed customer expectations through 
              quality vehicles, transparent dealings, and outstanding service, while contributing 
              to Kenyas automotive industry growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600">
              To be East Africas most trusted and preferred automotive dealer, setting the standard 
              for excellence in vehicle sales, customer service, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};