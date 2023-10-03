import React from 'react'

interface IAppTitleProps {
  label: string;
}

const AppTitle = ({ label }: IAppTitleProps) => {
  return (
    <h1 className="text-[4vw] md:text-3xl font-bold text-center text-blue-950 transition-all duration-150 ease-out m-0 lg:whitespace-nowrap">
      {label}
    </h1>
  )
}

export default AppTitle