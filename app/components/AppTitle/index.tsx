import React from 'react'

interface IAppTitleProps {
  label: string;
}

const AppTitle = ({ label }: IAppTitleProps) => {
  return (
    <h1 className="text-[4vw] md:text-[2vw]  font-bold mb-4 text-center text-blue-950 transition-all duration-150 ease-out">
      {label}
    </h1>
  )
}

export default AppTitle