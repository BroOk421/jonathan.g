import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress } from "react-icons/fa";
import '../css/Home.css'
import img from '/formal_pic.jpg'
import Geometry from '../components/Geometry'

import { IoLogoJavascript } from "react-icons/io";
import { SiAdobephotoshop, SiCanva, SiAdobepremierepro, SiTypescript } from "react-icons/si";

export default function About() {

  return (
    <div className='w-full relative overflow-hidden mt-[-80px] justify-center -z-50 max-sm:justify-center max-lg:h-[130vh] max-sm:h-[145vh] max-sm:items-center'>
      <div id='about' className='w-full relative z-10 flex flex-col justify-center items-center h-[100vh] p-10 pt-[100px] max-lg:p-10 max-lg:pb-[50px] max-lg:h-[150vh] max-sm:justify-center max-sm:pb-[50px] max-sm:pt-[140px] max-sm:h-[145vh] max-sm:p-0 '>
        <Geometry />
        <div className="flex justify-center items-center w-[90%] h-[100vh] pr-[10px] gap-10 max-xl:gap-2 max-xl:w-[100%]  max-lg:justify-start max-lg:flex-col max-lg:h-auto max-lg:pb-[20px] max-lg:mt-[-50px] max-sm:pt-[50px] max-sm:max-w-[450px]">
          <div className="flex flex-col justify-center items-center w-full h-full  p-10 max-lg:p-5">
            <img src={img} className=" w-80 h-80 rounded-md max-w-none max-lg:w-44 max-lg:h-44" />
            <p className="text-[35px] font-semibold font-poppins max-lg:text-[30px]">Jonathan Gamboa</p>
            <p className="font-semibold mt-[-6px]">BSIT Graduate</p>
          </div>
          <div className="flex flex-col justify-center items-start w-full h-[590px] mt-[10px] mb-[10px] p-10 max-lg:p-5 max-lg:w-[500px] max-sm:w-[400px] max-lg:mt-[-60px] max-sm:mt-[-10px]">
            <div className="flex flex-col w-full gap-5 max-lg:w-full max-sm:min-w-[270px]">
              <div className="p-1">
                <p  className='text-black text-[55px] font-semibold font-poppins max-lg:text-[40px] max-sm:text-[30px] max-sm:text-center'>
                  ABOUT
                </p>
                  <div className="p-1">
                    <p  className='text-black text-[16px] font-normal font-poppins text-justify max-sm:text-justify'>
                     My name is Jonathan Gamboa. I am 25 years old and live in Blk 5 Lot 14 Heraldville Subdivision,
                     San Isidro, Angono, Rizal. My hobbies include gaming, mobile phone games, PC games, and 
                     self-studying how to create websites. I am a web developer who started using no-code platforms, 
                     specifically Bubble.io, where I became a full-stack developer, including designing and managing workflows. 
                     I also worked as a web designer using WordPress. Over time, I started learning to code, studying HTML, CSS, 
                     Tailwind, JavaScript, and React.js. Currently, my hobby is learning various coding concepts.
                    </p>
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                <div className="flex flex-col pl-1">
                  <p className="text-[20px] font-bold">TOOLS & TECHNOLOGIES</p>
                </div>
               <div className="flex flex-row flex-wrap h-[100px] w-[320px] gap-2 pl-1">
                  <FaHtml5 className="w-[40px] h-[40px]" />
                  <FaCss3Alt className="w-[40px] h-[40px]" />
                  <IoLogoJavascript className="w-[40px] h-[40px]" />
                  <FaReact className="w-[40px] h-[40px]" />
                  <FaBootstrap className="w-[40px] h-[40px]" />
                  <FaWordpress className="w-[40px] h-[40px] pr-1" />
                  <SiAdobephotoshop className="w-[35px] h-[35px] pl-1" />
                  <SiAdobepremierepro className="w-[35px] h-[35px] pl-1" />
                  <SiCanva className="w-[35px] h-[35px]" />
                  <SiTypescript className="w-[33px] h-[33px]" />
                </div>
               </div>
            </div>
          </div>
        </div>

        </div>
      </div>
  );
}
 
