'use client'

import { useState } from "react";
import type { InferGetStaticPropsType } from 'next'
import { usePlanStore } from "@/context/PlanStore";
import {
  AppButton,
  AppDivider,
  AppIconTitle,
  AppSections,
  AppButtonsWrapper,
  AppPlanCardWrapper
} from "@/components";
import { fields } from "@/libs";
import { getPlans } from "@/../api/getPlans";
import '@styles/globals.css';

export async function getStaticProps() {
  const plans = await getPlans();
  return { props: { plans } };
}

const PickerPage = ({ plans }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedPlanIndex, setSelectedPlan] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);

  if (plans.length === 0) {
    return (<div>Loading...</div>)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value)
    setSelectedPlan(id);
  };

  const handleCheckoutAndReviewClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    usePlanStore.setState(plans[selectedPlanIndex - 1])
    setIsLoading(false)
  }

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center">
      <AppIconTitle 
      label='Upgrade now and receive total endpoint protection' 
      imgSrc='/kit.png' 
      imgStyle="w-[10%]" />
      <div className="flex flex-col-reverse md:flex-col">
        <AppSections items={fields} className="sm:hidden md:flex" />
        <AppDivider />
        <AppPlanCardWrapper plans={plans} selectedPlan={selectedPlanIndex} onChange={handleRadioChange} />
      </div>
      <AppButtonsWrapper>
        {isLoading
          ?
          <AppButton redirectUrl="/checkout" label='Loading...' onClick={handleCheckoutAndReviewClick} disabled={isLoading} />
          :
          <AppButton redirectUrl="/checkout" label='Review and Checkout' onClick={handleCheckoutAndReviewClick} disabled={selectedPlanIndex <= 0} />
        }
      </AppButtonsWrapper>
    </div>
  );
};

export default PickerPage;

