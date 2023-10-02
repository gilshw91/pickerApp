import React from 'react'

interface IAppInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  styleByType?: 'input-number' | 'input-date' | 'input-text' | 'input-radio'
}
const AppInputField = ({ label, name, type = "text", value = "", styleByType = 'input-text', onChange, className }: IAppInputFieldProps) => {

  return (
    <div className={`flex flex-col space-y-2 justify-center ${className}`}>
      {label && <label className="block font-bold text-sky-950">{label}</label>}
      <input className={styleByType} name={name} type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default AppInputField