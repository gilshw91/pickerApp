'use client'

import { useEffect, useState } from "react";
import Image from 'next/image'
import { AppButton, AppPlanCard, AppTitle } from "./components";
import '@styles/globals.css';


const PickerPage = () => {
  const [plansData, setPlansData] = useState<IPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'mocks/cardsData.json'
      );
      const data = await res.json();
      const {plans} = data;
      console.log('plans',plans);
      
      setPlansData(plans)
    }
    fetchData()
  },[]);

  if(plansData.length === 0){
   return (<div>Loading...</div>)
  }
  
  const handleRadioChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  const handleCheckoutAndReviewClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);
    localStorage.setItem('selectedCard', JSON.stringify(plansData[selectedPlan-1]));
    setTimeout(() => setIsLoading(false),1000) 
  }

  return (
    <div className="p-4 flex flex-col relative w-[100vw] h-[100vh] items-center space-y-4">
      <div className="flex flex-col items-center md:justify-between md:flex-row space-x-10">
        <Image
          className="w-[10%] object-contain mix-blend-multiply"
          src="/kit.png"
          width="0"
          height="0"
          sizes="10%"
          alt="Premium Kit"
        />
        <AppTitle label="Upgrade now and receive total endpoint protection" />
        {/* <h1 className="text-[4vw] md:text-[2vw]  font-bold mb-4 text-center text-blue-950 transition-all duration-150 ease-out">Upgrade now and receive total endpoint protection</h1> */}
      </div>
      <div className="flex flex-col items-center space-y-4 w-[100%] relative md:h-auto">
        {plansData?.map((plan) => (
          <AppPlanCard key={plan.id} plan={plan} selectedPlan={selectedPlan} onRadioChange={handleRadioChange} />
        ))}
      </div>
      <div className='flex flex-col w-[70%] fixed bottom-10 md:static md:max-w-[30vw] pt-40'>
        {isLoading && <AppButton redirectUrl="/checkout" typeStyle='btn-contained' label='Loading...' onClick={handleCheckoutAndReviewClick} disabled={isLoading}/>}
        {!isLoading && <AppButton redirectUrl="/checkout" typeStyle='btn-contained' label='Review and Checkout' onClick={handleCheckoutAndReviewClick} disabled={selectedPlan <= 0} />}
      </div>
    </div>
  );
};

export default PickerPage;

