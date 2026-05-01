import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewHero = () => {
  const bottomBannerRef = useRef(null);

  useEffect(() => {
    let scrollTimer;

    const startScrollTimer = () => {
      // Clear any existing timer
      if (scrollTimer) clearTimeout(scrollTimer);

      // Start a new timer to scroll down after 8 seconds
      scrollTimer = setTimeout(() => {
        if (window.scrollY < 100 && bottomBannerRef.current) {
          bottomBannerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 8000);
    };

    const handleScroll = () => {
      // If user is at the very top, start the timer
      if (window.scrollY < 10) {
        startScrollTimer();
      } else {
        // If they scroll away manually, stop the timer so it doesn't jump
        if (scrollTimer) clearTimeout(scrollTimer);
      }
    };

    // Initial start
    startScrollTimer();

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden md:pt-[90px] lg:pt-[80px]">
      {/* Top Slider Section */}
      <div className="w-full h-full lg:h-90vh] relative group">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={1200}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <img
                src="/new-hero/bannertopone.avif"
                alt="Support Banner 1"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <img
                src="/new-hero/bannertopsecc.avif"
                alt="Support Banner 2"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Bottom Full-Width Banner Section */}
      <div
        ref={bottomBannerRef}
        className="w-full min-h-[100vh] bg-[#F0F2F4] flex items-center justify-center scroll-mt-[90px] md:scroll-mt-[0px]"
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          <img
            onClick={() => window.jivo_api && window.jivo_api.open()}
            src="/new-hero/banner-bottom.webp"
            alt="Support Bottom Banner"
            className="w-full h-auto max-h-[100vh] object-contain cursor-pointer "
          />
        </div>
      </div>


    </section>
  );
};

export default NewHero;
