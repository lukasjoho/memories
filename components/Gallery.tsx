'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel } from 'swiper/modules';
import OptimizedImage from './OptimizedImage';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const { isMobile } = useWindowSize();
  return (
    <Swiper
      initialSlide={0}
      modules={[Mousewheel, Keyboard]}
      spaceBetween={16}
      slidesPerView={'auto'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      mousewheel={{
        forceToAxis: true,
      }}
      key={JSON.stringify(images)}
      keyboard={true}
      style={{
        height: '100%',
        width: '100%',
      }}
      centeredSlides={true}
    >
      {images.map((image, index) => (
        <SwiperSlide
          style={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          key={index}
        >
          {({ isActive }) => (
            <div
              className={cn(
                'h-full rounded-3xl overflow-hidden scale-90 opacity-30 transition duration-300 max-h-[260px] md:max-h-[1400px]',
                isActive && 'opacity-100 scale-100'
              )}
            >
              <OptimizedImage
                steps={[400, 800, 1200]}
                style={{
                  objectFit: 'contain',
                }}
                src={image}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
