import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { Autoplay } from "swiper/modules";
// import swiper css
import "swiper/css";
import BookingForm from "../bookingForm/Form";
import { div } from "motion/react-m";

export default function HeroSection() {
  return (
    <div className="main-hero-section relative  ">
      <div className="bg-black">
        <section id="bookingForm">

         <BookingForm   />
        </section>
        <Swiper
          sliderperview={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={2000}
        >
          <SwiperSlide className="bg-slider-image bg-cover bg-no-repeat bg-center    ">
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 150 }}
                transition={{ duration: 2.0 }}
                className=" 2xl:container xl:container lg:container md:container sm:container  p-4 mx-auto py-[420px]"
              >
                {/* <div className="2xl:container xl:container lg:container md:container sm:container mx-auto py-[120px] p-4    flex flex-col justify-center 2xl:items-start xl:items-start lg:items-center md:items-center items-center">
                  <h3 className="font-allison ml-8 text-white 2xl:text-[260px] xl:text-[260px] lg:text-[260px] md:text-[260px]  text-[80px] opacity-80">
                    Luxury
                  </h3>
                  <h1 className="font-serif 2xl:text-[100px] xl:text-[100px] lg:text-[100px] 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center text-center md:text-[100px] sm:text-[30px] text-[40px]   text-white capitalize 2xl:mt-[-90px] xl:mt-[-90px] lg:mt-[-90px] md:mt-[-90px] sm:mt-[0px] mt-[0px]">
                    Ocean Queen <br /> Catamaran
                  </h1>
                  <button className="bg-[#bfa888] py-4 px-12 font-sans tracking-wider capitalize text-white font-bold mt-3 hover:bg-[#011425] transition-colors duration-200">
                    Book Now
                  </button>
                </div> */}
              </motion.div>
            )}
          </SwiperSlide>

          <SwiperSlide className="bg-slider-image1 bg-cover bg-no-repeat bg-center">
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 150 }}
                transition={{ duration: 2.0 }}
                className=" 2xl:container xl:container lg:container md:container sm:container  p-4 mx-auto py-[420px]"
              >
                {/* <div className="2xl:container xl:container lg:container md:container sm:container  p-4 mx-auto py-[120px] flex flex-col justify-center  2xl:items-start xl:items-start lg:items-center md:items-center items-center">
                  <h3 className="font-allison ml-8 text-white 2xl:text-[260px] xl:text-[260px] lg:text-[260px] md:text-[260px]  text-[80px] opacity-80">
                    Luxury
                  </h3>
                  <h1 className="font-serif 2xl:text-[100px] xl:text-[100px] lg:text-[100px] 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center text-center md:text-[100px] sm:text-[30px] text-[40px]   text-white capitalize 2xl:mt-[-90px] xl:mt-[-90px] lg:mt-[-90px] md:mt-[-90px] sm:mt-[0px] mt-[0px]">
                    Ocean Queen <br /> Catamaran
                  </h1>
                  <button className="bg-[#bfa888] py-4 px-12 font-sans tracking-wider capitalize text-white font-bold mt-3 hover:bg-[#011425] transition-colors duration-200">
                    Book Now
                  </button>
                </div> */}
              </motion.div>
            )}
          </SwiperSlide>

          <SwiperSlide className="bg-slider-image2  bg-cover bg-no-repeat bg-center">
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 150 }}
                transition={{ duration: 2.0 }}
                className=" 2xl:container xl:container lg:container md:container sm:container  p-4 mx-auto py-[420px]"
              >
                {/* <div className="2xl:container xl:container lg:container md:container sm:container  p-4 mx-auto py-[120px] flex flex-col justify-center  2xl:items-start xl:items-start lg:items-center md:items-center items-center">
                  <h3 className="font-allison ml-8 text-white 2xl:text-[260px] xl:text-[260px] lg:text-[260px] md:text-[260px]  text-[80px] opacity-80">
                    Luxury
                  </h3>
                  <h1 className="font-serif 2xl:text-[100px] xl:text-[100px] 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center text-center lg:text-[100px] md:text-[100px] sm:text-[30px] text-[40px]   text-white capitalize 2xl:mt-[-90px] xl:mt-[-90px] lg:mt-[-90px] md:mt-[-90px] sm:mt-[0px] mt-[0px]">
                    Ocean Queen <br /> Catamaran
                  </h1>
                  <button className="bg-[#bfa888] py-4 px-12 font-sans tracking-wider capitalize text-white font-bold mt-3 hover:bg-[#011425] transition-colors duration-200">
                    Book Now
                  </button>
                </div> */}
              </motion.div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
