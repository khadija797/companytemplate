import React, { useState } from 'react'
import './Contact.css'
import LoginPopup from '../../component/login-popup/LoginPopup'

const Contact = ({ setShowLogin }) => {



  return (
    <>

      <div className="contact">
        <button onClick={() => setShowLogin(true)}>Create Profile</button>
      </div>
    </>
  )
}

export default Contact
