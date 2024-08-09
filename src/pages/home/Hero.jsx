import React from 'react'
import arrowTopRight from '../../assets/arrowTopRight.svg'
import bgHero from '../../assets/bg-hero.png'
const Hero = () => {
    return (
        <div className='h-full w-full bg-center bg-cover rounded-3xl mt-14'
            style={{
                backgroundImage: `url(${bgHero})`,
            }}
        >
            <div className='h-full w-full flex justify-center items-center rounded-3xl md:px-10 px-5'>
                <div className='flex flex-col items-center justify-between gap-5 max-w-3xl py-10'>
                    <div className='flex items-center justify-center gap-2 px-4'>
                        <hr className='border-white border-[1px] w-20' />
                        <p className='text-center text-white'>We bring new fashion to the world</p>
                        <hr className='border-white border-[1px] w-20' />
                    </div>
                    <h1 className='text-white sm:text-5xl text-3xl text-center font-semibold font-chillax'>DISCOVER THE LATEST FASHION TRENDS HERE</h1>
                    <p className='text-white text-center max-w-2xl'>Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>
                    <div className='flex max-w-full'>
                        <button className='font-archivo font-semibold py-3 px-4 rounded-full bg-white text-black'>Start Shopping</button>
                        <div className='bg-white flex items-center justify-center rounded-full h-14 w-14'>
                            <img src={arrowTopRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero
