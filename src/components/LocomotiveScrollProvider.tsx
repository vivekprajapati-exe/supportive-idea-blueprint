
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
  options: LocomotiveScroll.InstanceOptions;
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
      scroll.update();
    }
  }, [scroll, watch]);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
