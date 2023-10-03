'use client'

import { useState } from "react";
import type { InferGetStaticPropsType } from 'next'
import {
  AppButton,
  AppDivider,
  AppIconTitle,
  AppPlanCard,
  AppSections,
  AppButtonsWrapper
} from "@/components";
import { fields } from "@/libs";
import '@styles/globals.css';
import { getPlans } from "@/../api/getPlans";

export async function getStaticProps() {
    const plans = await getPlans();
    return { props: { plans } };
  } 
  
const PickerPage = ({ plans }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedPlan, setSelectedPlan] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);

  if (plans.length === 0) {
    return (<div>Loading...</div>)
  }

  const handleRadioChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  const handleCheckoutAndReviewClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    localStorage.setItem('selectedCard', JSON.stringify(plans[selectedPlan - 1]));
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center">
      <AppIconTitle label='Upgrade now and receive total endpoint protection' imgSrc='/kit.png' width="10%" />
      <div className="flex flex-col-reverse md:flex-col">
        <AppSections items={fields} className="sm:hidden md:flex" />
        <AppDivider />
        <div className="flex flex-col items-center space-y-4 w-full relative md:h-auto mt-2">
          {plans?.map((plan) => (
            <AppPlanCard key={plan.id} plan={plan} selectedPlan={selectedPlan} onRadioChange={handleRadioChange} />
          ))}
        </div>
      </div>
      <AppButtonsWrapper>
        {isLoading
          ?
          <AppButton redirectUrl="/checkout" label='Loading...' onClick={handleCheckoutAndReviewClick} disabled={isLoading} />
          :
          <AppButton redirectUrl="/checkout" label='Review and Checkout' onClick={handleCheckoutAndReviewClick} disabled={selectedPlan <= 0} />
        }
      </AppButtonsWrapper>
    </div>
  );
};

export default PickerPage;

