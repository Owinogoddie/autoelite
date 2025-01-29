import { motion } from 'framer-motion';
import { Vehicle } from '@/types/vehicle';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export const VehicleSpecs = ({ vehicle }: VehicleSpecsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Performance</h3>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-gray-600">Engine</dt>
              <dd>{vehicle.specifications.engine}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Power</dt>
              <dd>{vehicle.specifications.power}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Top Speed</dt>
              <dd>{vehicle.specifications.topSpeed}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="font-semibold mb-2">General</h3>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-gray-600">Transmission</dt>
              <dd>{vehicle.transmission}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Fuel Type</dt>
              <dd>{vehicle.fuelType}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Body Type</dt>
              <dd>{vehicle.bodyType}</dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.div>
  );
};