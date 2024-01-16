import React from 'react'
import { teslaLogo } from '../../public/assets'
const NavBar = () => {
  return (
        <div className="navbar fixed z-10 pt-5">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img src={teslaLogo.src} alt="" />
                </a>
            </div>
            <div className='navbar-center text-customGray space-x-5 uppercase font-[600]  '>
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
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 text-black stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavBar