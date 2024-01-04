import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({username}) => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className='nav-link'>Home</Link></li>
        {
            !username?
        <li><Link to="/login" className='nav-link'>login</Link></li>:
        ''
        }
        {username?
        <>
        <li><Link to="/students" className='nav-link'>Students</Link></li>
        <li><Link to='/logout' className='nav-link'>Logout</Link></li>
        </>
        :
        ''}
      </ul>
    </nav>
  );
};

export default Navbar;