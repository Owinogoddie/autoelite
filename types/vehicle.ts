// types/vehicle.ts
export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    bodyType: string;
    color: string;
    images: string[];
    features: string[];
    specifications: {
      engine: string;
      power: string;
      topSpeed: string;
      acceleration: string;
      fuelEconomy: string;
    };
    description: string;
    condition: string;
    location: string;
    vehicleHistory?: {
      owners: number;
      accidents: number;
      servicingRecords: boolean;
    };
  }
  
  export interface FilterState {
    priceRange: [number, number];
    make: string;
    model: string;
    yearRange: [number, number];
    mileageRange: [number, number];
    fuelType: string[];
    transmission: string[];
    bodyType: string[];
  }