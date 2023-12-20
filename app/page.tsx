import Map from "@/components/Map";
import Memory from "@/components/Memory";
import { MouseWheelProvider } from "@/components/MouseWheelContext";
import ScrollWrapper from "@/components/ScrollWrapper";
import SliderWrapper from "@/components/SliderWrapper";
import VerticalSwiper from "@/components/VerticalSwiper";
import prisma from "@/lib/prisma";
import { Divide } from "lucide-react";

export default async function Home() {
  const memories = await prisma.memory.findMany({
    orderBy: {
      date: "desc",
    },
    include: {
      people: true,
    },
  });
  return <VerticalSwiper memories={memories} />;
}
