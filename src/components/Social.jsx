import { FaFacebook, FaGithubSquare, FaTiktok } from "react-icons/fa";


export default function Social() {
  return (
    <div className="flex gap-2 h-[50px] w-[150px] justify-center items-center">
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <a href="https://www.facebook.com/rzq.polar"><FaFacebook className="w-[35px] h-[35px] cursor-pointer duration-300 hover:scale-[1.1]"/></a>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <a href="https://www.tiktok.com/@bro0k21?_t=ZS-8rd5Du62bUW&_r=1"><FaTiktok className="w-[33px] h-[33px] cursor-pointer duration-300 hover:scale-[1.1] "/></a>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <a href="https://github.com/BroOk421"><FaGithubSquare className="w-[35px] h-[35px] cursor-pointer duration-300 hover:scale-[1.1]"/></a>
        </div>
    </div>
  )
}
