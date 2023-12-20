import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import OptimizedImage from "./OptimizedImage";
import { Prisma } from "@prisma/client";
import Gallery from "./Gallery";
import { formatISOtoDate } from "@/lib/utils";

interface MemoryProps {
  memory: Prisma.MemoryGetPayload<{
    include: {
      people: true;
    };
  }>;
}

const Memory = ({ memory }: MemoryProps) => {
  const {
    title,
    description,
    images,
    textColor,
    backgroundColor,
    location,
    people,
    date,
    flag,
  } = memory;
  return (
    <div
      className="py-16 px-16 flex flex-col items-center gap-16"
      style={{
        height: "100dvh",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="shrink-0 flex flex-col gap-4">
        <div className="flex items-center justify-start">
          <div
            className="flex items-center rounded-lg h-10 px-2 gap-1.5"
            style={{
              backgroundColor: textColor,
              color: backgroundColor,
            }}
          >
            <div className="text-xl">{flag}</div>
            <span className="font-medium tracking-wider text-sm uppercase">
              {location}
            </span>
          </div>

          <div className="flex ml-8">
            {people.map((person, index) => (
              <div
                className="w-12 h-12 rounded-full overflow-hidden"
                style={{
                  border: `2px solid ${backgroundColor}`,
                  marginLeft: index === 0 ? 0 : -10,
                }}
              >
                <OptimizedImage src={person.image} style={{}} />
              </div>
            ))}
          </div>
          <div className="ml-auto text-lg font-medium uppercase tracking-wider">
            {formatISOtoDate(date.toString())}
          </div>
        </div>
        <div>
          <h2 className="text-6xl font-bold">{title}</h2>
          <p className="text-6xl font-medium opacity-60">{description}</p>
        </div>
      </div>
      <div className="overflow-hidden grow w-full">
        <Gallery key={JSON.stringify(images)} images={images} />
      </div>
    </div>
  );
};

export default Memory;
