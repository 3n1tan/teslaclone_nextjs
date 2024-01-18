'use client'
import React, {useState} from 'react'
import { teslaLogo } from '../../public/assets'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false)
    }
  return (
        <div className="navbar fixed z-10 pt-5">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img src={teslaLogo.src} alt="" />
                </a>
            </div>
            <div className='navbar-center text-customGray space-x-10 uppercase font-[600] hidden lg:flex'>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model S
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model 3
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model X
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model Y
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Solar Panel
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Solar roof
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost" onClick={()=> setMenuOpen(true)}>
                        <MenuIcon className='text-black'/>
                    </div>
                    <div>
                        <ul tabIndex={0} className={`menu menu-sm mt-[-1rem] dropdown-content z-16 h-[100vh] top-0 right-0 fixed sm:w-[30rem] w-[15rem] flex flex-col text-left bg-white rounded-md`} style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(110%)' }}>              
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