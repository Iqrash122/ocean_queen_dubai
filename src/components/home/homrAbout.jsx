import Circle from "../../assets/Newicons/Delicious Dining.svg";
import Circle1 from "../../assets/Newicons/Entertainment anad fun.svg";
import Circle2 from "../../assets/Newicons/Amazing attraction.svg";
import Circle3 from "../../assets/Newicons/Services1.svg";
import { Element } from "react-scroll";
export default function About() {
  return (
    <Element name="about">
      <div className="2xl:container p-4 xl:container lg:container sm:container container mx-auto 2xl:pt-[90px] xl:pt-[90px] lg:pt-[90px] md:pt-[90px] sm:pt-[60px] pt-[60px]">
        <div className=" text-gray-900 ">
          <div className="">
            <h1 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-bold text-[#bfa888]">
              Luxury Dinner Catamaran
            </h1>
            <p className="mt-4 p-2 text-gray-700 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[13px]">
              A brand-new addition to Dubai’s waters. With brand-new, modern
              furniture, a fresh and professional crew, and amenities that set a
              new standard, this isn’t just a cruise—it’s an experience.
            </p>
            <p className="mt-4 text-gray-700 p-2 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[13px]">
              Whether it’s the stunning views, the delicious food, or the
              memorable entertainment, every moment onboard feels special. Come
              and see what makes Ocean Queen Cruise the perfect blend of
              comfort, luxury, and unforgettable memories!
            </p>
          </div>

          <div className="text-center mt-4 justify-center items-center flex">
            <p className="bg-[#bfa888] w-96 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[20px] text-[20px] py-4 px-12 font-sans  tracking-wider capitalize text-white font-bold mt-3  ">
              Why choose us?
            </p>
          </div>

          <div className=" p-12 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-22 sm:ml-12 ml-6 2xl:grid 2xl:grid-cols-4 2xl:gap-1   xl:grid-cols-4 xl:grid lg:grid-cols-2 lg:gap-8 lg:grid md:grid-cols-2 md:gap-8 md:grid   sm:grid-cols-1 sm:gap-8 gap-8 sm:grid grid-cols-1 grid justify-center clip-ellipse items-center ">
            <div class="flex justify-center group items-center hover:cursor-pointer  flex-col economicsItem">
              <img
                src={Circle}
                className=" group-hover:animate-rotate-y transition-all duration-200  w-20 h-20 "
              />
              <span className=" font-poppins-bold tracking-wider text-center  text-[13px]">
                Delious Dining{" "}
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ellipse-image"
              >
                <circle class="fillme"></circle>
              </svg>
            </div>

            <div class="flex justify-center group  items-center hover:cursor-pointer  flex-col economicsItem">
              <img
                src={Circle1}
                className=" group-hover:animate-rotate-y transition-all duration-200  w-20 h-20"
              />
              <span className=" font-poppins-bold text-center hover:animate-rotate-y transition-all duration-200 text-[13px]">
                Entertainment and Fun
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ellipse-image1 "
              >
                <circle class="fillme "></circle>
              </svg>
            </div>

            <div class="flex justify-center group hover:cursor-pointer items-center  flex-col economicsItem">
              <img
                src={Circle2}
                className=" group-hover:animate-rotate-y transition-all duration-200  w-20 h-20"
              />
              <span className=" font-poppins-bold text-center text-[13px] ">
                Amazing Attractions
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ellipse-image2"
              >
                <circle class="fillme"></circle>
              </svg>
            </div>

            <div class="flex justify-center group hover:cursor-pointer items-center  flex-col economicsItem">
              <img
                src={Circle3}
                className=" group-hover:animate-rotate-y transition-all duration-200  w-20 h-20"
              />
              <span className=" font-poppins-bold text-center text-[13px]">
                Exceptional Services
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ellipse-image3"
              >
                <circle class="fillme"></circle>
              </svg>
            </div>
          </div>

          <div className="flex 2xl:flex-row border-[#DA8E27] border-b-2 xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col  justify-center items-center">
            <div className="  p-3 ">
              <h1 className="font-poppins-bold capitalize 2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[20px] text-[20px]">
                A brand-New experience with unbeatable comfort & style
              </h1>
            </div>

            <div className=" p-3  ">
              <h1 className="font-poppins-bold capitalize 2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[20px] text-[20px]"></h1>
            </div>
          </div>

          <div className="mt-10   ">
            <p className="font-poppins-reg  2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[12px] text-[12px] ">
              Join us on a journey like no other, where every moment is crafted
              to delight and impress. Discover why we are the perfect choice for
              your ultimate cruise experience!
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
