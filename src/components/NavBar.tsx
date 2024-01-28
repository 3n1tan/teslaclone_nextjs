'use client'
import React, {useState} from 'react'
import { teslaLogo } from '../../public/assets'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false)
    }
  return (
        <div className="navbar z-10 fixed pt-5">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img src={teslaLogo.src} alt="" />
                </a>
            </div>
            <div className='navbar-center text-customGray space-x-10 capitalize font-[400] hidden lg:flex mx-5'>
                <div>
                    <a href="" className='cursor-pointer'>
                        Vehicles
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Energy
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Charging
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Discover
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Shop
                    </a>
                </div>
            </div>
            <div className="navbar-end space-x-5 pr-[5rem] ">
                <div>
                    <HelpOutlineIcon className='text-black z-100' />
                </div>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' onClick={()=> setMenuOpen(true)}>
                        <LanguageSharpIcon className='text-black z-100' />
                    </div>
                    <div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content h-[95vh] z-1 w-screen -top-8 -right-7 fixed flex-col text-left bg-white rounded-md`} style={{ transform: menuOpen ? 'translateX(6%)' : 'translateY(-150%)' }}>              
                            <div className='flex justify-end'>
                                 <CloseIcon className='cursor-pointer' onClick={closeMenu}/>
                            </div>
                            <li className='border-b-[2px]'><a href="" className='font-bold w-fit'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Model 3</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Model X</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Model Y</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Solar Panel</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Solar Roof</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Cybertruck</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Accessories</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold w-fit'>Batteries</a></li>                        
                        </ul>
                    </div>
                </div>
                <div className='dropdown'>
                    <div tabIndex={0} role='button'>
                        <AccountCircleOutlinedIcon className='text-black z-100' />
                    </div>
                </div>
                <div className="dropdown sm:hidden block">
                    <div tabIndex={0} role="button" className="btn btn-ghost" onClick={()=> setMenuOpen(true)}>
                        <MenuIcon className='text-black'/>
                    </div>
                    <div>
                        <ul tabIndex={0} className={`menu menu-sm mt-[-1rem] dropdown-content h-[100vh] top-0 right-0 fixed sm:w-[30rem] w-[15rem] flex flex-col text-left bg-white rounded-md`} style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(110%)' }}>              
                            <div className='flex justify-end'>
                                 <CloseIcon className='cursor-pointer' onClick={closeMenu}/>
                            </div>
                            <li className='pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model 3</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model X</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model Y</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Solar Panel</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Solar Roof</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Cybertruck</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Accessories</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Batteries</a></li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavBar