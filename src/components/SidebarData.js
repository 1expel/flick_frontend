import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { logOut } from '../controllers/UserAuthentication';

export const SidebarData = [
  {
    title: 'Flick',
    path: '/selectMovies',
    icon: <FaIcons.FaHandPointUp />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Your Theatres',
    path: '/theatreList',
    icon: <GiIcons.GiTheaterCurtains />,
    cName: 'nav-text'
  },

  {
    title: 'Help',
    path: '/Help',
    icon: <FiIcons.FiHelpCircle />,
    cName: 'nav-text'
  },

  {
    title: 'Log Out',
    path: '/',
    icon: <FiIcons.FiLogOut />,
    cName: 'nav-text',
    onClick: {logOut}
  }
];