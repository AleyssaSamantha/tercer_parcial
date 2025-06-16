import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ importa el módulo Autoplay
import "swiper/css";

export default function Carrusel({ images }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]} // ✅ registra el módulo Autoplay
      className="w-full h-full"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            alt={`imagen-${i}`}
            className="w-full h-full object-cover rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

