import Sign from "./../../assets/sign.png";
import Feature from "./../../assets/bgImage/bgImage1.jpeg";
import Feature1 from "./../../assets/bgImage/bgImage7.jpeg";
import Feature2 from "./../../assets/bgImage/bgImage3.jpeg";
import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";

// icons svg
import AnchorIcon from "./../../assets/icons/anchor.svg";
import BoatSilingIcon from "./../../assets/icons/saling-boat.svg";
import LifeBottom from "./../../assets/icons/lifeboat.svg";

export default function Yacht() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="2xl:pt-[90px] xl:pt-[90px] lg:pt-[90px] md:pt-[90px] sm:pt-[60px] pt-[60px]">
      <div className="2xl:container xl:container lg:container md:container sm:container mx-auto">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-start items-center">
          <div className="2xl:px-[150px] xl:px-[150px] lg:px-[150px] md:px-[150px] sm:px-[80px] px-[40px] w-full flex flex-col justify-start items-center gap-4 border-r-[1px] border-[#e1e1e1]">
            <h4 className="text-center 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-sans font-bold text-[#bfa888]">
              Experience Yacht
            </h4>
            <h2 className="text-center 2xl:text-[42px] xl:text-[34px] lg:text-[28px] md:text-[22px] sm:text-[16px] text-[16px] font-playfair-regular font-light text-black">
              We are here to help <br /> you get sealife
            </h2>
            <p className="text-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[5px] text-[14px]  font-sans text-black">
              With the largest fleet of luxury catamarans, sailing and motor
              yachts in Santorini we guarantee the ultimate sailing experience!
            </p>
            <div className="w-full h-auto flex flex-row justify-start items-center gap-4">
              <img
                src={Sign}
                alt="Sign"
                className="block mx-auto w-auto h-auto"
              />
            </div>
            <div>
              <span className="block text-center font-sans text-[16px] font-normal text-black">
                Alen Hispro
              </span>
              <span className="block text-center font-sans text-[12px] font-normal text-[#54595f]">
                CEO, Vayacht
              </span>
            </div>
          </div>
          <div className="w-full divide-y-[1px] divide-[#e1e1e1] divide-solid">
            <div className="group w-full h-auto flex flex-row justify-start items-center gap-10 relative px-[20px] py-[35px] transition-all duration-200">
              <img
                src={Feature}
                alt=""
                className="opacity-0 absolute right-8 top-0 translate-y-[100%] rotate-0 group-hover:block group-hover:rotate-45 group-hover:translate-y-[-50%] group-hover:top-1/2 group-hover:opacity-100 transition-all duration-200 2xl:w-44 xl:w-36 lg:w-32 md:w-28 sm:w-16 w-16"
              />
              <div className="text-[#e1e1e1] 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] group-hover:text-black transition-colors duration-200">
                01
              </div>
              <div>
                <ReactSVG
                  src={AnchorIcon}
                  beforeInjection={(svg) =>
                    svg.setAttribute("style", "height:auto;fill:#bfa888;")
                  }
                  className="group-hover:animate-rotate-y transition-all duration-200 2xl:w-20 xl:w-20 lg:w-18 md:w-16 sm:w-12 w-12 "
                />
              </div>
              <div>
                <h3 className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]  font-playfair-bold capitalize">
                  Luxury Cruises
                </h3>
                <a
                  href="#"
                  className="text-[#9b9b9b] font-poppins-bold uppercase 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] text-[8px]"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="group w-full h-auto flex flex-row justify-start items-center gap-10 relative px-[20px] py-[35px] transition-all duration-200">
              <img
                src={Feature2}
                alt=""
                className="opacity-0 absolute right-4 top-0 translate-y-[100%] rotate-0 group-hover:block group-hover:rotate-45 group-hover:translate-y-[-50%] group-hover:top-1/2 group-hover:opacity-100 transition-all duration-200 2xl:w-44 xl:w-36 lg:w-32 md:w-28  sm:w-16 w-16"
              />
              <div className="text-[#e1e1e1] 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] group-hover:text-black transition-colors duration-200">
                02
              </div>
              <div>
                <ReactSVG
                  src={BoatSilingIcon}
                  beforeInjection={(svg) =>
                    svg.setAttribute("style", "height:auto;fill:#bfa888;")
                  }
                  className="group-hover:animate-rotate-y transition-all duration-200 2xl:w-20 xl:w-20 lg:w-18 md:w-16 sm:w-12 w-12"
                />
              </div>
              <div>
                <h3 className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]  font-playfair-bold capitalize">
                  Best-crewed yachts
                </h3>
                <a
                  href="#"
                  className="text-[#9b9b9b] font-poppins-bold uppercase 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] text-[8px]"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="group w-full h-auto flex flex-row justify-start items-center gap-10 relative px-[20px] py-[35px] transition-all duration-200">
              <img
                src={Feature1}
                alt=""
                className="opacity-0 absolute right-2 top-0 translate-y-[100%] rotate-0 group-hover:block group-hover:rotate-45 group-hover:translate-y-[-50%] group-hover:top-1/2 group-hover:opacity-100 transition-all duration-200 2xl:w-44 xl:w-36 lg:w-32 md:w-28 sm:w-16 w-16"
              />
              <div className="text-[#e1e1e1] 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] group-hover:text-black transition-colors duration-200">
                03
              </div>
              <div>
                <ReactSVG
                  src={LifeBottom}
                  beforeInjection={(svg) =>
                    svg.setAttribute("style", "height:auto;fill:#bfa888;")
                  }
                  className="group-hover:animate-rotate-y transition-all duration-200 2xl:w-20 xl:w-20 lg:w-18 md:w-16 sm:w-12 w-12"
                />
              </div>
              <div>
                <h3 className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]  font-playfair-bold capitalize">
                  Best Sailing Experience
                </h3>
                <a
                  href="#"
                  className="text-[#9b9b9b] font-poppins-bold uppercase 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] text-[8px]"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
