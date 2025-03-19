import React from 'react'


import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




function Footer() {
  return (
    <div className='  bg-[#282941] border-t-2 border-gray-200'>
      <div className=' h-full md:h-[500px] lg:h-[410px] max-w-7xl mx-auto px-2 md:px-5  lg:px-6  items-center md:py-20 lg:py-10 py-10 '>
      <div className='grid md:grid-cols-2 gap-20 lg:gap-56 h-full lg:h-64 items-center'>

        <div>
          <a className=" mx-4 h-8 w-8 lg:h-[74px] lg:w-[74px] text-white"><img src="../Images/logo.png" alt="" /></a>
          <p className=' text-[#8C8C8C] font-light -mt-3'>Cryptocurrency has revolutionized the world of finance and digital transactions, providing individuals with a decentralized and secure way to store, transfer, and manage their wealth</p>
          <div className=' grid lg:grid-cols-2 mt-3 lg:mt-9'>
            <div className=' flex items-center gap-3 space-y-3'>
              <div className=' border-none p-3 rounded-full bg-[#290064] text-white'><FiPhoneCall /></div>
              <div>
                <p className=' text-[12px] text-[#8C8C8C]'>Have a Question?</p>
                <p className=' text-[16px] font-medium text-white'>+8801306655100</p>
              </div>
            </div>
            <div className=' flex items-center gap-3'>
              <div className=' border-none p-3 rounded-full bg-[#290064] text-white'><MdEmail /></div>
              <div>
                <p className=' text-[12px] text-[#8C8C8C]'>Contract us as?</p>
                <p className=' text-[16px] font-medium text-white'>info@zapooz.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-0 lg:mt-7'>
          <h1 className=' text-lg font-bold text-white'>Subscribe</h1>
          <p className=' text-[#8C8C8C] text-[14px] mt-2'>Stay up-to-date on discounts, offers and events. Unsubscribe at any time.</p>
          <label className="input mt-3 rounded-full w-full border-none">
            <input type="email" className="border-none " placeholder="Enter your email" />
            <span className="badge badge-neutral badge-xs bg-[#2a0064fa] px-5 py-3 text-white rounded-full">Submit</span>
          </label>
          <div className=' flex gap-2 mt-8 right-2 items-start md:items-end md:justify-end text-left md:text-right'>
            <div className=' border-none p-3 rounded-full bg-[#290064] text-white '><CiYoutube /></div>
            <div className=' border-none p-3 rounded-full bg-[#290064] text-white '><RiFacebookBoxLine /></div>
            <div className=' border-none p-3 rounded-full bg-[#290064] text-white '><FaEarthAfrica /></div>
            <div className=' border-none p-3 rounded-full bg-[#290064] text-white '><FaFigma /></div>
            <div className=' border-none p-3 rounded-full bg-[#290064] text-white '><FaWhatsapp /></div>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-2 mt-10'>
        <div className=''>
          <ul className=' grid grid-cols-4 md:grid-cols-5 '>
            <li className=' text-[#8C8C8C] text-[14px]'><a href="#" className="hover:underline">About Us</a></li>
            <li className=' text-[#8C8C8C] text-[14px]'><a href="#" className="hover:underline">Contact</a></li>
            <li className=' text-[#8C8C8C] text-[14px]'><a href="#" className="hover:underline">Privacy</a></li>
            <li className=' text-[#8C8C8C] text-[14px]'><a href="#" className="hover:underline">Sitemap</a></li>
            <li className=' text-[#8C8C8C] text-[14px]'><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        <div>
          <ul className='flex items-center gap-1 pt-5 md:pt-0 justify-center'>
            <li className=' text-[#8C8C8C] text-[14px] '><a href="/sitemap" className="hover:underline">© 2020-2025, All Rights Reserved By</a></li>
            <li className=' text-[#8C8C8C] text-[14px] '><a href="https://zapooz.com" target='_blank' className="text-white hover:underline">ZAPOOZ</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer