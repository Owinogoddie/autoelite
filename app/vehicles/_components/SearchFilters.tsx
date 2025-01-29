'use client';

import { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FilterState } from '@/types/vehicle';
import { vehicles } from '@/data/vehicles';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

type FilterValue = string | number[] | string[];

export const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50000000],
    make: '',
    model: '',
    yearRange: [2000, 2024],
    mileageRange: [0, 200000],
    fuelType: [],
    transmission: [],
    bodyType: [],
  });

  const handleFilterChange = (key: keyof FilterState, value: FilterValue) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Get unique makes from vehicles data
  const uniqueMakes = Array.from(new Set(vehicles.map(v => v.make))).sort();
  const uniqueBodyTypes = Array.from(new Set(vehicles.map(v => v.bodyType))).sort();
  const uniqueFuelTypes = Array.from(new Set(vehicles.map(v => v.fuelType))).sort();
  const uniqueTransmissions = Array.from(new Set(vehicles.map(v => v.transmission))).sort();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      <div className="space-y-4">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range (KSh)</label>
          <div className="flex gap-2 mt-1">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])
              }
              className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])
              }
              className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Make */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Make</label>
          <select
            value={filters.make}
            onChange={(e) => handleFilterChange('make', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">All Makes</option>
            {uniqueMakes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        {/* Year Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Year Range</label>
          <div className="flex gap-2 mt-1">
            <input
              type="number"
              value={filters.yearRange[0]}
              min="1900"
              max="2024"
              onChange={(e) => 
                handleFilterChange('yearRange', [parseInt(e.target.value), filters.yearRange[1]])
              }
              className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <input
              type="number"
              value={filters.yearRange[1]}
              min="1900"
              max="2024"
              onChange={(e) => 
                handleFilterChange('yearRange', [filters.yearRange[0], parseInt(e.target.value)])
              }
              className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Body Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Body Type</label>
          <select
            multiple
            value={filters.bodyType}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              handleFilterChange('bodyType', values);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {uniqueBodyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
          <select
            multiple
            value={filters.fuelType}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              handleFilterChange('fuelType', values);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {uniqueFuelTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Transmission</label>
          <select
            multiple
            value={filters.transmission}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              handleFilterChange('transmission', values);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {uniqueTransmissions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};