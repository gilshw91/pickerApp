import React from 'react'
import AppPlanCard from '../AppPlanCard'

interface IAppPlanCardWrapperProps {
  plans: IPlan[]
  selectedPlan: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AppPlanCardWrapper = ({ plans, selectedPlan, onChange }: IAppPlanCardWrapperProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full relative md:h-auto mt-2">
      {plans?.map((plan) => (
        <AppPlanCard key={plan.id} plan={plan} selectedPlan={selectedPlan} onRadioChange={onChange} />
      ))}
    </div>
  )
}

export default AppPlanCardWrapper