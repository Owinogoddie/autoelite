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
        <aside className="md:w-1/4">
          <SearchFilters onFilterChange={handleFilterChange} />
        </aside>

        <main className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setViewLayout('grid')}
                className={`p-2 rounded ${
                  viewLayout === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-200'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewLayout('list')}
                className={`p-2 rounded ${
                  viewLayout === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-200'
                }`}
              >
                List
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VehicleCard vehicle={vehicle} layout={viewLayout} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}