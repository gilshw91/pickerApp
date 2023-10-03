'use client'

import { useEffect, useState } from "react";
import {
  AppButton,
  AppDivider,
  AppIconTitle,
  AppPlanCard,
  AppSections,
  AppButtonsWrapper
} from "./components";
import { fields } from "./libs";
import '@styles/globals.css';

const PickerPage = () => {
  const [plansData, setPlansData] = useState<IPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'mocks/cardsData.json'
      );
      const data = await res.json();
      const { plans } = data;
      setPlansData(plans)
    }
    fetchData()
  }, []);

  if (plansData.length === 0) {
    return (<div>Loading...</div>)
  }

  const handleRadioChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  const handleCheckoutAndReviewClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    localStorage.setItem('selectedCard', JSON.stringify(plansData[selectedPlan - 1]));
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    // <div className="p-4 flex flex-col relative w-screen h-screen items-center space-y-4">
    <div className="p-4 w-screen h-screen flex flex-col items-center">

      <AppIconTitle label='Upgrade now and receive total endpoint protection' imgSrc='/kit.png' width="10%" />
      <div className="flex flex-col-reverse md:flex-col">
        <AppSections items={fields} className="sm:hidden md:flex" />
        <AppDivider />
        <div className="flex flex-col items-center space-y-4 w-full relative md:h-auto mt-2">
          {plansData?.map((plan) => (
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

