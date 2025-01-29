import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Kamau',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    quote: 'AutoElite Kenya made my car buying experience incredible. Their professionalism and attention to detail exceeded my expectations.'
  },
  {
    id: 2,
    name: 'Sarah Mwangi',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'The team went above and beyond to help me find my dream car. Their after-sales service is exceptional!'
  },
  {
    id: 3,
    name: 'David Ochieng',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    quote: 'I appreciate the transparency and honesty throughout the entire process. Highly recommended!'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600">Trusted by hundreds of satisfied customers across Kenya</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
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
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};