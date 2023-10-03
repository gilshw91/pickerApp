import { createContext, useContext } from "react";

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

export const PlanContext = createContext<IPlanContextProps>(INITIAL_STATE);

export const usePlanContext = () => useContext(PlanContext);
