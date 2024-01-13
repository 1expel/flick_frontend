import React from 'react';

import TheatreList from './TheatreList';
import TheatreInfo from './TheatreInfo';

import Navbar from '../components/Navbar';


function yourTheatres() {
  return (
    <div className='view'>
      <Navbar />
      <div className="yourTheatres">
        <TheatreList />
      </div>
    </div>
  );
}

export default yourTheatres;