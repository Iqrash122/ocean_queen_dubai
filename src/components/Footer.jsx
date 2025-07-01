import WaveBottom from "./../assets/wave-bottom.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  MdOutlineLocationOn,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/footerLogo.png";
export default function Footer() {
  return (
    <div className="bg-[#011425] py-10">
      <div className="bg-footer-pattern"></div>
      <div className="bg-footer-wheel"></div>
      <div className="bg-footer-boat"></div>
      <div className="2xl:container xl:container lg:container md:container sm:container mx-auto">
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col 2xl:justify-around xl:justify-between lg:justify-between md:justify-between sm:justify-center justify-center 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-4 p-4 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-center items-center   py-12 2xl:ml-0 xl:ml-0 lg:ml-6 md:ml-4 ">

          <div>
            
          </div>
          <div className="w-auto flex flex-col gap-4 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-start items-start justify-center">
            <h4 className="text-white">
              
              <span className="block w-auto h-auto">What we Are?</span>
              <div>
                <img
                  src={WaveBottom}
                  alt="wave-bottom"
                  className="block w-auto h-auto"
                />
              </div>
            </h4>
            <p className="text-white mt-4  ">
              We strongly support best practice sharing <br /> across our operations
              around the world
            </p>
            <ul className="inline-flex flex-row justify-start items-center gap-4">
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-[#bfa888] transition-colors duration-200"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-[#bfa888] transition-colors duration-200"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-[#bfa888] transition-colors duration-200"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-auto">
              <img src={Logo} alt="logo"  />

          </div>

          <div className="w-auto flex flex-col gap-4 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-start items-start justify-center">
            <h4 className="text-white">
              <span className="block w-auto h-auto">Contact Us</span>
              <div>
                <img
                  src={WaveBottom}
                  alt="wave-bottom"
                  className="block w-auto h-auto"
                />
              </div>
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a
                  href="tel:+971525252746"
                  className="text-white inline-flex flex-row justify-start items-center gap-2 hover:text-[#bfa888] transition-colors duration-200 "
                >
                  <FiPhone />
                  <span>+971 52 52 52746</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oceanqueencruise.com"
                  className="text-white inline-flex flex-row justify-start items-center gap-2 hover:text-[#bfa888] transition-colors duration-200"
                >
                  <HiOutlineMail />
                  <span>info@oceanqueencruise.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white inline-flex flex-row justify-start items-center gap-2 hover:text-[#bfa888] transition-colors duration-200"
                >
                  <MdOutlineLocationOn />
                  <span>Jadaf Waterfront, Dubai Canal Dubai</span>
                </a>
              </li>
            </ul>
          </div>
        

                
          
        </div>
      </div>

      <div className="bg-[#000f1c]">
        <div className=" mt-8 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center  2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center   container mx-auto justify-between items-center p-4">
          <p className="text-white text-center">
            © 2025 Ocean Queen Cruise. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
// Compare this snippet from src/components/Footer.jsx:
