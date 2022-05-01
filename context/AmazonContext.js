import { createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

export const AmazonContext = createContext();

export const Amazon Provider = ({children}) => {
  return(
   <AmazonContext.Provider value={}>{children}</AmazonContext.Provider>
  )

}
