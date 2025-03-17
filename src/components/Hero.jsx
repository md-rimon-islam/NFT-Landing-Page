import React from 'react'


function hero() {
  return (
    <div className=' max-w-7xl mx-auto'>
      <div className=' grid md:grid-cols-2 h-full md:h-[645px] mt-10 lg:mt-0  items-center px-2 lg:px-6 lg:overflow-hidden '>
      <div className=' '>
        <h1 className=' text-3xl md:text-6xl font-semibold leading-10 md:leading-20 text-white px-2 md:px-0 text-center md:text-left'>Explore The Largest <span className=' bg-gradient-to-t from-[#522580] to-[#AD4769] text-transparent bg-clip-text'>NFT</span> Marketplaces</h1>
        <p className=' text-[12px] md:text-2xl leading-8 text-[#A5A3A8] text-center md:text-left mt-5 md:mt-0'>Buy, Sell & Trade Cryptocurrency Easily and Securely</p>
        
        <div className=' flex gap-4 mt-6  justify-center items-center md:justify-start md:items-start'>
          <div>
          <button className='bg-[#351A88] rounded-none w-48 text-2xl h-12 text-white shadow-2xs'>Contract Wallet</button>
          </div>
          
          <div className=' h-12 w-48 rounded-none bg-gradient-to-r from-[#E38499] to-[#436DD6] p-0.5'>
            <div className=' h-full w-full bg-[#161730] '>
              <h1 className=' text-white text-2xl text-center items-center py-2'>Learn More</h1>
            </div>
          </div>
        </div>
        <div className=' flex gap-5 items-center mt-11 gap-14'>
          <div>
            <h3 className='text-2xl md:text-3xl text-white'> Our Members</h3>
          </div>
          <div className="avatar-group -space-x-6 w-48 h-14">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-4 hidden md:block md:h-[644px] lg:h-full w-full mt-20 lg:mt-0 ">
        <a className=" mx-4 hidden md:block md:h-[800px] lg:h-full w-full"><img src="../Images/hero-img.png" alt="" /></a>
      </div>

    </div>
    </div>
  )
}

export default hero