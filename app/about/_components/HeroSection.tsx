import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
        alt="AutoElite Kenya Showroom"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About AutoElite Kenya</h1>
            <p className="text-xl">Leading the way in premium automotive excellence since 2015</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};