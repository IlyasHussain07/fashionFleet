import React from 'react';
import HeaderIntegration from './Components/HomeScreenIntegration/index'
import Main from './Components/Main'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Watches from './Components/ProductCards/Watches'
import MakeUp from './Components/ProductCards/Makeup'
import Shoes from './Components/ProductCards/Shoes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<>
              <HeaderIntegration />
              <Main />
              <Footer />
            </>}
          />
          <Route
            path='/login'
            element={<>
              <HeaderIntegration />
              <Login />
              <Footer />
            </>}
          />
          <Route
            path='/cart'
            element={<>
              <Cart />
              <Footer />
            </>}
          />
          <Route
            path='/watch'
            element={<>
              <HeaderIntegration />
              <Watches />
              <Footer />
            </>}
          />
          <Route
            path='/makeup'
            element={<>
              <HeaderIntegration />
              <MakeUp />
              <Footer />
            </>}
          />
          <Route
            path='/shoes'
            element={<>
              <HeaderIntegration />
              <Shoes />
              <Footer />
            </>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
