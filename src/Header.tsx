import React, { useEffect, useState } from 'react';
import './Header.css';


function Header() {
  

  return (
    <div className='header'>
        <h2 id="company">XYZ Organization</h2>
        <div className='headerSearch'>
          
          <input className='headerSearchInput' type="text" placeholder="Search by employee name" 
            >
          </input>
          <button className="headerSearchBotton" type="button" >
            Search </button>
        </div>
        
     </div>
     
  )
}

export default Header
