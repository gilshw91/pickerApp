'use-client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '@styles/globals.css';
import { AppIconLabel, AppPlanCard, AppTitle, AppButtonsWrapper, AppIconTitle } from '@/components';

const ConfirmationPage: React.FC = () => {
  const [cardsData, setCardsData] = useState<IPlan[]>([])

  useEffect(() => {
    const data = localStorage.getItem('selectedCard')
    if (data) {
      const details: IPlan = JSON.parse(data)
      const cards: IPlan[] = [
        {
          id: 1,
          title: 'Subscription Plan',
          description: '',
          currency: '',
          price: details.title,
          intervalType: ''
        },
        {
          id: 2,
          title: 'Interval',
          description: '',
          currency: '',
          price: details.intervalType.toString(),
          intervalType: ''
        },

        {
          id: 3,
          title: 'Price',
          description: "",
          currency: '',
          price: `${details.currency}${details.price}`,
          intervalType: ''
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
