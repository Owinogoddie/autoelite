// pages/vehicles.tsx
'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchFilters } from './_components/SearchFilters';
import { VehicleCard } from './_components/VehicleCard';
import { FilterState } from '@/types/vehicle';
import { vehicles } from '@/data/vehicles';

const initialFilters: FilterState = {
  priceRange: [0, 10000000],
  yearRange: [1900, 2025],
  mileageRange: [0, 5000000],
  make: '',
  model: '',
  fuelType: [],
  transmission: [],
  bodyType: []
};

export default function VehiclesPage() {
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState('price-asc');
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      // Filter by price range
      if (
        vehicle.price < filters.priceRange[0] ||
        vehicle.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Filter by year range
      if (
        vehicle.year < filters.yearRange[0] ||
        vehicle.year > filters.yearRange[1]
      ) {
        return false;
      }

      // Filter by mileage range
      if (
        vehicle.mileage < filters.mileageRange[0] ||
        vehicle.mileage > filters.mileageRange[1]
      ) {
        return false;
      }

      // Filter by make
      if (filters.make && vehicle.make.toLowerCase() !== filters.make.toLowerCase()) {
        return false;
      }

      // Filter by model
      if (filters.model && vehicle.model.toLowerCase() !== filters.model.toLowerCase()) {
        return false;
      }

      // Filter by fuel type
      if (filters.fuelType.length > 0 && !filters.fuelType.includes(vehicle.fuelType)) {
        return false;
      }

      // Filter by transmission
      if (filters.transmission.length > 0 && !filters.transmission.includes(vehicle.transmission)) {
        return false;
      }

      // Filter by body type
      if (filters.bodyType.length > 0 && !filters.bodyType.includes(vehicle.bodyType)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const sortedVehicles = useMemo(() => {
    return [...filteredVehicles].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        default:
          return 0;
      }
    });
  }, [filteredVehicles, sortBy]);

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile filter button */}
        <button
          className="md:hidden flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg mb-4 shadow-md hover:bg-primary-700 transition-colors"
          onClick={() => setIsFilterSheetOpen(true)}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          Filter Vehicles
        </button>

        <aside className="md:w-1/4">
          <SearchFilters
            onFilterChange={handleFilterChange}
            isOpen={isFilterSheetOpen}
            onClose={() => setIsFilterSheetOpen(false)}
          />
        </aside>

        <main className="md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setViewLayout('grid')}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  viewLayout === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewLayout('list')}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  viewLayout === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                List
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white shadow-sm"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
            </select>
          </div>

          <div
            className={`grid gap-6 ${
              viewLayout === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            <AnimatePresence>
              {sortedVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                >
                  <VehicleCard vehicle={vehicle} layout={viewLayout} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {sortedVehicles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No vehicles found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search filters to find what youre looking for.
              </p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}