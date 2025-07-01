import { GiSailboat } from "react-icons/gi";
import { LiaAnchorSolid } from "react-icons/lia";

import ServiceOne from '../../assets/attractions/web imgs/burjkhalifa.jpg'
import Service8 from '../../assets/attractions/web imgs/meydanbridge.jpg'
import Service9 from '../../assets/attractions/web imgs/NewCreekHarbourView.jpg'
import Service10 from '../../assets/attractions/web imgs/NewTallestTowerinUAE.jpg'
import Service12 from '../../assets/attractions/web imgs/RasAlKhorWildlifeSanctuary.jpg'
import d1TowerView from '../../assets/attractions/web imgs/d1tower.jpg'
import ServiceTwo from '../../assets/web imgs/aljaddafwalk.jpg'
import ServiceThree from '../../assets/web imgs/crossing bridge.jpg'
import Service4 from '../../assets/web imgs/down town dubai.jpg'
import Service5 from '../../assets/web imgs/dubai canal walk.jpg'
import Service6 from '../../assets/web imgs/dubai festival city mall.jpg'
import Service7 from '../../assets/web imgs/marasi drive.jpg'
import Service11 from '../../assets/web imgs/plazzo verseca hotel.jpg'
import Service13 from '../../assets/web imgs/water fountain show.jpg'



export default function Dinners() {
  return (
    <>
      <div className="mt-[-90px]">
        <div className="2xl:container xl:container lg:container md:container sm:container mx-auto bg-white 2xl:px-[90px] xl:px-[90px] lg:px-[90px] md:px-[90px] sm:px-[10px] px-[10px]">
          <div className=" bg-contain bg-right-top left-28 bg-no-repeat py-[100px] ">
            <div className="w-auto flex flex-col gap-2 justify-center items-start">
              <h3 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-playfair-bold text-[#bfa888]  tracking-wider">
                Attractions
              </h3>
             
              <p className="2xl:text-[14px] xl:text-[14px]  lg:text-[14px] md:text-[14px] sm:text-[11px] text-[11px] w-full  font-poppins-reg ">
                Enjoy breathtaking view of Dubai's top landmarks. Every stop is a chance to witness the city's beauty from a new prespective!
              </p>
            </div>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 Swiper justify-between items-center mt-[50px] gap-8">
            <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={d1TowerView}
                    alt="image"
                    className="h-[265px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                  D1 Tower View
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Tallest Building in The Area
                  </p>
                  
                </div>
              </div>
              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={ServiceOne}
                    alt="image"
                    className="h-[265px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                  Burj Khalifa View
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Tallest Building in The World Ever
                  </p>
                  
                </div>
              </div>

              

              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[19px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service8}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1] ">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Meydan Bridge
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                   Gorgeous Bridge with Stunning Lights.
                  </p>
                  
                </div>
              </div>

              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service12}
                    alt="image"
                    className="block w-full h-full group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                   Wild life Sanctuary
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Home to Flamingos and Wildlife
                  </p>
                 
                </div>
              </div>





              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service9}
                    alt="image"
                    className="block w-full h-full group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    New Creek Harbour View
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                     The Tallest Tower in Dubai
                  </p>
                
                </div>
              </div>



              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service10}
                    alt="image"
                    className="block w-full h-full group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    New Tallest Tower in UAE
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Dubai's New Tallest Tower Soon
                  </p>
                 
                </div>
              </div>
              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={ServiceTwo}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Al Jaddaf Walk
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Scenic Views  Across Dubai Creek 
                  </p>
                
                </div>
              </div>
              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={ServiceThree}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                     Crossing Bridge
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Dubai's Modern and Financial Future .
                  </p>
                 
                </div>
              </div>

              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service4}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                  Downtown Dubai
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                   Burj Khalifa and Dubai Mall Hub
                  </p>
                  
                </div>
              </div>

              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service5}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Dubai Canal Walkway
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                    Stunning Views of Dubai Skyline
                  </p>
                  
                </div>
              </div>



              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service6}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Dubai Festival City Mall
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                   Home to the Largest Laser Show
                  </p>
                  
                </div>
              </div>




              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service7}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Marasi Drive 
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                   Beautiful & Calming Waterfront Views 
                  </p>
                 
                </div>
              </div>







              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service11}
                    alt="image"
                    className="h-[263px]  group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    palazzo Versace Hotel
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                   A 5-star Luxury Designed By Versace.
                  </p>
                 
                </div>
              </div>


             

              <div className="group border-[1px] border-solid border-[#bfa888] px-[23px] py-[17px] flex flex-col gap-5 relative after:contents-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 hover:after:h-full after:bg-pattern-box after:bg-cover after:bg-no-repeat after:z-0 cursor-pointer hover:border-transparent transition-all duration-200">
                <div className="overflow-hidden w-full h-auto z-[1]">
                  <img
                    src={Service13}
                    alt="image"
                    className="h-[263px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2 z-[1]">
                  <h3 className="text-[20px] font-playfair-bold capitalize group-hover:text-white">
                    Water Fountain Show in DFC
                  </h3>
                  <p className="text-[14px] font-poppins-reg group-hover:text-white">
                     Eye-Catching water and Light Show
                  </p>
                
                </div>
              </div>


              






            </div>





          </div>
        </div>
      </div>
    </>
  );
}
