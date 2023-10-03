import { boldSpecificWords } from '@/libs';
import React from 'react'
import AppIconLabel from '../AppIconLabel'

interface IAppSection {
  items: IItem[];
  className: string;
}
const AppSections = ({ items, className }: IAppSection) => {
  return (
    <div className={`flex flex-col w-[100%] items-center ${className}`}>
      <div className={`flex max-w-[80%] justify-between space-x-4 `}>
        {items.map((item) => <AppIconLabel key={item.label} label={boldSpecificWords(item.label, item.boldWords)} imgSrc={item.imgSrc} />)}
      </div>
      <div className="h-[1px] mt-4 bg-slate-300" />
    </div>
  )
}

export default AppSections