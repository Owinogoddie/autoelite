import { motion } from 'framer-motion';
import { TruckIcon, ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: TruckIcon,
    title: 'Nationwide Delivery',
    description: 'We deliver vehicles across Kenya, ensuring a seamless experience no matter your location.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Every vehicle undergoes rigorous inspection and certification before sale.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Flexible Financing',
    description: 'Competitive financing options tailored to your budget and needs.'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Support',
    description: '24/7 customer support from our experienced team of automotive experts.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose AutoElite Kenya</h2>
          <p className="mt-4 text-gray-600">Experience the difference with our premium services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};