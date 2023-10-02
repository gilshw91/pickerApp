'use-client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '@styles/globals.css';
import { AppButton, AppPlanCard, AppTitle } from '@/components';


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
    <div className="p-4 flex flex-col relative w-[100vw] h-[100vh] items-center space-y-4">
        <AppTitle label="Confirmation" />
      <div className="flex flex-col items-center space-y-4 w-[100%] relative md:h-auto">
        {cardsData.map((card) => {
          return <AppPlanCard key={card.id} plan={card} selectedPlan={-1} />
        })}
      </div>
      <div className='flex flex-col mt-4 space-y-4 fixed md:static bottom-10 w-[70%] md:pt-40 md:max-w-[30vw]'>

      <Link href="/checkout" className="btn-text mt-4 ">
        Back to Checkout Page
      </Link>
    </div>
    </div>
  );
};

export default ConfirmationPage;
