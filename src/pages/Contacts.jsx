import '../css/Home.css'
import React, { useState, useEffect } from 'react';
import Geometry from '../components/Geometry'

export default function Contacts() {

  return (
    <div className="w-full relative overflow-hidden mt-[-80px]">
      <Geometry className='-z-10' />
      <div className="flex w-full h-[10vh]">
      </div>
      <div className='w-full flex justify-center items-center h-[90vh] flex-col'>
        <div className='flex relative w-full h-[90vh] justify-evenly items-center p-[20px] max-lg:flex-col max-lg:justify-evenly'>
        <p className='text-black text-[70px] font-bold font-poppins leading-[65px]'>Inquiry Here</p>
          <div className='flex flex-col justify-center h-auto w-[450px] bg-slate-400 gap-[10px] rounded-sm p-[10px]'>
            <input className='rounded-sm p-[10px] font-poppins focus:outline-none' type="text" id="nameInput" placeholder='Name' />
            <input className='rounded-sm p-[10px] font-poppins focus:outline-none' type="email" id="emailInput" placeholder='Email' />
            <textarea className='font-poppins p-[10px] h-[150px] focus:outline-none' placeholder='Message' />
            <button className='font-poppins bg-white p-[10px] w-[90px] hover:bg-gray-100 duration-500' type='sumbit'>Send</button>
          </div>
        <svg className='absolute bottom-0 left-0 opacity-30 -z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="000000" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,266.7C384,299,480,309,576,298.7C672,288,768,256,864,218.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </div>
      </div>
    </div>
  );
}
 
