import { motion } from 'framer-motion';
import Image from 'next/image';
const team = [
    {
      name: 'John Kamau',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: '15+ years of automotive industry experience'
    },
    {
      name: 'Sarah Mwangi',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Expert in luxury vehicle sales and customer relations'
    },
    {
      name: 'James Ochieng',
      role: 'Head Mechanic',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
      bio: 'Certified master mechanic with 20 years experience'
    },
    {
      name: 'Lucy Njeri',
      role: 'Customer Relations Manager',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909',
      bio: 'Dedicated to ensuring premium customer experience'
    },
    {
      name: 'Mike Kariuki',
      role: 'Finance Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Expert in automotive financing and leasing solutions'
    },
    {
      name: 'Janet Wambui',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Innovative marketing strategist with global experience'
    }
  ];

export const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-gray-600">
            Dedicated professionals committed to your automotive journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};