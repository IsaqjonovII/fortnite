import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";
import { FaChevronRight, FaUser } from 'react-icons/fa';
import { IoGlobeOutline, IoSearchOutline } from 'react-icons/io5';

const Sidebar = ({ isSidebarOpen }) => {

  return (
    <div className={isSidebarOpen ? "sidebar sidebar--opened" : "sidebar"}>
      <ul className="sidebar__links">
        <li className="sidebar__link flex">
          Modes
          <FaChevronRight />
        </li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/battle-pass">
            BATTLE PASS
          </NavLink>
        </li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/product">
            CREW
          </NavLink>
        </li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/vbucks">
            V-BUCKS
          </NavLink>
        </li>
        <li className="sidebar__link flex">COMPETITIVE</li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/news">
            NEWS
          </NavLink>
        </li>
        <li className="sidebar__link flex">MERCH</li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/cosplay">
            MOBILE
          </NavLink>
        </li>
        <li className="sidebar__link flex">
          <NavLink className="active__link" to="/help">
            HELP
          </NavLink>
        </li>
      </ul>

      <div className="sidebar__bottom">
        <div className="search__container flex">
          <IoSearchOutline className='search--icon'/>
          <input className='search__input' type="text" placeholder='Search...' />
        </div>

        <div className="signin__container flex">
          <button><FaUser /> Sign in</button>
          <IoGlobeOutline className='globe--icon' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
