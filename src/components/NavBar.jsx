import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineDoubleLeft } from "react-icons/ai";



const linkClass = ({ isActive }) => isActive ? "bg-3 hover:bg-3 rounded-md px-3 py-2" :
  "hover:bg-3 rounded-md px-3 py-2"

const NavBar = () => {
  return (
    <nav className="bg-2 border-b border-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between ">
          <div
            className="flex flex-1  items-center justify-center md:items-stretch md:justify-start text-white"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 hover:text-3 items-center mr-4" to="/">
              <span className="hidden md:block text-2xl font-bold ml-2"
              >
                &#123;a&#125;
              </span>
            </NavLink>
            <div className="md:ml-auto ">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}>
                    Home
                </NavLink>
                <NavLink
                  to="/projects"
                  className={linkClass}>
                    Projects
                </NavLink>
                <NavLink
                  to="/experiment/"
                  className={linkClass}>
                    Experiment Space
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
