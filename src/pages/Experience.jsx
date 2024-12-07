import Geometry from '../components/Geometry'
import '../css/Experience.css'
import { useState, useEffect } from 'react'

export default function Experience() {

  const [fade, setFade] = useState(false);
  const [fademid, setFadeMid] = useState(false);
  const [fadedown, setFadeDown] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => setFade(true), 500);
    const timeoutmid = setTimeout(() => setFadeMid(true), 1000);
    const timeoutdown = setTimeout(() => setFadeDown(true), 1500);

    return () => clearTimeout(timeout, timeoutmid, timeoutdown);
  }, []);

  return (
    <div className="w-full relative overflow-hidden mt-[-80px]">
      <Geometry />
      <div className="flex w-full h-[10vh] ">
      </div>
      <div className='flex w-full h-[10vh] justify-center items-center mt-[100px] mb-[50px]'>
          <h1 className='font-semibold text-[55px] font-poppins'>Experience</h1>
      </div>
      <div className="flex w-full h-[130vh] p-20 justify-center items-flex-start">
        <div className='vertical-line relative flex justify-center item w-[4px] h-[100vh] bg-slate-200'>

        {/* ------------------------------------------------------------------------------------------------------------------------ */}

          <div className="absolute flex w-[420px] h-auto top-50 right-[150px] rounded-md justify-center items-center bg-slate-100 p-[10px] max-xl:right-[-215px] max-sm:w-[370px] max-sm:right-[-180px]" style={{opacity: fade ? 1 : 0, transition: 'opacity 1s ease'}}>
              <div className='absolute z-20 w-[150px] h-[4px] bg-slate-200 top-[130px] right-[-150px] max-xl:hidden'>
                <div className='outer-circle relative w-[20px] h-[20px] rounded-full bg-slate-300 top-[-8px] right-[-138px]'>
                  
                  <div className='inner-circle absolute w-[17px] h-[17px] bg-slate-400 rounded-full top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'></div>
                </div>
              </div>
            <div className=" z-30  w-[400px] h-auto rounded-md p-[10px] flex flex-col gap-[20px] bg-slate-200 max-sm:w-[350px]">
              <div>
                <h1 className='font-semibold text-[20px] font-poppins'>Barcotech Philippines Inc</h1>
                <p className='font-medium text-[16px] font-poppins'>Web Designer / Multimedia Designer</p>
                <p className='font-medium text-[16px] font-poppins'>2024-2024 (6 months)</p>
              </div>

              <div className=''>
                <p className='font-light text-[14px] font-poppins'>
                  - Using Wordpress or Elementor to create a Web Design of the page
                  <br />
                  - Create layout using Photoshop and Canva
                  <br />
                  - Adding Animation using Lottiefiles
                  <br />
                  - Preventing the maintenance or revision of the website
                  <br />
                  - Video Editing using Adobe Premeire
                </p>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------ */}

          <div className="absolute flex w-[420px] h-auto top-[280px] left-[150px] rounded-md justify-center items-center bg-slate-100 p-[10px] opacity-0 max-xl:left-[-200px] max-sm:w-[370px] max-sm:left-[-185px] max-sm:top-[310px]" style={{opacity: fademid ? 1 : 0, transition: "opacity 1s ease"}}>
              <div className='absolute z-20 w-[150px] h-[4px] bg-slate-200 top-[130px] left-[-150px] max-xl:hidden'>
                <div className='outer-circle relative w-[20px] h-[20px] rounded-full bg-slate-300 top-[-8px] left-[-8px]'>
                  <div className='inner-circle absolute w-[17px] h-[17px] bg-slate-400 rounded-full top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'></div>
                </div>
              </div>
            <div className=" z-30  w-[400px] h-auto rounded-md p-[10px] flex flex-col gap-[20px]  bg-slate-200 max-sm:w-[350px]">
              <div>
                <h1 className='font-semibold text-[20px] font-poppins'>MVP.dev</h1>
                <p className='font-medium text-[16px] font-poppins'>Web Designer / Web developer</p>
                <p className='font-medium text-[16px] font-poppins'>2023-2023 (8 months)</p>
              </div>

              <div className=''>
                <p className='font-normal text-[14px] font-poppins'>
                  - Making a Website using Bubble.io front-end and backend workflow
                  <br />
                  - Making mockup Designs of Website
                  <br />
                  - Implementing Database of PosgreSQL, MySql
                  <br />
                  - Preventing the maintenance or revision of the website
                  <br />
                  - API Integration by Using API Connector
                </p>
              </div>

            </div>
          </div>


          <div className="absolute flex w-[420px] h-auto bottom-[0px] right-[150px] rounded-md justify-center items-center bg-slate-100 p-[10px] opacity-0 max-xl:right-[-215px] max-sm:w-[370px] max-sm:right-[-180px] max-sm:bottom-[-50px]" style={{opacity: fadedown ? 1 : 0, transition: "opacity 1s ease"}}>
              <div className='absolute z-20 w-[150px] h-[4px] bg-slate-200 top-[130px] right-[-150px] max-xl:hidden'>
                <div className='outer-circle relative w-[20px] h-[20px] rounded-full bg-slate-300 top-[-8px] right-[-138px]'>
                  <div className='inner-circle absolute w-[17px] h-[17px] bg-slate-400 rounded-full top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'></div>
                </div>
              </div>
            <div className=" z-30  w-[400px] h-auto rounded-md p-[10px] flex flex-col gap-[20px]  bg-slate-200 max-sm:w-[350px]"> 
              <div>
                <h1 className='font-semibold text-[20px] font-poppins'>Accucell Diagnostic Center</h1>
                <p className='font-medium text-[16px] font-poppins'>Receptionist / Encoder</p>
                <p className='font-medium text-[16px] font-poppins'>2021-2023 (Working Exp: 2 years)</p>
              </div>

              <div className=''>
                <p className='font-normal text-[14px] font-poppins'>
                  
                  - Assisting patients and taking call for their needs and concerns
                  <br />
                  - Encoding the data of the patients and laboratory test using Microsoft
                  <br />
                  - Access , Microsoft word and Excel.
                </p>
              </div>

            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
} 