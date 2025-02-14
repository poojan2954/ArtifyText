import React from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { motion } from 'framer-motion' // Importing motion from framer-motion
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {
  const { user,backendUrl,loadCreditsData,token,setShowLogin } = useContext(AppContext)

  const navigate = useNavigate()

  const initPay = async (order) =>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      descriotion: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response)=>{
        try {
          const {data} = await axios.post(backendUrl + '/api/user/verify-razor',response,{headers :{token}})
          if(data.success){
              loadCreditsData();
              navigate('/')
              toast.success('Credits Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  const paymentRazorpay = async(planId)=>{
      try {
        if(!user){
          setShowLogin(true)
        }
        const {data} = await axios.post(backendUrl + '/api/user/pay-razor',{planId},{headers: {token}})
        if(data.success){
            initPay(data.order)
        }
      } catch (error) {
        toast.error(error.message)
      }
  }

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <motion.button
        className='border border-gray-400 cursor-pointer px-10 py-2 rounded-full mb-6'
        whileHover={{ scale: 1.05 }} // Slightly scale up on hover
        transition={{ duration: 0.3 }}
      >
        Our Plans
      </motion.button>

      <motion.h1
        className='text-center text-3xl font-medium mb-6 sm:mb-10'
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in when it comes into view
        transition={{ duration: 0.5 }}
      >
        Choose the plan
      </motion.h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white drop-shadow-md border rounded-lg p-6 w-80"
            whileHover={{ scale: 1.05 }} // Scale the card on hover
            initial={{ opacity: 0, y: 20 }} // Start from below with low opacity
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.5, delay: 0.2 * index }} // Delay staggered for each plan
          >
            {/* Left Side - Logo */}
            <motion.img
              src={assets.only_logo}
              alt="Logo"
              className="w-12 h-auto sm:w-16 lg:w-20 mr-4"
              initial={{ scale: 0.8 }} // Start with smaller size
              animate={{ scale: 1 }} // Scale to normal size
              transition={{ duration: 0.3 }}
            />

            {/* Right Side - Plan Details */}
            <div>
              <p className='font-semibold text-lg'>{item.id}</p>
              <p className='text-sm text-gray-600'>{item.desc}</p>
              <p className='mt-4'>
                <span className='text-2xl font-medium'>INR {item.price}</span> / {item.credits} credits
              </p>
              <motion.button
                onClick={()=>paymentRazorpay(item.id)}
                className='w-full bg-gray-950 cursor-pointer text-white mt-8 text-sm rounded-md py-2.5 min-w-2.5'
                whileHover={{ scale: 1.05 }} // Slightly scale up on hover
                transition={{ duration: 0.3 }}
              >
                {user ? 'Purchase' : 'Get Started'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
