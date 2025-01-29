'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-xl p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 
            focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200 
            outline-none text-gray-700 placeholder-gray-400"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 
            focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200 
            outline-none text-gray-700 placeholder-gray-400"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 
          focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200 
          outline-none text-gray-700 placeholder-gray-400"
          placeholder="+254 XXX XXX XXX"
        />
      </div>

      <div className="form-group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 
          focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200 
          outline-none text-gray-700 placeholder-gray-400"
          placeholder="What's this about?"
          required
        />
      </div>

      <div className="form-group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 
          focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all duration-200 
          outline-none text-gray-700 placeholder-gray-400 resize-none"
          placeholder="Write your message here..."
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold
        hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl
        focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20"
      >
        Send Message
      </motion.button>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        Well get back to you as soon as possible
      </p>
    </motion.form>
  );
};