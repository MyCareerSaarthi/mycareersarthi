import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectCreative, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Image from "next/image";
import Link from "next/link";

const HeroCarousel = () => {
  const slideImages = [
    {
      id: 1,
      image: "/home/slide/career-assessment.png",
      alt: "Career Assessment",
      link: "/career-mentoring",
    },
    {
      id: 2,
      image: "/home/slide/interview-preparation.png",
      alt: "Interview Preparation",
      link: "/interview-preparation",
    },
    {
      id: 3,
      image: "/home/slide/profile-scoring.png",
      alt: "Profile Scoring",
      link: "/ai-powered-profile-scoring",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden  dark:border-gray-800 bg-white dark:bg-gray-900">
        <Swiper
          modules={[Pagination, A11y, EffectCreative, Autoplay]}
          spaceBetween={30}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full aspect-video md:aspect-21/9 lg:h-[500px]"
        >
          {slideImages.map((img) => (
            <SwiperSlide key={img.id} className="relative w-full h-full">
              <Link href={img.link} className="relative w-full h-full block">
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  priority={img.id === 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroCarousel;
