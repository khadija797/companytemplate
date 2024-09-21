import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (

    <div className='navbar'>
      <p className='logo'>CAREER</p>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
        <a href='#about-us' onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>ABOUT US</a>
        <a href="#services" onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>SERVICES</a>

        <Link to='/contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</Link>
        <a href='#hiring' onClick={() => setMenu("hiring")} className={menu === "hiring" ? "active" : ""}>HIRING</a>
      </ul>
    </div >

  )
}

export default Navbar
