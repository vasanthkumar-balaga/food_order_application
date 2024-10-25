import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import  LoginPopup from './components/LoginPopup/LoginPopup';


const App = () => {
    const [showlogin, setShowlogin] = useState(false)


  return (
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
      <div className='app'>

        <Navbar setShowLogin={setShowlogin}/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App;
