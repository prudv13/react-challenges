import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {SiReactos} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const closeMobileMenu = () => {
    }

    const handleClick = () => {
    }

  return (
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <SiReactos size={30} />
          <span>Challenges</span>
        </Link>

        <div className='navbar-item'>
          <a className='navbar-link' href='https://react.dev/' target='_blank'>docs</a>
          <a className='navbar-link' href='https://github.com/prudv13/react-challenges' target='_blank'>code</a>
        </div>
    </nav>
  )
}

export default Navbar;