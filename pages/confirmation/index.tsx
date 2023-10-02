'use-client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '@styles/globals.css';


const ConfirmationPage: React.FC = () => {
const [cardData, setCardData] = useState<IPlan>()

useEffect(() => {
  const data = localStorage.getItem('selectedCard')
  data && setCardData(JSON.parse(data))
}, [])


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Confirmation Page</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p className="text-lg font-bold mb-2">{`ID: ${cardData?.id}`}</p>
        <p className="text-gray-600">{`Plan: ${cardData?.title}`}</p>
        <p className="text-gray-600">{`Description: ${cardData?.description}`}</p>
        <p className="text-gray-600">{`Price: ${cardData?.currency}${cardData?.price}`}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
      <Link href="/checkout" className="mt-4 text-blue-500 underline">
        Back to Checkout Page
      </Link>
    </div>
  );
};

export default ConfirmationPage;
