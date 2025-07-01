import barbq from '../../assets/Foodmenu/bbq.svg';
import dessert from '../../assets/Foodmenu/Dessert.svg'
import juice from '../../assets/Foodmenu/Juice.svg'
import naan from '../../assets/Foodmenu/Naan Roti.svg'
import salad from '../../assets/Foodmenu/Salad.svg'
import sauce from '../../assets/Foodmenu/Sauce.svg';



export default function Menu() {
  return (
    <>
    <div className='bg-food bg-cover bg-no-repeat'>
    <div className='bg-[#0b1121]/80'>

        <div className="2xl:container  xl:container lg:container sm:container container mx-auto mt-[90px]">
          <div className="2xl:py-[90px] xl:py-[90px] lg:py-[90px] md:py-[90px] sm:py-[60px] py-[60px] p-4 ">
            <div className="  ">
              <div className="flex flex-col gap-2 ">
                <h1 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-playfair-bold  text-[#DA8E27] capitalize">
                  Ocean Queen Menu
                </h1>
                <h3 className="text-white text-2xl font-poppins-bold ">
                  Continental Buffet On Boat
                </h3>
                <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[13px] text-white">
                  We have brought you an irresistibly crafted menu that speaks to
                  your cravings delightfully. Here, every dish will be an
                  unforgettable experience.
                </p>
              </div>

              <div className="mt-4">
                <div className='bg-[#DA8E27]    text-[25px] font-playfair-bold  text-white  text-center capitalize'>

                  <h1 className=" py-1">
                    Main Course
                  </h1>
                </div>
                <div className="flex 2xl:flex-row xl:flex-row gap-18 lg:flex-col lg:gap-8  md:gap-8  md:flex-col flex-col mt-8  gap-8   text-white   bg-no-repeat  2xl:bg-right-top xl:bg-right-top lg:bg-right-top md:bg-right-top sm:bg-right-top bg-right-   ">
                  <ul className="grid grid-cols-2 flex-wrap  2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-3/4 sm-w-full w-full h-auto gap-x-4 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg text-sm font-playfair-regular text-white list-disc list-inside marker:text-[#DA8E27]">
                    <li>Vegetable Pulao</li>
                    <li>Chicken Biryani</li>
                    <li>Chicken Karhai</li>
                    <li>Chicken Nuggets</li>
                    <li>Noodles</li>

                    <li>White Pasta</li>
                    <li>Spring Roll</li>
                    <li>Fish</li>
                    <li>Veg Small Samosa</li>
                    <li>French Fries</li>
                    <li>Daal</li>
                    <li>Veg European Style</li>
                    <li>Fresh Fruit</li>
                    <li>Salad</li>

                  </ul>

                  <div className="grid grid-cols-1 2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-full sm:w-auto  w-[100%]  max-auto gap-4 text-white">
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 sm:gap-2 gap-2 border-b-2  ">
                      <div className="flex flex-row gap-4 mb-4  ">
                        <img  src={barbq} width={100} height={100}  />
                        <div className="">
                          <h1 className="text-[#white] text-2xl  font-playfair-bold">
                            BAR B.Q
                          </h1>
                          <ul className=" text-white list-disc  list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Kabab</li>
                            <li>Tikka Botti</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-row gap-4 2xl:ml-12 xl:ml-12 lg:ml-12 md:ml-12 sm:ml-0 ml-0 mb-4  ">
                      <img  src={sauce} width={100} height={100}  />
                      <div className="">
                          <h1 className="text-[white] text-2xl  font-playfair-bold">
                            Sauce
                          </h1>
                          <ul className=" text-white list-disc list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Imli Chatni</li>
                            <li>Ketchup</li>
                            <li>Raita</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 sm:gap-2 gap-2 border-b-2  ">
                      <div className="flex flex-row gap-4 mb-4 ">
                      <img  src={salad} width={100} height={100}  />
                      <div className="">
                          <h1 className="text-[white] text-2xl  font-playfair-bold">
                            Salad
                          </h1>
                          <ul className=" text-white list-disc list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Fresh Green salad</li>
                            <li>Fatoush Salad</li>
                            <li>Stick Salad</li>
                            <li>Russian Salad</li>
                            <li>Mix Salad</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-row gap-4 mb-4 ">
                      <img  src={naan} width={100} height={100}  />
                      <div className="">
                          <h1 className="text-[white] text-2xl  font-playfair-bold">
                            Bread
                          </h1>
                          <ul className=" text-white list-disc list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Khubs</li>
                            <li>Naan</li>
                            <li>Roti</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 sm:gap-2 gap-2 border-b-2  ">
                      <div className="flex flex-row gap-4 mb-4 ">
                      <img  src={juice} width={100} height={100}  />
                      <div className="">
                          <h1 className="text-[white] text-2xl  font-playfair-bold">
                            Water Drinks
                          </h1>
                          <ul className=" text-white list-disc list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Water</li>
                            <li>Fruit Juices</li>
                            <li>Soft Drinks</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-row gap-4 mb-4  ">
                      <img  src={dessert} width={100} height={100}  />
                      <div className="">
                          <h1 className="text-[white] text-2xl  font-playfair-bold">
                            Desserts
                          </h1>
                          <ul className=" text-white list-disc list-inside marker:text-gray-500 font-playfair-regular">
                            <li>Umm ali</li>
                            <li>Gulab Jamun</li>
                            <li>Custard</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
