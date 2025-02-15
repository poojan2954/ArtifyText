import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-2 pt-3  pb-0 mt-20 overflow-hidden'>
      {/* Logo with motion */}
      <div className="flex items-center">
        <motion.img 
          className="mix-blend-multiply text-white glow-effect"
          src={assets.main_logo} 
          alt='' 
          width={175}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.p 
          className='ml-4 border-l border-gray-600 pl-4 text-sm text-gray-600 max-sm:hidden inline-block align-middle'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Copyright &copy;ArtifyText | All Rights Reserved
        </motion.p>
      </div>


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
