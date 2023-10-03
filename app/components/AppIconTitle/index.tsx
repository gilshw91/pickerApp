import React from 'react'
import Image from 'next/image'
import AppTitle from '../AppTitle'

const AppIconTitle = ({ label = '', imgSrc = '/success.png', className, imgStyle }: IItem & { className?: string, imgStyle?: string}) => {
  return (
    <div className={`flex flex-col items-center md:justify-center md:flex-row md:space-x-10 ${className}`}>
      <Image
        src={imgSrc}
        className={`w-1/3 object-contain mix-blend-multiply ${imgStyle}`}
        width="0"
        height="0"
        sizes="10%"
        alt={label} />
      <AppTitle label={label} />
    </div>
  )
}

export default AppIconTitle