import { motion } from 'framer-motion';
import { VehicleCard } from '../../_components/VehicleCard';
import { Vehicle } from '@/types/vehicle';

interface SimilarVehiclesProps {
  vehicles: Vehicle[];
}

export const SimilarVehicles = ({ vehicles }: SimilarVehiclesProps) => {
  return (
    <section className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Similar Vehicles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            layout="grid"
          />
        ))}
      </div>
    </section>
  );
};