import { formatISOtoDate } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import Gallery from './Gallery';
import People from './People';

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
      className="py-8 md:py-16 px-4 md:px-16 flex flex-col items-center gap-4 md:gap-16"
      style={{
        height: '100dvh',
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="shrink-0 flex flex-col gap-4  w-full max-w-[1400px]">
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

          <People
            className="hidden md:flex ml-8"
            people={people}
            backgroundColor={backgroundColor}
          />
          <div className="ml-auto text-lg font-medium uppercase tracking-wider">
            {formatISOtoDate(date.toString())}
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
          <p className="text-4xl md:text-6xl font-medium opacity-60">
            {description}
          </p>
        </div>
        <People
          className="md:hidden"
          people={people}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="overflow-hidden grow w-full">
        <Gallery key={JSON.stringify(images)} images={images} />
      </div>
    </div>
  );
};

export default Memory;
