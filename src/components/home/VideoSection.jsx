import { useEffect, useState } from "react";
import { useId } from "react";
import { useRef } from "react";
import { IoPlayOutline } from "react-icons/io5";
import Iframe from "react-iframe";

export default function VideoSection() {
  const ButtonModal = useRef(null);
  const ModalCloseBtn = useRef(null);
  const modalRef = useRef(null);

  const OpenModal = () => {
    modalRef.current.classList.add("modal-open");
  };

  const CloseModal = () => {
    modalRef.current.classList.remove("modal-open");
  };

  useEffect(() => {
    if (ButtonModal.current && ModalCloseBtn.current) {
      ButtonModal.current.addEventListener("click", OpenModal);
      ModalCloseBtn.current.addEventListener("click", CloseModal);
    }

    return () => {
      if (ButtonModal.current && ModalCloseBtn.current) {
        ButtonModal.current.removeEventListener("click", OpenModal);
        ModalCloseBtn.current.removeEventListener("click", CloseModal);
      }
    };
  }, []);
  return (
    <>
      <input type="checkbox" id="video_modal" className="modal-toggle" />
      <div className="bg-video-image bg-cover bg-center bg-no-repeat py-[160px]">
        <div className="2xl:container xl:container lg:container md:container sm:container mx-auto">
          <div className=" mx-auto flex flex-col justify-start items-center">
            <span
              ref={ButtonModal}
              className="group inline-flex relative bg-white hover:bg-[#bfa888] w-[90px] h-[90px] rounded-full justify-center items-center transition-all duration-200"
            >
              <span className="absolute motion-safe:animate-ping top-0 left-0 rounded-full z-0 w-full h-full bg-white group-hover:bg-[#bfa888]"></span>
              <span className="absolute motion-safe:animate-ping top-1/2 left-1/2 !translate-x-[-50%] z-0 !translate-y-[-50%] duration-1000 rounded-full w-[50px] h-[50px] bg-white group-hover:bg-[#bfa888]"></span>
              <IoPlayOutline
                size={40}
                className="cursor-pointer relative z-10 text-[#bfa888] group-hover:text-white transition-all duration-200"
              />
            </span>
            <div className="mt-10   ">
              <h2 className="text-center text-white 2xl:text-[48px] xl:text-[40px] lg:text-[34px] md:text-[28px] text-[21px]  font-playfair-bold capitalize">
                A full-service yachting house for ocean
              </h2>
              <p className="text-center text-[#bfa888] py-1 font-poppins-reg 2xl:text-[32px] xl:text-[25px] lg:text-[18px] md:text-base sm:text-[8px] text-[12px]  mt-4  ">
                With over Four Decades of Delivering Experience 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" ref={modalRef} role="dialog" id="VideoModal">
        <div className="modal-box 2xl:w-[600px] xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[400px] w-auto max-w-full">
          <Iframe
            url="https://www.youtube.com/embed/Mgk5_MXodvY"
            className="w-full 2xl:h-[329px] xl:h-[329px] lg:h-[329px] md:h-[329px] h-[250px]"
            display="block"
            position="relative"
          />
          <div className="modal-action">
            <button ref={ModalCloseBtn} className="btn cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
