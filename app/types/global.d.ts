export { }

declare global {
  interface IPlan {
    id: number,
    intervalType: string,
    price: number | string,
    currency: string,
    title: string,
    description: string,
    intervalValue?: number,
    save?: number
  }

  interface IDetails {
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    expiryDate: string,
    cvv: string,
  }

  interface IItem {
    label?: string;
    imgSrc?: string;
  }
}