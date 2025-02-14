import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28 '
      initial={{ opacity: 0, y: 50 }} // Fade in & move up
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      

    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-600 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        {/* Image with Motion */}
        <motion.img
          src={assets.sample_img_5}
          alt=''
          className='w-80 xl:w-96 rounded-lg'
          initial={{ opacity: 0, x: -50 }} // Slide in from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
        />

        {/* Text Content with Motion */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-justify text-gray-600 mb-4'>
            Need inspiring and custom visuals that perfectly match your ideas? Our AI image generator is here to help! 
            With just a few words, you can bring your thoughts to life by turning them into striking images that capture your exact vision. 
            Whether you're designing something for a marketing campaign, need illustrations for a book, or want to create something entirely unique, 
            our free AI tool takes your descriptions and instantly generates high-quality, engaging images. 
            The process is simple, fast, and designed to give you the power to create beautiful visuals, no matter your skill level.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
