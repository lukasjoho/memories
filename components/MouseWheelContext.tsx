"use client";
import React, { createContext, useContext, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

const MouseWheelContext = createContext<MouseWheelContextType | undefined>(
  undefined
);

type MouseWheelContextType = {
  allowMouseWheel: boolean;
  disableMouseWheel: () => void;
  enableMouseWheel: () => void;
};

export const MouseWheelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allowMouseWheel, setAllowMouseWheel] = useState(true);
  const sliderRef = useRef<SwiperRef | null>(null);

  const disableMouseWheel = () => setAllowMouseWheel(false);
  const enableMouseWheel = () => setAllowMouseWheel(true);

  return (
    <MouseWheelContext.Provider
      value={{ allowMouseWheel, disableMouseWheel, enableMouseWheel }}
    >
      {children}
    </MouseWheelContext.Provider>
  );
};

export const useMouseWheel = () => {
  const context = useContext(MouseWheelContext);
  if (!context) {
    throw new Error("useMouseWheel must be used within a MouseWheelProvider");
  }
  return context;
};
