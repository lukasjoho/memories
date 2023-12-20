"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Mousewheel } from "swiper/modules";
import OptimizedImage from "./OptimizedImage";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Swiper
      modules={[Mousewheel, Keyboard]}
      spaceBetween={0}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      mousewheel={{
        forceToAxis: true,
      }}
      centeredSlides={true}
      key={JSON.stringify(images)}
      nested={true}
      keyboard={true}
      style={{
        height: "100%",
      }}
    >
      {images.map((image) => (
        <SwiperSlide style={{ width: "auto" }}>
          {({ isActive }) => (
            <div
              className={cn(
                "h-full opacity-30 scale-90 transition duration-300 rounded-3xl overflow-hidden",
                isActive && "opacity-100 scale-100"
              )}
            >
              <img src={image} alt="" className="h-full w-auto" />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
