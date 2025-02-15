import React, { useContext } from 'react'; 
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';  // Import motion

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-2'> 
      {/* Left Side - Logo */}
      <Link to="/">
        <motion.img
          src={assets.main_logo}
          alt="Logo"
          className="w-40 sm:w-48 lg:w-56 mix-blend-multiply py-2"
          initial={{ opacity: 0, x: -20 }}  // Start with invisible and slightly to the left
          animate={{ opacity: 1, x: 0 }}     // Animate to visible and centered
          transition={{ duration: 0.5 }}     // Smooth transition for the logo
        />
      </Link>

      {/* Right Side - User Controls */}
      <div className='flex items-center gap-5 py-1 absolute top-8 right-25'>

        {user ? (
          // If user is logged in
          <div className='flex items-center gap-3'>
            <motion.button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 bg-blue-100 px-2 sm:px-6 py-5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'
              initial={{ opacity: 0, y: -10 }}  
              animate={{ opacity: 1, y: 0 }}    
              transition={{ delay: 0.3, duration: 0.6 }} 
            >
              <img className='w-5' src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit left: {credit}</p>
            </motion.button>

            <p className='text-gray-600 max-sm:hidden pl-4'>Welcome, {user.name}</p>

            <div className='relative group'>
              <motion.img
                src={assets.profile_icon}
                className='w-10 drop-shadow'
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}  
                animate={{ opacity: 1, scale: 1 }}     
                transition={{ delay: 0.5, duration: 0.4 }} 
              />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li onClick={logout} className='py-1 px-1 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // If user is logged out
          <div className='flex items-center gap-5'>
            <motion.p
              onClick={() => navigate('/buy')}
              className='cursor-pointer'
              initial={{ opacity: 0, x: -10 }}  
              animate={{ opacity: 1, x: 0 }}     
              transition={{ delay: 0.4, duration: 0.4 }} 
            >
              Subscription
            </motion.p>

            <motion.button
              onClick={() => setShowLogin(true)}
              className='bg-zinc-800 text-white px-10 py-3 sm:px-6 text-sm rounded-full cursor-pointer'
              initial={{ opacity: 0, scale: 0.8 }}  
              animate={{ opacity: 1, scale: 1 }}     
              transition={{ delay: 0.6, duration: 0.5 }} 
            >
              Login
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
