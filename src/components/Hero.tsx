import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
    return (
        <div className='overflow-hidden'>
            <h1 className="">
                Find, book, or rent a car -- quickly and easily!
            </h1>
            <p className="">
                Streamline your car rental experience with your effortless booking process.
            </p>
            <CustomButton
                title="Explore Cars"
                className='bg-red-300 p-2 rounded-2xl text-white'
            />
        </div>
    );
};

export default Hero;