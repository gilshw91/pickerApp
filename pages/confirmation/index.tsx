'use-client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePlanStore } from '@/context/PlanStore';
import { AppPlanCard, AppButtonsWrapper, AppIconTitle } from '@/components';
import '@styles/globals.css';

const ConfirmationPage: React.FC = () => {
  const [cardsData, setCardsData] = useState<IPlan[]>([])
  const data = usePlanStore()
  const plan  = usePlanStore.getState() as IPlan

  useEffect(() => {
    if (plan) {
      const cards: IPlan[] = [
        {
          id: 1,
          title: 'Subscription Plan',
          price: plan?.title,
        },
        {
          id: 2,
          title: 'Interval',
          price: plan?.intervalType?.toString() || '',
        },

        {
          id: 3,
          title: 'Price',
          price: `${plan?.currency}${plan?.price}`,
        },
      ]
      setCardsData(cards)
    }
  }, [])


  return (
    <div className="p-4 flex flex-col relative w-screen h-screen items-center space-y-4">
      <AppIconTitle label='Confirmed!' />
      <div className="flex flex-col items-center space-y-4 w-[100%] relative md:h-auto md:mt-4">
        {cardsData.map((card) => {
          return <AppPlanCard key={card.id} plan={card} selectedPlan={-1} />
        })}
      </div>
      <AppButtonsWrapper>
        <Link href="/" className="btn-text mt-4 ">
          Back to Home Page
        </Link>
      </AppButtonsWrapper>
    </div>
  );
};

export default ConfirmationPage;
