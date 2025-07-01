import ImageOne from "./../../assets/choose1-1.png";
import ImageTwo from "./../../assets/bgImage/WhatsApp Image 2025-02-10 at 4.31.04 AM.jpeg"
import ImageThree from "./../../assets/choose1-3.jpg";
import Compass from "./../../assets/compass.png";
import BoatImage from "./../../assets/icon-big-trans.png";
import yatchBoat from "./../../assets/bgImage/bgImage7.jpeg";
// css
import "./style.css";
export default function Service() {
  return (
    <>
      <div className="mt-[90px] relative">
        <img
          src={Compass}
          alt=""
          className="absolute 2xl:right-90  xl:right-20 md:right-16 right-20 2xl:top-40 xl:top-32 lg:top-22 md:top-12 animate-spin animate-infinite animate-duration-[40000ms] animate-delay-0 animate-ease-linear animate-fill-both"
        />
        <div className="2xl:container xl:container lg:container md:container sm:container mx-auto">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-start">
            <div className="w-full relative">
              <img
                src={ImageOne}
                alt=""
                className="absolute left-0 top-0 h-full w-[70%] z-0"
              />
              <div className="z-[1] relative">
                <img
                  src={ImageTwo}
                  alt=""
                  className="block w-[80%] h-full ml-10 mt-5  "
                />
              </div>
              {/* <div className="z-[1]  relative 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-72 w-72  flex justify-center items-center   animate-shake animate-infinite animate-duration-[3000ms] animate-delay-0 animate-ease-linear  rotate-90 translate-y-[-50%] scale-110">
                <img
                  src={yatchBoat}
                  alt=""
                  className=" p-3 rotate 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-44 w-44 "
                />
              </div> */}
            </div>
            <div className="w-full pl-10">
              <h3 className="2xl:text-[120px] xl:text-[90px] lg:text-[55px] md:text-[37px] sm:text-[120px] text-[55px] choose-text-marking">
                Luxury Yacht
              </h3>
              <h2 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[30px] text-[30px] font-playfair-regular text-[#bfa888]">
                First-Class Full Service <br />
                Yachting House
              </h2>
              <div className="flex flex-col gap-5 mt-10 2xl:mr-4 xl:mr-4 lg:mr-4 md:mr-4 sm:mr-12 mr-12 w-auto">
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold ">
                    What type of experience does Ocean Queen Cruise provide?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Ocean Queen Cruise offers a relaxing two-hour trip along
                      Dubai's Water Canal. Guests can savor delicious food,
                      enjoy live entertainment, and take in stunning views of
                      Dubai's landmarks.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold">
                    What types of food are served on the Ocean Queen Cruise?
                  </div>
                  <div className="collapse-content">
                    <p>
                      The cruise offers a buffet featuring international dishes,
                      including appetizers, main courses, and desserts, with
                      options available for both vegetarians and
                      non-vegetarians.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold ">
                    Can I celebrate special occasions on this cruise?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Indeed, you can! The cruise is ideal for birthdays,
                      anniversaries, and small corporate gatherings. Please
                      contact the team to arrange decorations or special
                      services.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold ">
                    Is Ocean Queen Cruise safe for kids and older adults?
                  </div>
                  <div className="collapse-content">
                    <p>
                      The cruise is safe for all ages, with comfortable seating
                      areas and attentive staff.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold ">
                    Are there different seating options on the cruise?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Yes, the Ocean Queen has: Upper Deck: Open-air seating for
                      beautiful views. Lower Deck: Fully air-conditioned indoor
                      seating.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] font-bold ">
                    How can I book a cruise?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Bookings can be made online through the form on our
                      website or by contacting the cruise operator directly.
                      Because of limited availability, it is best to make
                      reservations in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
