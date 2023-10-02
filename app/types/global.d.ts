export { }

declare global {
  interface IPlan {
    id: number,
    intervalType: string,
    price: number,
    currency: string,
    title: string,
    description: string,
    intervalValue?: number,
    save?: number
  }
}