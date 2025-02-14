import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';


const Steps = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-32 rounded-lg '
      initial={{ opacity: 0, y: 50 }} // Start invisible & shifted down
      animate={{ opacity: 1, y: 0 }} // Fade in & move up
      transition={{ duration: 0.8 }}
    >
    
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Visuals</p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center gap-4 p-5 px-8 bg-white/20 bg-gradient-to-b from-purple-200 to-indigo-300 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300'
            initial={{ opacity: 0, x: -50 }} // Start hidden & shifted left
            animate={{ opacity: 1, x: 0 }} // Fade in & slide right
            transition={{ delay: index * 0.2, duration: 0.6 }} // Staggered effect
            whileHover={{ scale: 1.05 }} // Slight grow effect on hover
          >
            <motion.img 
              width={40} 
              src={item.icon} 
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
