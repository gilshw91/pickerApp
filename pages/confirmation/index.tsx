'use-client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePlanStore } from '@/context/PlanStore';
import { AppPlanCard, AppButtonsWrapper, AppIconTitle, AppTitle } from '@/components';
import '@styles/globals.css';

const getCards = (plan: IPlan) => [
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

const ConfirmationPage: React.FC = () => {
  const [cardsData, setCardsData] = useState<IPlan[]>([])
  const plan:IPlan = usePlanStore.getState() as IPlan

  useEffect(() => {
    if (!!plan.title) {
      const cards = getCards(plan)
      setCardsData(cards)
    }
  }, [])

  return (
    <div className="p-4 flex flex-col relative w-screen h-screen items-center space-y-4">
      <AppIconTitle label={cardsData.length > 0 ? `Confirmed!` : `Nice try!`} />
      {cardsData.length <= 0 && <>
      <AppTitle label='You need to choose a plan and checkout first'/>
      </>
      }
      <div className="flex flex-col items-center space-y-4 w-full h-full relative md:h-auto md:mt-4">
        {cardsData?.map((card) => {
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
