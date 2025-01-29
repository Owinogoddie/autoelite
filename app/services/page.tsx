'use client'
import { ServicesHero } from './_components/Hero';
import { ServiceCard } from './_components/ServiceCard';

const services = [
  {
    title: 'Financing Options',
    description: 'Flexible financing solutions to help you get your dream car.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    features: [
      'Competitive interest rates',
      'Flexible payment terms',
      'Quick approval process',
      'Multiple financing partners'
    ]
  },
  {
    title: 'Trade-in Services',
    description: 'Get the best value for your current vehicle.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    features: [
      'Fair market valuation',
      'Same-day processing',
      'All brands accepted',
      'Transparent evaluation process'
    ]
  },
  {
    title: 'After-sales Service',
    description: 'Comprehensive support for your vehicle needs.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b4220524',
    features: [
      'Scheduled maintenance',
      'Genuine parts',
      '24/7 roadside assistance',
      'Expert technicians'
    ]
  },
  {
    title: 'Warranty Coverage',
    description: 'Peace of mind with our extensive warranty plans.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    features: [
      'Extended warranty options',
      'Comprehensive coverage',
      'Transferable warranty',
      'No hidden costs'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}