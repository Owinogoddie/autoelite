// data/vehicles.ts
import { Vehicle } from '@/types/vehicle';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: 85000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Alpine White',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
    ],
    features: [
      'Sport Package',
      'Carbon Fiber Interior',
      'Harman Kardon Sound',
      'Adaptive LED Headlights'
    ],
    specifications: {
      engine: '3.0L Twin-Turbo I6',
      power: '503 hp',
      topSpeed: '180 mph',
      acceleration: '3.8s 0-60 mph',
      fuelEconomy: '16 city / 23 highway'
    },
    description: 'Pristine M4 Competition with full service history and premium upgrades.',
    condition: 'Excellent',
    location: 'Miami, FL',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2022,
    price: 110000,
    mileage: 12000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Obsidian Black',
    images: [
      'https://images.unsplash.com/photo-1622194986967-97cd69a39b95',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    ],
    features: [
      'Executive Package',
      '4D Surround Sound',
      'Massage Seats',
      'Night Vision Assistant'
    ],
    specifications: {
      engine: '4.0L V8 Hybrid',
      power: '496 hp',
      topSpeed: '155 mph',
      acceleration: '4.3s 0-60 mph',
      fuelEconomy: '22 city / 29 highway'
    },
    description: 'Luxurious S-Class with all available options and executive rear seating.',
    condition: 'Like New',
    location: 'Los Angeles, CA',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 135000,
    mileage: 3500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Midnight Silver',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
      'https://images.unsplash.com/photo-1553260168-69b041e6c947'
    ],
    features: [
      'Full Self-Driving Capability',
      'Premium Interior',
      'Glass Roof',
      'Gaming Computer'
    ],
    specifications: {
      engine: 'Tri Motor Electric',
      power: '1,020 hp',
      topSpeed: '200 mph',
      acceleration: '1.99s 0-60 mph',
      fuelEconomy: '396 miles range'
    },
    description: 'Top-spec Tesla Model S Plaid with all available options and latest software updates.',
    condition: 'Excellent',
    location: 'San Francisco, CA',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 GT3',
    year: 2022,
    price: 175000,
    mileage: 8000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Guards Red',
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70'
    ],
    features: [
      'Sport Chrono Package',
      'Carbon Ceramic Brakes',
      'Front Axle Lift System',
      'Clubsport Package'
    ],
    specifications: {
      engine: '4.0L Flat-Six',
      power: '502 hp',
      topSpeed: '197 mph',
      acceleration: '3.2s 0-60 mph',
      fuelEconomy: '14 city / 18 highway'
    },
    description: 'Track-focused GT3 with manual transmission and extensive options.',
    condition: 'Excellent',
    location: 'Chicago, IL',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '5',
    make: 'Range Rover',
    model: 'Sport Autobiography',
    year: 2023,
    price: 125000,
    mileage: 15000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Santorini Black',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
      'https://images.unsplash.com/photo-1519581236250-0347118695bb'
    ],
    features: [
      'Meridian Signature Sound System',
      'Executive Class Comfort Plus',
      'All-Terrain Progress Control',
      'Head-up Display'
    ],
    specifications: {
      engine: '3.0L V6 Diesel',
      power: '350 hp',
      topSpeed: '140 mph',
      acceleration: '6.2s 0-60 mph',
      fuelEconomy: '22 city / 28 highway'
    },
    description: 'Luxury SUV with outstanding off-road capability and premium features.',
    condition: 'Very Good',
    location: 'Dallas, TX',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '6',
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2023,
    price: 145000,
    mileage: 6500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Daytona Gray',
    images: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892d1054',
      'https://images.unsplash.com/photo-1642201855395-1c8c86505149'
    ],
    features: [
      'Carbon Fiber Package',
      'Bang & Olufsen Sound',
      'Matrix LED Headlights',
      'Air Suspension'
    ],
    specifications: {
      engine: 'Dual Motor Electric',
      power: '637 hp',
      topSpeed: '155 mph',
      acceleration: '3.1s 0-60 mph',
      fuelEconomy: '232 miles range'
    },
    description: 'High-performance electric GT with cutting-edge technology and luxury features.',
    condition: 'Excellent',
    location: 'Seattle, WA',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '7',
    make: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2022,
    price: 295000,
    mileage: 2800,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Verde Mantis',
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b',
      'https://images.unsplash.com/photo-1566473965997-3de9c817e938'
    ],
    features: [
      'Lifting System',
      'Style Package',
      'Sensonum Audio',
      'Carbon Skin Package'
    ],
    specifications: {
      engine: '5.2L V10',
      power: '631 hp',
      topSpeed: '202 mph',
      acceleration: '2.9s 0-60 mph',
      fuelEconomy: '13 city / 18 highway'
    },
    description: 'Stunning Huracán EVO in rare Verde Mantis with all available performance options.',
    condition: 'Excellent',
    location: 'Las Vegas, NV',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '8',
    make: 'Toyota',
    model: 'Land Cruiser',
    year: 2022,
    price: 89000,
    mileage: 18000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Magnetic Gray',
    images: [
      'https://images.unsplash.com/photo-1594502184342-2e12f877aa73',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf'
    ],
    features: [
      'Heritage Edition',
      'Kinetic Dynamic Suspension',
      'Multi-Terrain Select',
      'Premium Audio'
    ],
    specifications: {
      engine: '5.7L V8',
      power: '381 hp',
      topSpeed: '130 mph',
      acceleration: '6.9s 0-60 mph',
      fuelEconomy: '13 city / 17 highway'
    },
    description: 'Legendary Land Cruiser in rare Heritage Edition trim with full service history.',
    condition: 'Very Good',
    location: 'Denver, CO',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '9',
    make: 'Lexus',
    model: 'LC 500',
    year: 2023,
    price: 98000,
    mileage: 9500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Structural Blue',
    images: [
      'https://images.unsplash.com/photo-1566473965997-3de9c817e938',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888'
    ],
    features: [
      'Sport Package',
      'Mark Levinson Audio',
      'Head-Up Display',
      'Limited Slip Differential'
    ],
    specifications: {
      engine: '5.0L V8',
      power: '471 hp',
      topSpeed: '168 mph',
      acceleration: '4.4s 0-60 mph',
      fuelEconomy: '16 city / 25 highway'
    },
    description: 'Stunning LC 500 in rare Structural Blue with all luxury appointments.',
    condition: 'Excellent',
    location: 'Houston, TX',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  },
  {
    id: '10',
    make: 'Rivian',
    model: 'R1S',
    year: 2023,
    price: 92000,
    mileage: 4500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Forest Green',
    images: [
      'https://images.unsplash.com/photo-1666919643134-d97687c1826c',
      'https://images.unsplash.com/photo-1666919642998-e4b8c6403321'
    ],
    features: [
      'Large Battery Pack',
      'Adventure Package',
      'Camp Kitchen',
      'Off-Road Upgrade'
    ],
    specifications: {
      engine: 'Quad Motor Electric',
      power: '835 hp',
      topSpeed: '125 mph',
      acceleration: '3.0s 0-60 mph',
      fuelEconomy: '316 miles range'
    },
    description: 'All-electric adventure SUV with maximum range battery and all off-road options.',
    condition: 'Like New',
    location: 'Portland, OR',
    vehicleHistory: {
      owners: 1,
      accidents: 0,
      servicingRecords: true
    }
  }
];