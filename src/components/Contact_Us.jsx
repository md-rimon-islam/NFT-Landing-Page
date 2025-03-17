import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

function Contact_Us() {
  return (
     <div className=' max-w-7xl mx-auto'>
        <div className=' h-full md:h-72 px-5 md:px-[13%]'>
                <div className=' border my-10 h-60 rounded-3xl'>
                <h1 className=' text-lg md:text-3xl font-semibold text-white text-center mt-8'>Subscribe Now</h1>
                <p className=' text-[13px] md:text-[16px] text-[#8C8C8C] text-center my-5 px-3'>Stay up-to-date on discounts, offers and events. Unsubscribe at any time.</p>
                <div  className=' mx-2 md:mx-20'>
                    <label className="input mt-3 rounded-full w-full border-none h-10 lg:h-14">
    
                        <input type="email" className="border-none pl-4  " placeholder="Enter your email" />
                        <span className="badge badge-neutral badge-xs md:badge-lg bg-[#2a0064fa] px-3 md:px-10 md:py-4 py-3 text-white rounded-full btn h-8 lg:h-10 -mr-1">Submit</span>
                    </label>
                </div>
                </div>
            </div>
     </div>
  )
}

export default Contact_Us