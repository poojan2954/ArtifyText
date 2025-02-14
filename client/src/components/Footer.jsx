import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      {/* Logo with motion */}
      <motion.img 
        className="mix-blend-multiply text-white glow-effect"
        src={assets.logo2} 
        alt='' 
        width={150}
        initial={{ opacity: 0, y: -10 }} // Start with slightly above and transparent
        animate={{ opacity: 1, y: 0 }}    // Animate to fully visible and centered
        transition={{ duration: 0.5 }}    // 0.5 second animation
      />
      
      {/* Copyright text with motion */}
      <motion.p 
        className='flex-1 border-l border-gray-600 pl-4 text-sm text-gray-600 max-sm:hidden'
        initial={{ opacity: 0 }} // Start with invisible text
        animate={{ opacity: 1 }}  // Fade in
        transition={{ delay: 0.2, duration: 0.5 }} // 0.2 sec delay, 0.5 sec duration
      >
        Copyright &copy;ArtifyText | All Rights Reserved
      </motion.p>

      {/* Social Media icons with motion */}
      <div className='flex gap-2.5'>
        <motion.img 
          src={assets.facebook_icon} 
          alt='' 
          width={35}
          initial={{ opacity: 0, x: -10 }}  // Start with slightly left and invisible
          animate={{ opacity: 1, x: 0 }}    // Animate to fully visible and centered
          transition={{ delay: 0.4, duration: 0.5 }} // Delay for the second icon
        />
        <motion.img 
          src={assets.twitter_icon} 
          alt='' 
          width={35}
          initial={{ opacity: 0, x: -10 }}  // Start with slightly left and invisible
          animate={{ opacity: 1, x: 0 }}    // Animate to fully visible and centered
          transition={{ delay: 0.6, duration: 0.5 }} // Delay for the third icon
        />
        <motion.img 
          src={assets.instagram_icon} 
          alt='' 
          width={35}
          initial={{ opacity: 0, x: -10 }}  // Start with slightly left and invisible
          animate={{ opacity: 1, x: 0 }}    // Animate to fully visible and centered
          transition={{ delay: 0.8, duration: 0.5 }} // Delay for the fourth icon
        />
      </div>
    </div>
  )
}

export default Footer
