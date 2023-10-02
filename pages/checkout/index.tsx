import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppButton, AppInputField } from '@/components';
import { hasEmptyValues } from '@/libs';
import '@styles/globals.css';

const CheckoutPage: React.FC = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  })
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  }

  const fieldsInputs = ([
    {
      label: 'First Name',
      name: 'firstName',
      value: fields.firstName,
      onChange: handleChange,
      required: true
    },
    {
      label: 'Last Name',
      name: 'lastName',
      value: fields.lastName,
      onChange: handleChange,
      required: true
    },
    {
      label: 'Credit Card Number',
      name: 'creditCardNumber',
      value: fields.creditCardNumber,
      onChange: handleChange,
      required: true
    },
    {
      label: 'Expiry Date',
      name: 'expiryDate',
      value: fields.expiryDate, // 2023-10-03
      type: 'date',
      onChange: handleChange,
      required: true
    },
    {
      label: 'CVV',
      name: 'cvv',
      value: fields.cvv,
      type: 'number',
      onChange: handleChange,
      required: true
    }
  ])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/confirmation')
  }
  
  return (
    <div className="p-4 w-[100vw] flex flex-col items-center">
      <h1 className="text-[4vw] md:text-[2vw]  font-bold mb-4 text-center text-blue-950 transition-all duration-150 ease-out">Checkout Page</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[100%]">
          {fieldsInputs.map((field) => {
            return <AppInputField key={field.name} {...field} />
          })}
        </div>
        <div className='flex flex-col mt-4 space-y-4 fixed md:static bottom-10 w-[70%] md:pt-40 md:max-w-[30vw]'>
          <AppButton type="submit" label='Buy Now' className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" disabled={hasEmptyValues(fields)}/>
          <Link href="/" className="btn-text" >Back to Home</Link>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
