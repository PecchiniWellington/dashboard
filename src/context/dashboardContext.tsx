import React, { createContext, useReducer, useEffect } from "react";
import { dashboardReducer } from "../reducers/dashboardReducers";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dashboards, dispatch] = useReducer(dashboardReducer, {});

  console.log("DASH", dashboards);
  return (
    <DashboardContext.Provider value={{ dashboards, dispatch }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
