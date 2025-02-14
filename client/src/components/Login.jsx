import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';  // Import motion
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin,backendUrl,setToken,setUser } = useContext(AppContext);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(state === 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email,password})
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }
      }else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      {/* Motion applied to the form */}
      <motion.form onSubmit={onSubmitHandler}
        className='relative bg-white p-6 w-80 rounded-xl text-slate-500 shadow-lg'
        initial={{ opacity: 0, y: -50 }}  // Initial state, slightly above and transparent
        animate={{ opacity: 1, y: 0 }}    // Animate to visible and in place
        transition={{ duration: 0.5 }}    // Animation duration
      >
        <h1 className='text-center text-xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm text-center'>Welcome Back! Please sign in to continue.</p>
        
        {/* Motion applied to inputs */}
        {state !== 'Login' && (
          <motion.div
            className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'
            initial={{ opacity: 0, x: -20 }}  // Start with invisible and slightly to the left
            animate={{ opacity: 1, x: 0 }}    // Animate to visible and centered
            transition={{ delay: 0.2, duration: 0.4 }}  // Delayed animation
          >
            <img src={assets.user_icon} alt='' className='w-5 h-5' />
            <input onChange={e =>setName(e.target.value)} value={name} type='text' className='outline-none text-sm w-full' placeholder='Full Name' required />
          </motion.div>
        )}

        {/* Motion applied to email input */}
        <motion.div
          className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <img src={assets.email_img} alt='' className='w-5 h-5' />
          <input onChange={e =>setEmail(e.target.value)} value={email} type='email' className='outline-none text-sm w-full' placeholder='Email id' required />
        </motion.div>

        {/* Motion applied to password input */}
        <motion.div
          className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <img src={assets.password_img} alt='' className='w-5 h-5' />
          <input onChange={e =>setPassword(e.target.value)} value={password} type='password' className='outline-none text-sm w-full' placeholder='Password' required />
        </motion.div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

        {/* Motion applied to button */}
        <motion.button 
          className='bg-blue-600 w-full text-white py-2 rounded-full'
          initial={{ opacity: 0, y: 20 }}    // Start with invisible and slightly below
          animate={{ opacity: 1, y: 0 }}     // Animate to visible and centered
          transition={{ delay: 0.5, duration: 0.4 }}  // Delayed animation for button
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </motion.button>

        {/* Sign Up / Login toggle with motion */}
        {state === 'Login' ? (
          <p className='mt-5 text-center'>
            Don't have an account?
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('sign up')}>Sign Up</span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an account?
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span>
          </p>
        )}

        {/* Motion applied to close button */}
        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon} 
          alt='' 
          className='absolute top-5 right-5 cursor-pointer'
          initial={{ opacity: 0, scale: 0 }}  // Start with invisible and small
          animate={{ opacity: 1, scale: 1 }}   // Animate to full visibility and size
          transition={{ delay: 0.6, duration: 0.4 }}  // Delay and smooth animation
        />
      </motion.form>
    </div>
  );
};

export default Login;
