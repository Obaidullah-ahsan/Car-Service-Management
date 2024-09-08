import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';


const Hero = () => {
    return (
        <div className='overflow-hidden p-10'>
            {/* heading container */}
           <div className="flex flex-col gap-5">
           <h1 className="text-5xl font-bold">
                Find, book, or rent a car <br /> &ndash; quickly and easily!
            </h1>
            <p className="text-start">
                Streamline your car rental experience with your effortless booking process.
            </p>
            <CustomButton
                title="Explore Cars"
                className='bg-[#2C59FB] p-2 rounded-full text-white w-36'
            />
           </div>
           {/* banner container*/}
           <div>
            <Image src={`/hero.png`} alt='' height={100} width={100} className='w-full'></Image>
           </div>
        </div>
    );
};

export default Hero;