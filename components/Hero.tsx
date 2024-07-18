"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    };
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find , book, or even rent a car
            </h1>
            <p>
                Streamline your car rental experience with or smooth and reliable booking system
            </p>
            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="" alt="hero image"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
