'use client'
import { useEffect, useState } from "react";
// import { InferGetStaticPropsType } from "next";
import Image from 'next/image'
import Link from "next/link";
import AppPlanCard from "./components/AppPlanCard";
// import AppLink from "@components/AppLink/AppLink";

// export async function getStaticProps() {
//   try {
//     const res = await fetch('http://localhost:3002/api/mockData');
//     const data = await res.json();
//     const plans: IPlan[] = data.plans;

//     return {
//       props: {
//         plans,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         plans: [],
//       },
//     };
//   }
// }

const PickerPage = () => {
// const PickerPage = ({ plans }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  const [plansData, setPlansData] = useState<IPlan[]>([]);

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        // 'http://localhost:3002/api/mockData'
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
        <h1 className="text-[4vw] md:text-[2vw]  font-bold mb-4 text-center text-blue-950 transition-all duration-150 ease-out">Upgrade now and receive total endpoint protection</h1>
      </div>
      <div className="flex flex-col items-center space-y-4 w-[100%] relative md:h-auto">
        {plansData?.map((plan) => (
          <AppPlanCard key={plan.id} plan={plan} selectedPlan={selectedPlan} onRadioChange={handleRadioChange} />
        ))}
      </div>
      <div className='flex flex-col w-[70%] fixed bottom-10 md:static md:max-w-[30vw] pt-40'>
        <Link href="/checkout" >Review and Checkout</Link>
      </div>
    </div>
  );
};

export default PickerPage;

