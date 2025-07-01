import mapImage from "../../assets/Map.png";
import Logo from "../../assets/logo.svg";
import dubaiCanalWalkAway from "../../assets/mapIcon/dubaicanalwalkway.svg";
import alJaddaf from '../../assets/mapIcon/AlJaddaf.svg'
import burjKhalifa from '../../assets/mapIcon/BurjKhalifa.svg'
import bussinessBay from '../../assets/mapIcon/BusinessBay.svg'
import downTownDubai from '../../assets/mapIcon/DownTowndubai.svg'
import dubaifestival from '../../assets/mapIcon/DubaiFestival.svg'
import marasiDrive from '../../assets/mapIcon/MarasiDrive.svg'
import medanBridge from '../../assets/mapIcon/Medanbridge.svg'
import newCreekHarbourway from '../../assets/mapIcon/NewCreekHarbourway.svg'
import newTallestTower from '../../assets/mapIcon/NewTallestTowerinUAE.svg'
import plazzoVersace from '../../assets/mapIcon/PalazzoVersace.svg'
import rasaAlKhor from '../../assets/mapIcon/RasAlKhor.svg'
import waterFountain from '../../assets/mapIcon/WaterFountain.svg'
import D1twoer from '../../assets/mapIcon/D1tOWER.svg'


export default function Map() {
  return (
    <div className=" w-full relative ">
      <img src={mapImage} className="w-full h-auto" alt="Map" />

      <div className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2  text-center  bg-opacity-50 p-4 rounded-lg">
        <h1 className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[32px] text-[32px] font-bold font-poppins-bold text-[#DA8E27] capitalize 2xl:flex xl:flex lg:hidden md:hidden hidden">
          Route of the <br /> Yacht Cruise Trip
        </h1>
        <span className="block text-[30px] text-[#0b1121] font-poppins-bold capitalize 2xl:flex xl:flex lg:hidden md:hidden hidden">
          Experience More Than 14 Popular <br /> Attractions on the Way
        </span>
      </div>
      {/* 
      <div className="absolute top-[1%]  left-[70%] flex flex-col ">
            <span className="text-[#FF0000]">|</span>
            <span className="ml-7 text-[#FF0000]">|</span>
            <span className="ml-10 text-[#FF0000]">|</span>
            <span className=" ml-16 text-[#FF0000]">|</span>
            <span className="ml-24 mt-2 text-[#FF0000]">|</span>
            <span className="ml-[140px] text-[#FF0000]">|</span>
            <span className="ml-[160px] text-[#FF0000]">|</span>
            <span className="ml-[190px] text-[#FF0000]">|</span>
            <span className="ml-[250px] text-[#FF0000] mt-8">|</span>
            <span className="ml-[210px] text-[#FF0000]">|</span>
            <span className="ml-[220px] text-[#FF0000]">|</span>
            <span className="ml-[220px] text-[#FF0000]">|</span>
            <span className="ml-[230px] text-[#FF0000]">|</span>
            <span className="ml-[200px] text-[#FF0000]">|</span>
            <span className="ml-[190px] text-[#FF0000]">|</span>
            <span className="ml-[170px] text-[#FF0000]">|</span>
            <span className="ml-[160px] text-[#FF0000]">|</span>
            <span className="ml-[150px] text-[#FF0000]">|</span>
            <span className="ml-[140px] text-[#FF0000]">|</span>
            <span className="ml-[120px] text-[#FF0000]">|</span>
            <span className="ml-[110px] text-[#FF0000]">|</span>
            <span className="ml-[90px] text-[#FF0000]">|</span>
            <span className="ml-[80px] text-[#FF0000]">|</span>
            <span className="ml-[60px] text-[#FF0000]">|</span>
            <span className="ml-[30px] text-[#FF0000]">|</span>
            <span className="ml-[-10px] mt-[-30px] text-[#FF0000]">|</span>
            <span className="ml-[-22px] mt-[-42px] text-[#FF0000]">|</span>
            <span className="ml-[-48px] mt-[-32px] text-[#FF0000]">|</span>
            <span className="ml-[-75px] mt-[-28px] text-[#FF0000]">|</span>
            <span className="ml-[-105px] mt-[-28px] text-[#FF0000]">|</span>
            <span className="ml-[-135px] mt-[-25px] text-[#FF0000]">|</span>
            <span className="ml-[-165px] mt-[-25px] text-[#FF0000]">|</span>
            <span className="ml-[-195px] mt-[-25px] text-[#FF0000]">|</span>
            <span className="ml-[-225px] mt-[-18px] text-[#FF0000]">|</span>
            <span className="ml-[-245px] mt-[-10px] text-[#FF0000]">|</span>
            <span className="ml-[-245px] mt-[-5px] text-[#FF0000]">|</span>
            <span className="ml-[-265px]  text-[#FF0000]">|</span>
            <span className="ml-[-290px] mt-[-15px]  text-[#FF0000]">|</span>
            <span className="ml-[-320px] mt-[-19px]  text-[#FF0000]">|</span>
            <span className="ml-[-350px] mt-[-12px]  text-[#FF0000]">|</span>
            <span className="ml-[-365px] mt-[-2px]  text-[#FF0000]">|</span>
            <span className="ml-[-365px] mt-[-2px]  text-[#FF0000]">|</span>
            <span className="ml-[-375px] mt-[-2px]  text-[#FF0000]">|</span>
            <span className="ml-[-385px] mt-[-2px]  text-[#FF0000]">|</span>
            <span className="ml-[-395px] mt-[-2px]  text-[#FF0000]">|</span>
            <span className="ml-[-425px] mt-[-40px]  text-[#FF0000]">|</span>
            <span className="ml-[-455px] mt-[-25px]  text-[#FF0000]">|</span>
            <span className="ml-[-485px] mt-[-30px]  text-[#FF0000]">|</span>
            <span className="ml-[-515px] mt-[-30px]  text-[#FF0000]">|</span>
            <span className="ml-[-565px] mt-[-20px]  text-[#FF0000]">|</span>
            <span className="ml-[-590px] mt-[-12px]  text-[#FF0000]">|</span>
            <span className="ml-[-630px] mt-[12px]  text-[#FF0000]">|</span>
            <span className="ml-[-650px] mt-[12px]  text-[#FF0000]">|</span>
            <span className="ml-[-660px] mt-[7px]  text-[#FF0000]">|</span>
            <span className="ml-[-689px] mt-[2px]  text-[#FF0000]">|</span>
            <span className="ml-[-719px] mt-[-12px]  text-[#FF0000]">|</span>
            <span className="ml-[-749px] mt-[-18px]  text-[#FF0000]">|</span>
            <span className="ml-[-809px] mt-[-43px]  text-[#FF0000]">|</span>
            <span className="ml-[-839px] mt-[-23px]  text-[#FF0000]">|</span>
            <span className="ml-[-869px] mt-[-18px]  text-[#FF0000]">|</span>
            <span className="ml-[-899px] mt-[-10px]  text-[#FF0000]">|</span>
            <span className="ml-[-929px] mt-[-20px]  text-[#FF0000]">|</span>
            <span className="ml-[-959px] mt-[-28px]  text-[#FF0000]">|</span>
            <span className="ml-[-999px] mt-[-31px]  text-[#FF0000]">|</span>
            <span className="ml-[-1029px] mt-[-38px]  text-[#FF0000]">|</span>
            <span className="ml-[-1049px] mt-[-44px]  text-[#FF0000]">|</span>
            <span className="ml-[-1075px] mt-[-42px]  text-[#FF0000]">|</span>

      
      </div> */}

      <div className="2xl:flex xl:hidden lg:hidden md:hidden hidden ">
        <div className="absolute top-[-3%]  left-[91%]  ">
          <img src={Logo} alt="logo" width={180} />
        </div>
        <div className="absolute top-[1%] w-28 left-[80%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 ">
        <img
            src={bussinessBay}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            Business Bay crossing bridge
          </h3>
        </div>
        <div className="absolute top-[8%] w-28 left-[90%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150  ">
        <img
            src={waterFountain}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            water fountain show in dfc
          </h3>
        </div>

        <div className="absolute top-[19%] w-28 left-[90%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 ">
        <img
            src={dubaifestival}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            dubai festival city mall
          </h3>
        </div>

        <div className="absolute top-[30%] w-28 left-[88%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 ">
        <img
            src={newCreekHarbourway}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            NEW CREEK harobur view
          </h3>
        </div>

        <div className="absolute top-[48%] w-28 left-[83%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 ">
        <img
            src={newTallestTower}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            new tallest tower in uae
          </h3>
        </div>

        <div className="absolute top-[16%] w-28 left-[68%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150  ">
        <img
            src={D1twoer}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            D1 Tower
          </h3>
        </div>

        <div className="absolute top-[28%] w-28 left-[65%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4  hover:scale-150 transition ease-in-out ">
        <img
            src={plazzoVersace  }
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            palazzo versace hotel
          </h3>
        </div>

        <div className="absolute top-[22%] w-28 left-[77%] transform bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150  ">
        <img
            src={alJaddaf}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            al jaddaf walk
          </h3>
        </div>

        <div className="absolute top-[70%]  w-28 left-[75%]  bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
        <img
            src={rasaAlKhor}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            ras al khor wildlife sanctuary
          </h3>
        </div>

        <div className="absolute top-[45%]  w-28 left-[38%]  bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
        <img
            src={medanBridge}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            meydan bridge
          </h3>
        </div>

        <div className="absolute top-[67%]  w-28 left-[20%]  bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
        <img
            src={marasiDrive}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            marasi drive
          </h3>
        </div>

        <div className="absolute top-[57%]  w-28 left-[18%]  bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
        <img
            src={downTownDubai}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            Downtown dubai
          </h3>
        </div>

        <div className="absolute top-[60%]  w-28 left-[6%]  bg-[white] shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
        <img
            src={burjKhalifa}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize">
            burj khalifa
          </h3>
        </div>

        <div className="absolute top-[70%]  w-28 left-[2%]  bg-[white]  shadow-lg rounded-xl  text-center bg-opacity-90 p-4 transition ease-in-out hover:scale-150 transform ">
          <img
            src={dubaiCanalWalkAway}
            className=""
          />
          <h3 className="text-[8px] font-bold font-poppins-bold capitalize ">
            Dubai canal walkway
          </h3>
        </div>
      </div>
    </div>
  );
}
