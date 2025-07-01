import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "./../assets/logo1.png";
import { FaPhone } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function BottomHeader() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const themeToggle = () => {
    setDarkToggle(!darkToggle);
    console.log(darkToggle);
  };

  const [weekend, setWeekend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const WeekDays = useRef(null);
  const WeekendDays = useRef(null);

  const [collpase, expand] = useState(false);

  return (
    <div className="bg-white w-full  sticky top-0 z-[999]">
      <div className="2xl:container xl:container lg:container md:container sm:container container mx-auto  ">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-row 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-4 py-4  justify-between items-center ">
          <div>
            <ScrollLink to="home" smooth={true} duration={3000}>
              <img
                src={Logo}
                alt="logo"
                className="cursor-pointer bg-transparent 2xl:w-[220px] xl:w-[220px] lg:w-[220px] md:w-[220px] sm:w-[120px] w-[120px]"
              />
            </ScrollLink>
          </div>
          <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden ">
            <ul className="flex flex-row  justify-start gap-6 items-center">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={3000}
                  offset={50}
                  spy={true}
                  className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={3000}
                  offset={50}
                  spy={true}
                  className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="menu"
                  smooth={true}
                  duration={3000}
                  className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                >
                  Menu
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="destination"
                  smooth={true}
                  duration={3000}
                  offset={50}
                  spy={true}
                  className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                >
                  Destination
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row justify-start items-center gap-6">
              {/* <li>
                <label htmlFor="swaping" className="swap swap-rotate">
                  <input type="checkbox" id="swaping" />
                  <MdSunny className="swap-on h-10 w-6 fill-current" onClick={() => themeToggle()} />
                  <FaMoon className="swap-off h-10 w-6 fill-current" onClick={() => themeToggle()} />
                </label>
              </li> */}
              <li>
                <a
                  href="tel:+971525252746"
                  className=" flex-row 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden justify-start items-center gap-2 hover:text-[#e29c28] transition-colors duration-200"
                >
                  <FaPhone size={18} />
                  <span className="text-base lowercase font-bold font-poppins-reg">
                    +971 52 52 52746
                  </span>
                </a>
              </li>

              <ScrollLink
                to="bookingForm"
                smooth={true}
                duration={3000}
                className="bg-[#0b1121] text-white py-3 px-6 text-[12px] 2xl:block xl:block lg:block md:block sm:block block cursor-pointer hover:bg-transparent hover:text-[#0b1121] hover:border-[#0b1121] border-[1.2px] transition-colors duration-200 font-semibold  font-poppins-reg"
                onClick={() => setIsOpen(true)}
              >
                Book Now
              </ScrollLink>
              <div class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block  ">
                <AiOutlineMenuFold
                  onClick={() => expand(true)}
                  className="w-20 h-7"
                />
              </div>
              {collpase && (
                <div
                  id="hs-sidebar-basic-usage"
                  class="hs-overlay [--auto-close:lg] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block lg:translate-x-0 lg:right-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform h-full fixed top-0 end-64 bottom-0 z-[60] bg-white border-s border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
                  role="dialog"
                  tabindex="-1"
                  aria-label="Sidebar"
                >
                  <div class="relative flex flex-col h-full max-h-full ">
                    <header class="p-4 flex justify-between items-center gap-x-2">
                      <div>
                        <ScrollLink to="home" smooth={true} duration={3000}>
                          <img
                            src={Logo}
                            alt="logo"
                            width={220}
                            className="cursor-pointer"
                            onClick={() => expand(false)}
                          />
                        </ScrollLink>
                      </div>

                      <div class="lg:hidden ">
                        <button
                          type="button"
                          class="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                          data-hs-overlay="#hs-sidebar-basic-usage"
                          onClick={() => expand(false)}
                        >
                          <svg
                            class="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          <span class="sr-only">Close</span>
                        </button>
                      </div>
                    </header>

                    <ul className="flex flex-col  justify-start gap-6 items-start text-white ml-4">
                      <li>
                        <ScrollLink
                          to="home"
                          smooth={true}
                          duration={3000}
                          offset={50}
                          spy={true}
                          onClick={() => expand(false)}
                          className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                        >
                          Home
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="about"
                          smooth={true}
                          duration={3000}
                          offset={50}
                          spy={true}
                          onClick={() => expand(false)}
                          className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                        >
                          About
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="destination"
                          smooth={true}
                          duration={3000}
                          offset={50}
                          spy={true}
                          onClick={() => expand(false)}
                          className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                        >
                          Destination
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="menu"
                          smooth={true}
                          duration={3000}
                          onClick={() => expand(false)}
                          className="text-lg cursor-pointer hover:text-[#e29c28] transition-colors duration-200 capitalize font-medium font-poppins-reg"
                        >
                          Menu
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {isOpen && (
                <div className="fixed inset-0 flex 2xl:hidden xl:hidden lg:flex md:flex sm:flex flex-col  bg-black bg-opacity-50 overflow-y-scroll">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-auto">
                    <div className=" ">
                      <div className="mb-8">
                        <div class=" flex flex-end justify-end">
                          <button
                            type="button"
                            class="flex justify-center items-center gap-x-1 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                            data-hs-overlay="#hs-sidebar-basic-usage"
                            onClick={() => setIsOpen(false)}
                          >
                            <svg
                              class="shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                            <span class="sr-only">Close</span>
                          </button>
                        </div>
                        <h2 className="text-center text-[32px] font-playfair-bold">
                          Book your dream Yacht
                        </h2>
                      </div>
                      <form
                        action=""
                        method="POST"
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full h-full flex flex-col gap-4  font-poppins-reg"
                      >
                        <div>
                          <select
                            {...register("bookDays")}
                            className="select w-full select-bordered"
                            onChange={() => setWeekend(!weekend)}
                          >
                            <option value={"week days"} selected>
                              Week Days ( Mon - Fri)
                            </option>
                            <option value={"weekend days"}>
                              Weekend Days (Sat - Sun)
                            </option>
                          </select>
                        </div>
                        <div>
                          {weekend ? (
                            <div
                              ref={WeekendDays}
                              className="flex flex-col gap-4 justify-start"
                            >
                              <select
                                {...register("weekendTimings")}
                                className="select w-full select-bordered"
                              >
                                <option selected>Select Weekend Timings</option>
                                <option value="05:00 PM to 07:00 PM">
                                  05:00 PM to 07:00 PM
                                </option>
                                <option value="07:00 PM to 09:00 PM">
                                  07:00 PM to 09:00 PM
                                </option>
                                <option value="09:00 PM to 11:00 PM">
                                  09:00 PM to 11:00 PM
                                </option>
                              </select>
                              <select
                                {...register("weekendDayNames")}
                                className="select w-full select-bordered"
                              >
                                <option>Select Weekend Days</option>
                                <option value="sat">Saturday</option>
                                <option value={"sun"}>Sunday</option>
                              </select>
                            </div>
                          ) : (
                            <div
                              ref={WeekDays}
                              className="flex flex-col gap-4 justify-start"
                            >
                              <select
                                {...register("weekTimings")}
                                className="select w-full select-bordered"
                              >
                                <option selected>Select Week Timings</option>
                                <option value="06:00 PM to 08:00 PM">
                                  06:00 PM to 08:00 PM
                                </option>
                                <option value="08:30 PM to 10:30 PM">
                                  08:30 PM to 10:30 PM
                                </option>
                              </select>
                              <select
                                {...register("weekDayNames")}
                                className="select w-full select-bordered"
                              >
                                <option>Select Week Days</option>
                                <option value="mon">Monday</option>
                                <option value="tue">Tuesday</option>
                                <option value="wed">Wednesday</option>
                                <option value="thurs">Thursday</option>
                                <option value="fri">Friday</option>
                              </select>
                            </div>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            {...register("full_name")}
                            className="input w-full h-[43px] input-bordered"
                            placeholder="Full Name"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            {...register("email")}
                            className="input w-full h-[43px] input-bordered"
                            placeholder="E-mail Address"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            {...register("contact_no")}
                            className="input w-full h-[43px] input-bordered"
                            placeholder="Contact Number"
                          />
                        </div>
                        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-start gap-4">
                          <input
                            type="number"
                            {...register("Adults")}
                            placeholder="No. of Adults"
                            min={0}
                            max={10}
                            className="   input w-full h-[43px] input-bordered"
                          />
                          <input
                            type="number"
                            {...register("children")}
                            placeholder="No. of Children"
                            min={0}
                            max={10}
                            className="input w-full h-auto p-2 input-bordered"
                          />
                        </div>

                        <div className="flex  2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-start gap-4">
                          <label className="text-gray-500">
                            {" "}
                            Sail From
                            <input
                              type="text"
                              name=""
                              placeholder=" Al Jaddaf"
                              className="input w-full text-[13px]   h-auto p-2  input-bordered placeholder-black placeholder:opacity-1 disabled:placeholder:text-black"
                              disabled
                            />
                          </label>

                          <label className="text-gray-500">
                            Sail To
                            <input
                              type="text"
                              placeholder=" Burj Khalifa & Water Canal "
                              className="input w-full h-auto p-2  text-[15px] input-bordered placeholder-black placeholder:opacity-1 disabled:placeholder:text-black"
                              disabled
                            />
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full h-[40px]  bg-[#0b1121] hover:bg-[#bfa888] transition-colors duration-200 font-poppins-reg text-white"
                        >
                          Book Now
                        </button>
                      </form>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-center items-center w-full">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="bg-[#0b1121] text-white py-3 px-6 cursor-pointer hover:bg-transparent hover:text-[#0b1121] hover:border-[#0b1121] border-[1.2px] transition-colors duration-200 font-semibold text-base font-poppins-reg"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
