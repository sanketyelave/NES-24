import React from 'react';
import Image from 'next/image';



function hero() {
    return (

        <main className='hero bg-[#FFFFF0]'>

            <div className="flex h-[39rem] sm:h-[44rem] md:h-[39rem] lg:h-[36rem] xl:h-[38rem] justify-center  w-full bg-red flex-col-reverse md:flex-row">
                <div className=" h-full w-full  ">

                    <div className="relative lg:w-[55%] md:w-[95%] sm:w-[40%] w-[48%]  h-full  justify-center m-auto">
                        <Image
                            src="/Assets/hero3.gif"
                            alt="GIF"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg" // Add any additional styling here
                        />
                    </div>
                </div>

                <div className="h-full w-full flex flex-col justify-center hero-txt  mt-[5rem] sm:mt-[4rem] md:mt-0 hero1">
                    <div className="flex flex-col w-[80%] m-auto gap-6">
                        <div className="hero-txt-magic text-[1.6rem] sm:text-[2.1rem]">
                            <p> <span className='text-[#E1AFD1]'>Laundry time?</span> Ain't nobody got time for that! <span className='text-[#AD88C6]'>Let us handle the dirty</span> work with pick-up and delivery <span className='text-[violet]'>magic!</span></p>
                        </div>
                        <div className="buttons flex flex-row gap-6 mb-[1rem]">
                            <div>
                                <button className='bg-[#7469B6]  hover:bg-[#3e3767] py-5 px-10 text-[1rem] text-[white] rounded-[1.2rem]  border-[0.1rem] hero-txt'> User</button>
                            </div>
                            <div>
                                <button className='bg-[#AD88C6]  hover:bg-[#614c6e] py-5 px-10 text-[1rem] text-[white] rounded-[1.2rem]  border-[0.1rem] hero-txt'>Merchant</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </main>

    );
}

export default hero;
