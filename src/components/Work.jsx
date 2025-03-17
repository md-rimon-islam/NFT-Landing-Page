import React from 'react'
import { FiArrowRight } from "react-icons/fi";





function Work() {
  return (
    <div className=' max-w-7xl mx-auto'>
      <div className=' mt-14 px-6'>
      <div className=' text-center'>

        <h1 className=' text-3xl md:text-5xl text-white'>Secure & Private</h1>
        <p className=' text-[#A5A3A8] text-[12px] md:text-2xl mt-2.5'>24/7 Dedicated Support Team</p>
      </div>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 '>


        <div className='  h-[330px] border-t border-l border-r border-[#2e2f4b] text-center bg-[#27283F] backdrop-blur-sm rounded-[4px] px-3 md:px-10 my-7  lg:my-0 '>
          <img src="../Images/icon.png" className=' -mt-12 md:-mt-[16%] lg:-mt-[14%] h-24 w-24 mx-auto' alt="" />

          <div className='  items-center lg:w-80 h-40 md:my-0 lg:my-10'>
            <h1 className=' text-3xl font-extrabold text-white leading-10 md:leading-16'>Invest In crypto</h1>
            <p className=' text-[#898CA9] text-[10px] md:text-[16px] text-center'>
              Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.
            </p>
            <p className=' text-[#6200EE] justify-center leading-10 mx-auto text-center flex items-center text-[16px] font-semibold gap-1.5'><span >Get Started</span><span><FiArrowRight /></span></p>
          </div>

        </div>
        <div className='  h-[330px] border-t border-l border-r border-[#2e2f4b] text-center bg-[#27283F] backdrop-blur-sm  rounded-[4px] px-10 my-7 mt-20 md:mt-0 lg:my-0'>
          <img src="../Images/icon-(1).png" className=' -mt-10 md:-mt-[15%] lg:-mt-[14%] h-24 w-24 mx-auto' alt="" />

          <div className='  items-center lg:w-80 h-40 my-5 md:my-10'>
            <h1 className=' text-3xl font-extrabold text-white leading-10 md:leading-16'>Fast Transaction</h1>
            <p className=' text-[#898CA9] text-[10px] md:text-[16px]'>
              Invest in cryptocurrency with our secure and easy-to-use online platform. With 24/7 access to full service customer support, you can trade with confidence.
            </p>
            <p className=' text-[#6200EE] justify-center leading-10 mx-auto text-center flex items-center text-[16px] font-semibold gap-1.5'><span >Get Started</span><span><FiArrowRight /></span></p>
          </div>

        </div>
        <div className=' h-[330px] border-t border-l border-r border-[#2e2f4b] text-center bg-[#27283F] backdrop-blur-sm  rounded-[4px] px-10 my-7 lg:my-0'>
          <img src="../Images/icon-(2).png" className=' -mt-10 md:-mt-[15%] lg:-mt-[14%] h-24 w-24 mx-auto' alt="" />

          <div className='  items-center lg:w-80 h-40 my-5 md:my-10'>
            <h1 className=' text-3xl font-extrabold text-white leading-16'>Secure</h1>
            <p className=' text-[#898CA9] text-[10px] md:text-[16px]'>
              Gain access to a variety of digital assets with just a few clicks. Our intuitive platform makes it easy to buy, sell, and store your cryptocurrency.
            </p>
            <p className=' text-[#6200EE] justify-center leading-10 mx-auto text-center flex items-center text-[16px] font-semibold gap-1.5'><span >Get Started</span><span><FiArrowRight /></span></p>
          </div>

        </div>


      </div>
    </div>
    </div>
  )
}

export default Work