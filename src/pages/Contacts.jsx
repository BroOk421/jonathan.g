import { FaFacebook, FaTiktok, FaInstagramSquare, FaLinkedin, FaYoutube  } from "react-icons/fa";
import { TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import '../css/Home.css'
import Geometry from '../components/Geometry'
import Img from '/formal_pic.jpg'



export default function Contacts() {

  return (
    <div className="w-full relative overflow-hidden mt-[-80px]">
      <Geometry className='-z-10' />
      <div className="flex w-full h-[10vh]">
      </div>
      <div className='flex w-full h-[10vh] justify-center items-center mt-[100px]'>
          <h1 className='font-semibold text-[55px] font-poppins'>Contact Me</h1>
      </div>
      <div className='w-full flex justify-center items-center h-[70vh] flex-col'>
        <div className='flex relative w-full h-[90vh] justify-evenly items-center p-[20px] max-lg:flex-col max-lg:justify-evenly'>
          <div className='bg-gray-100 p-[10px] rounded-full cursor-pointer hover:scale-[1.1] hover:bg-gray-300 duration-500'>
          <img src={Img} className='w-[350px] h-[350px] rounded-full' />
          </div>
        <div className='flex flex-col justify-center h-auto w-[450px gap-[10px] rounded-sm p-[10px]'>
          <div className="flex justify-between relative">
            <div className="absolute top-[-150px] left-0 w-[150px] h-[150px] p-[10px] rounded-full bg-gray-100 flex justify-center items-center hover:scale-[1.1] duration-500 cursor-pointer">
              <a href="https://www.facebook.com/rzq.polar/"><FaFacebook className="w-[120px] h-[120px]"/></a></div>
            <div className="absolute top-[-150px] right-[100px] w-[150px] h-[150px] p-[10px] rounded-full bg-gray-100 flex justify-center items-center hover:scale-[1.1] duration-500 cursor-pointer">
              <a href="https://www.tiktok.com/@bro0k21?_t=8rwHkiPgzYO&_r=1"><FaTiktok className="w-[100px] h-[100px]"/></a></div>
          </div>
          <div className="flex justify-around relative">
            <div className="absolute top-0 left-[115px] w-[150px] h-[150px] p-[10px] rounded-full bg-gray-100 flex justify-center items-center hover:scale-[1.1] duration-500 cursor-pointer">
              <a href="https://www.instagram.com/athan.gamboa21/profilecard/?igsh=MXQ5Y3U0N3BrbnI1aA=="><TiSocialInstagramCircular className="w-[150px] h-[150px]"/></a></div>
            <div className="absolute top-0 right-0 w-[150px] h-[150px] p-[10px] rounded-full bg-gray-100 flex justify-center items-center hover:scale-[1.1] duration-500 cursor-pointer">
              <a href="https://www.linkedin.com/in/jonathan-gamboa-072b55248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><TiSocialLinkedinCircular className="w-[150px] h-[150px]" /></a></div>
          </div>
        </div>
        <svg className='absolute bottom-0 left-0 opacity-30 -z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="000000" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,266.7C384,299,480,309,576,298.7C672,288,768,256,864,218.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </div>
      </div>
    </div>
  );
}
 
