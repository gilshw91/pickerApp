import React from 'react'
import Image from 'next/image'


const AppIconLabel = ({ label = '', imgSrc = '/success.png', className}: IItem & {className?:string }) => {
  return (
    <div className={`flex flex-col items-center space-y-5 max-w-[20vw] ${className}`}>
      <Image
        src={imgSrc}
        className="w-[30%] md:w-[10%] object-contain mix-blend-multiply"
        width="0"
        height="0"
        sizes="10%"
        alt="Premium Kit" />
      <p className='text-sm text-center text-gray-500'>{label}</p>
    </div>
  )
}

export default AppIconLabel