'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Prisma } from '@prisma/client';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';
import Memory from './Memory';

interface VerticalSwiperProps {
  memories: Prisma.MemoryGetPayload<{
    include: {
      people: true;
    };
  }>[];
}

const VerticalSwiper = ({ memories }: VerticalSwiperProps) => {
  return (
    <>
      <Swiper
        key={'outer'}
        modules={[Keyboard, Mousewheel]}
        speed={500}
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={{
          forceToAxis: true,
        }}
        keyboard={true}
        className="w-screen"
        style={{ height: '100dvh' }}
        direction="vertical"
      >
        {memories.map((memory) => (
          <SwiperSlide key={memory.id}>
            <Memory memory={memory} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VerticalSwiper;
