import React from 'react'
import { cn } from "@/lib/utils";
import { Marquee } from './magicui/marquee';





const reviews = [
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/5gcvPGvk/Group-4.png",
    },
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/5g6QSCVx/Group-222.png",
    },
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/V0TcJXcv/Group-3.png",
    },
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/mCBBgCjY/Group-2.png",
    },
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/GvrVWvtF/Group-1.png",
    },
    {
        name: "Bitcoin",
        profit: "3.99",
        price: "12000$",
        img: "https://i.ibb.co/pBxX3mpT/logo.png",
    },

];




const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, price, profit }) => {
    return (
        <figure
            className={cn(
                "relative w-60 h-20 cursor-pointer overflow-hidden rounded-xl  p-4",
                // light styles
                "bg-white/15 backdrop-blur-sm",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className=" grid grid-cols-3 items-center gap-2 ">
                <div>
                    <img
                        className="rounded-full"
                        width="32"
                        height="32"
                        alt={`${name}'s avatar`} // Added meaningful alt text
                        src={img}
                    />
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white"> profit .<span className=' text-green-600'>{profit}</span></p>
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        Investment
                    </figcaption>
                    <p className="text-xs font-medium text-white"> {price}</p>
                </div>
            </div>
            
        </figure>
    );
};


function Shop() {
    return (
        <div className=' max-w-7xl mx-auto'>
            <div className=' text-center  md:mt-96  mb-32'>
            <h1 className=' text-2xl md:text-6xl font-medium text-white'>Use Money in your wallet</h1>
            <p className=' text-[10px] md:text-xl text-[#A5A3A8] mt-8 md:px-[15%] lg:px-[30%]'>Cryptocurrency is a digital form of currency that utilizes cryptography to secure transactions, control the creation of new units, and verify the transfer of assets.</p>
            <div className=' mt-10 px-6 lg:px-6'>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s] my-6">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Shop