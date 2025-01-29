import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types/vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
  layout: 'grid' | 'list';
}

export const VehicleCard = ({ vehicle, layout }: VehicleCardProps) => {
  const cardClass = layout === 'grid' 
    ? 'w-full'
    : 'flex gap-6 w-full';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${cardClass}`}
    >
      <div className={layout === 'grid' ? 'relative h-48' : 'relative h-48 w-64'}>
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-primary-600 font-semibold mt-2">
          KSh {vehicle.price.toLocaleString()}
        </p>
        
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>Mileage: {vehicle.mileage.toLocaleString()} km</div>
          <div>Fuel: {vehicle.fuelType}</div>
          <div>Transmission: {vehicle.transmission}</div>
          <div>Location: {vehicle.location}</div>
        </div>

        <Link href={`/vehicles/${vehicle.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};