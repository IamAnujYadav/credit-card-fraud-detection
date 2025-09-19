import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  })

  const [mobilemenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <h1>TRANSAC GUARD</h1>
      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Feature</ScrollLink></li>
        <li><ScrollLink to="report" smooth={true} offset={-150} duration={500}>Report</ScrollLink></li>
        <li><ScrollLink to='dashboard' smooth={true} offset={-230} duration={500}>Dashboard</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-230} duration={500}>Contact us</ScrollLink></li>
        <li>
          {isLoggedIn ? (
            <button className="btn" onClick={handleLogout}>Logout</button>
          ) : (
            <RouterLink to="/login" className="btn" onClick={() => setIsLoggedIn(true)}>Login</RouterLink>
          )}
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar;