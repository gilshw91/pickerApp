'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

interface IAppButtonProps {
  label: string;
  onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  redirectUrl?: string;
  typeStyle?: 'btn-contained' | 'btn-text';
  className?: string;
  disabled?: boolean
}

const AppButton = ({ label, onClick, typeStyle = 'btn-contained', redirectUrl, className, disabled=false }: IAppButtonProps) => {
  const router = useRouter()

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    redirectUrl && router.push(redirectUrl);
    onClick(e)
  }
  redirectUrl
  return (
    <button className={`${typeStyle}`} onClick={handleClick} disabled={disabled} >
      {label}
    </button>
  )
}

export default AppButton