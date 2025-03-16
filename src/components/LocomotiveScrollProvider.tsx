
import React, { createContext, useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

type LocomotiveScrollContextType = {
  scroll: LocomotiveScroll | null;
};

export const LocomotiveScrollContext = createContext<LocomotiveScrollContextType>({
  scroll: null,
});

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
  options: {
    smooth?: boolean;
    lerp?: number;
    smartphone?: { smooth?: boolean };
    tablet?: { smooth?: boolean };
    [key: string]: any;
  };
  watch?: any[];
  containerRef: React.RefObject<HTMLDivElement>;
}

export const LocomotiveScrollProvider: React.FC<LocomotiveScrollProviderProps> = ({
  children,
  options,
  watch = [],
  containerRef,
}) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // @ts-ignore - LocomotiveScroll types are not perfect
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      ...options,
    });

    setScroll(scrollRef.current);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
        setScroll(null);
      }
    };
  }, [options, containerRef]);

  useEffect(() => {
    if (scroll) {
      // @ts-ignore - update method exists but is not in the types
      scroll.update();
    }
  }, [scroll, watch]);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
