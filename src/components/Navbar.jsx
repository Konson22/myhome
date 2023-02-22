// import logo from '../assets/images/logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiUser, FiMapPin } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:h-[5rem] h-[3.7rem] sticky inset-0 flex items-center justify-between bg-blue-900 text-white px-[2%] z-50'>
      <div className="md:hidden block text-2xl mr-2" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>
      <div className="flex items-center md:text-2xl font-bold text-xl md:mr-12">
        <FiMapPin className="text-yellow-500 md:text-4xl text-3xl mr-2" />
        My
        <span className="text-yellow-400">Home</span>
      </div>
      <div 
        className={`
          md:h-auto h-screen md:bg-transparent bg-opacity-50 
          md:translate-x-[0%] duration-300 ${isOpen ? 'translate-x-[0%]' : 'translate-x-[-100%]'} 
          bg-black flex-1 md:static fixed 
          inset-0
        `}
      >
        <ul className="md:flex md:bg-transparent bg-blue-900 h-full w-[80%]">
          <div className="md:hidden flex items-center justify-between px-3 py-4">
            <div className="flex items-center font-bold text-xl">
              <FiMapPin className="text-yellow-500 md:text-4xl text-3xl mr-2" />
              My <span className="text-yellow-400">Home</span>
            </div>
            <div className="text-xl px-2" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </div>
          </div>
          {links.map(link => (
            <li key={link.text} onClick={() => setIsOpen(false)}>
              <NavLink className='block px-4 md:py-0 py-2' to={`${link.path}`}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <button className="md:text-xl bg-yellow-500 text-white rounded md:px-4 px-3 md:py-2 py-1 ml-3">
          <span className="md:block hidden">Start Selling</span>
          <span className="md:hidden block">Upload</span>
        </button>
        <div className="md:text-[1.7rem] text-[1.6rem] ml-4">
          <FiBell />
        </div>
        <div className="flex items-center ml-4">
          <FiUser className='md:text-[1.7rem] text-[1.6rem] mr-2' />
          <span className='md:block hidden'>Konson</span>
        </div>
      </div>
    </div>
  )
}


const links = [
  {text:'Home', path:'/'},
  // {text:'Properties', path:'/properties'},
  {text:'Property For sale', path:'/properties/for-sale'},
  {text:'Property For rent', path:'/properties/for-rent'},
  {text:'services', path:'/Services'},
  {text:'about', path:'/About'},
]