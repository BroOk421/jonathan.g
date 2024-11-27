import { RiTriangleFill } from "react-icons/ri";
import { FaSquare, FaCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Shapes() {
  return (
    <div>
      <div className="div-ImCross -z-50">
        <ImCross className="rotateCounter absolute right-[0px] top-[25px] w-[250px] h-[250px] opacity-15 max-md:w-[150px] max-md:h-[150px]" />
        <ImCross className="rotate absolute right-[550px] top-[55px] w-[50px] h-[50px] opacity-5 max-md:top-[200px] max-md:right-[300px]" />
        </div>
        <div className="div-FaSquare -z-50">
        <FaSquare className="rotateCounter absolute left-[-70px] bottom-[0px] w-[300px] h-[300px] opacity-25 max-md:w-[200px] max-md:h-[200px]" />
        <FaSquare className="rotateCounter absolute right-[70px] bottom-[160px] w-[50px] h-[50px] opacity-15" />
        </div>
        <div className="div-Triangle -z-50">
        <RiTriangleFill className="rotate absolute right-[270px] bottom-[-70px] w-[350px] h-[350px] opacity-20 max-md:w-[200px] max-md:h-[200px] max-md:right-[20px]" />
        <RiTriangleFill className="rotate absolute left-[370px] top-[160px] w-[50px] h-[50px] opacity-10" />
        </div>
        <div className="div-FaCircle -z-50">
        <FaCircle className="rotate absolute left-[-70px] top-[-70px] w-[300px] h-[300px] opacity-30 max-md:w-[250px] max-md:h-[250px]" />
        </div>
    </div>
  )
}
