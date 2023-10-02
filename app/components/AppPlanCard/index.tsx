import React from 'react'
import { formatText } from '@/libs';
import AppInputField from '../AppInputField';
import AppDivider from '../AppDivider';

interface IAppPlanCardProps {
  plan: IPlan;
  selectedPlan: number
  onRadioChange?: (planId: number) => void;
  className?: string;
}
const AppAppPlanCard = ({ plan, selectedPlan, onRadioChange, className }: IAppPlanCardProps) => {
  return (
    <label key={plan.id} className={`relative cursor-pointer bg-blue-100  p-6 md:p-4 rounded-lg shadow-md w-[100%] lg:w-[80%] transition-all duration-150 ease-out outline outline-2 md:outline-1 ${selectedPlan === plan.id ? 'outline-blue-500 bg-blue-200 opacity-75 hover:bg-blue-300' : ' outline-transparent hover:bg-blue-200'} ${className}`}>
      <div className="flex flex-col  md:flex-row justify-between space-x-2 space-y-2 ">
        {plan.save && <div className="text-white bg-green-400 absolute top-0 text-sm left-1/2 transform -translate-x-1/2 p-1 md:p-2 rounded-b-lg w-max transition-all duration-150 ease-out"><p className="drop-shadow-lg text-xs md:text-sm">Save %{plan.save}</p></div>}
        <div className="flex space-x-2">
          {onRadioChange && <AppInputField
            type="radio"
            styleByType="input-radio"
            checked={selectedPlan === plan.id}
            onChange={() => onRadioChange(plan.id)}
          />}
          <div className="flex-col">
            <p className="text-l font-bold text-sky-950">{plan.title}</p>
            {plan.description && <p dangerouslySetInnerHTML={{ __html: formatText(plan?.description) }} className="text-sky-950 text-sm"></p>}
          </div>
        </div>
        <AppDivider />     
         <div className="flex items-center justify-center space-x-2">
          {plan?.price && <span className="text-l font-bold text-sky-950">{plan.currency}{plan.price}</span>}
          {plan.intervalType && <span className="text-gray-600">
            / {plan?.intervalValue} {plan.intervalType}
          </span>}
        </div>
      </div>
    </label>
  )
}

export default AppAppPlanCard