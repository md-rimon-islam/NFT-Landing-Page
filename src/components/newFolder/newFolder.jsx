import React from 'react'

function newFolder() {
    return (
        <div>
            <div className=' h-full px-5 md:px-[13%] text-center my-20'>
                <h1 className=' text-4xl text-center text-white my-3'>Contact Us</h1>
                <p className='text-lg text-[#8C8C8C]'>Cryptocurrency has revolutionized the world of finance and digital transactions, providing individuals with a decentralized and secure way to store, transfer, and manage their wealth</p>
                <div className=' grid md:grid-cols-2 mt-3 lg:mt-9 mx-auto'>
                    <div className=' flex items-center gap-3 mx-auto'>
                        <div className=' border-none p-3 rounded-full bg-[#290064] text-white'><FiPhoneCall /></div>
                        <div>
                            <p className=' text-[12px] text-[#8C8C8C] text-left'>Have a Question?</p>
                            <p className=' text-[16px] font-medium text-white'>+8801306655100</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-3 mx-auto'>
                        <div className=' border-none p-3 rounded-full bg-[#290064] text-white'><MdEmail /></div>
                        <div>
                            <p className=' text-[12px] text-[#8C8C8C] text-left'>Contract us as?</p>
                            <p className=' text-[16px] font-medium text-white'>info@zapooz.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newFolder