import React, { ReactNode } from 'react'

interface IAppButtonsWrapperProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const AppButtonsWrapper = ({ children, className }: IAppButtonsWrapperProps) => {
  return (
    <div className={`flex flex-col space-y-4 w-[100vw] md:w-[70%] sticky bottom-0 md:bottom-0 p-10 md:pt-40 bg-white md:bg-transparent md:static md:max-w-[30vw] border-t-[1px] md:border-t-0 ${className}`}>
      {children}
    </div>
  )
}

export default AppButtonsWrapper