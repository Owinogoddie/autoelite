// components/SearchFilters.tsx
'use client';

import { useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterState } from '@/types/vehicle';
import { vehicles } from '@/data/vehicles';
import { Checkbox } from '@/components/Checkbox';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const SearchFilters = ({ onFilterChange, isOpen, onClose }: SearchFiltersProps) => {
  const [localFilters, setLocalFilters] = useState<FilterState>({
    priceRange: [0, 50000000],
    make: '',
    model: '',
    yearRange: [2000, 2024],
    mileageRange: [0, 200000],
    fuelType: [],
    transmission: [],
    bodyType: [],
  });

  const uniqueMakes = Array.from(new Set(vehicles.map(v => v.make))).sort();
  const uniqueBodyTypes = Array.from(new Set(vehicles.map(v => v.bodyType))).sort();
  const uniqueFuelTypes = Array.from(new Set(vehicles.map(v => v.fuelType))).sort();
  const uniqueTransmissions = Array.from(new Set(vehicles.map(v => v.transmission))).sort();

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    onClose();
  };

  const handleCheckboxChange = (key: keyof FilterState, value: string, checked: boolean) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: checked 
        ? [...(prev[key] as string[]), value]
        : (prev[key] as string[]).filter(v => v !== value)
    }));
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      {/* Price Range */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Price Range (KSh)</label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="number"
              value={localFilters.priceRange[0]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                setLocalFilters(prev => ({
                  ...prev,
                  priceRange: [parseInt(e.target.value), prev.priceRange[1]]
                }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Min"
            />
          </div>
          <div className="relative flex-1">
            <input
              type="number"
              value={localFilters.priceRange[1]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                setLocalFilters(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Make */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Make</label>
        <select
          value={localFilters.make}
          onChange={(e) => setLocalFilters(prev => ({ ...prev, make: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">All Makes</option>
          {uniqueMakes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
      </div>

      {/* Body Type */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body Type</label>
        <div className="space-y-2">
          {uniqueBodyTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={localFilters.bodyType.includes(type)}
              onChange={(checked) => handleCheckboxChange('bodyType', type, checked)}
            />
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
        <div className="space-y-2">
          {uniqueFuelTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={localFilters.fuelType.includes(type)}
              onChange={(checked) => handleCheckboxChange('fuelType', type, checked)}
            />
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Transmission</label>
        <div className="space-y-2">
          {uniqueTransmissions.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={localFilters.transmission.includes(type)}
              onChange={(checked) => handleCheckboxChange('transmission', type, checked)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <FiltersContent />
        </motion.div>
      </div>

      {/* Mobile slide-out sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black z-40"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-y-0 left-0 w-4/5 max-w-md bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <FiltersContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};