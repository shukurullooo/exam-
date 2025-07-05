
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import { useState } from "react";
import Skleton from "../SkletonProMAx/Skleton";

const Carousel = () => {
  const { getMovies } = useMovie();
  const { data ,isLoading } = getMovies({ page: 1, without_genres: "18,36,27,10749" });
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
if (isLoading) return <Skleton />;
  return (
    <div className="container relative w-full mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        loop={data?.results?.length > 1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        thumbs={{ swiper: thumbsSwiper }}
        className=" overflow-hidden"
      >
        {data?.results?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <div
              className="w-full h-[500px] bg-cover bg-center flex items-end justify-start p-6 sm:p-10"
              style={{
                backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
              }}
            >
              <div className="bg-black/60 p-6 rounded text-white max-w-xl">
                <h2 className="text-3xl font-bold">{movie.original_title}</h2>
                <p className="mt-2 text-sm">
                  {movie.release_date?.split("-")[0]} • Комедия • EN • 6+
                </p>
                <button className="mt-4 bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full font-medium shadow">
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 px-10">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          className="!h-[100px]"
        >
          {data?.results?.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <img
                src={IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
                className="h-full w-full object-cover rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
