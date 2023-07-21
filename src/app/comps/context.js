"use client"; // This is a client component 👈🏽

import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }) => {
    const targetRefs = {
        targetElement1: useRef(null),
        targetElement2: useRef(null),
        targetElement3: useRef(null),
      };
  
      const scrollToElement = (targetRef) => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
  
    const scrollContextValue = {
      targetRefs,
      scrollToElement,
    };
  
    return (
      <ScrollContext.Provider value={scrollContextValue}>
        {children}
      </ScrollContext.Provider>
    );
  };