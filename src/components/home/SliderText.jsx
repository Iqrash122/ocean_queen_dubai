import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// import css
import './style.css';
import 'swiper/css';

export default function SliderText(){
    return(
        <>
            <div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        loop={true}
                        speed={4000}
                        freeMode={true}
                        modules={[Autoplay,FreeMode]}
                        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter:false }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 1, spaceBetween: 15 },
                            1024: { slidesPerView: 2, spaceBetween: 20 },
                            1440: { slidesPerView: 3, spaceBetween: 25 },
                          }}
                    >
                        <SwiperSlide>
                            <div className='capitalize 2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[6px] text-[6px] font-poppins-reg cursor-pointer relative text-marking' data-text='ship'>
                                Ship
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='capitalize 2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[6px] text-[6px] font-poppins-reg text-marking cursor-pointer' data-text='yacht'>
                                Yacht
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='capitalize 2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[6px] text-[6px] font-poppins-reg text-marking cursor-pointer' data-text="rental">
                                Rental
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='capitalize 2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[6px] text-[6px] font-poppins-reg text-marking cursor-pointer' data-text="cruise">
                                Cruise
                            </div>      
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='capitalize 2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[6px] text-[6px] font-poppins-reg text-marking cursor-pointer' data-text="luxury">
                                Luxury
                            </div>      
                        </SwiperSlide>
                    </Swiper>
            </div>
        </>
    )
}