"use client";

import React, { createContext, Dispatch, useReducer, ReactNode } from "react";
import { Period } from "../../types/Period";
import PeriodActions from "./periodsActions";
import periodsReducer from "./periodsReducer";

export const PeriodsContext = createContext<{
  state: Period[];
  dispatch: Dispatch<PeriodActions>;
}>({
  state: [],
  dispatch: () => {},
});

export function PeriodsContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(periodsReducer, []);
  return (
    <PeriodsContext.Provider value={{ state, dispatch }}>
      {children}
    </PeriodsContext.Provider>
  );
}
