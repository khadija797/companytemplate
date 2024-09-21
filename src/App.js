import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './component/footer/Footer';
import Contact from './pages/contact/Contact';
import LoginPopup from './component/login-popup/LoginPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact setShowLogin={setShowLogin} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App