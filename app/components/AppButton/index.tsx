'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

interface IAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  // onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  redirectUrl?: string;
  typeStyle?: 'btn-contained' | 'btn-text';
  className?: string;
  disabled?: boolean
}

const AppButton = ({ label, onClick, typeStyle = 'btn-contained', redirectUrl, className, disabled=false, type }: IAppButtonProps) => {
  const router = useRouter()

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    redirectUrl && router.push(redirectUrl);
    onClick && onClick(e)
  }
  redirectUrl
  return (
    <button className={`${typeStyle}`} onClick={handleClick} disabled={disabled} type={type}>
      {label}
    </button>
  )
}

export default AppButton