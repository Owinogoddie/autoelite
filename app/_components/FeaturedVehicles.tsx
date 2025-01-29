///app/_components/FeaturedVehicles/
import { motion } from 'framer-motion';
import Image from 'next/image';

const vehicles = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    price: 'KSh 15,000,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
  },
  // Add more vehicles
];

export const FeaturedVehicles = () => {
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
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                <p className="mt-2 text-primary-600 font-semibold">{vehicle.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};