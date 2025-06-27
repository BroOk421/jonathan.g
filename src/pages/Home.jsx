import "../css/Home.css";
import Shapes from "../components/Shapes";
import Social from "../components/Social";

export default function Home() {
  return (
    <div className="main relative w-full overflow-hidden mt-[-80px]">
      <div
        id="home"
        className="home-mother relative flex flex-col items-center justify-center w-full h-[100vh] gap-2"
      >
        <Shapes />
        <div className="flex w-[500px] items-center h-[90px] mr-[230px] max-md:w-[170px] max-md:h-[55px] overflow-hidden">
          <p
            className="hi-h text-black font-bold text-[100px] max-md:text-[60px]"
            style={{ WebkitTextStroke: "3px black", color: "transparent" }}
          >
            H
          </p>
          <p
            className="hi-i text-black font-bold text-[100px] max-md:text-[60px]"
            style={{ WebkitTextStroke: "3px black", color: "transparent" }}
          >
            i
          </p>
        </div>
        <div className="flex items-start h-[150px] w-[850px] gap-0 max-w-min">
          <div className="flex items-end h-[100px] max-md:h-[70px] ">
            <p className="im-i text-black font-bold text-[90px] max-md:text-[50px]">
              i
            </p>
            <p className="im-m text-black font-bold text-[90px] max-md:text-[50px]">
              m
            </p>
          </div>
          <div className="flex  w-[645px] items-center h-[150px]  max-md:w-[350px] max-md:h-[90px] max-md:justify-center overflow-hidden">
            <p className="j text-black font-bold text-[150px] max-md:text-[80px]">
              J
            </p>
            <p className="j-o text-black font-bold text-[150px] max-md:text-[80px]">
              o
            </p>
            <p className="j-n text-black font-bold text-[150px] max-md:text-[80px]">
              n
            </p>
            <p className="j-a text-black font-bold text-[150px] max-md:text-[80px]">
              a
            </p>
            <p className="t text-black font-bold text-[150px] max-md:text-[80px]">
              t
            </p>
            <p className="j-h text-black font-bold text-[150px] max-md:text-[80px]">
              h
            </p>
            <p className="j-aa text-black font-bold text-[150px] max-md:text-[80px]">
              a
            </p>
            <p className="n text-black font-bold text-[150px] max-md:text-[80px]">
              n
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-[500px] items-center h-[70px] mr-[-150px] mt-[-20px] max-md:justify-center max-md:w-[200px] max-md:h-[40px] max-md:mt-[-80px] overflow-hidden">
          <p
            className="web-developer text-amber-400 font-bold text-[50px] max-md:text-[27px] max-md:mt-[-50px]"
            style={{ WebkitTextStroke: "1px black", color: "goldenrod" }}
          >
            Web Developer
          </p>
        </div>
        <div className="Social flex flex-col gap-2 p-10 mb-[-180px] justify-center items-center mt-[50px] w-[250px] h-[140px]">
          <p className="font-poppins text-[20px]">Social Media</p>
          <div>
            <Social />
          </div>
          <button className="w-[90px] h-[30px] pt-[5px] pb-[5px] rounded-md mt-[10px] bg-black text-white font-poppins text-[16px] font-medium">
            <a href="https://drive.google.com/file/d/1AKFXxlmRhPk3ISDoqfCXoR2_Ttb0o3Ur/view?usp=sharing">
              My CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
