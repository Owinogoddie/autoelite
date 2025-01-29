import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
      name: 'David Omondi',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      testimonial: 'AutoElite Kenya provided exceptional service throughout my car buying journey. Their attention to detail and customer care is unmatched.'
    },
    {
      name: 'Grace Kimani',
      role: 'Corporate Executive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      testimonial: 'The team at AutoElite made purchasing my luxury vehicle a seamless experience. Their professionalism and knowledge are outstanding.'
    },
    {
      name: 'Peter Njoroge',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      testimonial: 'The after-sales service at AutoElite Kenya is exceptional. They truly understand customer satisfaction and vehicle maintenance.'
    },
    {
      name: 'Mary Akinyi',
      role: 'Bank Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      testimonial: 'I appreciate their transparency and integrity throughout the purchase process. AutoElite Kenya is now my trusted automotive partner.'
    },
    {
      name: 'Tom Mutua',
      role: 'IT Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      testimonial: 'Their vehicle selection and pricing are the best in Kenya. The teams expertise helped me find the perfect car for my needs.'
    },
    {
      name: 'Faith Wangari',
      role: 'Doctor',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      testimonial: 'The financing options and documentation process were handled professionally. I highly recommend AutoElite Kenya to anyone looking for a premium car.'
    }
  ];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.testimonial}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};