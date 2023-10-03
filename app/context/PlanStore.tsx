'use client'

import { create } from "zustand";

export const INITIAL_STATE:IPlanContextProps = {
  plan: {
    id: -1,
    intervalType: "",
    price: 0,
    currency: "₪",
    title: "",
    description: ""
  },
  setPlan: (plan) => {}
}

interface IPlanContextProps {
  plan: IPlan;
  setPlan: React.Dispatch<React.SetStateAction<IPlan>> 
}

export const usePlanStore = create((set) => (INITIAL_STATE))