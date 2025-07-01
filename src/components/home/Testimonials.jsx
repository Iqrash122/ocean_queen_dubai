import { Swiper, SwiperSlide } from "swiper/react";

//image & icons
import DoubleQuotes from "./../../assets/doublequotes.png";
import ProfileOne from "./../../assets/testi1-1.png";
import ProfileTwo from "./../../assets/testi1-2.png";
import ProfileThree from "./../../assets/testi1-3.png";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image3 from "../../assets/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg";
import image4 from "../../assets/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import image5 from "../../assets/reviews/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import image6 from "../../assets/reviews/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg";
import image7 from "../../assets/reviews/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg";
import image8 from "../../assets/reviews/rayul-_M6gy9oHgII-unsplash.jpg";
import image9 from "../../assets/reviews/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg";
import { Autoplay, FreeMode } from 'swiper/modules';

// swiper css
import "swiper/css";
export default function Testimonials() {
  return (
    <div className=" relative">
      <div className="2xl:container xl:container lg:container md:container sm:container container mx-auto">
        <div className="2xl:w-[40%] xl:w-[40%] lg:w-[20%] md:w-[100%]  sm:w-[100%] w-[100%] mx-auto mt-[90px]">
          <h4 className="text-center font-poppins-bold tracking-wider 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-bold text-[#bfa888]">
            Testimonials
          </h4>
          <h2 className="2xl:text-[42px] xl:text-[35px] lg:text-[20px] md:text-[42px] font-playfair-regular text-center">
            What Our Guests Say About Us?
          </h2>
        </div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1.5, spaceBetween: 15 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1440: { slidesPerView: 3, spaceBetween: 25 },
            }}
          >
            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    I had the best time on the Ocean Queen Cruise. The views of
                    Dubai’s skyline were magical, and the food was delicious. It
                    was perfect for a relaxing weekend.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={ProfileOne}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Alen Hispro
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      CEO, Voyacht
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    I celebrated my birthday on the cruise. It was amazing. The
                    staff was super friendly, and the live show made it even
                    more special. I highly recommend it to all of you.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={ProfileTwo}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Amelia
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Germany
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    Dining under the stars while sailing on calm waters was such
                    a peaceful and memorable experience. The ambiance on the
                    upper deck was just perfect. You all should try.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={ProfileThree}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Alexander
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      London
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    The staff was very polite, and the food selection was
                    impressive. It is a great way to spend an evening in Dubai
                    and enjoy the city from the water.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image2}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Ayla
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      London
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    We went as a family, and everyone loved it. The kids enjoyed
                    the live entertainment, and we got to relax and enjoy the
                    views. Ocean Queen Cruise is a must-try for families.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image1}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Ava
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Bristol
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    My husband and I booked the cruise for our anniversary. It
                    was so romantic, and the candle-lit dinner on the upper deck
                    made it an unforgettable night.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image3}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Hayden
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      America
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    I had the best time on the Ocean Queen Cruise. The views of
                    Dubai’s skyline were magical, and the food was delicious. It
                    was perfect for a relaxing weekend.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image4}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Skylar
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Canada
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    I celebrated my birthday on the cruise. It was amazing. The
                    staff was super friendly, and the live show made it even
                    more special. I highly recommend it to all of you.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image5}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Casey
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Germany
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    Dining under the stars while sailing on calm waters was such
                    a peaceful and memorable experience. The ambiance on the
                    upper deck was just perfect. You all should try.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image6}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Baylor
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Berlin
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    The staff was very polite, and the food selection was
                    impressive. It is a great way to spend an evening in Dubai
                    and enjoy the city from the water.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image7}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Landry
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Korean
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    We went as a family, and everyone loved it. The kids enjoyed
                    the live entertainment, and we got to relax and enjoy the
                    views. Ocean Queen Cruise is a must-try for families.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image8}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Justice
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Dubai
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-[20px] pr-[40px]">
              <div className="group w-full h-auto relative m-4 border-[1px] border-solid border-[#bfa888] after:contents-[' '] after:absolute after:left-4 after:top-4 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] px-14 pt-[80px] pb-[40px] cursor-pointer">
                <img
                  src={DoubleQuotes}
                  alt=""
                  className="absolute left-12 top-[-15px] z-[1]"
                />
                <div>
                  <p className="text-[16px] font-poppins-reg">
                    My husband and I booked the cruise for our anniversary. It
                    was so romantic, and the candle-lit dinner on the upper deck
                    made it an unforgettable night.
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-start items-center gap-2">
                  <div className="overflow-hidden w-[60px] h-[60px] rounded-full">
                    <img
                      src={image9}
                      alt="profile-image"
                      className="w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="text-[17px] font-poppins-reg font-medium group-hover:text-[#bfa888] transition-colors duration-200">
                      Azariah
                    </span>
                    <span className="text-[12px] text-[#7a7a7a] font-poppins-reg">
                      Dubai
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
