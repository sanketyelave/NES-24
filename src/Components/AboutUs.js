"use client"
import React from 'react';
import Image from 'next/image';

function Aboutus() {
    return (
        <main id='/#about '>
            <div className=" h-[27rem] w-full bg-[#7469B6] md:h-[35rem] ">

                <div className="flex justify-center "> <h1 className='mt-8 text-[3rem] text-[white] hero-txt-magic'>About Us</h1></div>

                <div className="flex flex-row">
                    <div className="hero-txt w-1/2 md:pl-[5rem] sm:pl-[2rem] pl-[1rem] pt-12 xl:text-[2.1rem] md:text-[1.8rem] sm:[1.3rem] text-[0.9rem] ">
                        <p className='text-[#000]'> <span className='text-white '>1.</span> Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-[#000]'><span className='text-[#E5C393]'>2.</span> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p className='text-[black]'><span className='text-white'>3.</span>  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="relative w-1/2 flex justify-center mt-8">
                        <Image
                            src="/Assets/about2.gif"
                            alt="image not found"
                            height={250}
                            width={300}
                        />
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Aboutus;
