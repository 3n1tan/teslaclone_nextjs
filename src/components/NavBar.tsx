import React from 'react'
import { teslaLogo } from '../../public/assets'
const NavBar = () => {
  return (
        <div className="navbar fixed">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img src={teslaLogo.src} alt="" />
                </a>
            </div>
            <div className='navbar-center text-black space-x-5 uppercase'>
                <div>
                    Model S
                </div>
                <div>
                    Model 3
                </div>
                <div>
                    Model X
                </div>
                <div>
                    Model Y
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
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