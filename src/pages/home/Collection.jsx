import React from 'react'
import arrowTopRight from '../../assets/arrowTopRight.svg'
import bg1 from '../../assets/bg-collection1.png'
import bg2 from '../../assets/bg-collection2.png'
const Collection = () => {
    return (
        <div className='text-center my-20 md:px-20 px-0'>
            <h2 className='text-2xl mb-2 font-bold'>OUR COLLECTION</h2>
            <p className='text-gray-300 text-xl font-semibold mb-4 font-chillax'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
            <div className='grid md:grid-cols-3 sm::grid-cols-2 grid-cols-1 gap-5 h-96'>
                <div className='col-span-1 bg-center bg-cover rounded-3xl flex justify-center relative'
                  style={{
                    backgroundImage: `url(${bg1})`,
                  }}
                >
                    <button className='flex items-center gap-2 bg-white rounded-full py-2 px-4 absolute bottom-4 m-auto'>
                        <span>Learn more</span>
                        <img src={arrowTopRight} alt="" />
                    </button>
                </div>
                <div className='md:col-span-2 sm:grid-cols-1 bg-center bg-cover rounded-3xl flex justify-center items-center'
                  style={{
                    backgroundImage: `url(${bg2})`,
                  }}
                  >
                    <div className='text-white'>
                        <h3 className='font-chillax font-semibold text-5xl'>CLASSIC MEN</h3>
                        <p className='font-archivo text-lg'>We’re changing the way things get made</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
