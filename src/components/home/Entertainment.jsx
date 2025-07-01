import EnterTainment from "../Entertainment/entertainment";

export default function Entertainment() {
  return (
    <>
      <div className="bg-ocean-queen bg-cover bg-no-repeat bg-center   ">
        <div className="bg-[#0b1121]/80  ">

          <div className="2xl:container xl:container lg:container md:container sm:container mx-auto ">
            <div className=" gap-8  w-full h-full justify-center items-start  2xl:py-[60px] xl:py-[60px] lg:py-[60px] md:py-[60px] sm:py-[60px]  py-[60px] ">
              <div className=" p-4 w-full h-full">
                <h2 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] leading-none md:text-[48px] sm:text-[32px] text-[32px] text-[#e29c28] font-playfair-bold">
                  Entertainment Like Never Before
                </h2>
                <p className="text-white font-poppins-re mt-2 ">
                  Experience exquisite dining and thrilling entertainment, all
                  while cruising through Dubai's stunning skyline. We offer a
                  perfect blend of taste and fun for you.
                </p>
                <EnterTainment  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
