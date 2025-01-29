import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-full"
          >
            <Image
              src={images[selectedImage]}
              alt="Vehicle"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${
              selectedImage === index ? 'ring-2 ring-primary-600' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Vehicle thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};