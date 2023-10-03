"use client";

import React, { ReactNode, useState } from "react";
import { INITIAL_STATE, PlanContext as PlanContext } from "./_PlanContext";

interface IProps {
  children: ReactNode;
}

const PlanContextProvider = ({ children }: IProps) => {
  const [plan, setPlan] = useState(INITIAL_STATE.plan);
  
  return (
    <PlanContext.Provider
      value={{
        plan,
        setPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;