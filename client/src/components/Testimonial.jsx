import React from 'react';
import { testimonialsData } from '../assets/assets'; // Fixed typo in variable name
import rating_star from '../assets/rating_star.svg'; // Ensure correct import
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12 ">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
      <p className="text-gray-600 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md order w-80 cursor-pointer hover:scale-[1.02] transition-all rounded-lg max-w-sm"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
            animate={{ opacity: 1, y: 0 }}    // Animate to full opacity and original position
            transition={{ delay: 0.2 * index, duration: 0.6 }} // Stagger animation with a delay
          >
            <div className="flex flex-col justify-center items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-14 h-14 mr-4" />
              <div>
                <h2 className="font-semibold mt-3 text-xl text-center">{testimonial.name}</h2>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex justify-center items-center mb-4">
              {Array.from({ length: testimonial.stars }).map((_, index) => (
                  <img key={index} src={rating_star} alt="star"/>
              ))}
            </div>

            <p className="text-gray-700 text-center text-sm">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
