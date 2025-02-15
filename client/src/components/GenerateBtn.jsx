import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Generatebtn = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <div className='pb-16 text-center'>
      {/* Heading with motion */}
      <motion.h1 
        className='text-3xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16' 
        initial={{ opacity: 0, y: -10 }}  // Start with invisible and slightly above
        animate={{ opacity: 1, y: 0 }}    // Animate to fully visible and centered
        transition={{ duration: 0.5 }}     // 0.5 second animation duration
      >
        See the magic🪄. Try Now
      </motion.h1>

      {/* Button with motion
      <motion.button onClick={onClickHandler}
        className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'
        initial={{ opacity: 0, scale: 0.8 }}  // Start with smaller size and invisible
        animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and normal size
        transition={{ delay: 0.3, duration: 0.6 }} // Button appears after heading with a delay
      >
        Generate Image
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button> */}
    </div>
  )
}

export default Generatebtn
