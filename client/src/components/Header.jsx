import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
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
    <motion.div className='flex flex-col justify-center items-center text-center mt-[-110px] mx-4 sm:mx-8' initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1 , y:0}} viewport={{once:true}}>
      {/* Text and Star Icon */}
      <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1 , y:0}} transition={{delay:0.2,duration:0.8}}className='text-black inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-2 border-black'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

          {/* Main Title */}
      <motion.h1 
        className="text-3xl sm:text-5xl max-w-[90%] sm:max-w-[600px] mx-auto mt-10 text-center leading-tight"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 2 }}
      >
        Create
        <motion.span 
          className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 glow-effect mx-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          image
        </motion.span>
        from text in the blink of an eye
      </motion.h1>



      {/* Style for Glowing Effect */}
            <style jsx>{`
        .glow-effect {
          text-shadow: 0 0 15px rgb(0, 119, 255),
                      0 0 30px rgba(121, 23, 219, 0.85),
                      0 0 45px rgba(0, 119, 255, 0.85);
          animation: glow-pulse 1.5s infinite alternate ease-in-out;
        }

        @keyframes glow-pulse {
          0% {
            text-shadow: 0 0 15px rgba(0, 119, 255, 1),
                        0 0 30px rgba(102, 51, 153, 0.95),
                        0 0 45px rgba(0, 119, 255, 0.95);
          }
          100% {
            text-shadow: 0 0 25px rgba(0, 119, 255, 1),
                        0 0 50px rgba(102, 51, 153, 0.95),
                        0 0 70px rgba(0, 119, 255, 0.95);
          }
        }
      `}</style>


      {/* Description Paragraph */}
      <p className='text-center max-w-xl mx-auto mt-5'>Unlock artistic magic with AI—turn words into visuals effortlessly. Type your thoughts and watch AI transform them into captivating visuals.</p>

      {/* Generate Button */}
        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer' whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default: {duration:0.5}, opacity:{delay:0.8,duration:1}}}>
          <span className="glow-effect">Generate Images</span>
          <img className='h-9' src={assets.star_group} alt=""/>
      </motion.button>
      {/* Image Gallery */}
      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index) => (
          <motion.img
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={assets[`sample_img_${index + 1}`]} // Dynamically select different images
            alt=""
            key={index}
            width={70}
            initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
            animate={{ opacity: 1, scale: 1 }} // Appear with normal size
            transition={{ delay: index * 0.2, duration: 0.6 }} // Staggered effect
            whileHover={{ scale: 1.1, rotate: 2 }} // Interactive hover effect
          />
        ))}
      </div>


      {/* Footer Text */}
      <p className='mt-2 text-neutral-600'>Generated images from ArtifyText</p>
    </motion.div>
  )
}

export default Header;
