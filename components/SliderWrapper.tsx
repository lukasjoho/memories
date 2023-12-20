"use client";
import React from "react";
import VerticalSwiper from "./VerticalSwiper";
import { useMouseWheel } from "./MouseWheelContext";
import { Prisma } from "@prisma/client";

interface SliderWrapperProps {
  memories: Prisma.MemoryGetPayload<{}>[];
}

const SliderWrapper = ({ memories }: SliderWrapperProps) => {
  const { allowMouseWheel } = useMouseWheel();
  return <VerticalSwiper scrollEnabled={allowMouseWheel} memories={memories} />;
};

export default SliderWrapper;
