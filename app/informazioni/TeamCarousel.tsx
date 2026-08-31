"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const team = [
  {
    nome: "Mirco Malavasi",
    foto: "/mirco.webp",
    posizione: "object-top",
  },
  {
    nome: "Virginia Buffagni",
    foto: "/virginia-buffagni.jpg",
    posizione: "object-top",
  },
  {
    nome: "Alice Morsiani",
    foto: "/alice-morsiani.jpg",
    posizione: "object-[center_65%]",
  },
  {
    nome: "Luca Rabaglia",
    foto: "/luca.webp",
    posizione: "object-top",
  },
];

export default function TeamCarousel() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[24px] bg-slate-100 md:rounded-[32px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full [&_.swiper-pagination]:!bottom-4 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:!opacity-60 [&_.swiper-pagination-bullet]:shadow-md [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!opacity-100"
        aria-label="Carosello del team di Fisioterapia Malavasi"
      >
        {team.map((membro, index) => (
          <SwiperSlide key={membro.nome} className="!h-full">
            <div className="relative h-full w-full">
              <Image
                src={membro.foto}
                alt={membro.nome}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={`object-cover ${membro.posizione}`}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#022166]/35 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
