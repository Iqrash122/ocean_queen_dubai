import { FaInstagram,FaFacebookF, FaLinkedinIn, FaMoon } from "react-icons/fa";
import { FaXTwitter,FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
;
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="border-bottom-gray-300 border-bottom-[1px] bg-white">
        <div className="2xl:container xl:container lg:container md:container sm:container mx-auto">
            <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-row 2xl:justify-between xl:justify-between lg:justify-center items-center">
                <div>
                    <ul className="flex flex-row justify-start gap-3">
                        <li>
                            <Link to="/" className="text-xs capitalize hover:text-[#e29c28] transition-colors duration-200 font-poppins-reg">FAQ's</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-xs capitalize hover:text-[#e29c28] transition-colors duration-200 font-poppins-reg">Testimonial</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-xs capitalize hover:text-[#e29c28] transition-colors duration-200 font-poppins-reg">pricing</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-xs capitalize hover:text-[#e29c28] transition-colors duration-200 font-poppins-reg">support</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-xs capitalize hover:text-[#e29c28] transition-colors duration-200 font-poppins-reg">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                        <ul className="flex flex-row justify-start divide-x-[1px] divide-gray-300 border-r-[1px] border-l-[1px] border-gray-300">
                            <li className="px-4 py-4">
                                <Link to="#" className="text-base hover:text-[#e29c28] transition-colors duration-200"><FaInstagram /></Link>    
                            </li>    
                            <li className="px-4 py-4">
                                <Link to="#" className="text-base hover:text-[#e29c28] transition-colors duration-200"><FaXTwitter /></Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link to="#" className="text-base hover:text-[#e29c28] transition-colors duration-200"><FaFacebookF /></Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link to="#" className="text-base hover:text-[#e29c28] transition-colors duration-200"><FaLinkedinIn /></Link>
                            </li>
                        </ul> 
                </div>
                <div>
                    <ul className="flex flex-row jusify-start gap-3">
                        <li>
                            <Link to="#" className="inline-flex flex-row justify-start items-center gap-2 hover:text-[#e29c28] transition-colors duration-200">
                                <FaLocationDot />
                                <span className="text-xs capitalize font-poppins-reg">Jadaf Waterfront, Dubai Canal Dubai</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:info@oceanqueencruise.com" className="inline-flex flex-row justify-start items-center gap-2 hover:text-[#e29c28] transition-colors duration-200">
                                <IoIosMail />
                                <span className="text-xs lowercase font-poppins-reg">info@oceanqueencruise.com</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}