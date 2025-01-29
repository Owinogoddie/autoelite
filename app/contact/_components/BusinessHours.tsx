import { motion } from 'framer-motion';

const hours = [
  { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' }
];

export const BusinessHours = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-bold mb-4">Business Hours</h2>
      <div className="space-y-2">
        {hours.map(({ day, time }) => (
          <div key={day} className="flex justify-between">
            <span className="text-gray-600">{day}</span>
            <span className="font-medium">{time}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};