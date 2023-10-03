import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppButton, AppIconTitle, AppInputField, AppButtonsWrapper } from '@/components';
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
      required: true,
    }
  ])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/confirmation')
    localStorage.setItem('firstName', fields.firstName)
    localStorage.setItem('fourDigits', fields.expiryDate.slice(-4, 0))
  }

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center">
      <AppIconTitle label='Checkout Page' imgSrc='/lock.svg' className='md:w-[20%]' />
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-[80%] md:w-[60%]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
          {fieldsInputs.map((field) => {
            return <AppInputField key={field.name} {...field} />
          })}
        </div>
        <AppButtonsWrapper>
            <AppButton type="submit" label='Buy Now' disabled={hasEmptyValues(fields)} />
            <Link href="/" className="btn-text" >Back to Home</Link>
        </AppButtonsWrapper>
      </form>
    </div>
  );
};

export default CheckoutPage;
