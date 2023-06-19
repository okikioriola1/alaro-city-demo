import React from 'react'
import './whyus.css'

const Benefit = ({icon, title, description}) => {
  return (
    <div className='benefit-box mt-5 md:h-[400px] md:w-[400px] rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='top-box mb-4 flex justify-center'>
            <div className='icon-box rounded-full border-2 border-gray-100 p-4'>
                {icon}
            </div>

        </div>
        <h4 className='box-title'>{title}</h4>
        <p className='box-description my-3'>{description}</p>



    </div>
  )
}

export default Benefit