
import React, { createContext, useEffect, useRef } from 'react';

interface SmoothScrollContextType {
  scrollTo: (selector: string) => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
});

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
}) => {
  // Function to handle smooth scrolling to elements
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
