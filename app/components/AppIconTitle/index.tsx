import React from 'react'
import Image from 'next/image'
import AppTitle from '../AppTitle'

const AppIconTitle = ({ label = '', imgSrc = '/success.png', className, width='30%' }: IItem & { className?: string, width?: string}) => {
  return (
    <div className={`flex flex-col items-center md:justify-center md:flex-row md:space-x-10 ${className}`}>
      <Image
        src={imgSrc}
        className={`w-[${width}] object-contain mix-blend-multiply`}
        width="0"
        height="0"
        sizes="10%"
        alt={label} />
      <AppTitle label={label} />
    </div>
  )
}

export default AppIconTitle