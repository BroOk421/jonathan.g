import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/Navbar.css'

export default function Navbar() {
  const location = useLocation();
  const [isVisible, setisVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  
  useEffect (() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767)
      if (window.innerWidth > 767) {
        setActive(false)
      }
    }
    window.addEventListener('resize', handleResize);
    setisVisible(true);
    
    return () => {
    window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    if (isMobileView) {
      setActive(prevState => !prevState);
    }
  }

  const closeMenu = () => {
    setActive(false);
  }


  return (
    <div className={`nav-mother w-full h-20 flex justify-between border-none p-4 items-center ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
      <div className="flex justify-center items-center min-h-screen">
      <Link to="/" className="z-10 flex group relative">
        <div className={`w-16 h-16 flex justify-center items-center ${isActive ? 'opacity-0' : 'opacity-100'}`}>
          <img src={Logo} className="logo w-12 h-10 cursor-pointer" alt="Logo" />
        </div>
      </Link>
    </div>
      <nav className='flex gap-2 items-center' >
        <nav className='min-w-80 flex justify-between z-10 gap-9 max-md:hidden items-center pl-3 pr-3'>
        <Link to="/" className={`Link font-poppins ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`Link font-poppins ${location.pathname === '/about' ? 'active' : ''}`} >About</Link>
        <Link to="/experience" className={`Link font-poppins ${location.pathname === '/experience' ? 'active' : ''}`}>Experience</Link>
        <Link to="/projects" className={`Link font-poppins ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
        <Link to="/contact" className={`Link font-poppins ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>

      { isMobileView && ( <div className={`mobile-menu absolute left-0 flex flex-col items-center p-16 pt-20 w-full gap-5 z-30 h-[330px] bg-slate-50 top-[-20px] opacity-0 duration-500 ${isActive ? 'opacity-100 duration-500' : 'opacity-0 top-[-420px]' }`}>
        <Link onClick={closeMenu} to="/" className='Link font-poppins  hover:text-neutral-600 duration-300'>Home</Link>
        <Link onClick={closeMenu} to="/about" className='Link font-poppins hover:text-neutral-600 duration-300' >About</Link>
        <Link onClick={closeMenu} to="/experience" className='Link font-poppins hover:text-neutral-600 duration-300' >Experience</Link>
        <Link onClick={closeMenu} to="/projects" className='Link font-poppins hover:text-neutral-600 duration-300'>Projects</Link>
        <Link onClick={closeMenu} to="/contact" className='Link font-poppins hover:text-neutral-600 duration-300'>Contact</Link>
        </div>
      )}
      <div onClick={toggleMenu} className={` z-10 burger cursor-pointer duration-500 ${isActive ? 'bg-blue-700lue' : 'True'} `}>
        <span className={`left ${isActive ? 'opacity-0 duration-100' : 'opacity-100 duration-500'}`} />
        <span className={`center ${isActive ? 'rotate-45 duration-500' : 'rotate-0 duration-500'}`} />
        <span className={`right ${isActive ? '-rotate-45 top-[17px] duration-500' : 'rotate-0 duration-500'}`} />
      </div>
      </nav>
    </div>
  )
}
