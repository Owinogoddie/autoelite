///app/vehicles/[id]/page.tsx
'use client';

import { motion } from 'framer-motion';
import { ImageGallery } from './_components/ImageGallery';
import { VehicleSpecs } from './_components/VehicleSpecs';
import { SimilarVehicles } from './_components/SimilarVehicles';
// import { Vehicle } from '@/types/vehicle';
import { vehicles } from '@/data/vehicles';
import { useParams } from 'next/navigation';

// Mock similar vehicles

export default function VehicleDetailPage() {
 
  const params = useParams();
  const id = params.id as string;
  // Find the current vehicle from our data
  const vehicle = vehicles.find(v => v.id === id);
  // Find similar vehicles (same make or body type, excluding current vehicle)
  const similarVehicles = vehicles
    .filter(v => 
      v.id !== id && 
      (v.make === vehicle?.make || v.bodyType === vehicle?.bodyType)
    )
    .slice(0, 3); // Limit to 3 similar vehicles

  if (!vehicle) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold">Vehicle not found</h1>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Left Column */}
        <div>
          <ImageGallery images={vehicle.images} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-2xl font-bold text-primary-600 mt-2">
              KSh {vehicle.price.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quick Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-gray-600">Mileage:</span>
                <span className="ml-2 font-medium">{vehicle.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">Location:</span>
                <span className="ml-2 font-medium">{vehicle.location}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">Color:</span>
                <span className="ml-2 font-medium">{vehicle.color}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">Condition:</span>
                <span className="ml-2 font-medium">{vehicle.condition}</span>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-primary-700">
              Contact Seller
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Vehicle Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{vehicle.description}</p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-primary-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Vehicle History */}
      {vehicle.vehicleHistory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Vehicle History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-primary-600">
                {vehicle.vehicleHistory.owners}
              </div>
              <div className="text-gray-600">Previous Owners</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-primary-600">
                {vehicle.vehicleHistory.accidents}
              </div>
              <div className="text-gray-600">Reported Accidents</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-primary-600">
                {vehicle.vehicleHistory.servicingRecords ? "Yes" : "No"}
              </div>
              <div className="text-gray-600">Service History</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Specifications */}
      <VehicleSpecs vehicle={vehicle} />

      {/* Similar Vehicles */}
      <SimilarVehicles vehicles={similarVehicles} />
    </div>
  );
}