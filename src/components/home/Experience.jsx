//import react
import BoatImage from "./../../assets/newship.png";
import BoatWheel from "./../../assets/icon-wheel-about.png";
import SinceImage from "./../../assets/about1-1.jpg";
import Juice from "../../assets/icons/softdrink.png";
import toilet from "../../assets/icons/toilet.png";
import Horse from "../../assets/icons/horse.png";
import Dance from "../../assets/icons/traditional-dance.png";
import Ship from "../../assets/icons/ship.png";
import Car from "../../assets/icons/school-bus.png";
import Juices from "../../assets/icons/soft-drink.png";
import turkey from "../../assets/icons/turkey.png";
import tea from "../../assets/icons/tea.png";
import catering from "../../assets/icons/catering.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Ship2 from "../../assets/icons/ship2.svg";
import puppetShow from "../../assets/icons/puppetShow.svg";
import salingboat from "../../assets/icons/saling-boat.svg";
import Cruise from "../../assets/icon/cruise.svg";
import upperDeck from "../../assets/icon/openairupperdeck.svg";
import BoatImage1 from "./../../assets/bgImage/bgImage2.jpeg";

export default function Experience() {
  return (
    <>
      <div className="mt-[90px]">
        <div className="2xl:container xl:container lg:container md:container sm:container mx-auto p-2">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col  sm:flex-col flex-col justify-start items-end  relative">
            <img
              src={BoatImage}
              alt=""
              className="animate-shake animate-infinite animate-duration-[9000ms] bg-transparent h-[130%] 1  animate-delay-0 animate-ease-linear absolute  2xl:top-20 xl:top-28 lg:top-20  md:top-32  sm:top-20 top-20 2xl:left-24 xl:left-0 lg:left-0 md:left-0 sm:left-0 left-0 2xl:w-auto xl:w-auto  lg:w-[100%] md:w-[90%]  w-[90%]   z-50 hover:rotate-180 hover:scale-110 "
            />

            <img
              src={BoatImage1}
              alt=""
              className="absolute top-5 left-0 h-[90%] "
            />
            
            <div className="w-[40%]"></div>
            <div className="bg-[#f4efec] relative 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[80%] w-[100%]   p-[20px]">
              <div className="bg-about-image bg-cover bg-no-repeat bg-center flex flex-row 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-end justify-end items-center py-[50px] 2xl:px-[60px] xl:px-[60px] lg:px-[60px] md:px-[60px] sm:px-[0px] px-[0px]  border-[1px] border-[#bfa888] border-solid relative ">
                <img
                  src={BoatWheel}
                  alt=""
                  className="absolute top-5 2xl:left-12  xl:left-12 lg:left-12 md:left-8 sm:left-2 left-2 animate-spin  animate-infinite animate-duration-[40000ms] animate-delay-0 animate-ease-linear animate-fill-both 2xl:w-auto xl:w-auto  lg:w-[20%] md:w-[20%]  sm:w-[20%] w-[20%]  h-auto"
                />
                <div className="w-[30%]"></div>
                <div className="w-full">
                  <h3 className="font-poppins-bold tracking-widest 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] text-[#bfa888]">
                    About Us
                  </h3>
                  <h2 className="font-playfair-regular 2xl:text-[40px] xl:text-[40px] lg:text-[32px] md:text-[20px] text-[15px]">
                    The Experience of a Lifetime
                  </h2>
                  <p className="font-poppins-reg 2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[15px] text-[12px]">
                    With the largest fleet of luxury catamarans, sailing and
                    motor yachts in Santorini we guarantee the ultimate sailing
                    experience!
                  </p>
                  <div className="flex flex-row justify-start gap-6  mt-10">
                    <div className="2xl:bloxk xl:block lg:block md:block sm:hidden hidden">
                      <img src={SinceImage} alt="" className="" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-playfair-regular">
                        Since Year
                      </h4>
                      <p className="text-[#c1c1c1] text-[72px] font-poppins-reg">
                        1992
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" 2xl:container xl:container lg:container md:container sm:container mx-auto p-4 2xl:pt-[90px] xl:pt-[90px] lg:pt-[90px] md:pt-[90px] sm:pt-[60px] pt-[60px] ">
            <div>
              <h2 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-playfair-bold text-[#bfa888]">
                Inclusions
              </h2>
              <p className="font-poppins-reg">All the Luxuries you deserve</p>
            </div>

            <div className="mt-6 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 flex-wrap  gap-8 ">
              <div className="relative flex flex-row  lg:swap-flip justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888]  after:border-[1px] after:border-solid  p-5 cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform ">
                <div className="hover:text-[#e29c28]">
                  <img
                    src={Juice}
                    alt="juice"
                    className="w-[60px] h-[60px]  "
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    Refreshments
                  </span>
                  <span className="block font-poppins-reg tracking-wider font-bold ">
                    Soft Drinks
                  </span>
                </div>
              </div>

              <div className="relative flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5 cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform">
                <div>
                  {" "}
                  <img src={toilet} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    Separate Amenities
                  </span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Men & Women
                  </span>
                </div>
              </div>
              <div className="relative flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Horse} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Arabian</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Horse Show
                  </span>
                </div>
              </div>

              <div className="relative flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img
                    src={puppetShow}
                    alt="juice"
                    className="w-[60px] h-[60px]"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Puppetly</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Puppet Show
                  </span>
                </div>
              </div>
              <div className="relative flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Dance} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Egyptian </span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Tanoura Dance
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img
                    src={upperDeck}
                    alt="juice"
                    className="w-[60px] h-[60px]"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    Open-Air{" "}
                    <span className="block font-poppins-reg tracking-wider font-bold">
                      {" "}
                      Upper Deck{" "}
                    </span>
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Ship} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    Air-Conditioned{" "}
                    <span className="block font-poppins-reg tracking-wider font-bold">
                      {" "}
                      Lower Deck{" "}
                    </span>
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Car} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Free</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Car Parking
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Cruise} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Cruising</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    02:00 Hours
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Juices} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Welcome</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Drinks
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img
                    src={catering}
                    alt="juice"
                    className="w-[60px] h-[60px]"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    International Buffet
                  </span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Dinner with BBQ
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={tea} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">
                    Unlimited Beverages
                  </span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Tea & Coffee
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={turkey} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className="block font-playfair-regular">Dishes</span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Veg & Non-Veg
                  </span>
                </div>
              </div>

              <div className="relative cursor-pointer hover:scale-105 transition duration-500 animate-ease-linear  transform flex flex-row justify-start items-center gap-4 border-[#bfa888] border-[1px] border-solid after:contents-[' '] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-[#bfa888] after:border-[1px] after:border-solid p-5">
                <div>
                  {" "}
                  <img src={Car} alt="juice" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col justify-start">
                  <span className=" block font-playfair-regular">
                    Easy Access
                  </span>
                  <span className="block font-poppins-reg tracking-wider font-bold">
                    Dubai Metro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
